import React from 'react';
import Layout from '../components/Layout';
import './AboutPage.css';

const StaffPage = () => {
  return (
    <Layout>
      <div className="about-page">
        <div className="page-header">
          <div className="container">
            <h1>Staff</h1>
            <p>Meet Our Dedicated Team</p>
          </div>
        </div>
        
        <div className="container">
          <div className="about-content">
            <div className="about-section">
              <h2 className="section-title">Our Team</h2>
              <p>
                The Nepal Public Health Association (NEPHA) is supported by a dedicated team of professionals who work tirelessly to advance our mission of improving public health in Nepal. Our staff brings together expertise in public health, administration, communications, and event management to ensure the smooth operation of our programs and activities.
              </p>
              
              <h2 className="section-title">Administrative Leadership</h2>
              
              <div className="staff-grid">
                <div className="staff-member">
                  <h3>Executive Director</h3>
                  <p>
                    Provides overall leadership and strategic direction for NEPHA's operations. Oversees program implementation and represents the organization in national and international forums.
                  </p>
                </div>
                
                <div className="staff-member">
                  <h3>Deputy Executive Director</h3>
                  <p>
                    Supports the Executive Director in managing daily operations and oversees specific program areas. Coordinates between different departments and ensures alignment with organizational goals.
                  </p>
                </div>
                
                <div className="staff-member">
                  <h3>Finance and Administration Manager</h3>
                  <p>
                    Manages financial operations, budgeting, and administrative functions. Ensures compliance with financial regulations and maintains efficient office operations.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Program Staff</h2>
              
              <div className="staff-grid">
                <div className="staff-member">
                  <h3>Research and Publications Coordinator</h3>
                  <p>
                    Oversees research activities, manages publication processes, and coordinates with authors and reviewers. Maintains the organization's research database and library.
                  </p>
                </div>
                
                <div className="staff-member">
                  <h3>Training and Capacity Building Officer</h3>
                  <p>
                    Designs and implements training programs for public health professionals. Coordinates workshops, seminars, and continuing education activities.
                  </p>
                </div>
                
                <div className="staff-member">
                  <h3>Conference and Events Manager</h3>
                  <p>
                    Plans and executes conferences, workshops, and special events. Manages logistics, speaker coordination, and participant services.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Communications and Outreach</h2>
              
              <div className="staff-grid">
                <div className="staff-member">
                  <h3>Communications Manager</h3>
                  <p>
                    Develops and implements communications strategies. Manages website, social media, and public relations activities. Produces newsletters and other communication materials.
                  </p>
                </div>
                
                <div className="staff-member">
                  <h3>Membership Services Coordinator</h3>
                  <p>
                    Manages membership applications and renewals. Provides support to members and maintains membership databases. Coordinates member communications and benefits.
                  </p>
                </div>
                
                <div className="staff-member">
                  <h3>IT and Database Administrator</h3>
                  <p>
                    Maintains technology infrastructure and manages databases. Provides technical support and ensures cybersecurity for organizational systems.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Support Staff</h2>
              
              <div className="staff-grid">
                <div className="staff-member">
                  <h3>Office Administrator</h3>
                  <p>
                    Manages day-to-day office operations, including correspondence, scheduling, and visitor接待. Provides general administrative support to all departments.
                  </p>
                </div>
                
                <div className="staff-member">
                  <h3>Finance Assistant</h3>
                  <p>
                    Assists with financial record keeping, invoice processing, and payment coordination. Supports the Finance and Administration Manager with routine financial tasks.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Career Opportunities</h2>
              <p>
                NEPHA occasionally has openings for qualified professionals to join our team. We seek individuals who are passionate about public health and committed to our mission of improving health outcomes in Nepal.
              </p>
              <p>
                Current job openings, if any, will be posted on our website and social media channels. We encourage interested candidates to send their resumes to: careers@nepha.org.np
              </p>
              
              <h2 className="section-title">Contact Information</h2>
              <p>
                For general inquiries about our staff or organizational operations, please contact:
              </p>
              <p>
                Email: info@nepha.org.np<br />
                Phone: +977-XXXXXXXXXX
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StaffPage;