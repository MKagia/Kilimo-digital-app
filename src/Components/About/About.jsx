import React from 'react'
import './About.css'
import about_img from '../../Assets/About.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt="" className='about-img'/>

        </div>
        <div className="about-right">
            <h3>ABOUT US</h3>
            <p>
            At Kilimo-Digital, we believe farming should be smarter, easier, and more rewarding. 
            Thats why we are using technology to help farmers make better decisions, grow healthier crops, and build stronger businesses.
            </p>
            <p>
            From tracking the weather to managing your tools and crops, we bring helpful digital solutions right to your fingertips. 
            Whether you're just starting out or have been farming for years, we are here to support you every step of the way
            </p>
            <p>
            Our goal is simple: to connect farmers with the right tech for a better tomorrow.
            </p>
            <p>
            With our slogan — <strong>Your Farm. Our Tech. One Future.</strong>— we are building a future where farming and technology work hand in hand.
            </p>
            <p>
            Let us grow together!
            </p>

        </div>
    </div>
  )
}

export default About;
