import React from 'react';
import Layout from '../components/Layout';
import './AboutPage.css';

const HistoryPage = () => {
  return (
    <Layout>
      <div className="about-page">
        <div className="page-header">
          <div className="container">
            <h1>History</h1>
            <p>Our Historical Journey</p>
          </div>
        </div>
        
        <div className="container">
          <div className="about-content">
            <div className="about-section">
              <h2 className="section-title">Historical Background</h2>
              <p>
                The Nepal Public Health Association (NEPHA) was established in 2046 BS (1989 AD) as a pioneering organization dedicated to advancing public health in Nepal. Since its inception, NEPHA has played a pivotal role in bringing together public health professionals from diverse backgrounds to work collectively toward improving the nation's health landscape.
              </p>
              
              <h2 className="section-title">Milestones</h2>
              <p>
                Over the years, NEPHA has achieved several significant milestones in its journey to promote public health in Nepal:
              </p>
              <ul>
                <li><strong>1989:</strong> Establishment of NEPHA as the premier public health professional organization in Nepal</li>
                <li><strong>1990s:</strong> Expansion of membership base and initiation of public health advocacy programs</li>
                <li><strong>2000s:</strong> Development of partnerships with national and international health organizations</li>
                <li><strong>2015:</strong> Celebration of 25th anniversary with special recognition programs</li>
                <li><strong>2020s:</strong> Active participation in national health policy formulation and response to public health emergencies</li>
              </ul>
              
              <h2 className="section-title">Evolution and Growth</h2>
              <p>
                Throughout its history, NEPHA has evolved from a small group of dedicated public health professionals to a robust organization with over 1,000 active members. The organization has consistently adapted to changing health landscapes and emerging public health challenges, maintaining its commitment to quality, people-centered healthcare services.
              </p>
              <p>
                NEPHA's growth has been marked by expanding its reach across all seven provinces of Nepal, developing specialized committees, and establishing itself as a key stakeholder in national health policy discussions. The organization continues to play a vital role in shaping public health discourse and practice in Nepal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HistoryPage;