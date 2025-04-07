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
        <h2>Residential & Commercial Air Duct Cleaning in Florida</h2>
        <p>
          The air ducts in your <span className="highlight">home</span> or <span className="highlight">commercial building </span> 
          play a crucial role in maintaining <span className="highlight">indoor air quality</span>.
        </p>
        <p>
          Over time, these ducts accumulate dust, mold, and allergens, posing health risks. Professional cleaning ensures 
          clean air and prevents respiratory issues.
        </p>
        <p>
          <span className="highlight">Emergency AC Corp</span> offers expert air duct cleaning with advanced tools to remove 
          contaminants and improve air circulation.
        </p>



        <p>
        With years of experience as an <span className="highlight">AC repair technician and installer</span>, we not only clean ducts 
        but also assess your HVAC system’s performance to ensure everything runs smoothly and efficiently.
      </p>
      <p>
        Whether you’re dealing with decreased airflow, strange odors, or excessive dust, our certified team is equipped 
        to handle all your duct and AC service needs. From full-system cleanings to UV light installations for ongoing 
        protection, we’ve got you covered.
      </p>
      <p>
        Serving both <span className="highlight">residential</span> and <span className="highlight">commercial clients </span> 
         across Florida, we pride ourselves on providing quick, reliable, and affordable solutions. Don’t wait until 
        indoor air problems affect your health — contact us today for a free inspection and breathe cleaner air tomorrow.
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
