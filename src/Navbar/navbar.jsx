import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logof.png';  // ✅ Importing logo image

function Navbar() {
  return (  
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" width="50" height="50" />  {/* ✅ Displaying logo */}
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/duct-cleaning">Air Duct Cleaning</Link></li>
        
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="number">
        <h3>
          <a href="tel:+17865010587">786 501 0587</a>
        </h3>
      </div>
    </nav>
  );
}

export default Navbar;
