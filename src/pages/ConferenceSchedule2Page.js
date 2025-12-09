import React from 'react';
import Layout from '../components/Layout';
import './EventsPage.css';

const ConferenceSchedule2Page = () => {
  return (
    <Layout>
      <div className="events-page">
        <div className="page-header">
          <div className="container">
            <h1>Conference Schedule</h1>
            <p>Detailed Program Agenda and Timetable</p>
          </div>
        </div>
        
        <div className="container">
          <div className="events-content">
            <div className="events-section">
              <h2 className="section-title">Program Schedule</h2>
              <p>
                The Nepal Public Health Association (NEPHA) conference features a comprehensive program designed to 
                maximize learning, networking, and collaboration opportunities for all participants. Our schedule 
                balances plenary sessions, parallel presentations, interactive workshops, and networking events 
                to create an engaging and productive experience.
              </p>
              
              <div className="schedule-overview">
                <h3>Conference Day Overview</h3>
                <div className="day-schedule">
                  <h4>Day 1: Opening and Keynote Sessions</h4>
                  <ul>
                    <li>Registration and Welcome Coffee (8:00 AM - 9:00 AM)</li>
                    <li>Opening Ceremony and Welcome Addresses (9:00 AM - 10:00 AM)</li>
                    <li>Keynote Presentation: State of Public Health in Nepal (10:00 AM - 11:00 AM)</li>
                    <li>Morning Tea Break (11:00 AM - 11:30 AM)</li>
                    <li>Plenary Session: Health System Challenges (11:30 AM - 12:30 PM)</li>
                    <li>Lunch Break (12:30 PM - 2:00 PM)</li>
                    <li>Parallel Paper Presentations (Session A & B) (2:00 PM - 4:00 PM)</li>
                    <li>Afternoon Tea Break (4:00 PM - 4:30 PM)</li>
                    <li>Poster Session and Networking (4:30 PM - 6:00 PM)</li>
                  </ul>
                </div>
                
                <div className="day-schedule">
                  <h4>Day 2: Thematic Presentations and Workshops</h4>
                  <ul>
                    <li>Morning Reflection and Coffee (8:30 AM - 9:00 AM)</li>
                    <li>Keynote Presentation: Innovations in Public Health (9:00 AM - 10:00 AM)</li>
                    <li>Thematic Session 1: Non-Communicable Diseases (10:00 AM - 11:30 AM)</li>
                    <li>Morning Tea Break (11:30 AM - 12:00 PM)</li>
                    <li>Thematic Session 2: Environmental Health (12:00 PM - 1:30 PM)</li>
                    <li>Lunch Break (1:30 PM - 3:00 PM)</li>
                    <li>Interactive Workshops (3:00 PM - 5:00 PM)</li>
                    <li>Evening Cultural Program and Dinner (7:00 PM - 9:00 PM)</li>
                  </ul>
                </div>
                
                <div className="day-schedule">
                  <h4>Day 3: Policy Dialogues and Closing</h4>
                  <ul>
                    <li>Morning Coffee and Networking (8:30 AM - 9:00 AM)</li>
                    <li>Policy Dialogue: Federal Health System (9:00 AM - 11:00 AM)</li>
                    <li>Morning Tea Break (11:00 AM - 11:30 AM)</li>
                    <li>Panel Discussion: Future Directions (11:30 AM - 12:30 PM)</li>
                    <li>Lunch Break (12:30 PM - 2:00 PM)</li>
                    <li>Closing Plenary and Award Ceremony (2:00 PM - 3:30 PM)</li>
                    <li>Conference Concludes (3:30 PM)</li>
                  </ul>
                </div>
              </div>
              
              <div className="session-details">
                <h3>Session Details</h3>
                <div className="session-list">
                  <div className="session-item">
                    <h4>Parallel Paper Presentations</h4>
                    <p>
                      Presenters will have 12 minutes for their presentation followed by 3 minutes for questions. 
                      Sessions will be organized by thematic tracks to facilitate focused discussions.
                    </p>
                  </div>
                  
                  <div className="session-item">
                    <h4>Interactive Workshops</h4>
                    <p>
                      Hands-on learning experiences led by experts in specific methodologies, tools, or approaches. 
                      Limited seating; advance registration required.
                    </p>
                  </div>
                  
                  <div className="session-item">
                    <h4>Poster Session</h4>
                    <p>
                      Opportunity for researchers to display their work and engage in detailed discussions with 
                      interested participants. Posters will be displayed throughout the conference.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="logistics-info">
                <h3>Logistics Information</h3>
                <ul>
                  <li><strong>Venue:</strong> Conference Hall, Hotel Yak & Yeti, Kathmandu</li>
                  <li><strong>Registration Desk:</strong> Lobby Level, open 30 minutes before each day's program</li>
                  <li><strong>Materials Distribution:</strong> Available at the registration desk throughout the conference</li>
                  <li><strong>Technical Support:</strong> Dedicated tech support team available during presentation sessions</li>
                  <li><strong>Accommodation:</strong> Special rates available at the conference hotel and nearby properties</li>
                </ul>
              </div>
              
              <div className="special-events">
                <h3>Special Events</h3>
                <ul>
                  <li><strong>Welcome Reception:</strong> Evening of Day 1, 6:30 PM - 8:00 PM</li>
                  <li><strong>Cultural Program:</strong> Evening of Day 2, 7:00 PM - 9:00 PM</li>
                  <li><strong>Awards Ceremony:</strong> During closing session on Day 3</li>
                </ul>
              </div>
              
              <div className="contact-info">
                <h3>Schedule Changes and Inquiries</h3>
                <p>
                  While we endeavor to follow the published schedule, changes may occur due to unforeseen circumstances. 
                  Please check the conference app or notice boards for updates. For questions about the program schedule, 
                  contact our program coordinator:
                </p>
                <p>
                  Email: program@nepha.org.np<br />
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

export default ConferenceSchedule2Page;