import React from 'react';
import Layout from '../components/Layout';
import './AboutPage.css';

const OrganogramPage = () => {
  return (
    <Layout>
      <div className="about-page">
        <div className="page-header">
          <div className="container">
            <h1>Organogram</h1>
            <p>Our Organizational Structure</p>
          </div>
        </div>
        
        <div className="container">
          <div className="about-content">
            <div className="about-section">
              <h2 className="section-title">Organizational Structure</h2>
              <p>
                The Nepal Public Health Association (NEPHA) has a well-defined organizational structure that ensures effective governance, efficient operations, and strategic direction. Our structure balances democratic representation with professional expertise to advance our mission of improving public health in Nepal.
              </p>
              
              <h2 className="section-title">Governance Structure</h2>
              
              <div className="organogram-structure">
                <div className="governance-level">
                  <h3>General Assembly</h3>
                  <p>
                    The highest governing body consisting of all NEPHA members. Meets annually to approve major policies, elect officers, and review organizational performance.
                  </p>
                </div>
                
                <div className="governance-level">
                  <h3>Board of Directors</h3>
                  <p>
                    Elected body responsible for strategic oversight and governance. Sets organizational policies, approves budgets, and ensures mission fulfillment.
                  </p>
                </div>
                
                <div className="governance-level">
                  <h3>Executive Committee</h3>
                  <p>
                    Comprised of key officers including President, Vice-President, Secretary, and Treasurer. Manages day-to-day operations and implements Board decisions.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Functional Departments</h2>
              
              <div className="departments">
                <div className="department">
                  <h3>Research and Publications Department</h3>
                  <p>
                    Oversees all research activities, manages publication processes, and maintains the organization's research database and library.
                  </p>
                </div>
                
                <div className="department">
                  <h3>Training and Capacity Building Department</h3>
                  <p>
                    Designs and implements training programs, coordinates workshops and seminars, and manages continuing education activities.
                  </p>
                </div>
                
                <div className="department">
                  <h3>Events and Conferences Department</h3>
                  <p>
                    Plans and executes conferences, workshops, and special events. Manages logistics, speaker coordination, and participant services.
                  </p>
                </div>
                
                <div className="department">
                  <h3>Membership and Communications Department</h3>
                  <p>
                    Manages membership services, develops communication strategies, and maintains member databases and communication channels.
                  </p>
                </div>
                
                <div className="department">
                  <h3>Finance and Administration Department</h3>
                  <p>
                    Handles financial operations, budgeting, human resources, and administrative functions to ensure efficient organizational operations.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Geographic Structure</h2>
              
              <div className="geographic-structure">
                <div className="level">
                  <h3>National Level</h3>
                  <p>
                    Central office in Kathmandu coordinates national activities, sets policies, and provides support to provincial chapters.
                  </p>
                </div>
                
                <div className="level">
                  <h3>Provincial Chapters</h3>
                  <p>
                    Seven provincial chapters operate in each of Nepal's provinces, adapting national programs to local contexts and needs.
                  </p>
                </div>
                
                <div className="level">
                  <h3>Local Networks</h3>
                  <p>
                    Local networks of members facilitate grassroots activities and community engagement in districts and municipalities.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Standing Committees</h2>
              
              <div className="committees">
                <div className="committee">
                  <h3>Scientific Committee</h3>
                  <p>
                    Ensures academic excellence in conferences and publications. Reviews research proposals and advises on scientific matters.
                  </p>
                </div>
                
                <div className="committee">
                  <h3>Ethics Committee</h3>
                  <p>
                    Oversees ethical standards and investigates potential violations of the Code of Ethics.
                  </p>
                </div>
                
                <div className="committee">
                  <h3>Finance Committee</h3>
                  <p>
                    Reviews financial operations, audits expenditures, and makes recommendations on budget matters.
                  </p>
                </div>
                
                <div className="committee">
                  <h3>Membership Committee</h3>
                  <p>
                    Reviews membership applications, develops recruitment strategies, and ensures member satisfaction.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Advisory Bodies</h2>
              
              <div className="advisory-bodies">
                <div className="body">
                  <h3>Advisory Committee</h3>
                  <p>
                    Comprised of distinguished public health experts who provide strategic advice on organizational direction and program development.
                  </p>
                </div>
                
                <div className="body">
                  <h3>External Review Panel</h3>
                  <p>
                    Independent experts who periodically evaluate organizational performance and provide recommendations for improvement.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Contact Information</h2>
              <p>
                For questions about NEPHA's organizational structure, please contact:
              </p>
              <p>
                Email: governance@nepha.org.np<br />
                Phone: +977-XXXXXXXXXX
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrganogramPage;