import React from 'react';
import Layout from '../components/Layout';
import './EventsPage.css';

const ConferenceSchedulePage = () => {
  return (
    <Layout>
      <div className="events-page">
        <div className="page-header">
          <div className="container">
            <h1>Conference Schedule</h1>
            <p>Comprehensive Timeline of NEPHA Events and Activities</p>
          </div>
        </div>
        
        <div className="container">
          <div className="events-content">
            <div className="events-section">
              <h2 className="section-title">Annual Conference Schedule</h2>
              <p>
                The Nepal Public Health Association (NEPHA) organizes a variety of conferences, seminars, workshops, 
                and training programs throughout the year. These events serve as platforms for knowledge sharing, 
                professional development, and collaborative action on public health issues in Nepal.
              </p>
              
              <div className="upcoming-events">
                <h3>Major Annual Events</h3>
                <div className="event-list">
                  <div className="event-item">
                    <h4>NEPHA Annual Conference</h4>
                    <p>
                      <strong>Timing:</strong> Usually held in mid-May<br />
                      <strong>Duration:</strong> 2-3 days<br />
                      <strong>Purpose:</strong> Main annual gathering of public health professionals to present research, 
                      discuss policy issues, and network
                    </p>
                  </div>
                  
                  <div className="event-item">
                    <h4>Public Health Training Workshop</h4>
                    <p>
                      <strong>Timing:</strong> Typically in September-October<br />
                      <strong>Duration:</strong> 3-5 days<br />
                      <strong>Purpose:</strong> Capacity building for members and public health practitioners on 
                      emerging topics and methodologies
                    </p>
                  </div>
                  
                  <div className="event-item">
                    <h4>Regional Public Health Seminars</h4>
                    <p>
                      <strong>Timing:</strong> Rotating schedule across provinces<br />
                      <strong>Duration:</strong> 1-2 days each<br />
                      <strong>Purpose:</strong> Address region-specific public health challenges and engage local stakeholders
                    </p>
                  </div>
                  
                  <div className="event-item">
                    <h4>Special Interest Group Meetings</h4>
                    <p>
                      <strong>Timing:</strong> Quarterly or as needed<br />
                      <strong>Duration:</strong> Half-day to full day<br />
                      <strong>Purpose:</strong> Focused discussions on specific public health topics such as 
                      environmental health, occupational health, or health equity
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="planning-calendar">
                <h3>Event Planning Calendar</h3>
                <p>
                  NEPHA follows a structured planning calendar to ensure effective organization and promotion of events:
                </p>
                <ul>
                  <li><strong>6 months prior:</strong> Concept development and initial planning</li>
                  <li><strong>4 months prior:</strong> Venue booking and speaker invitations</li>
                  <li><strong>3 months prior:</strong> Call for abstracts and early bird registration</li>
                  <li><strong>2 months prior:</strong> Final program development and logistics</li>
                  <li><strong>1 month prior:</strong> Final preparations and participant communications</li>
                  <li><strong>Post-event:</strong> Evaluation and follow-up activities</li>
                </ul>
              </div>
              
              <div className="participation-info">
                <h3>Participation Information</h3>
                <p>
                  Most NEPHA events are open to members and non-members alike. Members typically receive discounted 
                  registration rates. For information about specific events, including registration procedures, 
                  accommodation options, and travel arrangements, please check our events announcements or contact 
                  our events coordinator.
                </p>
                <p>
                  Email: events@nepha.org.np<br />
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

export default ConferenceSchedulePage;