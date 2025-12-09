import React from 'react';
import Layout from '../components/Layout';
import './EventsPage.css';

const FaqPage = () => {
  return (
    <Layout>
      <div className="events-page">
        <div className="page-header">
          <div className="container">
            <h1>FAQ</h1>
            <p>Frequently Asked Questions</p>
          </div>
        </div>
        
        <div className="container">
          <div className="events-content">
            <div className="events-section">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p>
                Welcome to the Nepal Public Health Association (NEPHA) Frequently Asked Questions section. Here you'll find answers to common questions about our organization, membership, events, and publications.
              </p>
              
              <h2 className="section-title">General Questions</h2>
              
              <div className="faq-section">
                <div className="faq-item">
                  <h3>What is NEPHA?</h3>
                  <p>
                    The Nepal Public Health Association (NEPHA) is a non-governmental, non-profit organization established in 1989 to unite public health professionals in Nepal. Our mission is to enhance professional capabilities and promote quality, people-centered healthcare services across the country.
                  </p>
                </div>
                
                <div className="faq-item">
                  <h3>How can I become a member?</h3>
                  <p>
                    You can become a member by visiting our <a href="/membership-info">Membership Information</a> page and completing the application process. We offer several membership categories including Student, Regular, Life, and Honorary memberships.
                  </p>
                </div>
                
                <div className="faq-item">
                  <h3>What are the benefits of membership?</h3>
                  <p>
                    NEPHA members enjoy numerous benefits including access to professional development opportunities, networking with over 1,000 public health professionals, discounts on conference registrations, and early access to research publications. Visit our <a href="/membership-info">Membership Information</a> page for a complete list of benefits.
                  </p>
                </div>
                
                <div className="faq-item">
                  <h3>Where is NEPHA located?</h3>
                  <p>
                    Our national office is located in Lalitpur, Nepal. We also have provincial chapters in all seven provinces of Nepal to better serve our members across the country.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Events and Conferences</h2>
              
              <div className="faq-section">
                <div className="faq-item">
                  <h3>How do I register for NEPHA events?</h3>
                  <p>
                    Event registration information is available on our <a href="/registration">Registration</a> page. Most of our events offer online registration, and members typically receive discounted rates.
                  </p>
                </div>
                
                <div className="faq-item">
                  <h3>What is the Nepal Public Health Conference?</h3>
                  <p>
                    Our annual Nepal Public Health Conference is the premier public health event in the country, bringing together professionals, researchers, and policymakers to discuss critical health issues. The 2025 conference will be held on May 16-17 in Kathmandu.
                  </p>
                </div>
                
                <div className="faq-item">
                  <h3>Can I present at NEPHA conferences?</h3>
                  <p>
                    Yes, we welcome abstract submissions for oral and poster presentations. Information about submission deadlines and requirements can be found on our <a href="/call-for-abstracts">Call for Abstracts</a> page.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Publications</h2>
              
              <div className="faq-section">
                <div className="faq-item">
                  <h3>What publications does NEPHA produce?</h3>
                  <p>
                    NEPHA publishes the Nepal Journal of Public Health, a bi-annual bulletin, and various guidelines and regulations. More information is available on our <a href="/publication">Publications</a> page.
                  </p>
                </div>
                
                <div className="faq-item">
                  <h3>How can I submit an article for publication?</h3>
                  <p>
                    Manuscript submission guidelines are available on our <a href="/manuscript-submission-guideline">Manuscript Submission Guidelines</a> page. All submissions undergo a rigorous peer-review process.
                  </p>
                </div>
                
                <div className="faq-item">
                  <h3>Are NEPHA publications available online?</h3>
                  <p>
                    Yes, many of our publications are available in digital format through our website. Some resources are freely accessible, while others are available to members only.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Membership and Dues</h2>
              
              <div className="faq-section">
                <div className="faq-item">
                  <h3>How much does membership cost?</h3>
                  <p>
                    Membership fees vary by category: Student (NPR 500/year), Regular (NPR 2,000/year), and Life (NPR 25,000 one-time). Detailed information is available on our <a href="/membership-info">Membership Information</a> page.
                  </p>
                </div>
                
                <div className="faq-item">
                  <h3>How do I renew my membership?</h3>
                  <p>
                    Membership renewal notices are sent to members before their expiration date. You can renew online through our membership portal or by contacting our membership coordinator at membership@nepha.org.np.
                  </p>
                </div>
                
                <div className="faq-item">
                  <h3>What happens if my membership expires?</h3>
                  <p>
                    Expired memberships can be reinstated by paying any outstanding dues plus a late fee. However, some member benefits may be restricted until renewal is complete.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Contact Information</h2>
              <p>
                If you have questions that aren't answered here, please contact us:
              </p>
              <p>
                Email: info@nepha.org.np<br />
                Phone: +977-XXXXXXXXXX<br />
                Address: Lalitpur, Nepal
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FaqPage;