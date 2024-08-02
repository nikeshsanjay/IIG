import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../assets/Styles/AboutUs.css';
import imagecopy5 from '../assets/images/image copy 5.png';
import imagecopy6 from '../assets/images/image copy 6.png';
import imagecopy7 from '../assets/images/image copy 7.png';

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="aboutus-container">
        <section className="aboutus-intro">
          <h1>About VehicleRepairHub</h1>
          <p>VehicleRepairHub is dedicated to providing the best resources for vehicle repair and maintenance. Our mission is to empower vehicle owners with the knowledge and tools they need to keep their vehicles in top condition.</p>
        </section>
        <section className="aboutus-team">
          <h2>Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src={imagecopy5} alt="Team Member 1" />
              <h3>John Doe</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <img src={imagecopy6} alt="Team Member 2" />
              <h3>Jane Smith</h3>
              <p>Chief Technical Officer</p>
            </div>
            <div className="team-member">
              <img src={imagecopy7} alt="Team Member 3" />
              <h3>Mike Johnson</h3>
              <p>Head of Customer Support</p>
            </div>
          </div>
        </section>
        <section className="aboutus-values">
          <h2>Our Values</h2>
          <ul>
            <li>Customer Satisfaction</li>
            <li>Quality Service</li>
            <li>Integrity</li>
            <li>Innovation</li>
          </ul>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
