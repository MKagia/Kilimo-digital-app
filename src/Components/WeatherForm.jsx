import React, { useState } from "react";

function WeatherForm({ onSearch }) {
  const [county, setCounty] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (county.trim() === "") return;
    onSearch(county);
    setCounty("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={county}
        placeholder="Enter county..."
        onChange={(e) => setCounty(e.target.value)}
      />
      <button type="submit">Get Weather</button>
    </form>
  );
}

export default WeatherForm;
