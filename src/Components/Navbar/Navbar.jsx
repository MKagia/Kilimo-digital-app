import React from 'react'
import './Navbar.css'
import logo from '../../Assets/Logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src= {logo} alt='' className='logo'/>
        <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About Us</li>
            <li> <button className='btn btn-light'>Contact Us</button></li>
            <li>Log In</li>
        </ul>

    </nav>
  )
}

export default Navbar












// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar({ isLoggedIn, onLogout }) {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">Kilimo-Digital</Link>
//         <div className="collapse navbar-collapse">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link" to="/">Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/shop">Shop</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/cart">Cart</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/weather">Weather</Link>
//             </li>
//           </ul>
//           <div className="d-flex">
//             {isLoggedIn ? (
//               <button className="btn btn-outline-light" onClick={onLogout}>Logout</button>
//             ) : (
//               <Link to="/login" className="btn btn-outline-light">Login</Link>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
