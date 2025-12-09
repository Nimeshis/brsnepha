import React from 'react';
import Layout from '../components/Layout';
import './AboutPage.css';

const ActivitiesPage = () => {
  return (
    <Layout>
      <div className="about-page">
        <div className="page-header">
          <div className="container">
            <h1>Activities</h1>
            <p>Our Key Activities</p>
          </div>
        </div>
        
        <div className="container">
          <div className="about-content">
            <div className="about-section">
              <h2 className="section-title">Core Activities</h2>
              <p>
                The Nepal Public Health Association (NEPHA) engages in a wide range of activities designed to advance public health in Nepal. Our work spans research, advocacy, education, and direct community engagement to address the most pressing health challenges facing the nation.
              </p>
              
              <div className="activities-grid">
                <div className="activity-category">
                  <h3>Research and Publications</h3>
                  <ul>
                    <li>Conducting studies on critical public health issues</li>
                    <li>Supporting evidence-based policy development</li>
                    <li>Publishing health bulletins and newsletters</li>
                    <li>Maintaining a public health library and resource center</li>
                    <li>Disseminating research findings through conferences and journals</li>
                  </ul>
                </div>
                
                <div className="activity-category">
                  <h3>Training and Capacity Building</h3>
                  <ul>
                    <li>Organizing workshops and training sessions</li>
                    <li>Providing continuing education for health professionals</li>
                    <li>Developing training materials and curricula</li>
                    <li>Facilitating exchange programs with international institutions</li>
                    <li>Offering certification courses in specialized areas</li>
                  </ul>
                </div>
                
                <div className="activity-category">
                  <h3>Advocacy and Policy Engagement</h3>
                  <ul>
                    <li>Engaging with policymakers on health legislation</li>
                    <li>Providing expert testimony on health issues</li>
                    <li>Participating in national health policy development</li>
                    <li>Advocating for increased health funding</li>
                    <li>Promoting health equity and access to services</li>
                  </ul>
                </div>
                
                <div className="activity-category">
                  <h3>Conferences and Events</h3>
                  <ul>
                    <li>Hosting annual public health conferences</li>
                    <li>Organizing regional seminars and symposia</li>
                    <li>Participating in international health forums</li>
                    <li>Facilitating networking among professionals</li>
                    <li>Showcasing innovative public health practices</li>
                  </ul>
                </div>
              </div>
              
              <h2 className="section-title">Specialized Programs</h2>
              <p>
                NEPHA implements targeted programs to address specific health challenges:
              </p>
              
              <div className="programs-list">
                <div className="program-item">
                  <h3>Health Awareness Campaigns</h3>
                  <p>
                    Conducting public education initiatives on critical health issues such as maternal and child health, infectious diseases, nutrition, and mental health.
                  </p>
                </div>
                
                <div className="program-item">
                  <h3>Emergency Response</h3>
                  <p>
                    Coordinating rapid response efforts during public health emergencies and natural disasters, providing technical expertise and mobilizing resources.
                  </p>
                </div>
                
                <div className="program-item">
                  <h3>Community Health Initiatives</h3>
                  <p>
                    Implementing grassroots programs to improve health outcomes in underserved communities, with particular focus on rural and marginalized populations.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Collaborative Efforts</h2>
              <p>
                NEPHA actively collaborates with various stakeholders to amplify our impact:
              </p>
              
              <ul>
                <li>Government ministries and departments</li>
                <li>International organizations including WHO and UNICEF</li>
                <li>National and international academic institutions</li>
                <li>Non-governmental organizations working in health</li>
                <li>Private sector partners committed to public health</li>
                <li>Media outlets for public health messaging</li>
              </ul>
              
              <h2 className="section-title">Ongoing Commitments</h2>
              <p>
                Our activities are continuously evolving to meet emerging health challenges. We remain committed to staying at the forefront of public health innovation while maintaining our core focus on serving the people of Nepal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ActivitiesPage;