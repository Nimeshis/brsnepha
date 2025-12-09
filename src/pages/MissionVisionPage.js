import React from 'react';
import Layout from '../components/Layout';
import './AboutPage.css';

const MissionVisionPage = () => {
  return (
    <Layout>
      <div className="about-page">
        <div className="page-header">
          <div className="container">
            <h1>Mission and Vision</h1>
            <p>Our Core Purpose and Aspirations</p>
          </div>
        </div>
        
        <div className="container">
          <div className="about-content">
            <div className="about-section">
              <h2 className="section-title">Our Mission</h2>
              <p>
                To promote public health in Nepal through professional development, advocacy, networking, and evidence-based interventions. We aim to organize all public health professionals and develop their professional abilities for quality and people-centered health care services in the country.
              </p>
              <p>
                Our mission includes providing leadership in public health activities, facilitating professional development, ensuring quality healthcare services, and promoting health and social development through research, advocacy, policy recommendations, and capacity building.
              </p>
              
              <div className="mission-vision">
                <div className="mission">
                  <h2 className="section-title">Core Mission Elements</h2>
                  <ul>
                    <li>Lead and organize public health activities nationwide</li>
                    <li>Facilitate professional development to ensure quality healthcare services</li>
                    <li>Improve the national health system through research and advocacy</li>
                    <li>Support government and non-government entities in public health policy development</li>
                    <li>Promote health awareness and address health disparities</li>
                  </ul>
                </div>
                
                <div className="vision">
                  <h2 className="section-title">Our Vision</h2>
                  <p>
                    A healthy Nepal with equitable access to quality health services for all. We envision organized and capable public health professionals working collaboratively to enhance health awareness and status across the country.
                  </p>
                  <p>
                    Our vision encompasses articulating Nepalese aspirations in health and community development, fostering a society where all citizens can lead healthy, productive lives regardless of their geographic or socioeconomic circumstances.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Strategic Approach</h2>
              <p>
                NEPHA's approach to fulfilling its mission and realizing its vision is grounded in collaboration, evidence-based practice, and sustainable development. The organization works closely with government agencies, international organizations, academic institutions, and community groups to create a comprehensive public health ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MissionVisionPage;