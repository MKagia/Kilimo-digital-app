import React from "react";

function WeatherTable({ data }) {
  const { location, month, prediction, activity } = data;

  return (
    <div className="mt-4">
      <h4>Weather Report for {location}</h4>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Location</th>
            <th>Month</th>
            <th>Weather Prediction</th>
            <th>Recommended Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{location}</td>
            <td>{month}</td>
            <td>{prediction}</td>
            <td>{activity}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default WeatherTable;