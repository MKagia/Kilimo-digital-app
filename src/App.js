import './App.css';

// import React from "react";
import React, { useState } from 'react';
import LoginForm from "./Components/LoginForm"
import WeatherDashboard from "./Components/WeatherDashboard";


function App() {
  const [showLogin, setShowLogin] = useState(false);



  return (
    <div className="App">
      {!showLogin ? (
        <>
        <button onClick={() => setShowLogin(true)} className="btn btn-success mt-3">
            Login
          </button>
          <WeatherDashboard />
          
        </>
      ) : (
        <LoginForm />
      )}
      
    </div>
  );
}

export default App;
