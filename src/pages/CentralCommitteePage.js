import React from 'react';
import Layout from '../components/Layout';
import './AboutPage.css';

const CentralCommitteePage = () => {
  return (
    <Layout>
      <div className="about-page">
        <div className="page-header">
          <div className="container">
            <h1>Central Committee</h1>
            <p>Leadership Structure</p>
          </div>
        </div>
        
        <div className="container">
          <div className="about-content">
            <div className="about-section">
              <h2 className="section-title">Organizational Leadership</h2>
              <p>
                The Nepal Public Health Association (NEPHA) is governed by a structured Central Committee that provides strategic direction and oversight for the organization's activities. The committee consists of elected representatives who bring diverse expertise and experience in public health to guide NEPHA's mission.
              </p>
              
              <h2 className="section-title">Executive Committee</h2>
              <p>
                The Executive Committee comprises key leadership positions responsible for the day-to-day management and strategic decision-making of NEPHA:
              </p>
              
              <div className="committee-structure">
                <div className="committee-member">
                  <h3>Acting President</h3>
                  <p>Tej Prasad Dulal</p>
                </div>
                
                <div className="committee-member">
                  <h3>Immediate Past President</h3>
                  <p>Basant Adhikari</p>
                </div>
                
                <div className="committee-member">
                  <h3>General Secretary</h3>
                  <p>Kailash Khaki Shrestha</p>
                </div>
                
                <div className="committee-member">
                  <h3>Treasurer</h3>
                  <p>Bijaya Dhakal</p>
                </div>
              </div>
              
              <h2 className="section-title">Province Representation</h2>
              <p>
                NEPHA's governance structure includes Province Presidents who represent the organization's interests across all seven provinces of Nepal, ensuring that our initiatives reach communities throughout the country:
              </p>
              
              <div className="province-representatives">
                <div className="representative">
                  <h3>Koshi Province</h3>
                  <p>Brajesh Kumar Mehata</p>
                </div>
                
                <div className="representative">
                  <h3>Madhesh Province</h3>
                  <p>Amarendra Ray</p>
                </div>
                
                <div className="representative">
                  <h3>Bagmati Province</h3>
                  <p>[Position currently vacant]</p>
                </div>
                
                <div className="representative">
                  <h3>Gandaki Province</h3>
                  <p>[Position currently vacant]</p>
                </div>
                
                <div className="representative">
                  <h3>Lumbini Province</h3>
                  <p>[Position currently vacant]</p>
                </div>
                
                <div className="representative">
                  <h3>Karnali Province</h3>
                  <p>[Position currently vacant]</p>
                </div>
                
                <div className="representative">
                  <h3>Sudurpaschim Province</h3>
                  <p>[Position currently vacant]</p>
                </div>
              </div>
              
              <h2 className="section-title">Roles and Responsibilities</h2>
              <p>
                The Central Committee is responsible for:
              </p>
              
              <ul>
                <li>Setting strategic direction and policy for the organization</li>
                <li>Overseeing financial management and resource allocation</li>
                <li>Ensuring compliance with legal and regulatory requirements</li>
                <li>Representing NEPHA in national and international forums</li>
                <li>Approving major initiatives and partnerships</li>
                <li>Monitoring and evaluating organizational performance</li>
              </ul>
              
              <h2 className="section-title">Governance Framework</h2>
              <p>
                The Central Committee operates under a governance framework that promotes transparency, accountability, and inclusiveness. Regular meetings are held to review progress, make decisions, and plan future activities. The committee is committed to upholding the highest standards of ethical conduct and organizational integrity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CentralCommitteePage;