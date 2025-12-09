import React from 'react';
import Layout from '../components/Layout';
import './EventsPage.css';

const Conference2025Page = () => {
  return (
    <Layout>
      <div className="events-page">
        <div className="page-header">
          <div className="container">
            <h1>Conference 2025</h1>
            <p>Nepal Public Health Conference 2025</p>
          </div>
        </div>
        
        <div className="container">
          <div className="events-content">
            <div className="events-section">
              <h2 className="section-title">Nepal Public Health Conference 2025</h2>
              <p>
                Join us for the premier public health event in Nepal, bringing together professionals, researchers, policymakers, and stakeholders from across the country and beyond.
              </p>
              
              <div className="conference-details">
                <div className="detail-card">
                  <h3>Date</h3>
                  <p>May 16-17, 2025</p>
                </div>
                
                <div className="detail-card">
                  <h3>Location</h3>
                  <p>Kathmandu, Nepal</p>
                </div>
                
                <div className="detail-card">
                  <h3>Theme</h3>
                  <p>Health System Challenges and Opportunities in the Federal Context</p>
                </div>
              </div>
              
              <h2 className="section-title">Conference Themes</h2>
              <p>
                The conference will explore critical issues in Nepal's health sector in the context of federalism, with a focus on:
              </p>
              
              <ul>
                <li>Governance and Policy in Federal Health Systems</li>
                <li>Health Financing and Resource Allocation</li>
                <li>Equity and Access to Health Services</li>
                <li>Capacity Building for Provincial and Local Health Systems</li>
                <li>Digital Health and Innovation</li>
                <li>Addressing Emerging Health Threats</li>
              </ul>
              
              <h2 className="section-title">Who Should Attend</h2>
              <p>
                This conference is designed for a diverse audience including:
              </p>
              
              <ul>
                <li>Public health professionals and practitioners</li>
                <li>Researchers and academicians</li>
                <li>Policy makers and government officials</li>
                <li>Healthcare providers and administrators</li>
                <li>Students and trainees in health fields</li>
                <li>Representatives from NGOs and international organizations</li>
              </ul>
              
              <h2 className="section-title">Abstract Submission</h2>
              <p>
                We invite submissions of abstracts for oral and poster presentations. Topics may include research findings, program evaluations, case studies, and innovative practices in public health.
              </p>
              
              <div className="submission-details">
                <p><strong>Abstract submission deadline:</strong> April 15, 2025</p>
                <p><strong>Notification of acceptance:</strong> April 30, 2025</p>
                <p><strong>Full paper submission (optional):</strong> May 10, 2025</p>
              </div>
              
              <h2 className="section-title">Registration</h2>
              <p>
                Registration is free of charge for all participants. Please register by April 30, 2025.
              </p>
              
              <h2 className="section-title">Networking Opportunities</h2>
              <p>
                The conference provides excellent opportunities for networking, collaboration, and knowledge exchange. Special sessions will be organized for:
              </p>
              
              <ul>
                <li>Poster presentation sessions</li>
                <li>Panel discussions with experts</li>
                <li>Workshops on specialized topics</li>
                <li>Professional networking receptions</li>
              </ul>
              
              <h2 className="section-title">Contact Information</h2>
              <p>
                For more information about the conference, please contact us at:
              </p>
              <p>Email: conference@nepha.org.np</p>
              <p>Phone: +977-XXXXXXXXXX</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Conference2025Page;