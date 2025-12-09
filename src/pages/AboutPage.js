import React from 'react';
import Layout from '../components/Layout';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <Layout>
      <div className="about-page">
        <div className="page-header">
          <div className="container">
            <h1>About NEPHA</h1>
            <p>Learn more about our mission, vision, and values</p>
          </div>
        </div>
        
        <div className="container">
          <div className="about-content">
            <div className="about-section">
              <h2 className="section-title">Our Story</h2>
              <p>
                Nepal Public Health Association (NEPHA) is a non-governmental, non-profit and non-political civil organization of public health professionals in Nepal. NEPHA was established in 2046 BS (1989 AD) and has been working for the promotion of public health in Nepal since then.
              </p>
              <p>
                NEPHA aims to organize all the public health professionals and to develop their professional abilities for quality and people centered health care services in the country. It will also help the government and other national and international organizations in carrying out various public health programs and activities.
              </p>
            </div>
            
            <div className="mission-vision">
              <div className="mission">
                <h2 className="section-title">Our Mission</h2>
                <p>
                  To promote public health in Nepal through professional development, advocacy, networking, and evidence-based interventions.
                </p>
              </div>
              
              <div className="vision">
                <h2 className="section-title">Our Vision</h2>
                <p>
                  A healthy Nepal with equitable access to quality health services for all.
                </p>
              </div>
            </div>
            
            <div className="values">
              <h2 className="section-title">Our Values</h2>
              <div className="values-grid">
                <div className="value-card">
                  <div className="value-icon">
                    <i className="fas fa-hands-helping"></i>
                  </div>
                  <h3>Compassion</h3>
                  <p>Showing empathy and kindness to all communities we serve</p>
                </div>
                
                <div className="value-card">
                  <div className="value-icon">
                    <i className="fas fa-balance-scale"></i>
                  </div>
                  <h3>Integrity</h3>
                  <p>Maintaining honesty and ethical standards in all our work</p>
                </div>
                
                <div className="value-card">
                  <div className="value-icon">
                    <i className="fas fa-users"></i>
                  </div>
                  <h3>Collaboration</h3>
                  <p>Working together with partners and communities for greater impact</p>
                </div>
                
                <div className="value-card">
                  <div className="value-icon">
                    <i className="fas fa-lightbulb"></i>
                  </div>
                  <h3>Innovation</h3>
                  <p>Embracing creative solutions to address public health challenges</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;