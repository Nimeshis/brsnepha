import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Nepal Public Health Association</h3>
            <p>Working towards quality and people-centered health care services in Nepal.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/causes">Causes</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/donate">Donate</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Get Involved</h4>
            <ul>
              <li><Link to="/volunteer">Volunteer</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul className="contact-info">
              <li><i className="fas fa-map-marker-alt"></i> Kathmandu, Nepal</li>
              <li><i className="fas fa-phone"></i> +977-XXXXXXXXXX</li>
              <li><i className="fas fa-envelope"></i> info@nepha.org.np</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Nepal Public Health Association. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;