import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import './HomePage.css';
// Import the NEPHA logo
import nephaLogo from '../assets/neppha.png';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  // Toggle dropdown on mobile
  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when mouse leaves the dropdown area (desktop)
  const handleMouseLeave = () => {
    // Only auto-close on desktop, not mobile
    if (window.innerWidth > 992) {
      setIsDropdownOpen(false);
    }
  };

  return (
    <Layout>
      <div className="homepage">
        {/* Hero Section - moved outside Layout to be after header */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>Together We Can Make a Difference</h1>
              <p>Join us in our mission to improve public health and wellbeing in Nepal</p>
              <div className="hero-buttons">
                <button className="btn primary">Donate Now</button>
                <button className="btn secondary">Learn More</button>
              </div>
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="welcome">
          <div className="container">
            <div className="welcome-content">
              <h2>Welcome to Nepal Public Health Association</h2>
              <p>
                Nepal Public Health Association (NEPHA) is a non-governmental, non-profit and non-political civil organization of public health professionals in Nepal. NEPHA aims to organize all the public health professionals and to develop their professional abilities for quality and people centered health care services in the country.
              </p>
              <button className="btn outline">Discover Our Mission</button>
            </div>
          </div>
        </section>

        {/* Causes Section */}
        <section className="causes">
          <div className="container">
            <h2 className="section-title">Our Key Causes</h2>
            <div className="causes-grid">
              <div className="cause-card">
                <div className="cause-icon">
                  <i className="fas fa-heartbeat"></i>
                </div>
                <h3>Healthcare Access</h3>
                <p>Improving healthcare facilities in underserved rural areas</p>
              </div>
              
              <div className="cause-card">
                <div className="cause-icon">
                  <i className="fas fa-tint"></i>
                </div>
                <h3>Clean Water</h3>
                <p>Providing clean and safe drinking water to remote communities</p>
              </div>
              
              <div className="cause-card">
                <div className="cause-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h3>Education</h3>
                <p>Supporting education for underprivileged children</p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="impact">
          <div className="container">
            <h2 className="section-title">Our Impact</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <h3>10,000+</h3>
                <p>Patients Treated</p>
              </div>
              
              <div className="stat-card">
                <h3>50+</h3>
                <p>Communities Served</p>
              </div>
              
              <div className="stat-card">
                <h3>500+</h3>
                <p>Volunteers Engaged</p>
              </div>
              
              <div className="stat-card">
                <h3>$250K</h3>
                <p>Funds Raised</p>
              </div>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="events">
          <div className="container">
            <h2 className="section-title">Upcoming Events</h2>
            <div className="events-grid">
              <div className="event-card">
                <div className="event-date">
                  <span className="day">15</span>
                  <span className="month">Dec</span>
                </div>
                <div className="event-content">
                  <h3>Annual Health Conference</h3>
                  <p className="event-meta">
                    <span><i className="fas fa-clock"></i> 9:00 AM - 5:00 PM</span>
                    <span><i className="fas fa-map-marker-alt"></i> Kathmandu Conference Center</span>
                  </p>
                </div>
              </div>
              
              <div className="event-card">
                <div className="event-date">
                  <span className="day">22</span>
                  <span className="month">Dec</span>
                </div>
                <div className="event-content">
                  <h3>Community Health Camp</h3>
                  <p className="event-meta">
                    <span><i className="fas fa-clock"></i> 8:00 AM - 4:00 PM</span>
                    <span><i className="fas fa-map-marker-alt"></i> Pokhara Community Center</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="newsletter">
          <div className="container">
            <div className="newsletter-content">
              <h2>Stay Updated</h2>
              <p>Subscribe to our newsletter for the latest updates and events</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Enter your email" />
                <button type="submit" className="btn primary">Subscribe</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;