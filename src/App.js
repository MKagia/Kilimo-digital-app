// import logo from './logo.svg';
 import './App.css';
 
 import React from "react";
 import WeatherDashboard from "./Components/WeatherDashboard";
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
 
 
 function App() {
   return (
     <div className="App">
      <Navbar/>
      <Hero/>
      <WeatherDashboard />
     </div>
   );
 }

 export default App;