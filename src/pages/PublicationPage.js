import React from 'react';
import Layout from '../components/Layout';
import './NewsPage.css';

const PublicationPage = () => {
  return (
    <Layout>
      <div className="news-page">
        <div className="page-header">
          <div className="container">
            <h1>Publication</h1>
            <p>Our Publications and Resources</p>
          </div>
        </div>
        
        <div className="container">
          <div className="news-content">
            <div className="news-section">
              <h2 className="section-title">NEPHA Publications</h2>
              <p>
                The Nepal Public Health Association (NEPHA) is committed to disseminating knowledge and research findings to advance public health in Nepal. Our publications serve as valuable resources for professionals, researchers, policymakers, and students in the field of public health.
              </p>
              
              <h2 className="section-title">Featured Publications</h2>
              <div className="publications-grid">
                <div className="publication-category">
                  <h3>Bidhan (Guidelines)</h3>
                  <p>
                    Comprehensive guidelines and protocols developed by NEPHA to standardize public health practices across Nepal. These documents provide evidence-based recommendations for various public health interventions.
                  </p>
                  <ul>
                    <li>Public Health Emergency Response Guidelines</li>
                    <li>Community Health Worker Training Manual</li>
                    <li>Infectious Disease Control Protocols</li>
                    <li>Maternal and Child Health Guidelines</li>
                  </ul>
                </div>
                
                <div className="publication-category">
                  <h3>Regulations</h3>
                  <p>
                    Official regulations and standards established by NEPHA to govern professional practice and organizational procedures. These documents ensure consistency and quality in public health services.
                  </p>
                  <ul>
                    <li>Code of Ethics for Public Health Professionals</li>
                    <li>Membership Regulations and Procedures</li>
                    <li>Conference and Event Organization Standards</li>
                    <li>Research and Publication Ethics</li>
                  </ul>
                </div>
                
                <div className="publication-category">
                  <h3>Bulletin</h3>
                  <p>
                    Our quarterly bulletin features recent developments, research findings, and updates in the field of public health in Nepal. Each issue includes articles from experts, case studies, and news from the organization.
                  </p>
                  <ul>
                    <li>Volume 15, Issue 3 (July-September 2024)</li>
                    <li>Volume 15, Issue 2 (April-June 2024)</li>
                    <li>Volume 15, Issue 1 (January-March 2024)</li>
                    <li>Volume 14, Issue 4 (October-December 2023)</li>
                  </ul>
                </div>
              </div>
              
              <h2 className="section-title">Research and Reports</h2>
              <p>
                NEPHA regularly publishes research findings and analytical reports on critical public health issues in Nepal:
              </p>
              
              <ul>
                <li>National Health Survey Reports</li>
                <li>Health System Performance Assessments</li>
                <li>Epidemiological Studies and Surveillance Reports</li>
                <li>Policy Analysis and Recommendations</li>
                <li>Program Evaluation Reports</li>
              </ul>
              
              <h2 className="section-title">Academic Journals</h2>
              <p>
                We support and collaborate with academic institutions to publish peer-reviewed journals focusing on public health in the Nepalese context:
              </p>
              
              <ul>
                <li>Nepal Journal of Public Health</li>
                <li>Journal of Health Sciences Research</li>
                <li>South Asian Public Health Review</li>
              </ul>
              
              <h2 className="section-title">Resource Library</h2>
              <p>
                Our digital resource library contains a wealth of materials including:
              </p>
              
              <ul>
                <li>Presentation slides from conferences and workshops</li>
                <li>Training manuals and educational materials</li>
                <li>Policy briefs and position papers</li>
                <li>Infographics and educational posters</li>
                <li>Video recordings of expert lectures</li>
              </ul>
              
              <h2 className="section-title">Access Our Publications</h2>
              <p>
                Many of our publications are available for free download to members and the general public. Visit our individual publication pages for specific documents:
              </p>
              
              <ul>
                <li><a href="/publication/bidhan">Bidhan (Guidelines)</a></li>
                <li><a href="/publication/regulation">Regulations</a></li>
                <li><a href="/publication/bulletine">Bulletin</a></li>
              </ul>
              
              <p>
                For more information about our publications or to submit content for consideration, please contact us at: publications@nepha.org.np
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PublicationPage;