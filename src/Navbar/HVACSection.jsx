import React from "react";

import heroImage from "../assets/uvpic1.jpeg"; // Replace with actual image

const HVACSection = () => {
  return (
    <div className="hvac-container">
      
      <div className="hvac-text">
        <h2 className="hvac-title">UV AIR SOLUTIONS</h2>
        <h3 className="hvac-subtitle">
          24/7 RESIDENTIAL AND COMMERCIAL HVAC AND PLUMBING SPECIALISTS IN FLORIDA
        </h3>
        <p className="hvac-description">
        Are you looking for reliable and professional AC HVAC and AIR DUCT Cleaning services? You’ve come to the right place. UV Air Solution is equipped to handle the AC HVAC and DUCT Cleaning needs of residential, commercial, and industrial clients. Our licensed, bonded, and insured technicians are highly trained and dependable problem solvers. 
        </p>
        <p className="hvac-description">
        Whether you are looking to install a new AC, HVAC in your home or need complex Air Duct Cleaning, we are confident we can help you. We aim to be your go-to choice when you need repairs, replacements, or new installations. With  
          <span className="hvac-highlight"> 24/7 Emergency Service</span>, we’re also ready to jump into action when you need us most.
        </p>
        <div className="hvac-divider"></div>
        <p className="hvac-contact">
        You can count on our AC HVAC and Air Duct Cleaninig company in Miami to get the job done right. We offer affordable pricing and financing options,<span className="hvac-phone">(855) 783-2080</span> or 
          <span className="hvac-highlight"> Contact US Online</span> to schedule a service!
        </p>
      </div>

      {/* Right Image Section */}
      <div className="hvac-image-container">
        <img src={heroImage} alt="HVAC Service" className="hvac-image" />
      </div>
    </div>
  );
};

export default HVACSection;
