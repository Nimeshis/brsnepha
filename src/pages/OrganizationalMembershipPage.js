import React from 'react';
import Layout from '../components/Layout';
import './MembershipPage.css';

const OrganizationalMembershipPage = () => {
  return (
    <Layout>
      <div className="membership-page">
        <div className="page-header">
          <div className="container">
            <h1>Organizational Membership</h1>
            <p>Partner with Nepal's Leading Public Health Organization</p>
          </div>
        </div>
        
        <div className="container">
          <div className="membership-content">
            <div className="membership-section">
              <h2 className="section-title">Organizational Membership Benefits</h2>
              <p>
                The Nepal Public Health Association (NEPHA) offers organizational membership opportunities for institutions, companies, and organizations that share our commitment to advancing public health in Nepal. This partnership provides valuable benefits for your organization while supporting our mission to improve health outcomes across the country.
              </p>
              
              <h2 className="section-title">Why Join as an Organizational Member?</h2>
              <p>
                Organizational membership with NEPHA demonstrates your commitment to public health and creates opportunities for meaningful collaboration with Nepal's leading public health professionals.
              </p>
              
              <div className="org-benefits">
                <div className="benefit-category">
                  <h3>Professional Networking</h3>
                  <ul>
                    <li>Connect with over 1,000 public health professionals</li>
                    <li>Access to exclusive networking events</li>
                    <li>Partnership opportunities with other organizations</li>
                    <li>Representation on relevant committees</li>
                  </ul>
                </div>
                
                <div className="benefit-category">
                  <h3>Visibility and Recognition</h3>
                  <ul>
                    <li>Listing in our organizational directory</li>
                    <li>Logo placement on our website and publications</li>
                    <li>Speaking opportunities at conferences and events</li>
                    <li>Recognition in our annual report</li>
                  </ul>
                </div>
                
                <div className="benefit-category">
                  <h3>Knowledge and Resources</h3>
                  <ul>
                    <li>Access to our research database and publications</li>
                    <li>Early notification of policy developments</li>
                    <li>Access to training materials and resources</li>
                    <li>Subscription to our quarterly newsletter</li>
                  </ul>
                </div>
                
                <div className="benefit-category">
                  <h3>Advocacy and Influence</h3>
                  <ul>
                    <li>Input on public health policy positions</li>
                    <li>Participation in advocacy campaigns</li>
                    <li>Voting rights on organizational matters</li>
                    <li>Opportunity to shape public health agenda</li>
                  </ul>
                </div>
              </div>
              
              <h2 className="section-title">Membership Categories</h2>
              
              <div className="membership-categories">
                <div className="category">
                  <h3>Academic Institution</h3>
                  <p>
                    For universities, colleges, and research institutions engaged in public health education and research.
                  </p>
                  <p><strong>Annual Fee:</strong> NPR 25,000</p>
                </div>
                
                <div className="category">
                  <h3>Healthcare Organization</h3>
                  <p>
                    For hospitals, clinics, and healthcare systems committed to public health improvement.
                  </p>
                  <p><strong>Annual Fee:</strong> NPR 30,000</p>
                </div>
                
                <div className="category">
                  <h3>NGO/Non-Profit</h3>
                  <p>
                    For non-governmental organizations working in health and development sectors.
                  </p>
                  <p><strong>Annual Fee:</strong> NPR 20,000</p>
                </div>
                
                <div className="category">
                  <h3>Corporate Partner</h3>
                  <p>
                    For private sector companies supporting public health initiatives.
                  </p>
                  <p><strong>Annual Fee:</strong> NPR 50,000</p>
                </div>
              </div>
              
              <h2 className="section-title">Organizational Membership Process</h2>
              <p>
                Becoming an organizational member of NEPHA is straightforward:
              </p>
              
              <ol>
                <li>Complete the organizational membership application form</li>
                <li>Submit required documentation (registration certificate, etc.)</li>
                <li>Designate an organizational representative</li>
                <li>Pay the applicable membership fee</li>
                <li>Your application will be reviewed by our membership committee</li>
                <li>Receive confirmation and membership materials</li>
              </ol>
              
              <h2 className="section-title">Organizational Responsibilities</h2>
              <p>
                As an organizational member, you are expected to:
              </p>
              
              <ul>
                <li>Support NEPHA's mission and objectives</li>
                <li>Designate a representative to participate in activities</li>
                <li>Maintain good standing in the public health community</li>
                <li>Pay membership fees on time</li>
                <li>Abide by our code of ethics and organizational policies</li>
              </ul>
              
              <h2 className="section-title">Contact Information</h2>
              <p>
                For more information about organizational membership, please contact:
              </p>
              <p>
                Email: org.membership@nepha.org.np<br />
                Phone: +977-XXXXXXXXXX
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrganizationalMembershipPage;