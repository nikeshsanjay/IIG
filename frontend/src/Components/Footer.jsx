import React from 'react';
import '../assets/Styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>About VehicleRepairHub</h3>
          <p>VehicleRepairHub is your trusted partner for vehicle repair and maintenance. We offer comprehensive guides, diagnostic tools, and expert advice to keep your vehicle in top condition.</p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/repair-guides">Repair Guides</a></li>
            <li><a href="/maintenance-schedules">Maintenance Schedules</a></li>
            <li><a href="/diagnostic-tools">Diagnostic Tools</a></li>
            <li><a href="/video-tutorials">Video Tutorials</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: support@vehiclerepairhub.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 VehicleRepairHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
