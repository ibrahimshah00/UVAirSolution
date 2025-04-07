import React from "react";
import { FaClock, FaThumbsUp, FaPercentage, FaHandHoldingUsd, FaUsers, FaAward } from "react-icons/fa";

const features = [
  { icon: <FaClock />, text: "Service in 60-Minutes or Less" },
  { icon: <FaThumbsUp />, text: "Satisfaction Guarantees" },
  { icon: <FaPercentage />, text: "$0 Down, 0% Interest Financing" },
  { icon: <FaHandHoldingUsd />, text: "Affordable, Transparent Pricing" },
  { icon: <FaUsers />, text: "Courteous & Knowledgeable Staff" },
  { icon: <FaAward />, text: "More Than 5,000+ Happy Customers" }
];

const WhyChoose = () => {
  return (
    <section className="why-choose">
      <h2>WHY CHOOSE UV AIR SOLUTION?</h2>
      <div className="features">
        {features.map((item, index) => (
          <div key={index} className="feature">
            <div className="icon">{item.icon}</div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
