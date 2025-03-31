// import React, { useState } from "react";
// import about1 from "../assets/duct1.jpg";
// import about2 from "../assets/hero1.jpg";
// import about3 from "../assets/hero1.jpg";
// import about4 from "../assets/hero1.jpg";

// const images = [about1, about2, about3, about4];

// const About = () => {
//   const [mainImage, setMainImage] = useState(images[0]);

//   return (
//     <div className="about-container">
//       {/* Left Side - About Section */}
//       <div className="about-text">
//         <h1>About Us – Uv Air Solution</h1>
//         <h2>Your Trusted HVAC & AC Experts</h2>
//         <p>
//           There is no such thing as an HVAC system that can last forever. Even the best air conditioning units, designed to run smoothly for up to a decade and a half, require proper care and maintenance. 
//           Manufacturers are always working to improve their products, but they can't personally service every unit.
//         </p>
//         <p>
//           That is why you need a trusted local expert. At <span className="highlight">Uv Air Solution</span>, we have the skills to <span className="highlight">install, maintain, and repair</span> 
//           your HVAC system, no matter its <span className="highlight">size, type, or model</span>.  
//         </p>
//         <p>
//           Led by <span className="highlight">Irvin</span>, our team has <span className="highlight">over 5 years of experience</span> in the industry. We have successfully worked with 
//           <span className="highlight">hundreds of clients</span>, providing high-quality solutions for <span className="highlight">AC installation, repairs, duct cleaning, and HVAC maintenance</span>. 
//         </p>
//         <p>
//           Our commitment is to deliver the most <span className="highlight">reliable and affordable services</span> in the market. We use the latest cutting-edge tools for diagnostics and repairs, 
//           ensuring your home or business stays cool and comfortable all year long.
//         </p>
//         <p className="highlight-text">
//           Whether you're a new customer or a loyal client, we go beyond expectations to provide outstanding AC services. Give us a call today and let's talk about your HVAC needs!
//         </p>
//       </div>

//       {/* Right Side - Image Section */}
//       <div className="about-image-container">
//         {/* Main Image */}
//         <img src={mainImage} alt="AC Work" className="about-image" />

//         {/* Thumbnails */}
//         <div className="thumbnail-container">
//           {images.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={`Thumbnail ${index}`}
//               className={`thumbnail ${mainImage === image ? "active-thumbnail" : ""}`}
//               onClick={() => setMainImage(image)}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;



import React, { useState } from "react";
import about1 from "../assets/duct1.jpg";
import about2 from "../assets/hero1.jpg";
import about3 from "../assets/hero1.jpg";
import about4 from "../assets/hero1.jpg";

const images = [about1, about2, about3, about4];

const About = () => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="about-container">
      {/* Left Side - About Section */}
      <div className="about-text">
        <h1>About Us – Uv Air Solution</h1>
        <h2>Your Trusted HVAC & AC Experts</h2>
        <p>
          There is no such thing as an HVAC system that can last forever. Even the best air conditioning units, designed to run smoothly for up to a decade and a half, require proper care and maintenance. 
          Manufacturers are always working to improve their products, but they can't personally service every unit.
        </p>
        <p>
          That is why you need a trusted local expert. At <span className="highlight">Uv Air Solution</span>, we have the skills to <span className="highlight">install, maintain, and repair</span> 
          your HVAC system, no matter its <span className="highlight">size, type, or model</span>.  
        </p>
        <p>
          Led by <span className="highlight">Irvin</span>, our team has <span className="highlight">over 5 years of experience</span> in the industry. We have successfully worked with 
          <span className="highlight">hundreds of clients</span>, providing high-quality solutions for <span className="highlight">AC installation, repairs, duct cleaning, and HVAC maintenance</span>. 
        </p>
        <p>
          Our commitment is to deliver the most <span className="highlight">reliable and affordable services</span> in the market. We use the latest cutting-edge tools for diagnostics and repairs, 
          ensuring your home or business stays cool and comfortable all year long.
        </p>
        <p className="highlight-text">
          Whether you're a new customer or a loyal client, we go beyond expectations to provide outstanding AC services. Give us a call today and let's talk about your HVAC needs!
        </p>
      </div>

      {/* Right Side - Image Section */}
      <div className="about-image-container">
        {/* Main Image */}
        <img src={mainImage} alt="AC Work" className="about-image" />

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

export default About;
