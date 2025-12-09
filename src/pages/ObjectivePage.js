import React from 'react';
import Layout from '../components/Layout';
import './AboutPage.css';

const ObjectivePage = () => {
  return (
    <Layout>
      <div className="about-page">
        <div className="page-header">
          <div className="container">
            <h1>Objective</h1>
            <p>Our Key Objectives</p>
          </div>
        </div>
        
        <div className="container">
          <div className="about-content">
            <div className="about-section">
              <h2 className="section-title">Primary Objectives</h2>
              <p>
                The Nepal Public Health Association (NEPHA) has established clear objectives to guide its efforts in advancing public health in Nepal. These objectives form the foundation of our work and reflect our commitment to improving health outcomes for all Nepalese citizens.
              </p>
              
              <div className="objectives-list">
                <div className="objective-item">
                  <h3>1. Professional Organization</h3>
                  <p>
                    To organize all public health professionals in Nepal for their collective well-being and to create a strong professional network that supports career development and collaboration.
                  </p>
                </div>
                
                <div className="objective-item">
                  <h3>2. Skill Development</h3>
                  <p>
                    To develop and enhance the professional skills of our members, enabling them to provide high-quality, evidence-based public health services to communities across Nepal.
                  </p>
                </div>
                
                <div className="objective-item">
                  <h3>3. Policy Support</h3>
                  <p>
                    To provide expert input and support for public health policy and program development, helping to improve the national healthcare system through evidence-based recommendations.
                  </p>
                </div>
                
                <div className="objective-item">
                  <h3>4. Networking</h3>
                  <p>
                    To establish and maintain networks with national and international public health organizations to share resources, experiences, and best practices in public health.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Additional Goals</h2>
              <p>
                Beyond our primary objectives, NEPHA is committed to several additional goals that support our overarching mission:
              </p>
              
              <ul>
                <li>Promoting professionalism among public health workers through continuous education and training</li>
                <li>Facilitating effective policy implementation and evaluation at all levels of government</li>
                <li>Conducting and supporting research on critical public health issues affecting Nepal</li>
                <li>Organizing training sessions, workshops, and conferences to enhance knowledge sharing</li>
                <li>Maintaining a public health library and resource center for members and the public</li>
                <li>Advocating for improved health equity and access to services for vulnerable populations</li>
              </ul>
              
              <h2 className="section-title">Long-term Vision</h2>
              <p>
                Our objectives are designed to create lasting positive change in Nepal's public health landscape. We strive to build a future where public health professionals are well-supported, communities are healthy and informed, and Nepal's health systems are robust and responsive to the needs of all citizens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ObjectivePage;