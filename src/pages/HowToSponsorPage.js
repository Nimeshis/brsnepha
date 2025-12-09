import React from 'react';
import Layout from '../components/Layout';
import './EventsPage.css';

const HowToSponsorPage = () => {
  return (
    <Layout>
      <div className="events-page">
        <div className="page-header">
          <div className="container">
            <h1>How to Sponsor</h1>
            <p>Partner with Us to Advance Public Health in Nepal</p>
          </div>
        </div>
        
        <div className="container">
          <div className="events-content">
            <div className="events-section">
              <h2 className="section-title">Sponsorship Opportunities</h2>
              <p>
                The Nepal Public Health Association (NEPHA) offers various sponsorship opportunities for organizations 
                and individuals who share our commitment to improving public health in Nepal. Your support enables us 
                to conduct vital conferences, training programs, research initiatives, and advocacy campaigns that 
                benefit communities across the country.
              </p>
              
              <div className="sponsorship-benefits">
                <h3>Benefits of Sponsoring NEPHA</h3>
                <ul>
                  <li><strong>Corporate Social Responsibility:</strong> Demonstrate your organization's commitment to public health and social welfare</li>
                  <li><strong>Brand Visibility:</strong> Prominent recognition in conference materials, websites, and promotional activities</li>
                  <li><strong>Networking Opportunities:</strong> Connect with public health professionals, researchers, and policymakers</li>
                  <li><strong>Targeted Audience Access:</strong> Reach a specialized audience of health professionals and decision-makers</li>
                  <li><strong>Tax Benefits:</strong> Contributions may qualify for tax deductions as charitable donations</li>
                  <li><strong>Impact Measurement:</strong> Direct contribution to improving health outcomes in Nepal</li>
                </ul>
              </div>
              
              <div className="sponsorship-packages">
                <h3>Sponsorship Package Options</h3>
                <div className="package-list">
                  <div className="package-item">
                    <h4>Title Sponsor (NPR 500,000)</h4>
                    <ul>
                      <li>Exclusive naming rights for the conference or event</li>
                      <li>Prominent logo placement on all materials and signage</li>
                      <li>Speaking opportunity during opening/closing ceremonies</li>
                      <li>Complimentary registration for 10 delegates</li>
                      <li>Dedicated exhibition booth space</li>
                      <li>Social media mentions and press coverage</li>
                    </ul>
                  </div>
                  
                  <div className="package-item">
                    <h4>Platinum Sponsor (NPR 300,000)</h4>
                    <ul>
                      <li>Logo placement on conference materials and website</li>
                      <li>Recognition in opening/closing remarks</li>
                      <li>Complimentary registration for 5 delegates</li>
                      <li>Prominent exhibition booth space</li>
                      <li>Social media mentions</li>
                      <li>Listing in conference program and proceedings</li>
                    </ul>
                  </div>
                  
                  <div className="package-item">
                    <h4>Gold Sponsor (NPR 150,000)</h4>
                    <ul>
                      <li>Logo placement on conference materials</li>
                      <li>Complimentary registration for 3 delegates</li>
                      <li>Standard exhibition booth space</li>
                      <li>Website listing</li>
                      <li>Name recognition in conference program</li>
                    </ul>
                  </div>
                  
                  <div className="package-item">
                    <h4>Silver Sponsor (NPR 75,000)</h4>
                    <ul>
                      <li>Logo placement on conference website</li>
                      <li>Complimentary registration for 2 delegates</li>
                      <li>Small exhibition booth space</li>
                      <li>Name listing in conference program</li>
                    </ul>
                  </div>
                  
                  <div className="package-item">
                    <h4>Supporting Sponsor (NPR 25,000)</h4>
                    <ul>
                      <li>Name listing in conference materials</li>
                      <li>Complimentary registration for 1 delegate</li>
                      <li>Name recognition in conference program</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="custom-sponsorship">
                <h3>Custom Sponsorship Arrangements</h3>
                <p>
                  We offer flexible sponsorship packages that can be tailored to meet specific organizational 
                  objectives and budgets. Custom arrangements may include:
                </p>
                <ul>
                  <li>Sponsorship of specific conference sessions or activities</li>
                  <li>Support for student scholarships or travel grants</li>
                  <li>Funding for research initiatives or publications</li>
                  <li>Partnership in training programs or workshops</li>
                  <li>Support for regional or thematic programs</li>
                </ul>
              </div>
              
              <div className="sponsorship-process">
                <h3>Sponsorship Process</h3>
                <ol>
                  <li><strong>Initial Contact:</strong> Reach out to our sponsorship team to express interest</li>
                  <li><strong>Discussion:</strong> We'll discuss your objectives and suitable opportunities</li>
                  <li><strong>Proposal:</strong> We'll prepare a customized sponsorship proposal</li>
                  <li><strong>Agreement:</strong> Formalize the partnership through a sponsorship agreement</li>
                  <li><strong>Implementation:</strong> Execute the agreed-upon sponsorship activities</li>
                  <li><strong>Recognition:</strong> Acknowledge your contribution during the event</li>
                  <li><strong>Reporting:</strong> Provide post-event impact report and outcomes</li>
                </ol>
              </div>
              
              <div className="contact-info">
                <h3>Contact Our Sponsorship Team</h3>
                <p>
                  For information about sponsorship opportunities or to discuss custom arrangements, please 
                  contact our development and partnerships team:
                </p>
                <p>
                  Email: sponsorship@nepha.org.np<br />
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

export default HowToSponsorPage;