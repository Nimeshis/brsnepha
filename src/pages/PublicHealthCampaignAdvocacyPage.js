import React from 'react';
import Layout from '../components/Layout';
import './CausesPage.css';

const PublicHealthCampaignAdvocacyPage = () => {
  return (
    <Layout>
      <div className="causes-page">
        <div className="page-header">
          <div className="container">
            <h1>Public Health Campaigns & Advocacy</h1>
            <p>Driving Change Through Awareness and Policy Influence</p>
          </div>
        </div>
        
        <div className="container">
          <div className="causes-content">
            <div className="causes-section">
              <h2 className="section-title">Our Advocacy Mission</h2>
              <p>
                The Nepal Public Health Association (NEPHA) is committed to advocating for policies, programs, and 
                practices that improve public health outcomes in Nepal. Through strategic campaigns, evidence-based 
                advocacy, and collaborative partnerships, we work to influence decision-makers and mobilize communities 
                around critical health issues.
              </p>
              
              <div className="advocacy-approach">
                <h3>Advocacy Approach</h3>
                <p>
                  NEPHA's advocacy efforts combine scientific evidence, community engagement, and policy expertise to 
                  drive meaningful change in public health. Our approach includes:
                </p>
                <ul>
                  <li>Research and evidence generation on priority health issues</li>
                  <li>Policy analysis and development of evidence-based recommendations</li>
                  <li>Stakeholder engagement with government, private sector, and civil society</li>
                  <li>Media and public awareness campaigns to build support for health initiatives</li>
                  <li>Capacity building for members and partners in advocacy skills</li>
                  <li>Monitoring and evaluation of policy implementation and health outcomes</li>
                </ul>
              </div>
              
              <div className="key-campaigns">
                <h3>Priority Campaign Areas</h3>
                <div className="campaign-list">
                  <div className="campaign-item">
                    <h4>Universal Health Coverage</h4>
                    <p>
                      Advocating for equitable access to quality healthcare services for all Nepali citizens, 
                      regardless of their economic or social status.
                    </p>
                  </div>
                  
                  <div className="campaign-item">
                    <h4>Non-Communicable Diseases Prevention</h4>
                    <p>
                      Raising awareness about risk factors for heart disease, diabetes, and cancer, and 
                      promoting preventive measures and early detection.
                    </p>
                  </div>
                  
                  <div className="campaign-item">
                    <h4>Environmental Health Protection</h4>
                    <p>
                      Addressing air pollution, water quality, and climate change impacts on health through 
                      policy advocacy and community action.
                    </p>
                  </div>
                  
                  <div className="campaign-item">
                    <h4>Health Equity and Social Justice</h4>
                    <p>
                      Working to eliminate health disparities based on geography, gender, caste, ethnicity, 
                      or economic status through targeted interventions and policy reforms.
                    </p>
                  </div>
                  
                  <div className="campaign-item">
                    <h4>Health System Strengthening</h4>
                    <p>
                      Supporting improvements in healthcare infrastructure, human resources, financing, 
                      and governance to deliver better health outcomes.
                    </p>
                  </div>
                  
                  <div className="campaign-item">
                    <h4>Emergency Preparedness</h4>
                    <p>
                      Building capacities for disaster response and pandemic preparedness to protect 
                      communities from health emergencies.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="recent-initiatives">
                <h3>Recent Advocacy Initiatives</h3>
                <ul>
                  <li>Campaign for increased government health budget allocation</li>
                  <li>Advocacy for tobacco control policy implementation</li>
                  <li>Support for maternal and child health program expansion</li>
                  <li>Promotion of mental health awareness and service development</li>
                  <li>Initiative for improved nutrition policies and programs</li>
                </ul>
              </div>
              
              <div className="get-involved">
                <h3>Get Involved in Advocacy</h3>
                <p>
                  NEPHA members and supporters can contribute to our advocacy efforts in several ways:
                </p>
                <ul>
                  <li>Join advocacy working groups focused on specific health issues</li>
                  <li>Participate in public awareness campaigns and community mobilization</li>
                  <li>Share research findings and evidence with policymakers</li>
                  <li>Attend policy dialogues and stakeholder consultations</li>
                  <li>Support fundraising for advocacy activities</li>
                </ul>
                <p>
                  For more information on how to get involved in NEPHA's advocacy work, please contact our 
                  advocacy coordinator:
                </p>
                <p>
                  Email: advocacy@nepha.org.np<br />
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

export default PublicHealthCampaignAdvocacyPage;