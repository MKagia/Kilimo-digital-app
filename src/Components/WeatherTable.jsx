import React from "react";

function WeatherTable({ data }) {
  const { location, forecasts = {}, currentMonth } = data;

  const monthsOrder = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="mt-4">
      <h4>12-Month Weather Forecast for {location}</h4>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Month</th>
            <th>Weather Prediction</th>
            <th>Recommended Activity</th>
          </tr>
        </thead>
        <tbody>
          {monthsOrder.map((month) => {
            const forecast = forecasts[month] || {};
            return (
              <tr key={month} className={month === currentMonth ? "table-info" : ""}>
                <td><strong>{month}</strong></td>
                <td>{forecast.prediction || "N/A"}</td>
                <td>{forecast.recommended_activity || "N/A"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default WeatherTable;

