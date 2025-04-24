import React, { useEffect, useState } from 'react';
import './Weather.css'; // Importing the CSS file

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);
  const [month, setMonth] = useState(new Date().getMonth());
  const [coords, setCoords] = useState({ latitude: null, longitude: null });
  const [location, setLocation] = useState('Loading...');
  const [loading, setLoading] = useState(true);

  // Emojis for weather (you can expand this with conditions later)
  const weatherEmoji = (temp) => {
    if (temp >= 30) return '☀️';
    if (temp >= 20) return '🌤️';
    if (temp >= 10) return '⛅';
    return '❄️';
  };

  // Fetch user location and reverse geocode
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCoords({ latitude, longitude });

        // Reverse geocoding (you need your API key here)
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=YOUR_API_KEY`)
          .then((response) => response.json())
          .then((data) => {
            setLocation(data.results[0]?.formatted || 'Unknown location');
          })
          .catch((error) => console.error('Error fetching location:', error));
      },
      (error) => {
        console.error('Geolocation error:', error);
        setLocation('Location permission denied');
      }
    );
  }, []);

  // Fetch weather based on month and coords
  useEffect(() => {
    if (!coords.latitude || !coords.longitude) return;

    const startDate = new Date(2025, month, 1).toISOString().split('T')[0];
    const endDate = new Date(2025, month + 1, 0).toISOString().split('T')[0];

    const url = `https://ensemble-api.open-meteo.com/v1/ensemble?latitude=${coords.latitude}&longitude=${coords.longitude}&start_date=${startDate}&end_date=${endDate}&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&models=icon_seamless&timezone=auto`;

    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('API error:', err);
        setLoading(false);
      });
  }, [coords, month]);

  // Filter hourly to 4-hour intervals for a single 24hr period
  const filteredHourlyTemps = (() => {
    if (!weather?.hourly?.time) return [];
    const day = weather.hourly.time
      .filter((_, index) => index % 4 === 0 && index < 24)
      .map((time, index) => ({
        time: new Date(time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        temp: weather.hourly.temperature_2m[index * 4],
      }));
    return day;
  })();

  return (
    <div className="weather-container">
      <h1 className="weather-title">🌍 Weather Forecast</h1>

      <div className="location-info">
        <strong>Location:</strong> {location}
      </div>

      <div>
        <label>Select Month: </label>
        <select
          value={month}
          onChange={(e) => setMonth(Number(e.target.value))}
          className="select-month"
        >
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i} value={i}>
              {new Date(0, i).toLocaleString('default', { month: 'long' })}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <p>Loading weather data...</p>
      ) : (
        <div>
          {/* Hourly Forecast */}
          <h2 className="text-lg font-bold mt-6 mb-2">🕓 Hourly Forecast (4-Hour Intervals)</h2>
          <div className="card-container hourly-forecast">
            {filteredHourlyTemps.map((data, i) => (
              <div key={i} className="card">
                <div className="card-body">
                  <div className="card-title">{weatherEmoji(data.temp)}</div>
                  <h6>{data.time}</h6>
                  <p>{data.temp}°C</p>
                </div>
              </div>
            ))}
          </div>

          {/* Daily Forecast */}
          <h2 className="text-lg font-bold mt-6 mb-2">📅 Daily Forecast</h2>
          <div className="card-container daily-forecast">
            {weather?.daily?.time?.map((date, i) => (
              <div key={i} className="card">
                <div className="card-body">
                  <div className="card-title">{weatherEmoji((weather.daily.temperature_2m_min[i] + weather.daily.temperature_2m_max[i]) / 2)}</div>
                  <h6>{new Date(date).toLocaleDateString()}</h6>
                  <p>Min: {weather.daily.temperature_2m_min[i]}°C</p>
                  <p>Max: {weather.daily.temperature_2m_max[i]}°C</p>
                </div>
              </div>
            ))}
          </div>

          {/* Weekly Forecast */}
          <h2 className="text-lg font-bold mt-6 mb-2">📦 Weekly Forecast</h2>
          <div className="card-container weekly-forecast">
            {weather?.daily?.time?.slice(0, 7).map((date, i) => (
              <div key={i} className="card">
                <div className="card-body">
                  <div className="card-title">{weatherEmoji((weather.daily.temperature_2m_min[i] + weather.daily.temperature_2m_max[i]) / 2)}</div>
                  <h6>{new Date(date).toLocaleDateString('en-US', { weekday: 'long' })}</h6>
                  <p>Min: {weather.daily.temperature_2m_min[i]}°C</p>
                  <p>Max: {weather.daily.temperature_2m_max[i]}°C</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;