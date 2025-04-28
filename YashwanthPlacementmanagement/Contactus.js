import React from 'react';
import './Contactus.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contactus = () => {
  document.title="Contact Us"
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Reach out to us with any questions or feedback.</p>
      </div>
      
      <div className="contact-info">
        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <h2>Our Address</h2>
          <p>Don Bosco Institute</p>
          <p>Kumbalgodu,Bengaluru</p>
        </div>

        <div className="contact-card">
          <FaPhoneAlt className="contact-icon" />
          <h2>Phone Number</h2>
          <p>+91 7760784661</p>
          
        </div>

        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h2>Email</h2>
          <p>yashwanthmp2@gmail.com</p>
          <p>yashwanthmp2@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contactus;