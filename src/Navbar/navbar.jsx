import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logof.png";  

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (  
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" width="50" height="50" />
      </div>

      {/* Hamburger Menu Button */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={menuOpen ? "bar open" : "bar"}></div>
        <div className={menuOpen ? "bar open" : "bar"}></div>
        <div className={menuOpen ? "bar open" : "bar"}></div>
      </div>

      {/* Navigation Links */}
      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
        <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
        <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
        <li><Link to="/duct-cleaning" onClick={() => setMenuOpen(false)}>Air Duct Cleaning</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
      </ul>

      {/* Phone Number */}
      <div className="number">
        <h3>
          <a href="tel:+17865010587">786 501 0587</a>
        </h3>
      </div>
    </nav>
  );
}

export default Navbar;
    