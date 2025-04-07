import React from "react";

import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import serviceImage from "../assets/company.png"; // Your image file

const ServiceSection = () => {
  return (
    <div className="service-container">
      {/* Left Section - Text & Contact Details */}
      <div className="service-content">
        <div>
        <h4 className="highlight-text">
        Cooler than your <span>Ex's heart.</span> Try <span>UV AIR SOLUTION.</span>
        </h4>
        <h1>Fast and reliable service</h1>
        </div>
        <div className="contact-options">
          {/* Contact Us - Email */}
          <div className="contact-box">
            <a href="mailto:711irvin@gmail.com" className="contact-link">
              <FaEnvelope className="contact-icon" />
            </a>
            <div>
              <h3>Email us</h3>
              <a href="mailto:uvair305@gmail.com" className="email-address">
              uvair305@gmail.com
              </a>
            </div>
          </div>

          {/* Phone Call */}
          <div className="contact-box">
            <a href="tel:+17865010587" className="contact-link">
              <FaPhone className="contact-icon" />
            </a>
            <div>
              <h3>Call us</h3>
              <a href="tel:+17865010587" className="phone-number">
              +1 786 501 0587
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="contact-box">
            <a
              href="https://wa.me/17865010587"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaWhatsapp className="whatsapp-icon" />
            </a>
            <div>
              <h3>WhatsApp us</h3>
              <a
                href="https://wa.me/17865010587"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-number"
              >
                +1 786 501-0587
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Single Image */}
      <div className="service-image">
        <img src={serviceImage} alt="Service" />
      </div>
    </div>
  );
};

export default ServiceSection;
