import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format message for WhatsApp
    const whatsappMessage = `Hello, I want to contact you.\n\nName: ${formData.name}\nPhone: ${formData.number}\nEmail: ${formData.email}\nAddress: ${formData.address}\nMessage: ${formData.message}`;

    // Encode URI
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // WhatsApp link with formatted message
    const whatsappLink = `https://wa.me/923345310281?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappLink, "_blank");

    // Reset form fields after submission
    setFormData({ name: "", number: "", email: "", address: "", message: "" });
  };

  return (
    <section className="contact-container">
      
      <div className="contact-left">
        
      </div>

     
      <div className="contact-right">
        <h2>Contact UV AIR SOLUTION </h2>
        <p>
          A member of our team will be in touch shortly to confirm your contact details or address questions you may have.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="tel"
              name="number"
              placeholder="Your Phone Number"
              value={formData.number}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="address"
              placeholder="Your Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Send to WhatsApp</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
