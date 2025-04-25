
import './Navbar.css'
import logo from '../../Assets/Logo.png'
import menu_icon from '../../Assets/menu_icon.svg'
import { useEffect, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false);

        })
    },[])


  return (
    <nav className= {`container ${sticky? 'dark-nav' : ''}`}>
        <img src= {logo} alt='' className='logo'/>
        
        <ul>
            <li><RouterLink to='/'>Home</RouterLink></li>

            <li><ScrollLink to='weather-container' smooth={true} offset={-260} duration={500}>Forecast</ScrollLink></li>
            <li><ScrollLink to='products' smooth={true} offset={-260} duration={500}>Products</ScrollLink></li>
            <li><RouterLink to='/about'>About Us</RouterLink></li>
            <li> <RouterLink to='/contact'> Contact Us </RouterLink></li>
            <li> <RouterLink to='/container-login'>LogIn</RouterLink></li>
            <img src={menu_icon} alt="" className='menu-icon'/>
        </ul>

    </nav>
  )
}

export default Navbar;





