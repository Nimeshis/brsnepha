import React from 'react';
import Layout from '../components/Layout';
import './EventsPage.css';

const Conference2020Page = () => {
  return (
    <Layout>
      <div className="events-page">
        <div className="page-header">
          <div className="container">
            <h1>NEPHA Conference 2020</h1>
            <p>Reflecting on Past Achievements and Future Directions</p>
          </div>
        </div>
        
        <div className="container">
          <div className="events-content">
            <div className="events-section">
              <h2 className="section-title">Conference Overview</h2>
              <p>
                The Nepal Public Health Association (NEPHA) successfully organized its annual conference in 2020, bringing together 
                public health professionals, researchers, policymakers, and practitioners from across Nepal and the region. The conference 
                served as a vital platform for knowledge exchange, networking, and collaborative planning to address pressing public 
                health challenges in Nepal.
              </p>
              
              <div className="conference-details">
                <h3>Conference Highlights</h3>
                <p>
                  The 2020 conference featured keynote presentations from leading public health experts, panel discussions on 
                  contemporary health issues, and interactive workshops on emerging topics. Special emphasis was placed on addressing 
                  health disparities, strengthening health systems, and promoting evidence-based policy development.
                </p>
                
                <div className="key-themes">
                  <h4>Key Themes Discussed</h4>
                  <ul>
                    <li>Strengthening primary healthcare systems in Nepal</li>
                    <li>Addressing non-communicable diseases burden</li>
                    <li>Improving maternal and child health outcomes</li>
                    <li>Enhancing emergency preparedness and response</li>
                    <li>Promoting health equity and social inclusion</li>
                    <li>Integrating technology in public health practice</li>
                  </ul>
                </div>
              </div>
              
              <div className="outcomes">
                <h3>Key Outcomes</h3>
                <p>
                  The conference resulted in several important outcomes, including the development of consensus statements on 
                  priority public health issues, establishment of new collaborative networks, and identification of research 
                  priorities for the coming years. Participants also engaged in capacity-building activities and shared best 
                  practices from their respective regions and institutions.
                </p>
                
                <div className="follow-up-actions">
                  <h4>Follow-up Actions</h4>
                  <ul>
                    <li>Formation of thematic working groups for continued collaboration</li>
                    <li>Development of policy briefs based on conference recommendations</li>
                    <li>Planning for regional dissemination of conference outcomes</li>
                    <li>Establishment of mentorship programs for young professionals</li>
                  </ul>
                </div>
              </div>
              
              <div className="resources">
                <h3>Conference Resources</h3>
                <p>
                  Presentations, posters, and other materials from the conference are available in our resources section. 
                  For access to specific presentations or to connect with conference participants, please contact our events team.
                </p>
                <p>Email: events@nepha.org.np<br />
                Phone: +977-1-5449509</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Conference2020Page;