import React, { Component } from "react";



class UniqueContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      phoneNumber: "",
      userEmail: "",
      userAddress: "",
      userMessage: ""
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  sendMessageToWhatsApp = () => {
    const { fullName, phoneNumber, userEmail, userAddress, userMessage } = this.state;
    const formattedMessage = `Full Name: ${fullName}%0A
Phone Number: ${phoneNumber}%0A
Email: ${userEmail}%0A
Address: ${userAddress}%0A
Message: ${userMessage}`;
    
    const whatsappLink = `https://api.whatsapp.com/send?phone=17865010587&text=${formattedMessage}`;
    window.open(whatsappLink, "_blank");
  };

  render() {
    return (
      <div className="contact-container">
        <div className="contact-left">
          {/* <img src="./assets/new-image.jpg" alt="Contact Us" className="contact-image" />
            <div className="overlay">
              <h2>Email us</h2>
              <p>ibrahimibnanwar001@gmail.com</p>
              <h2>Call us</h2>
              <p>+92 334 5310281</p>
              <h2>WhatsApp us</h2>
              <p>+92 334 5310281</p>
            </div> */}
        </div>

        <div className="contact-right">
          <h2>Get in Touch</h2>
          <p>We'd love to hear from you! Reach out to us anytime.</p>
          
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <input type="text" name="fullName" placeholder="Enter your full name" onChange={this.handleInputChange} required />
            </div>
            
            <div className="input-group">
              <input type="tel" name="phoneNumber" placeholder="Enter your phone number" onChange={this.handleInputChange} required />
            </div>
            
            <div className="input-group">
              <input type="email" name="userEmail" placeholder="Enter your email" onChange={this.handleInputChange} required />
            </div>
            
            <div className="input-group">
              <input type="text" name="userAddress" placeholder="Enter your address" onChange={this.handleInputChange} required />
            </div>
            
            <div className="input-group">
              <textarea name="userMessage" placeholder="Enter your message" onChange={this.handleInputChange} required></textarea>
            </div>
            
            <button type="button" onClick={this.sendMessageToWhatsApp}>Send via WhatsApp</button>
          </form>
        </div>
      </div>
    );
  }
}

export default UniqueContactPage;