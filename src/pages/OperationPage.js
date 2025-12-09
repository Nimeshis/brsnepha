import React from 'react';
import Layout from '../components/Layout';
import './AboutPage.css';

const OperationPage = () => {
  return (
    <Layout>
      <div className="about-page">
        <div className="page-header">
          <div className="container">
            <h1>Operation</h1>
            <p>How NEPHA Operates</p>
          </div>
        </div>
        
        <div className="container">
          <div className="about-content">
            <div className="about-section">
              <h2 className="section-title">Organizational Operations</h2>
              <p>
                The Nepal Public Health Association (NEPHA) operates through a well-structured system that ensures effective governance, efficient program implementation, and sustainable organizational growth. Our operations are guided by our mission to advance public health in Nepal through professional development, advocacy, and evidence-based interventions.
              </p>
              
              <h2 className="section-title">Governance Structure</h2>
              
              <div className="governance-structure">
                <div className="structure-item">
                  <h3>Board of Directors</h3>
                  <p>
                    The Board provides strategic oversight and governance for the organization. Comprising elected members, the Board sets policies, approves budgets, and ensures mission fulfillment.
                  </p>
                </div>
                
                <div className="structure-item">
                  <h3>Executive Committee</h3>
                  <p>
                    Responsible for day-to-day management and implementation of Board decisions. The Executive Committee includes the President, Vice-President, Secretary, and Treasurer.
                  </p>
                </div>
                
                <div className="structure-item">
                  <h3>Standing Committees</h3>
                  <p>
                    Specialized committees focused on specific areas such as research, training, membership, and ethics. These committees provide expertise and guidance in their respective domains.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Program Implementation</h2>
              
              <div className="program-areas">
                <div className="program-area">
                  <h3>Research and Publications</h3>
                  <p>
                    Conducting and supporting public health research, publishing scholarly journals and bulletins, and disseminating evidence-based knowledge to practitioners and policymakers.
                  </p>
                </div>
                
                <div className="program-area">
                  <h3>Training and Capacity Building</h3>
                  <p>
                    Organizing workshops, conferences, and continuing education programs to enhance the skills and knowledge of public health professionals across Nepal.
                  </p>
                </div>
                
                <div className="program-area">
                  <h3>Advocacy and Policy Engagement</h3>
                  <p>
                    Engaging with government agencies, international organizations, and civil society to influence health policies and advocate for evidence-based practices.
                  </p>
                </div>
                
                <div className="program-area">
                  <h3>Membership Services</h3>
                  <p>
                    Providing value-added services to members, facilitating networking opportunities, and supporting professional development initiatives.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Geographic Reach</h2>
              <p>
                NEPHA operates through a decentralized structure that includes:
              </p>
              
              <ul>
                <li><strong>National Office:</strong> Central coordination and administration based in Lalitpur</li>
                <li><strong>Provincial Chapters:</strong> Seven chapters across Nepal's provinces for localized implementation</li>
                <li><strong>Local Networks:</strong> Grassroots engagement through district and municipal networks</li>
              </ul>
              
              <h2 className="section-title">Financial Management</h2>
              <p>
                Our financial operations are characterized by:
              </p>
              
              <ul>
                <li>Transparent budgeting and financial reporting</li>
                <li>Diverse funding sources including membership fees, grants, and sponsorships</li>
                <li>Regular financial audits by independent auditors</li>
                <li>Annual review by the Finance Committee and Board of Directors</li>
              </ul>
              
              <h2 className="section-title">Quality Assurance</h2>
              <p>
                We maintain quality standards through:
              </p>
              
              <ul>
                <li>Established policies and procedures for all activities</li>
                <li>Regular monitoring and evaluation of programs</li>
                <li>Feedback mechanisms for participants and stakeholders</li>
                <li>Continuous improvement processes based on lessons learned</li>
              </ul>
              
              <h2 className="section-title">Communication and Outreach</h2>
              <p>
                Our communication strategy includes:
              </p>
              
              <ul>
                <li>Regular newsletters and electronic communications</li>
                <li>Active presence on social media platforms</li>
                <li>Website updates and digital resource sharing</li>
                <li>Media engagement and public relations activities</li>
              </ul>
              
              <h2 className="section-title">Performance Monitoring</h2>
              <p>
                We track organizational performance through:
              </p>
              
              <ul>
                <li>Annual performance indicators and targets</li>
                <li>Regular progress reports to the Board</li>
                <li>Stakeholder feedback surveys</li>
                <li>Impact assessments of major initiatives</li>
              </ul>
              
              <h2 className="section-title">Contact Information</h2>
              <p>
                For inquiries about NEPHA operations, please contact:
              </p>
              <p>
                Email: operations@nepha.org.np<br />
                Phone: +977-XXXXXXXXXX
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OperationPage;