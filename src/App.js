
 import './App.css';
 
 import React from "react";
 import WeatherDashboard from "./Components/WeatherDashboard";
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
// import Products from './Components/Products/Products';
 
 
 function App() {
   return (
     <div className="App">
      <Navbar/>
      <Hero/>
      <WeatherDashboard />
      {/* <Products/> */}
      <About/>
     </div>
   );
 }

 export default App;