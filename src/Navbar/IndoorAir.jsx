import React, { useState } from "react";
import img1 from "../assets/duct1.jpg";
import img2 from "../assets/duct2.jpg";
import img3 from "../assets/duct3.jpg";
import img4 from "../assets/duct4.jpg";
import img5 from "../assets/gal1.jpg";
import img6 from "../assets/gal2.jpg";

import img7 from "../assets/gal3.jpg";
import img8 from "../assets/gal4.jpg";
import img9 from "../assets/gal5.jpg";
import img10 from "../assets/gal6.jpg";
import img11 from "../assets/gal7.jpg";

const images = [img8,img1,img3,img9, img10, img11, img2,  img4, img5, img6, img7 ];

const IndoorAir = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="indoor-air-container">
      <h1 className="gallery-title">Gallery Section</h1>
      <p className="gallery-description">
        Explore our work through this gallery! Here, you can browse pictures of
        our past projects, showcasing our expertise in AC installation, HVAC
        cleaning, duct maintenance, and more. See the quality of our work
        firsthand!
      </p>

      {/* Main Image Display with Navigation */}
      <div className="image-slider">
        <button className="nav-button prev" onClick={prevImage}>
          ❮
        </button>
        <img src={images[currentIndex]} alt="Indoor Air" className="main-image" />
        <button className="nav-button next" onClick={nextImage}>
          ❯
        </button>
      </div>
    </div>
  );
};

export default IndoorAir;
