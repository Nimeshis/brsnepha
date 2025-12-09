import React from 'react';
import Layout from '../components/Layout';
import './EventsPage.css';

const OrganizingCommitteePage = () => {
  return (
    <Layout>
      <div className="events-page">
        <div className="page-header">
          <div className="container">
            <h1>Organizing Committee</h1>
            <p>Conference Organization Team</p>
          </div>
        </div>
        
        <div className="container">
          <div className="events-content">
            <div className="events-section">
              <h2 className="section-title">Conference Organizing Committee</h2>
              <p>
                The Nepal Public Health Association (NEPHA) conference organizing committee is responsible for planning, coordinating, and executing our annual public health conferences and special events. This dedicated team of volunteers works year-round to ensure our conferences provide exceptional value to attendees.
              </p>
              
              <h2 className="section-title">Committee Structure</h2>
              
              <div className="committee-structure">
                <div className="committee-role">
                  <h3>Chairperson</h3>
                  <p>
                    Provides overall leadership and direction for conference planning. Serves as the primary liaison between the organizing committee and NEPHA leadership.
                  </p>
                </div>
                
                <div className="committee-role">
                  <h3>Co-Chairpersons</h3>
                  <p>
                    Assist the Chairperson in overseeing conference preparations. Typically responsible for specific aspects such as academic program or logistics.
                  </p>
                </div>
                
                <div className="committee-role">
                  <h3>Secretary</h3>
                  <p>
                    Manages all correspondence, documentation, and communications for the organizing committee. Maintains records of meetings and decisions.
                  </p>
                </div>
                
                <div className="committee-role">
                  <h3>Treasurer</h3>
                  <p>
                    Oversees the financial aspects of conference planning, including budget development, expense tracking, and financial reporting.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Functional Subcommittees</h2>
              
              <div className="subcommittees">
                <div className="subcommittee">
                  <h3>Academic Program Committee</h3>
                  <p>
                    Responsible for developing the conference theme, selecting keynote speakers, reviewing abstract submissions, and organizing scientific sessions.
                  </p>
                </div>
                
                <div className="subcommittee">
                  <h3>Logistics and Operations Committee</h3>
                  <p>
                    Handles venue selection, accommodation arrangements, transportation, registration systems, and on-site conference operations.
                  </p>
                </div>
                
                <div className="subcommittee">
                  <h3>Marketing and Communications Committee</h3>
                  <p>
                    Develops promotional materials, manages social media presence, coordinates with media outlets, and handles public relations.
                  </p>
                </div>
                
                <div className="subcommittee">
                  <h3>Technology and Innovation Committee</h3>
                  <p>
                    Manages conference website, virtual participation platforms, audiovisual equipment, and technological innovations for enhanced attendee experience.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Volunteer Coordination</h2>
              <p>
                The organizing committee recruits and manages volunteers who assist with various aspects of conference delivery:
              </p>
              
              <ul>
                <li>Registration and information desks</li>
                <li>Session coordination and moderation</li>
                <li>Technical support</li>
                <li>Networking event facilitation</li>
                <li>Post-conference follow-up activities</li>
              </ul>
              
              <h2 className="section-title">Selection Process</h2>
              <p>
                Committee members are selected through a competitive process that considers:
              </p>
              
              <ul>
                <li>Relevant professional experience in public health</li>
                <li>Previous conference organization experience</li>
                <li>Commitment to volunteer time and effort</li>
                <li>Demonstrated leadership abilities</li>
                <li>Availability during the planning period</li>
              </ul>
              
              <h2 className="section-title">Terms and Responsibilities</h2>
              <p>
                Committee members typically serve two-year terms with the possibility of renewal. Key responsibilities include:
              </p>
              
              <ul>
                <li>Attending monthly committee meetings</li>
                <li>Completing assigned tasks according to established timelines</li>
                <li>Maintaining confidentiality of sensitive information</li>
                <li>Representing NEPHA professionally in all interactions</li>
                <li>Contributing ideas for continuous improvement</li>
              </ul>
              
              <h2 className="section-title">Get Involved</h2>
              <p>
                Interested in joining our organizing committee or volunteering for our next conference? We welcome dedicated professionals who are passionate about advancing public health in Nepal.
              </p>
              <p>
                Contact us at: organizing@nepha.org.np
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrganizingCommitteePage;