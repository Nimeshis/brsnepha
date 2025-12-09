import React from 'react';
import Layout from '../components/Layout';
import './IndividualMembershipFormPage.css';

const IndividualMembershipFormPage = () => {
  return (
    <Layout>
      <div className="individual-membership-form-page">
        <div className="page-header">
          <div className="container">
            <h1>Individual Membership</h1>
            <p>Join NEPHA to advance public health in Nepal</p>
          </div>
        </div>
        
        <div className="container">
          <div className="form-content">
            <div className="form-section">
              <h2 className="section-title">Become an Individual Member</h2>
              <p>
                The Nepal Public Health Association (NEPHA) welcomes public health professionals, researchers, 
                students, and practitioners to join as individual members. Membership provides numerous benefits 
                including networking opportunities, professional development resources, and access to exclusive 
                publications and events.
              </p>
              
              <div className="benefit-card">
                <h3>Membership Benefits</h3>
                <ul>
                  <li>Participation in annual conferences and workshops</li>
                  <li>Access to exclusive publications and research</li>
                  <li>Networking with public health professionals across Nepal</li>
                  <li>Opportunities for professional development</li>
                  <li>Involvement in advocacy for public health issues</li>
                  <li>Access to NEPHA's resource library</li>
                  <li>Discounted registration fees for events</li>
                  <li>Eligibility for awards and recognition</li>
                </ul>
              </div>
              
              <div className="requirement-card">
                <h3>Eligibility Requirements</h3>
                <p>
                  Individual membership is open to anyone interested in advancing public health in Nepal. 
                  Applicants should have a background in public health, medicine, social sciences, or a 
                  related field, or demonstrate a commitment to public health practice or research.
                </p>
                
                <h4>Required Documentation</h4>
                <ul>
                  <li>Completed membership application form</li>
                  <li>Copy of citizenship or passport</li>
                  <li>Recent passport-sized photograph</li>
                  <li>Professional CV or resume</li>
                  <li>Academic qualifications and certificates</li>
                  <li>Two references from current NEPHA members (if available)</li>
                </ul>
              </div>
              
              <div className="fee-card">
                <h3>Membership Fees</h3>
                <ul>
                  <li><strong>Regular Membership:</strong> NPR 1,000 per year</li>
                  <li><strong>Student Membership:</strong> NPR 500 per year</li>
                  <li><strong>Retired Professionals:</strong> NPR 500 per year</li>
                </ul>
                <p>
                  Fees can be paid annually, biennially (NPR 1,800), or triennially (NPR 2,500) for savings.
                </p>
              </div>
              
              <div className="process-card">
                <h3>Application Process</h3>
                <ol>
                  <li>Complete the online application form or download PDF form</li>
                  <li>Attach all required documents</li>
                  <li>Submit application with payment to NEPHA Secretariat</li>
                  <li>Application review by Membership Committee (2-3 weeks)</li>
                  <li>Notification of acceptance and welcome package</li>
                </ol>
              </div>
              
              <div className="contact-card">
                <h3>Contact Information</h3>
                <p>
                  For questions about membership or assistance with the application process:
                </p>
                <p>
                  Email: membership@nepha.org.np<br />
                  Phone: +977-1-5449509<br />
                  Address: NEPHA Secretariat, Kathmandu, Nepal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndividualMembershipFormPage;