import React from 'react';
import Layout from '../components/Layout';
import './AboutPage.css';

const MembershipInfoPage = () => {
  return (
    <Layout>
      <div className="about-page">
        <div className="page-header">
          <div className="container">
            <h1>Membership Info</h1>
            <p>Join Our Community of Public Health Professionals</p>
          </div>
        </div>
        
        <div className="container">
          <div className="about-content">
            <div className="about-section">
              <h2 className="section-title">Why Join NEPHA?</h2>
              <p>
                The Nepal Public Health Association (NEPHA) offers valuable opportunities for public health professionals to connect, learn, and contribute to improving health outcomes in Nepal. Membership provides numerous benefits that support your professional development and enable you to make a meaningful impact in the field of public health.
              </p>
              
              <h2 className="section-title">Membership Benefits</h2>
              <div className="benefits-grid">
                <div className="benefit-item">
                  <h3>Professional Development</h3>
                  <ul>
                    <li>Access to exclusive training programs and workshops</li>
                    <li>Continuing education opportunities</li>
                    <li>Certification courses in specialized areas</li>
                    <li>Access to our online learning platform</li>
                  </ul>
                </div>
                
                <div className="benefit-item">
                  <h3>Networking</h3>
                  <ul>
                    <li>Connect with over 1,000 public health professionals</li>
                    <li>Participate in regional and national conferences</li>
                    <li>Join special interest groups and committees</li>
                    <li>Access to our online member directory</li>
                  </ul>
                </div>
                
                <div className="benefit-item">
                  <h3>Resources and Publications</h3>
                  <ul>
                    <li>Subscription to our quarterly newsletter</li>
                    <li>Access to our digital library of public health resources</li>
                    <li>Discounts on conference registrations</li>
                    <li>Early access to research publications</li>
                  </ul>
                </div>
                
                <div className="benefit-item">
                  <h3>Advocacy and Influence</h3>
                  <ul>
                    <li>Participate in policy development processes</li>
                    <li>Contribute to national health initiatives</li>
                    <li>Voting rights in organizational matters</li>
                    <li>Opportunities to represent NEPHA in national forums</li>
                  </ul>
                </div>
              </div>
              
              <h2 className="section-title">Membership Categories</h2>
              <div className="membership-categories">
                <div className="category">
                  <h3>Student Membership</h3>
                  <p>
                    For students currently enrolled in public health or related programs. Includes access to basic resources and networking opportunities.
                  </p>
                  <p><strong>Annual Fee:</strong> NPR 500</p>
                </div>
                
                <div className="category">
                  <h3>Regular Membership</h3>
                  <p>
                    For professionals working in public health or related fields. Full access to all member benefits and services.
                  </p>
                  <p><strong>Annual Fee:</strong> NPR 2,000</p>
                </div>
                
                <div className="category">
                  <h3>Life Membership</h3>
                  <p>
                    One-time payment option for long-term commitment. Includes all regular membership benefits for life.
                  </p>
                  <p><strong>One-time Fee:</strong> NPR 25,000</p>
                </div>
                
                <div className="category">
                  <h3>Honorary Membership</h3>
                  <p>
                    Awarded to distinguished individuals who have made significant contributions to public health in Nepal.
                  </p>
                  <p><strong>Fee:</strong> No fee (by invitation only)</p>
                </div>
              </div>
              
              <h2 className="section-title">How to Apply</h2>
              <p>
                Becoming a member of NEPHA is simple:
              </p>
              
              <ol>
                <li>Complete the online membership application form</li>
                <li>Submit required documentation (educational certificates, ID proof)</li>
                <li>Pay the applicable membership fee</li>
                <li>Your application will be reviewed by our membership committee</li>
                <li>You will receive confirmation and membership materials</li>
              </ol>
              
              <h2 className="section-title">Member Responsibilities</h2>
              <p>
                As a NEPHA member, you are expected to:
              </p>
              
              <ul>
                <li>Adhere to our code of ethics and professional standards</li>
                <li>Participate in organizational activities when possible</li>
                <li>Contribute to the advancement of public health in Nepal</li>
                <li>Keep your contact information up to date</li>
                <li>Pay membership fees on time</li>
              </ul>
              
              <h2 className="section-title">Get Started Today</h2>
              <p>
                Ready to join our community of public health professionals? Visit our membership registration page to begin your application process today.
              </p>
              <p>
                For more information about membership, contact us at: membership@nepha.org.np
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MembershipInfoPage;