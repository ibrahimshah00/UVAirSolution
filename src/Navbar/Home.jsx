import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import video from "../assets/0326.mp4";
const Home = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const fullText = "Reliable & Fast AC Repair Services";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">

      {/* Background Video */}
      <video autoPlay loop muted className="video-bg">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="overlay">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="animated-text">{text}</h1>
          <p className="sub-text">We are available 24/7 to provide top-quality HVAC solutions.</p>

          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("/contact")}  
          >
            Request a Quote
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
