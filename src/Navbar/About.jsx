// import React, { useState } from "react";
// import about1 from "../assets/aboutus1.jpg";
// import about2 from "../assets/aboutus2.jpg";
// import about3 from "../assets/aboutus3.jpg";
// import about4 from "../assets/aboutus4.jpg";
// import about5 from "../assets/aboutus5.jpg";

// const images = [about1, about2, about3, about4, about5];

// const About = () => {
//   const [mainImage, setMainImage] = useState(images[0]);

//   return (
//     <div className="about-container">
//       {/* Left Side - About Section */}
//       <div className="about-text">
//         <h1>Who We Are – Uv Air Solution</h1>
//         <h2>Delivering Comfort with Every Breath</h2>
//         <p>
//           Every heating or cooling unit comes with a lifespan, and without regular check-ups, even the best ones can fail sooner than expected. While tech keeps evolving, it's the care and precision of local professionals that keep these systems running smoothly.
//         </p>

//         <p>
//           At <span className="highlight">Uv Air Solution</span>, we specialize in <span className="highlight">complete AC and HVAC care</span>. From setup to seasonal maintenance and urgent repairs, 
//           we handle all system <span className="highlight">types, sizes, and brands</span> with attention to detail and long-term performance in mind.
//         </p>

//         <p>
//           With <span className="highlight">Irvin</span> leading the way, our experienced crew brings <span className="highlight">5+ years of hands-on expertise</span> to every job. We've proudly helped 
//           <span className="highlight">hundreds of homeowners and businesses</span> through efficient services including <span className="highlight">installation, diagnostics, tune-ups, and duct solutions</span>.
//         </p>

//         <p>
//           We’re known for offering <span className="highlight">dependable service at competitive prices</span>. Using modern diagnostic equipment, we identify issues fast and fix them right — keeping your indoor climate just the way you like it.
//         </p>

//         <p className="highlight-text">
//           New to us? Returning for more? Either way, we’re ready to exceed your expectations. Let’s connect today and find the right comfort solution for your space!
//         </p>
//       </div>

//       {/* Right Side - Image Section */}
//       <div className="about-image-container">
//         {/* Main Image */}
//         <img src={mainImage} alt="Service Work" className="about-image" />

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



import React from "react";

const About = () => {
  return (
    <div className="about-container">
      {/* Left Side - About Section */}
      <div className="about-text">
        <h1>Who We Are – Uv Air Solutions</h1>
        <h2>Delivering Comfort with Every Breath</h2>
        <p>
          Every heating or cooling unit has its limits—and without proper care, even the best ones wear out too soon. While technology keeps improving, it’s the skill of trusted professionals that keeps your system running strong year after year.
        </p>

        <p>
          That’s where <span className="highlight">Uv Air Solution</span> comes in. We specialize in <span className="highlight">installing, servicing, and fixing</span> all types of AC and HVAC systems, no matter the <span className="highlight">brand, model, or size</span>.
        </p>

        <p>
          With <span className="highlight">Irvin</span> at the helm and a team backed by <span className="highlight">over 5 years of experience</span>, we’ve supported <span className="highlight">hundreds of clients</span> across various projects—from system installs and emergency repairs to full duct cleanings and preventive maintenance.
        </p>

        <p>
          We’re committed to delivering <span className="highlight-text">dependable, affordable solutions</span>. Using the latest tools and techniques, we ensure your home or business stays cool in summer, warm in winter, and energy-efficient all year long.
        </p>

        <p className="highlight-text">
          Whether it’s your first time with us or you’ve been here before, we always aim to go above and beyond. Reach out today—let’s keep your indoor air perfect.
        </p>
      </div>
    </div>
  );
};

export default About;
