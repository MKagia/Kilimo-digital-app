import React, { useState } from "react";
import WeatherForm from "./WeatherForm";
import WeatherTable from "./WeatherTable";

function WeatherDashboard() {
  const [weatherData, setWeatherData] = useState(null);

  async function handleSearch(countyName) {
    try {
      const res = await fetch("http://localhost:3000/Counties");
      const data = await res.json();

      const county = data.find(
        (c) => c.location.toLowerCase() === countyName.toLowerCase()
      );

      if (!county) {
        alert("County not found");
        return;
      }

      const currentMonth = new Date().toLocaleString("en-US", { month: "long" });

      setWeatherData({
        location: county.location,
        forecasts: county.monthly_forecast || {},
        currentMonth,
      });
    } catch (error) {
      console.error("Weather fetch error:", error);
    }
  }

  return (
    <div className="container mt-4">
      <h2>County-Based Weather Forecast</h2>
      <WeatherForm onSearch={handleSearch} />
      {weatherData && <WeatherTable data={weatherData} />}
    </div>
  );
}

export default WeatherDashboard;
