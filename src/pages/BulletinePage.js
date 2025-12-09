import React from 'react';
import Layout from '../components/Layout';
import './NewsPage.css';

const BulletinePage = () => {
  return (
    <Layout>
      <div className="news-page">
        <div className="page-header">
          <div className="container">
            <h1>NEPHA Bulletin</h1>
            <p>Stay Informed with Our Regular Publications</p>
          </div>
        </div>
        
        <div className="container">
          <div className="news-content">
            <div className="news-section">
              <h2 className="section-title">About the Bulletin</h2>
              <p>
                The Nepal Public Health Association (NEPHA) Bulletin is a regular publication that keeps our members 
                and the broader public health community informed about our activities, achievements, and developments 
                in the field of public health in Nepal. Published quarterly, the bulletin features articles from 
                members, updates on our programs, and insights on current public health issues.
              </p>
              
              <div className="bulletin-content">
                <h3>Typical Bulletin Contents</h3>
                <div className="content-list">
                  <div className="content-item">
                    <h4>President's Message</h4>
                    <p>
                      Insights and perspectives from NEPHA's leadership on organizational developments and key 
                      public health issues of the time.
                    </p>
                  </div>
                  
                  <div className="content-item">
                    <h4>Member Spotlights</h4>
                    <p>
                      Features on outstanding members, their achievements, and contributions to public health 
                      practice and research in Nepal.
                    </p>
                  </div>
                  
                  <div className="content-item">
                    <h4>Program Updates</h4>
                    <p>
                      News and updates on NEPHA's ongoing programs, projects, and initiatives, including 
                      conference reports and workshop summaries.
                    </p>
                  </div>
                  
                  <div className="content-item">
                    <h4>Research Highlights</h4>
                    <p>
                      Summaries of recent research conducted by members or relevant to Nepal's public health context, 
                      highlighting implications for policy and practice.
                    </p>
                  </div>
                  
                  <div className="content-item">
                    <h4>Policy Watch</h4>
                    <p>
                      Analysis of new policies, guidelines, or regulatory changes affecting public health in Nepal 
                      and NEPHA's response or position on these issues.
                    </p>
                  </div>
                  
                  <div className="content-item">
                    <h4>Upcoming Events</h4>
                    <p>
                      Calendar of upcoming conferences, workshops, training opportunities, and other events 
                      organized by NEPHA or of interest to our members.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="access-information">
                <h3>Accessing the Bulletin</h3>
                <p>
                  NEPHA Bulletin is distributed free to all members. Non-members can subscribe to receive the 
                  bulletin electronically. Back issues are available in our <a href="/archives">publication archives</a>.
                </p>
                
                <div className="subscription-info">
                  <h4>Subscription Information</h4>
                  <p>
                    To subscribe to the NEPHA Bulletin or for inquiries about distribution, please contact our 
                    publications team:
                  </p>
                  <p>
                    Email: publications@nepha.org.np<br />
                    Phone: +977-1-5449509
                  </p>
                </div>
              </div>
              
              <div className="contribution-guidelines">
                <h3>Contributing to the Bulletin</h3>
                <p>
                  We welcome contributions from members and public health professionals. The bulletin accepts:
                </p>
                <ul>
                  <li>Short articles (500-1000 words) on public health topics</li>
                  <li>Conference or event reports</li>
                  <li>Book reviews relevant to public health</li>
                  <li>Letters to the editor</li>
                  <li>Photographs from NEPHA events</li>
                </ul>
                <p>
                  For submission guidelines and deadlines, please contact our editorial team at 
                  bulletin@nepha.org.np
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BulletinePage;