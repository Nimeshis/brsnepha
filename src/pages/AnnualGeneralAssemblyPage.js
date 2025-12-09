import React from 'react';
import Layout from '../components/Layout';
import './EventsPage.css';

const AnnualGeneralAssemblyPage = () => {
  return (
    <Layout>
      <div className="events-page">
        <div className="page-header">
          <div className="container">
            <h1>Annual General Assembly</h1>
            <p>Yearly General Assembly Meeting</p>
          </div>
        </div>
        
        <div className="container">
          <div className="events-content">
            <div className="events-section">
              <h2 className="section-title">Annual General Assembly</h2>
              <p>
                The Nepal Public Health Association (NEPHA) Annual General Assembly is the highest decision-making body of our organization, bringing together members from across the country to review our progress, set strategic directions, and elect leadership for the coming year.
              </p>
              
              <h2 className="section-title">Purpose and Importance</h2>
              <p>
                The Annual General Assembly serves several critical functions:
              </p>
              
              <ul>
                <li>Review and approve annual reports and financial statements</li>
                <li>Elect officers and board members for the upcoming term</li>
                <li>Amend bylaws and organizational policies as needed</li>
                <li>Set strategic priorities and goals for the organization</li>
                <li>Provide a forum for member feedback and discussion</li>
                <li>Recognize outstanding contributions to public health</li>
              </ul>
              
              <h2 className="section-title">Agenda Items</h2>
              
              <div className="agenda-items">
                <div className="agenda-item">
                  <h3>Opening Ceremony</h3>
                  <p>
                    Welcome address by the outgoing President, presentation of annual reports, and approval of the agenda.
                  </p>
                </div>
                
                <div className="agenda-item">
                  <h3>President's Report</h3>
                  <p>
                    Comprehensive overview of organizational activities, achievements, and challenges during the past year.
                  </p>
                </div>
                
                <div className="agenda-item">
                  <h3>Treasurer's Report</h3>
                  <p>
                    Detailed financial report including income, expenditures, and audit results for the previous fiscal year.
                  </p>
                </div>
                
                <div className="agenda-item">
                  <h3>Elections</h3>
                  <p>
                    Election of officers including President, Vice-President, Secretary, and Treasurer, as well as board members.
                  </p>
                </div>
                
                <div className="agenda-item">
                  <h3>Strategic Planning Session</h3>
                  <p>
                    Discussion and approval of strategic priorities and goals for the upcoming year and beyond.
                  </p>
                </div>
                
                <div className="agenda-item">
                  <h3>Member Forum</h3>
                  <p>
                    Open discussion session where members can raise issues, propose ideas, and provide feedback.
                  </p>
                </div>
                
                <div className="agenda-item">
                  <h3>Awards and Recognition</h3>
                  <p>
                    Recognition of members and partners who have made significant contributions to public health and NEPHA.
                  </p>
                </div>
                
                <div className="agenda-item">
                  <h3>Closing Remarks</h3>
                  <p>
                    Final remarks by the newly elected President and adjournment of the assembly.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Participation</h2>
              <p>
                All NEPHA members in good standing are eligible to attend the Annual General Assembly. Members are encouraged to participate actively in discussions, vote on important matters, and contribute to the organization's future direction.
              </p>
              
              <h2 className="section-title">Upcoming Assembly</h2>
              <p>
                <strong>Date:</strong> March 15, 2026<br />
                <strong>Location:</strong> Hotel Yak & Yeti, Kathmandu<br />
                <strong>Time:</strong> 10:00 AM - 4:00 PM
              </p>
              
              <h2 className="section-title">Registration</h2>
              <p>
                Advance registration is required for attendance. Members should register through our online portal by February 28, 2026. Lunch will be provided for all registered participants.
              </p>
              
              <h2 className="section-title">Proxy Voting</h2>
              <p>
                Members unable to attend in person may submit proxy votes for election of officers and board members. Proxy forms must be submitted by March 10, 2026.
              </p>
              
              <h2 className="section-title">Contact Information</h2>
              <p>
                For questions about the Annual General Assembly, please contact:
              </p>
              <p>
                Email: aga@nepha.org.np<br />
                Phone: +977-XXXXXXXXXX
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AnnualGeneralAssemblyPage;