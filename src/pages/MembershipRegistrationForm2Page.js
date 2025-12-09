import React from 'react';
import Layout from '../components/Layout';
import './MembershipPage.css';

const MembershipRegistrationForm2Page = () => {
  return (
    <Layout>
      <div className="membership-page">
        <div className="page-header">
          <div className="container">
            <h1>Membership Registration Form</h1>
            <p>Join NEPHA to advance public health in Nepal</p>
          </div>
        </div>
        
        <div className="container">
          <div className="membership-content">
            <div className="membership-section">
              <h2 className="section-title">Become a Member</h2>
              <p>
                The Nepal Public Health Association (NEPHA) welcomes professionals dedicated to advancing public health in Nepal. 
                As a member, you'll gain access to networking opportunities, professional development resources, and a platform to 
                contribute to public health policy and practice.
              </p>
              
              <div className="membership-benefits">
                <h3>Membership Benefits</h3>
                <ul>
                  <li>Participation in conferences, workshops, and seminars</li>
                  <li>Access to exclusive publications and research</li>
                  <li>Networking with public health professionals across Nepal</li>
                  <li>Opportunities for professional development and capacity building</li>
                  <li>Involvement in advocacy for public health issues</li>
                  <li>Access to NEPHA's resource library and databases</li>
                </ul>
              </div>
              
              <div className="membership-types">
                <h3>Membership Categories</h3>
                <ul>
                  <li><strong>Regular Membership:</strong> For public health professionals and practitioners</li>
                  <li><strong>Student Membership:</strong> For students pursuing public health or related fields</li>
                  <li><strong>Institutional Membership:</strong> For organizations and institutions</li>
                  <li><strong>Honorary Membership:</strong> By special invitation for distinguished contributions</li>
                </ul>
              </div>
              
              <div className="registration-info">
                <h3>How to Register</h3>
                <p>
                  To become a member of NEPHA, please complete the registration form below and submit it along with the 
                  required documentation and membership fee. Our membership team will review your application and contact 
                  you upon approval.
                </p>
                
                <div className="form-section">
                  <h4>Required Documents</h4>
                  <ul>
                    <li>Completed membership application form</li>
                    <li>Copy of citizenship or passport</li>
                    <li>Recent passport-sized photograph</li>
                    <li>Professional CV or resume</li>
                    <li>Academic qualifications and certificates</li>
                    <li>Membership fee payment receipt</li>
                  </ul>
                </div>
              </div>
              
              <div className="contact-info">
                <h3>Contact Information</h3>
                <p>
                  For questions about membership or assistance with the registration process, please contact our membership team:
                </p>
                <p>Email: membership@nepha.org.np<br />
                Phone: +977-1-5449509</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MembershipRegistrationForm2Page;