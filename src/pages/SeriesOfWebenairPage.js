import React from 'react';
import Layout from '../components/Layout';
import './CausesPage.css';

const SeriesOfWebenairPage = () => {
  return (
    <Layout>
      <div className="causes-page">
        <div className="page-header">
          <div className="container">
            <h1>Webinar Series</h1>
            <p>Virtual Learning and Networking Opportunities</p>
          </div>
        </div>
        
        <div className="container">
          <div className="causes-content">
            <div className="causes-section">
              <h2 className="section-title">NEPHA Webinar Series</h2>
              <p>
                The Nepal Public Health Association (NEPHA) regularly hosts webinar series to provide accessible 
                learning and networking opportunities for public health professionals, researchers, students, and 
                practitioners across Nepal and beyond. These virtual events cover emerging topics, share research 
                findings, and facilitate discussions on critical public health issues.
              </p>
              
              <div className="webinar-objectives">
                <h3>Series Objectives</h3>
                <ul>
                  <li>Disseminate current research and best practices in public health</li>
                  <li>Provide continuing education opportunities for members</li>
                  <li>Foster networking among public health professionals</li>
                  <li>Address timely public health issues and challenges</li>
                  <li>Engage diverse stakeholders in public health discourse</li>
                  <li>Bridge geographical gaps in access to public health education</li>
                </ul>
              </div>
              
              <div className="typical-topics">
                <h3>Common Webinar Topics</h3>
                <div className="topic-list">
                  <div className="topic-item">
                    <h4>Emerging Infectious Diseases</h4>
                    <p>
                      Updates on disease surveillance, outbreak response, and prevention strategies for emerging 
                      infectious diseases of public health significance.
                    </p>
                  </div>
                  
                  <div className="topic-item">
                    <h4>Non-Communicable Diseases</h4>
                    <p>
                      Strategies for prevention, early detection, and management of chronic conditions such as 
                      diabetes, cardiovascular diseases, and cancer.
                    </p>
                  </div>
                  
                  <div className="topic-item">
                    <h4>Environmental Health</h4>
                    <p>
                      Exploring connections between environmental factors and health outcomes, including air quality, 
                      water safety, and climate change impacts.
                    </p>
                  </div>
                  
                  <div className="topic-item">
                    <h4>Health Systems Strengthening</h4>
                    <p>
                      Discussions on improving healthcare delivery, governance, financing, and workforce development 
                      in Nepal's evolving health system.
                    </p>
                  </div>
                  
                  <div className="topic-item">
                    <h4>Health Equity and Social Determinants</h4>
                    <p>
                      Addressing disparities in health outcomes and access to care based on socioeconomic, geographic, 
                      or demographic factors.
                    </p>
                  </div>
                  
                  <div className="topic-item">
                    <h4>Digital Health Innovations</h4>
                    <p>
                      Showcasing technology-enabled solutions for health service delivery, data collection, and 
                      patient engagement in the Nepalese context.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="participation-info">
                <h3>Participation Information</h3>
                <p>
                  NEPHA webinars are typically free to attend and open to members and non-members alike. 
                  Registration is required to receive joining instructions and access to recording (for registrants only).
                </p>
                
                <div className="how-to-join">
                  <h4>How to Join</h4>
                  <ol>
                    <li>Check our events calendar for upcoming webinar announcements</li>
                    <li>Register through the provided link or email events@nepha.org.np</li>
                    <li>Receive confirmation with joining link and technical requirements</li>
                    <li>Join the webinar at the scheduled time using compatible devices</li>
                    <li>Participate in Q&A sessions and networking opportunities</li>
                  </ol>
                </div>
              </div>
              
              <div className="proposal-submission">
                <h3>Propose a Webinar Topic</h3>
                <p>
                  We welcome proposals for webinar topics from members and public health professionals. If you have 
                  expertise in a particular area or would like to present your research, please contact our events team.
                </p>
                <p>
                  Email: events@nepha.org.np<br />
                  Phone: +977-1-5449509
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SeriesOfWebenairPage;