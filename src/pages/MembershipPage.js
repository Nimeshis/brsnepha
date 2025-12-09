import React from 'react';
import Layout from '../components/Layout';
import './MembershipPage.css';

const MembershipPage = () => {
  return (
    <Layout>
      <div className="membership-page">
        <div className="container">
          <h1>Individual Membership</h1>
          <div className="membership-content">
            <p>
              Join our community of public health professionals dedicated to improving healthcare in Nepal.
            </p>
            
            <div className="benefits-section">
              <h2 className="section-title">Benefits of Membership</h2>
              <ul>
                <li>Participation in public health initiatives and programs</li>
                <li>Networking opportunities with public health professionals across Nepal</li>
                <li>Access to exclusive resources and publications</li>
                <li>Opportunities for professional development and training</li>
                <li>Advocacy for better public health policies and practices</li>
                <li>Discounts on conferences and events</li>
              </ul>
            </div>
            
            <div className="membership-form">
              <h2 className="section-title">Membership Registration</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="Enter your full name" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="Enter your email" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" placeholder="Enter your phone number" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="profession">Profession</label>
                  <input type="text" id="profession" placeholder="Enter your profession" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="organization">Organization</label>
                  <input type="text" id="organization" placeholder="Enter your organization" />
                </div>
                
                <button type="submit" className="btn primary">Submit Application</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MembershipPage;