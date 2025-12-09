import React from 'react';
import Layout from '../components/Layout';
import './EventsPage.css';

const Registration2Page = () => {
  return (
    <Layout>
      <div className="events-page">
        <div className="page-header">
          <div className="container">
            <h1>Event Registration</h1>
            <p>Join Our Public Health Programs and Activities</p>
          </div>
        </div>
        
        <div className="container">
          <div className="events-content">
            <div className="events-section">
              <h2 className="section-title">Register for NEPHA Events</h2>
              <p>
                The Nepal Public Health Association (NEPHA) organizes various events throughout the year, including 
                conferences, workshops, training programs, and seminars. Registration for these events is essential 
                to ensure proper planning and to provide you with the best possible experience.
              </p>
              
              <div className="registration-types">
                <h3>Types of Events Requiring Registration</h3>
                <ul>
                  <li><strong>Annual Conference:</strong> Our flagship event featuring research presentations, keynote speakers, and networking opportunities</li>
                  <li><strong>Training Workshops:</strong> Intensive capacity-building sessions on specialized public health topics</li>
                  <li><strong>Regional Seminars:</strong> Focused discussions on region-specific public health challenges</li>
                  <li><strong>Webinars:</strong> Virtual learning sessions on emerging public health issues</li>
                  <li><strong>Special Programs:</strong> Thematic events, policy dialogues, and collaborative initiatives</li>
                </ul>
              </div>
              
              <div className="registration-process">
                <h3>Registration Process</h3>
                <ol>
                  <li><strong>Event Selection:</strong> Browse our events calendar to find programs of interest</li>
                  <li><strong>Registration Form:</strong> Complete the online registration form with personal and professional details</li>
                  <li><strong>Fee Payment:</strong> Pay applicable registration fees (members receive discounted rates)</li>
                  <li><strong>Confirmation:</strong> Receive registration confirmation with event details and logistics</li>
                  <li><strong>Preparation:</strong> Review pre-event materials and prepare for participation</li>
                </ol>
              </div>
              
              <div className="fee-structure">
                <h3>Registration Fee Structure</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Annual Conference</th>
                      <th>Workshops/Seminars</th>
                      <th>Webinars</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>NEPHA Members</td>
                      <td>NPR 2,000</td>
                      <td>NPR 1,000</td>
                      <td>Free</td>
                    </tr>
                    <tr>
                      <td>Students</td>
                      <td>NPR 1,000</td>
                      <td>NPR 500</td>
                      <td>Free</td>
                    </tr>
                    <tr>
                      <td>Non-Members</td>
                      <td>NPR 3,000</td>
                      <td>NPR 1,500</td>
                      <td>NPR 200</td>
                    </tr>
                    <tr>
                      <td>International Participants</td>
                      <td>USD 50</td>
                      <td>USD 30</td>
                      <td>USD 10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="important-policies">
                <h3>Important Policies</h3>
                <div className="policy-item">
                  <h4>Cancellation Policy</h4>
                  <p>
                    Cancellations received 14 days prior to the event will receive a full refund minus administrative fees. 
                    Cancellations within 14 days will receive a 50% refund. No refunds for no-shows.
                  </p>
                </div>
                
                <div className="policy-item">
                  <h4>Substitution Policy</h4>
                  <p>
                    Registrants may substitute another person from the same organization at any time before the event 
                    without additional charges.
                  </p>
                </div>
              </div>
              
              <div className="contact-info">
                <h3>Registration Support</h3>
                <p>
                  For assistance with event registration or questions about specific events, please contact our events team:
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

export default Registration2Page;