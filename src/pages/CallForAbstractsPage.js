import React from 'react';
import Layout from '../components/Layout';
import './EventsPage.css';

const CallForAbstractsPage = () => {
  return (
    <Layout>
      <div className="events-page">
        <div className="page-header">
          <div className="container">
            <h1>Call for Abstracts</h1>
            <p>Submit Your Research for NEPHA Conference</p>
          </div>
        </div>
        
        <div className="container">
          <div className="events-content">
            <div className="events-section">
              <h2 className="section-title">Call for Abstracts</h2>
              <p>
                The Nepal Public Health Association (NEPHA) invites researchers, practitioners, and scholars to submit abstracts for presentation at our upcoming conferences and events. We welcome contributions that advance knowledge and practice in public health in Nepal and the broader South Asian region.
              </p>
              
              <h2 className="section-title">Submission Guidelines</h2>
              
              <div className="guidelines">
                <div className="guideline-item">
                  <h3>Eligibility</h3>
                  <p>
                    Abstracts may be submitted by individuals or groups engaged in public health research, practice, or education. All submissions must represent original work that has not been published or presented elsewhere.
                  </p>
                </div>
                
                <div className="guideline-item">
                  <h3>Topics of Interest</h3>
                  <p>
                    We welcome abstracts on all aspects of public health, with particular interest in:
                  </p>
                  <ul>
                    <li>Epidemiology and disease surveillance</li>
                    <li>Health policy and systems research</li>
                    <li>Environmental and occupational health</li>
                    <li>Maternal and child health</li>
                    <li>Nutrition and food security</li>
                    <li>Infectious disease control</li>
                    <li>Mental health and substance abuse</li>
                    <li>Health equity and social determinants</li>
                    <li>Health education and promotion</li>
                    <li>Non-communicable diseases</li>
                    <li>Emergency preparedness and response</li>
                    <li>Digital health and innovation</li>
                  </ul>
                </div>
                
                <div className="guideline-item">
                  <h3>Abstract Format</h3>
                  <p>
                    Abstracts should follow this structure:
                  </p>
                  <ul>
                    <li>Title (maximum 20 words)</li>
                    <li>Authors and affiliations</li>
                    <li>Background/Objectives (1-2 sentences)</li>
                    <li>Methods (2-3 sentences)</li>
                    <li>Results (3-4 sentences)</li>
                    <li>Conclusions (1-2 sentences)</li>
                    <li>Keywords (3-5 terms)</li>
                  </ul>
                  <p>
                    Abstracts should be no more than 300 words and must be submitted in English.
                  </p>
                </div>
                
                <div className="guideline-item">
                  <h3>Presentation Types</h3>
                  <p>
                    We offer several presentation formats:
                  </p>
                  <ul>
                    <li><strong>Oral Presentation:</strong> 15-minute presentation with 5 minutes for questions</li>
                    <li><strong>Poster Presentation:</strong> Visual display of research with opportunity for discussion</li>
                    <li><strong>Panel Discussion:</strong> Participation in moderated discussions on key topics</li>
                  </ul>
                </div>
              </div>
              
              <h2 className="section-title">Submission Process</h2>
              <p>
                To submit an abstract, please follow these steps:
              </p>
              
              <ol>
                <li>Prepare your abstract according to the guidelines above</li>
                <li>Obtain approval from all co-authors</li>
                <li>Submit through our online abstract submission system</li>
                <li>Pay any applicable submission fees (waivers available for students)</li>
                <li>Receive confirmation of receipt</li>
              </ol>
              
              <h2 className="section-title">Important Dates</h2>
              
              <div class="dates">
                <p><strong>Abstract Submission Deadline:</strong> April 15, 2025</p>
                <p><strong>Notification of Acceptance:</strong> April 30, 2025</p>
                <p><strong>Final Abstract Submission (if required):</strong> May 10, 2025</p>
                <p><strong>Conference Dates:</strong> May 16-17, 2025</p>
              </div>
              
              <h2 className="section-title">Review Process</h2>
              <p>
                All abstracts undergo a peer review process by experts in relevant fields. Submissions are evaluated based on:
              </p>
              
              <ul>
                <li>Scientific rigor and methodology</li>
                <li>Originality and significance</li>
                <li>Clarity and organization</li>
                <li>Relevance to conference themes</li>
              </ul>
              
              <h2 className="section-title">Publication Opportunities</h2>
              <p>
                Selected abstracts may be published in the conference abstract book. Authors of accepted presentations may also be invited to submit full papers for consideration in the Nepal Journal of Public Health.
              </p>
              
              <h2 className="section-title">Contact Information</h2>
              <p>
                For questions about abstract submission, please contact:
              </p>
              <p>
                Email: abstracts@nepha.org.np<br />
                Phone: +977-XXXXXXXXXX
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CallForAbstractsPage;