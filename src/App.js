import './App.css';
import React from "react";
import { Routes, Route, Link } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import WeatherDashboard from "./Components/WeatherDashboard";
import About from './Components/About/About';
import Products from './Components/Products/Products';
import Contact from './Components/Contact/Contact';
import LoginForm from './Components/LoginForm/LoginForm';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart';

import { ShoppingCart } from 'phosphor-react';

function App() {


  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <WeatherDashboard />
          </>
        }/>
        <Route path="/about" element={<About />} />
        <Route path="/tools" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/container-login" element={<LoginForm />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<p>Sorry — page not found.</p>} />
      </Routes>

        <div className='cart-i'>
          <Link to="/cart" className="cart-link">
            <ShoppingCart size={32} />
          </Link>
        </div>


      <Footer />
    </div>
  );
}

export default App;