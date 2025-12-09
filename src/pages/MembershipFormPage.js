import React from 'react';
import Layout from '../components/Layout';
import './MembershipFormPage.css';

const MembershipFormPage = () => {
  return (
    <Layout>
      <div className="membership-form-page">
        <div className="page-header">
          <div className="container">
            <h1>Membership Form</h1>
            <p>Join NEPHA to contribute to public health advancement in Nepal</p>
          </div>
        </div>
        
        <div className="container">
          <div className="form-content">
            <div className="form-section">
              <h2 className="section-title">Membership Application</h2>
              <p>
                Thank you for your interest in becoming a member of NEPHA. 
                Please complete the following application form to join our community.
              </p>
              
              <div className="form-container card">
                <h3>Apply for Membership</h3>
                <form className="membership-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="membershipType">Membership Type *</label>
                      <select id="membershipType" name="membershipType" required>
                        <option value="">Select Type</option>
                        <option value="individual">Individual</option>
                        <option value="student">Student</option>
                        <option value="institutional">Institutional</option>
                        <option value="retired">Retired Professional</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group half-width">
                      <label htmlFor="firstName">First Name *</label>
                      <input type="text" id="firstName" name="firstName" required />
                    </div>
                    
                    <div className="form-group half-width">
                      <label htmlFor="lastName">Last Name *</label>
                      <input type="text" id="lastName" name="lastName" required />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group half-width">
                      <label htmlFor="email">Email *</label>
                      <input type="email" id="email" name="email" required />
                    </div>
                    
                    <div className="form-group half-width">
                      <label htmlFor="phone">Phone *</label>
                      <input type="tel" id="phone" name="phone" required />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="address">Address *</label>
                      <input type="text" id="address" name="address" required />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group half-width">
                      <label htmlFor="city">City *</label>
                      <input type="text" id="city" name="city" required />
                    </div>
                    
                    <div className="form-group half-width">
                      <label htmlFor="province">Province *</label>
                      <select id="province" name="province" required>
                        <option value="">Select Province</option>
                        <option value="1">Province 1</option>
                        <option value="2">Province 2</option>
                        <option value="3">Bagmati</option>
                        <option value="4">Gandaki</option>
                        <option value="5">Lumbini</option>
                        <option value="6">Karnali</option>
                        <option value="7">Sudurpaschim</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group half-width">
                      <label htmlFor="occupation">Occupation *</label>
                      <input type="text" id="occupation" name="occupation" required />
                    </div>
                    
                    <div className="form-group half-width">
                      <label htmlFor="organization">Organization</label>
                      <input type="text" id="organization" name="organization" />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="qualification">Highest Qualification *</label>
                      <input type="text" id="qualification" name="qualification" required />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group half-width">
                      <label htmlFor="interestAreas">Public Health Interests *</label>
                      <input type="text" id="interestAreas" name="interestAreas" required />
                    </div>
                    
                    <div className="form-group half-width">
                      <label htmlFor="motivation">Why join NEPHA? *</label>
                      <input type="text" id="motivation" name="motivation" required />
                    </div>
                  </div>
                  
                  <div className="form-row checkbox-row">
                    <div className="form-group">
                      <label className="checkbox-label">
                        <input type="checkbox" name="newsletter" /> Receive NEPHA newsletter
                      </label>
                      <label className="checkbox-label">
                        <input type="checkbox" name="terms" required /> I agree to NEPHA terms *
                      </label>
                    </div>
                  </div>
                  
                  <div className="form-actions">
                    <button type="submit" className="btn primary">Submit Application</button>
                    <button type="reset" className="btn secondary">Reset</button>
                  </div>
                </form>
              </div>
              
              <div className="additional-info">
                <div className="info-card card">
                  <h3>Download Forms</h3>
                  <p>Prefer paper forms? Download our PDF application forms:</p>
                  <ul>
                    <li><a href="/downloads/individual-membership-form.pdf">Individual Membership</a></li>
                    <li><a href="/downloads/institutional-membership-form.pdf">Institutional Membership</a></li>
                    <li><a href="/downloads/student-membership-form.pdf">Student Membership</a></li>
                  </ul>
                </div>
                
                <div className="info-card card">
                  <h3>Payment Methods</h3>
                  <ul>
                    <li>Bank Transfer: Details upon request</li>
                    <li>Online Payment: Coming soon</li>
                    <li>Cash/Cheque: NEPHA Secretariat</li>
                  </ul>
                </div>
                
                <div className="info-card card">
                  <h3>Need Help?</h3>
                  <p>Email: membership@nepha.org.np<br />
                  Phone: +977-1-5449509<br />
                  Office Hours: Sun-Fri, 10AM-5PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MembershipFormPage;