import React from 'react';
import Layout from '../components/Layout';
import './EventsPage.css';

const RegistrationPage = () => {
  return (
    <Layout>
      <div className="events-page">
        <div className="page-header">
          <div className="container">
            <h1>Registration</h1>
            <p>Register for NEPHA Events</p>
          </div>
        </div>
        
        <div className="container">
          <div className="events-content">
            <div className="events-section">
              <h2 className="section-title">Event Registration</h2>
              <p>
                Register for upcoming Nepal Public Health Association (NEPHA) events, conferences, and workshops. Our events provide excellent opportunities for professional development, networking, and staying current with the latest developments in public health.
              </p>
              
              <h2 className="section-title">Upcoming Events</h2>
              
              <div className="upcoming-events">
                <div className="event">
                  <h3>Nepal Public Health Conference 2025</h3>
                  <p><strong>Date:</strong> May 16-17, 2025</p>
                  <p><strong>Location:</strong> Kathmandu, Nepal</p>
                  <p><strong>Registration Fee:</strong> Free for all participants</p>
                  <p><strong>Registration Deadline:</strong> April 30, 2025</p>
                  <p>
                    Join us for the premier public health event in Nepal, focusing on "Health System Challenges and Opportunities in the Federal Context."
                  </p>
                </div>
                
                <div className="event">
                  <h3>Winter Workshop on Epidemiology</h3>
                  <p><strong>Date:</strong> December 15-16, 2025</p>
                  <p><strong>Location:</strong> Pokhara, Nepal</p>
                  <p><strong>Registration Fee:</strong> NPR 2,000 (Members), NPR 3,000 (Non-members)</p>
                  <p><strong>Registration Deadline:</strong> November 30, 2025</p>
                  <p>
                    A specialized workshop covering advanced epidemiological methods and their application in Nepal's health context.
                  </p>
                </div>
                
                <div className="event">
                  <h3>Annual General Assembly</h3>
                  <p><strong>Date:</strong> March 15, 2026</p>
                  <p><strong>Location:</strong> Lalitpur, Nepal</p>
                  <p><strong>Registration Fee:</strong> Free for members, NPR 1,000 for non-members</p>
                  <p><strong>Registration Deadline:</strong> February 28, 2026</p>
                  <p>
                    Participate in NEPHA's Annual General Assembly to discuss organizational matters and future directions.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Registration Process</h2>
              <p>
                To register for NEPHA events, follow these simple steps:
              </p>
              
              <ol>
                <li>Review the event details and confirm your availability</li>
                <li>Complete the online registration form</li>
                <li>Pay the applicable registration fee (if any)</li>
                <li>Receive confirmation email with event details</li>
                <li>Attend the event and participate in sessions</li>
              </ol>
              
              <h2 className="section-title">Registration Categories</h2>
              
              <div className="registration-categories">
                <div className="category">
                  <h3>NEPHA Members</h3>
                  <p>
                    Enjoy discounted or free registration for all NEPHA events. 
                    <a href="/membership-info"> Learn more about membership benefits</a>.
                  </p>
                </div>
                
                <div className="category">
                  <h3>Students</h3>
                  <p>
                    Special reduced rates for students currently enrolled in public health or related programs. Valid student ID required.
                  </p>
                </div>
                
                <div className="category">
                  <h3>Public Health Professionals</h3>
                  <p>
                    Standard registration rate for professionals working in public health or related fields.
                  </p>
                </div>
                
                <div className="category">
                  <h3>General Public</h3>
                  <p>
                    Open registration for members of the general public interested in public health topics.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Cancellation Policy</h2>
              <p>
                Cancellations must be received in writing at least 14 days before the event to receive a refund. 
                Refunds will be processed minus a NPR 500 administrative fee. No refunds will be issued for 
                cancellations received less than 14 days before the event.
              </p>
              
              <h2 className="section-title">Contact Information</h2>
              <p>
                For registration inquiries, please contact:
              </p>
              <p>
                Email: registration@nepha.org.np<br />
                Phone: +977-XXXXXXXXXX
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RegistrationPage;