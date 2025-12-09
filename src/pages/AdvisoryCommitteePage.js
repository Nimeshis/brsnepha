import React from 'react';
import Layout from '../components/Layout';
import './AboutPage.css';

const AdvisoryCommitteePage = () => {
  return (
    <Layout>
      <div className="about-page">
        <div className="page-header">
          <div className="container">
            <h1>Advisory Committee</h1>
            <p>Expert Guidance for NEPHA</p>
          </div>
        </div>
        
        <div className="container">
          <div className="about-content">
            <div className="about-section">
              <h2 className="section-title">Advisory Committee</h2>
              <p>
                The Nepal Public Health Association (NEPHA) Advisory Committee comprises distinguished experts and leaders in public health who provide strategic guidance and expert advice to support our mission of advancing public health in Nepal. These volunteers contribute their time and expertise to help shape our programs, policies, and initiatives.
              </p>
              
              <h2 className="section-title">Role and Responsibilities</h2>
              <p>
                The Advisory Committee provides guidance in several key areas:
              </p>
              
              <ul>
                <li>Strategic direction for organizational development and growth</li>
                <li>Expert advice on program design and implementation</li>
                <li>Review of policies and procedures to ensure best practices</li>
                <li>Identification of emerging issues and opportunities in public health</li>
                <li>Support for special initiatives and projects</li>
                <li>Mentorship for emerging public health leaders</li>
              </ul>
              
              <h2 className="section-title">Current Advisory Committee Members</h2>
              
              <div className="committee-members">
                <div className="member">
                  <h3>Dr. Bharat Mani Dixit</h3>
                  <p>
                    <strong>Former Secretary, Ministry of Health and Population</strong><br />
                    Dr. Dixit brings extensive experience in health policy development and implementation at the national level. His expertise in health system governance provides valuable insights for NEPHA's advocacy efforts.
                  </p>
                </div>
                
                <div className="member">
                  <h3>Dr. Sabina Ranjitkar</h3>
                  <p>
                    <strong>Dean, Institute of Medicine, Tribhuvan University</strong><br />
                    An expert in medical education and public health research, Dr. Ranjitkar contributes her knowledge of academic institutions and research capacity building.
                  </p>
                </div>
                
                <div className="member">
                  <h3>Dr. Lila Jung Rana</h3>
                  <p>
                    <strong>Public Health Specialist, World Health Organization</strong><br />
                    With extensive international experience, Dr. Rana provides global perspectives on public health challenges and solutions that can be adapted to the Nepalese context.
                  </p>
                </div>
                
                <div className="member">
                  <h3>Prof. Dr. Sharad Kumar Ghimire</h3>
                  <p>
                    <strong>Director, Nepal Health Research Council</strong><br />
                    An expert in health research and policy analysis, Prof. Ghimire guides NEPHA's research initiatives and evidence-based advocacy efforts.
                  </p>
                </div>
              </div>
              
              <h2 class="section-title">Emeritus Advisory Committee Members</h2>
              
              <div className="committee-members">
                <div className="member">
                  <h3>Dr. Dinesh Prasad Sapkota</h3>
                  <p>
                    <strong>Former Director General, Department of Health Services</strong><br />
                    Dr. Sapkota's extensive experience in health service delivery continues to inform NEPHA's work in health system strengthening.
                  </p>
                </div>
                
                <div className="member">
                  <h3>Dr. Mandira Sharma</h3>
                  <p>
                    <strong>Professor Emeritus, Kathmandu University School of Medical Sciences</strong><br />
                    Dr. Sharma's expertise in maternal and child health has been instrumental in guiding NEPHA's programs in these critical areas.
                  </p>
                </div>
              </div>
              
              <h2 class="section-title">Meeting Structure</h2>
              <p>
                The Advisory Committee meets twice yearly to review organizational progress and provide strategic guidance. Additional meetings may be convened for special initiatives or urgent matters. Meeting agendas are developed in consultation with NEPHA leadership, and minutes are shared with all members.
              </p>
              
              <h2 class="section-title">Nomination and Selection</h2>
              <p>
                Advisory Committee members are nominated by the Board of Directors based on their expertise, reputation, and commitment to public health in Nepal. Members serve three-year terms, with the possibility of renewal for an additional term. The committee typically comprises 6-10 members representing diverse areas of public health expertise.
              </p>
              
              <h2 class="section-title">Contact Information</h2>
              <p>
                For inquiries about the Advisory Committee or to suggest potential nominees, please contact:
              </p>
              <p>
                Email: advisory@nepha.org.np<br />
                Phone: +977-XXXXXXXXXX
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdvisoryCommitteePage;