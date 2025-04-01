import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import img from "../assets/uvvan2.png"
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <h2>Service in As Fast As 60-Minutes!</h2>
          <img src={img} alt="Service Van" className="van-image" />
        </div>
        <div className="footer-links">
          <h3>Links</h3>
          <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/about">ABOUT US</a></li>
            <li><a href="/duct-cleaning">AIR DUCT CLEANING</a></li>
            <li><a href="/gallery">GALLERY</a></li>
            <li><a href="/services">SERVICE AREA</a></li>
            <li><a href="/contact">CONTACT US</a></li>
          </ul>
        </div>
        <div className="footer-address">
          <h3>Address</h3>
          <p>3021 W 76th St apt<br /> C110<br /> Hialeah, FL 33018, United States</p>
          <a 
            href="https://maps.app.goo.gl/RNDCLLuXpSdGrUgi8" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Map & Directions
          </a>
        </div>
        <div className="footer-hours">
          <h3>Hours</h3>
          <p>Monday - Sunday <strong>Available 24/7</strong></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Call or Text Today: <a href="tel:+1 (786) 501-0587">786 501-0587</a></p>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div>
          <a href="https://www.facebook.com/miamiacrepairs" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://wa.me/923345310281" target="_blank" rel="noopener noreferrer">
            <IoLogoWhatsapp />
            </a>
          <a href="https://www.instagram.com/uvairsolution/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.tiktok.com/@uv.air.solutions" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
