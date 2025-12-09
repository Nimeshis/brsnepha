import React from 'react';
import Layout from '../components/Layout';
import './EventsPage.css';

const SponsorPage = () => {
  return (
    <Layout>
      <div className="events-page">
        <div className="page-header">
          <div className="container">
            <h1>Sponsor</h1>
            <p>Support Nepal's Premier Public Health Conference</p>
          </div>
        </div>
        
        <div className="container">
          <div className="events-content">
            <div className="events-section">
              <h2 className="section-title">Become a Conference Sponsor</h2>
              <p>
                The Nepal Public Health Association (NEPHA) invites organizations and institutions to become sponsors for our annual conferences and special events. Your sponsorship support helps us deliver high-quality programs that advance public health knowledge and practice in Nepal.
              </p>
              
              <h2 className="section-title">Benefits of Sponsorship</h2>
              <div className="sponsor-benefits">
                <div className="benefit-category">
                  <h3>Visibility and Recognition</h3>
                  <ul>
                    <li>Logo placement on conference materials and website</li>
                    <li>Recognition in conference program and proceedings</li>
                    <li>Verbal acknowledgment during conference sessions</li>
                    <li>Social media mentions and press releases</li>
                  </ul>
                </div>
                
                <div className="benefit-category">
                  <h3>Networking Opportunities</h3>
                  <ul>
                    <li>Exclusive access to networking receptions</li>
                    <li>Opportunity to exhibit products or services</li>
                    <li>Meet and engage with public health professionals</li>
                    <li>Access to attendee contact information (with consent)</li>
                  </ul>
                </div>
                
                <div className="benefit-category">
                  <h3>Professional Development</h3>
                  <ul>
                    <li>Complimentary conference registrations</li>
                    <li>Access to conference presentations and materials</li>
                    <li>Opportunity to present case studies or research</li>
                    <li>Participation in special interest group meetings</li>
                  </ul>
                </div>
              </div>
              
              <h2 className="section-title">Sponsorship Levels</h2>
              
              <div className="sponsorship-levels">
                <div className="level">
                  <h3>Platinum Sponsor (NPR 200,000)</h3>
                  <ul>
                    <li>Prime logo placement on all materials</li>
                    <li>Keynote speaking opportunity</li>
                    <li>Dedicated exhibition space</li>
                    <li>10 complimentary conference registrations</li>
                    <li>Recognition in all press releases</li>
                  </ul>
                </div>
                
                <div className="level">
                  <h3>Gold Sponsor (NPR 100,000)</h3>
                  <ul>
                    <li>Prominent logo placement</li>
                    <li>Exhibition space</li>
                    <li>5 complimentary conference registrations</li>
                    <li>Name recognition in conference program</li>
                  </ul>
                </div>
                
                <div className="level">
                  <h3>Silver Sponsor (NPR 50,000)</h3>
                  <ul>
                    <li>Logo placement on conference materials</li>
                    <li>Small exhibition space</li>
                    <li>2 complimentary conference registrations</li>
                    <li>Listing in sponsor directory</li>
                  </ul>
                </div>
                
                <div className="level">
                  <h3>Bronze Sponsor (NPR 25,000)</h3>
                  <ul>
                    <li>Logo placement on website</li>
                    <li>Listing in conference program</li>
                    <li>1 complimentary conference registration</li>
                  </ul>
                </div>
              </div>
              
              <h2 className="section-title">Sponsorship Opportunities</h2>
              <p>
                We offer various targeted sponsorship opportunities that align with specific conference elements:
              </p>
              
              <ul>
                <li><strong>Lunch Sponsor:</strong> Brand visibility during meal times</li>
                <li><strong>Reception Sponsor:</strong> Exclusive networking event sponsorship</li>
                <li><strong>Student Support Sponsor:</strong> Funding for student attendance</li>
                <li><strong>Publication Sponsor:</strong> Support for conference proceedings</li>
                <li><strong>Technology Sponsor:</strong> AV equipment or platform support</li>
                <li><strong>Travel Grant Sponsor:</strong> Support for attendees from remote areas</li>
              </ul>
              
              <h2 className="section-title">How to Become a Sponsor</h2>
              <p>
                Interested in sponsoring our conference? Please contact our Sponsorship Coordinator:
              </p>
              <p>
                Email: sponsor@nepha.org.np<br />
                Phone: +977-XXXXXXXXXX
              </p>
              
              <h2 className="section-title">Tax Benefits</h2>
              <p>
                All sponsorship contributions are tax-deductible as per Nepalese tax laws. We will provide official receipts for all contributions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SponsorPage;