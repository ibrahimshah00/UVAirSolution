import React from "react";

import { FaSnowflake, FaSun, FaWind, FaBuilding, FaShower, FaNetworkWired, FaTools } from "react-icons/fa";

const services = [
  { id: 1, icon: <FaSnowflake />, text: "Air Conditioning" },
  { id: 2, icon: <FaWind />, text: "Air Duct Cleaning" },
  { id: 3, icon: <FaSun />, text: "Heating Services" },
  { id: 4, icon: <FaShower />, text: "Plumbing Services" },
  { id: 5, icon: <FaNetworkWired />, text: "Indoor Air Quality" },
  { id: 6, icon: <FaTools />, text: "Installation & Repair" },
];

const Services = () => {
  return (
    <div className="services-page">
      <div className="services-header">
        <h2>SERVICES WE OFFER</h2>
        <h3>HOW WE CAN HELP YOU</h3>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-box">
            <div className="service-icon">{service.icon}</div>
            <span className="service-text">{service.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
