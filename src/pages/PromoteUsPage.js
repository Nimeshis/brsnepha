import React from 'react';
import Layout from '../components/Layout';
import './EventsPage.css';

const PromoteUsPage = () => {
  return (
    <Layout>
      <div className="events-page">
        <div className="page-header">
          <div className="container">
            <h1>Promote NEPHA</h1>
            <p>Help Advance Public Health in Nepal</p>
          </div>
        </div>
        
        <div className="container">
          <div className="events-content">
            <div className="events-section">
              <h2 className="section-title">Spread the Word</h2>
              <p>
                The Nepal Public Health Association (NEPHA) relies on the support of individuals, organizations, 
                and communities to advance public health across Nepal. By promoting NEPHA's mission and activities, 
                you can help us reach more people and create greater impact in improving health outcomes for all.
              </p>
              
              <div className="promotion-opportunities">
                <h3>Ways to Promote NEPHA</h3>
                <div className="opportunity-list">
                  <div className="opportunity-item">
                    <h4>Social Media Advocacy</h4>
                    <p>
                      Share NEPHA's posts, events, and publications on your social media platforms. Follow us on 
                      Facebook, Twitter, and LinkedIn to stay updated and help amplify our message.
                    </p>
                  </div>
                  
                  <div className="opportunity-item">
                    <h4>Community Outreach</h4>
                    <p>
                      Introduce NEPHA to colleagues, students, and community members who might benefit from our 
                      programs and resources. Help us expand our network of public health advocates.
                    </p>
                  </div>
                  
                  <div className="opportunity-item">
                    <h4>Event Participation</h4>
                    <p>
                      Attend NEPHA conferences, workshops, and seminars, and encourage others to participate. 
                      Your presence and engagement help make our events more successful and impactful.
                    </p>
                  </div>
                  
                  <div className="opportunity-item">
                    <h4>Professional Networks</h4>
                    <p>
                      Recommend NEPHA to professional associations, academic institutions, and healthcare 
                      organizations that align with our mission and could benefit from collaboration.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="partnership-opportunities">
                <h3>Partnership Opportunities</h3>
                <p>
                  Organizations interested in partnering with NEPHA can explore various collaboration avenues:
                </p>
                <ul>
                  <li>Co-hosting public health events and conferences</li>
                  <li>Joint research initiatives and publications</li>
                  <li>Capacity building and training programs</li>
                  <li>Advocacy campaigns on shared public health priorities</li>
                  <li>Resource sharing and knowledge exchange</li>
                </ul>
              </div>
              
              <div className="awareness-campaigns">
                <h3>Awareness Campaigns</h3>
                <p>
                  Support NEPHA's public health awareness campaigns by:
                </p>
                <ul>
                  <li>Distributing educational materials in your community</li>
                  <li>Participating in health fairs and public events</li>
                  <li>Sharing campaign messages through your networks</li>
                  <li>Volunteering for campaign activities</li>
                  <li>Providing feedback on campaign effectiveness</li>
                </ul>
              </div>
              
              <div className="contact-info">
                <h3>Get Involved</h3>
                <p>
                  If you're interested in promoting NEPHA or exploring partnership opportunities, please contact our 
                  outreach team. We'd be happy to discuss how you can contribute to advancing public health in Nepal.
                </p>
                <p>
                  Email: outreach@nepha.org.np<br />
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

export default PromoteUsPage;