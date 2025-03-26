import React, { useState } from "react";
import duct1 from "../assets/duct1.jpg";
import duct2 from "../assets/duct2.jpg";
import duct3 from "../assets/duct3.jpg";
import duct4 from "../assets/duct4.jpg";

const images = [duct1, duct2, duct3, duct4];

const DuctCleaning = () => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="duct-container">
      {/* Left Side - Text Content */}
      <div className="duct-text">
        <h1>UV AIR SOLUTIONS</h1>
        <h2>RESIDENTIAL AND COMMERCIAL AIR DUCT CLEANING SERVICES IN FLORIDA</h2>
        <p>
          The air ducts in your home or <span className="highlight">commercial building</span> play a crucial role in
          maintaining <span className="highlight">indoor air quality</span> by circulating air throughout the space.
          Over time, however, these ducts can accumulate dust, dirt, pet dander, mold, and other allergens that may pose
          serious health risks.
        </p>
        <p>
          Contaminated air ducts can lead to respiratory issues and allergies and even exacerbate conditions like asthma,
          as they distribute harmful particles into the air you breathe. Additionally, excessive build-up within the ductwork may
          create a damp environment that fosters the growth of mold and bacteria. This makes it essential to prioritize regular
          professional cleaning, as it helps remove harmful contaminants and supports a healthier indoor environment for all occupants.
        </p>
        <p>
          If you don’t remember the last time that you had your air ducts looked at, Emergency AC Corp is here to help.
          Our licensed, insured, and experienced technicians use advanced methods and state-of-the-art equipment that
          are specifically designed to thoroughly eliminate dust, allergens, and other contaminants from your ductwork.
        </p>
      </div>

      {/* Right Side - Image Section */}
      <div className="duct-image-container">
        {/* Main Image */}
        <img src={mainImage} alt="Duct Cleaning" className="duct-image" />

        {/* Thumbnails */}
        <div className="thumbnail-container">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              className={`thumbnail ${mainImage === image ? "active-thumbnail" : ""}`}
              onClick={() => setMainImage(image)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DuctCleaning;
