// src/App.js
import './App.css';
import React from "react";
import { Routes, Route } from 'react-router-dom'; 

import Navbar       from './Components/Navbar/Navbar';
import Hero         from './Components/Hero/Hero';
import WeatherDashboard from "./Components/WeatherDashboard";
import About        from './Components/About/About';
import Products     from './Components/Products/Products';
import Contact      from './Components/Contact/Contact';
import LoginForm    from './Components/LoginForm/LoginForm';
import Footer       from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <WeatherDashboard />
            <Products />
          </>
        }/>

        <Route path="/about"   element={<About />} />
        {/* <Route path="/products" element={<Products />} /> */}

        <Route path="/contact" element={<Contact />} />
        <Route path="/container-login"   element={<LoginForm />} />

        <Route path="*" element={<p>Sorry — page not found.</p>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
