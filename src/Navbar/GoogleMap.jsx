import React from "react";

const GoogleMap = () => {
  return (
    <div className="map-container">
      <h2>Our Location</h2>
      <a
        href="https://www.google.com/maps/place/UV+Air+Solutions+(HVAC+Service+%26+AC+Repair)/@25.8925384,-80.3467532,17z"
        target="_blank"
        rel="noopener noreferrer"
      >
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3589.299034959715!2d-80.3467532!3d25.8925384!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2848f395d70d7b1f%3A0x7d027db69af89b47!2sUV%20Air%20Solutions%20(HVAC%20Service%20%26%20AC%20Repair)!5e0!3m2!1sen!2s!4v1742659243793!5m2!1sen!2s"
          width="100%"
          height="400"
          style={{ border: "0", cursor: "pointer" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </a>
    </div>
  );
};

export default GoogleMap;
