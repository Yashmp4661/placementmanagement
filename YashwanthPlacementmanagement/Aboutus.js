import React from "react";
import "./Aboutus.css";
const Aboutus = () => {
  document.title="About Us"
    return (
      <div className="about-page">
        <div className="about-header">
          <h1>About Us</h1>
          <p>Student of Don Bosco Institute Of Technology</p>
        </div>
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to deliver outstanding certificate services
          </p>
        </section>
        <section className="about-section">
          <h2>Our Team</h2>
          <p>
            Meet the team of dedicated students.
          </p>
        </section>
       
      </div>
    );
  };
 
export default Aboutus;