import React from 'react'
import './Hero.css'
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-text">
        <h1>We Empower Farmers Through Smart Agriculture</h1>
        <p>Kilimo-Digital is a modern farming companion that equips you with real-time weather insights, personalized crop recommendations, and access to essential farming tools — all in one easy-to-use platform.
            Whether you're planning your next planting season or looking for the right equipment, Kilimo-Digital helps you make informed decisions based on accurate climate data and local conditions.</p>
        
            <ScrollLink to='mt-4' smooth={true} offset={0} duration={500} className="btn btn-light" >Explore</ScrollLink>
        </div>


    </div>
  )
}

export default Hero;