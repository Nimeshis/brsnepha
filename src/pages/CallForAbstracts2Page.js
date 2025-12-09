import React from 'react';
import Layout from '../components/Layout';
import './EventsPage.css';

const CallForAbstracts2Page = () => {
  return (
    <Layout>
      <div className="events-page">
        <div className="page-header">
          <div className="container">
            <h1>Call for Abstracts</h1>
            <p>Share Your Research at NEPHA Events</p>
          </div>
        </div>
        
        <div className="container">
          <div className="events-content">
            <div className="events-section">
              <h2 className="section-title">Submit Your Research</h2>
              <p>
                The Nepal Public Health Association (NEPHA) invites researchers, practitioners, students, and 
                professionals to submit abstracts for presentation at our upcoming conferences and scientific 
                meetings. We welcome original research, case studies, and innovative practices that contribute 
                to advancing public health in Nepal and the region.
              </p>
              
              <div className="submission-guidelines">
                <h3>Abstract Submission Guidelines</h3>
                <div className="guideline-section">
                  <h4>Eligibility Criteria</h4>
                  <ul>
                    <li>Authors must be affiliated with a recognized institution or organization</li>
                    <li>Abstracts must report original, unpublished research or innovative practices</li>
                    <li>All authors must be listed with their affiliations and contact information</li>
                    <li>Submissions must be in English and follow the prescribed format</li>
                  </ul>
                </div>
                
                <div className="guideline-section">
                  <h4>Abstract Format Requirements</h4>
                  <ul>
                    <li>Structured abstract of 250-300 words</li>
                    <li>Title (not exceeding 15 words)</li>
                    <li>Author(s) name(s), affiliation(s), and email address(es)</li>
                    <li>Background, Methods, Results, and Conclusion sections</li>
                    <li>3-5 keywords</li>
                    <li>No tables, figures, or references in the abstract</li>
                  </ul>
                </div>
                
                <div className="guideline-section">
                  <h4>Submission Process</h4>
                  <ol>
                    <li>Prepare your abstract according to the guidelines</li>
                    <li>Complete the online submission form</li>
                    <li>Upload your abstract in the required format</li>
                    <li>Pay the submission fee (if applicable)</li>
                    <li>Receive confirmation of submission</li>
                  </ol>
                </div>
              </div>
              
              <div className="presentation-categories">
                <h3>Presentation Categories</h3>
                <div className="category-list">
                  <div className="category-item">
                    <h4>Oral Presentations</h4>
                    <p>
                      Selected abstracts will be presented as oral presentations in concurrent sessions. 
                      Each presentation will be allocated 12-15 minutes including discussion time.
                    </p>
                  </div>
                  
                  <div className="category-item">
                    <h4>Poster Presentations</h4>
                    <p>
                      Abstracts may be selected for poster presentation format. Poster presenters will 
                      have dedicated time to discuss their work with conference attendees.
                    </p>
                  </div>
                  
                  <div className="category-item">
                    <h4>Panel Discussions</h4>
                    <p>
                      Abstracts addressing policy or practice innovations may be incorporated into 
                      panel discussions with other related presentations.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="review-process">
                <h3>Review Process</h3>
                <p>
                  All submitted abstracts undergo a blind peer review process by experts in relevant 
                  subject areas. Review criteria include:
                </p>
                <ul>
                  <li>Scientific merit and originality</li>
                  <li>Relevance to public health in Nepal</li>
                  <li>Clarity of methodology and findings</li>
                  <li>Potential impact on policy or practice</li>
                  <li>Quality of presentation (for accepted abstracts)</li>
                </ul>
                <p>
                  Notification of acceptance will be sent to corresponding authors by the specified date.
                </p>
              </div>
              
              <div className="important-dates">
                <h3>Important Dates</h3>
                <ul>
                  <li><strong>Abstract Submission Deadline:</strong> [To be announced]</li>
                  <li><strong>Acceptance Notification:</strong> [To be announced]</li>
                  <li><strong>Final Presentation Submission:</strong> [To be announced]</li>
                  <li><strong>Conference Dates:</strong> [To be announced]</li>
                </ul>
              </div>
              
              <div className="contact-info">
                <h3>Submission Support</h3>
                <p>
                  For questions about abstract submission or technical issues with the submission system, 
                  please contact our scientific program committee:
                </p>
                <p>
                  Email: abstracts@nepha.org.np<br />
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

export default CallForAbstracts2Page;