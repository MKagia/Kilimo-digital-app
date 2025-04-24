
 import './App.css';
 
 import React from "react";
 import WeatherDashboard from "./Components/WeatherDashboard";
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
// import Products from './Components/Products/Products';
 
 
 function App() {
   return (
     <div className="App">
      <Navbar/>
      <Hero/>
      <WeatherDashboard />
      {/* <Products/> */}
      <About/>
      <Contact/>
      <Footer/>
     </div>
   );
 }

 export default App;