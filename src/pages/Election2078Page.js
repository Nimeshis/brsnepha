import React from 'react';
import Layout from '../components/Layout';
import './ElectionPage.css';

const Election2078Page = () => {
  return (
    <Layout>
      <div className="election-page">
        <div className="page-header">
          <div className="container">
            <h1>NEPHA Election 2078</h1>
            <p>Democratic Governance for Public Health Leadership</p>
          </div>
        </div>
        
        <div className="container">
          <div className="election-content">
            <div className="election-section">
              <h2 className="section-title">Election Overview</h2>
              <p>
                The Nepal Public Health Association (NEPHA) holds regular elections to ensure democratic governance and 
                leadership continuity. The 2078 election (corresponding to 2021-2022 in the Gregorian calendar) was 
                conducted in accordance with our bylaws to elect representatives for the Central Committee and various 
                organizational positions.
              </p>
              
              <div className="election-process">
                <h3>Election Process</h3>
                <p>
                  NEPHA's election process is designed to be transparent, inclusive, and representative of our diverse 
                  membership base across Nepal. The process typically involves nomination of candidates, verification of 
                  eligibility, campaigning period, and secret ballot voting by eligible members.
                </p>
                
                <div className="key-steps">
                  <h4>Key Steps in the Election Process</h4>
                  <ol>
                    <li>Announcement of election schedule and vacant positions</li>
                    <li>Nomination of candidates by members or self-nomination</li>
                    <li>Verification of candidate eligibility and qualifications</li>
                    <li>Campaign period with candidate presentations and forums</li>
                    <li>Secret ballot voting by eligible NEPHA members</li>
                    <li>Counting of votes and declaration of results</li>
                    <li>Transition period for incoming office bearers</li>
                  </ol>
                </div>
              </div>
              
              <div className="positions">
                <h3>Key Positions Elected</h3>
                <ul>
                  <li><strong>President:</strong> Provides overall leadership and represents NEPHA externally</li>
                  <li><strong>Vice-President:</strong> Supports the President and assumes duties in their absence</li>
                  <li><strong>General Secretary:</strong> Manages organizational operations and communications</li>
                  <li><strong>Treasurer:</strong> Oversees financial management and reporting</li>
                  <li><strong>Executive Committee Members:</strong> Support governance and strategic decision-making</li>
                  <li><strong>Province Representatives:</strong> Ensure regional representation and coordination</li>
                </ul>
              </div>
              
              <div className="significance">
                <h3>Significance of Democratic Elections</h3>
                <p>
                  Democratic elections are fundamental to NEPHA's governance structure and reflect our commitment to 
                  transparency, accountability, and inclusive leadership. Through regular elections, we ensure that our 
                  leadership represents the diverse perspectives and expertise of our membership while maintaining 
                  institutional continuity and effectiveness.
                </p>
              </div>
              
              <div className="contact-info">
                <h3>Election Committee Contact</h3>
                <p>
                  For inquiries about the election process, results, or future elections, please contact our Election 
                  Committee or General Secretariat.
                </p>
                <p>
                  Email: election@nepha.org.np<br />
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

export default Election2078Page;