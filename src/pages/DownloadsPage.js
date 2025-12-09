import React from 'react';
import Layout from '../components/Layout';
import './AboutPage.css';

const DownloadsPage = () => {
  return (
    <Layout>
      <div className="about-page">
        <div className="page-header">
          <div className="container">
            <h1>Downloads</h1>
            <p>Downloadable Resources</p>
          </div>
        </div>
        
        <div className="container">
          <div className="about-content">
            <div className="about-section">
              <h2 className="section-title">Resource Library</h2>
              <p>
                The Nepal Public Health Association (NEPHA) provides a variety of downloadable resources for public health professionals, researchers, students, and the general public. These materials include publications, guidelines, reports, and educational resources.
              </p>
              
              <h2 className="section-title">Publications</h2>
              
              <div className="downloads-category">
                <div className="download-item">
                  <h3>Nepal Journal of Public Health - Volume 15, Issue 2</h3>
                  <p>
                    April-June 2024 edition featuring research articles on maternal health, infectious diseases, and health policy.
                  </p>
                  <a href="#" className="download-link">Download PDF (2.4 MB)</a>
                </div>
                
                <div className="download-item">
                  <h3>Nepal Journal of Public Health - Volume 15, Issue 1</h3>
                  <p>
                    January-March 2024 edition with studies on environmental health, nutrition, and health systems research.
                  </p>
                  <a href="#" className="download-link">Download PDF (2.1 MB)</a>
                </div>
                
                <div className="download-item">
                  <h3>Annual Report 2023</h3>
                  <p>
                    Comprehensive overview of NEPHA's activities, achievements, and financial statements for 2023.
                  </p>
                  <a href="#" className="download-link">Download PDF (1.8 MB)</a>
                </div>
              </div>
              
              <h2 className="section-title">Guidelines and Protocols</h2>
              
              <div className="downloads-category">
                <div className="download-item">
                  <h3>Public Health Emergency Response Guidelines</h3>
                  <p>
                    Comprehensive guidelines for responding to public health emergencies including outbreak investigation, risk communication, and resource mobilization.
                  </p>
                  <a href="#" className="download-link">Download PDF (1.2 MB)</a>
                </div>
                
                <div className="download-item">
                  <h3>Community Health Worker Training Manual</h3>
                  <p>
                    Detailed training manual for community health workers covering essential public health concepts and practical skills.
                  </p>
                  <a href="#" className="download-link">Download PDF (3.5 MB)</a>
                </div>
                
                <div className="download-item">
                  <h3>Infectious Disease Control Protocols</h3>
                  <p>
                    Standard protocols for prevention, detection, and control of priority infectious diseases in Nepal.
                  </p>
                  <a href="#" className="download-link">Download PDF (2.0 MB)</a>
                </div>
                
                <div className="download-item">
                  <h3>Maternal and Child Health Guidelines</h3>
                  <p>
                    Evidence-based guidelines for maternal and child health services including antenatal care, immunization, and nutrition.
                  </p>
                  <a href="#" className="download-link">Download PDF (1.7 MB)</a>
                </div>
              </div>
              
              <h2 className="section-title">Reports and Research</h2>
              
              <div className="downloads-category">
                <div className="download-item">
                  <h3>National Health Survey 2023 Summary Report</h3>
                  <p>
                    Key findings from the 2023 National Health Survey covering health indicators, service coverage, and health equity.
                  </p>
                  <a href="#" className="download-link">Download PDF (4.2 MB)</a>
                </div>
                
                <div className="download-item">
                  <h3>Health System Performance Assessment 2023</h3>
                  <p>
                    Comprehensive assessment of Nepal's health system performance including strengths, weaknesses, and recommendations.
                  </p>
                  <a href="#" className="download-link">Download PDF (3.1 MB)</a>
                </div>
                
                <div className="download-item">
                  <h3>Epidemiological Surveillance Report - 2023</h3>
                  <p>
                    Annual report on disease surveillance data and trends in Nepal for 2023.
                  </p>
                  <a href="#" className="download-link">Download PDF (2.8 MB)</a>
                </div>
              </div>
              
              <h2 className="section-title">Presentations and Educational Materials</h2>
              
              <div className="downloads-category">
                <div className="download-item">
                  <h3>Public Health Ethics Presentation</h3>
                  <p>
                    Educational presentation on ethical principles and dilemmas in public health practice.
                  </p>
                  <a href="#" className="download-link">Download PPTX (1.5 MB)</a>
                </div>
                
                <div className="download-item">
                  <h3>Epidemiology Basics Training Slides</h3>
                  <p>
                    Introductory training materials on epidemiological methods and applications.
                  </p>
                  <a href="#" className="download-link">Download PPTX (2.3 MB)</a>
                </div>
                
                <div className="download-item">
                  <h3>Health Policy Development Framework</h3>
                  <p>
                    Framework and guidelines for developing evidence-based health policies.
                  </p>
                  <a href="#" className="download-link">Download PDF (1.1 MB)</a>
                </div>
              </div>
              
              <h2 className="section-title">Forms and Applications</h2>
              
              <div className="downloads-category">
                <div className="download-item">
                  <h3>Membership Application Form</h3>
                  <p>
                    Application form for individual membership with NEPHA.
                  </p>
                  <a href="#" className="download-link">Download PDF (0.3 MB)</a>
                </div>
                
                <div className="download-item">
                  <h3>Conference Abstract Submission Form</h3>
                  <p>
                    Template for submitting abstracts for NEPHA conferences and events.
                  </p>
                  <a href="#" className="download-link">Download DOCX (0.2 MB)</a>
                </div>
                
                <div className="download-item">
                  <h3>Research Proposal Template</h3>
                  <p>
                    Standard template for submitting research proposals to NEPHA for ethical review and support.
                  </p>
                  <a href="#" className="download-link">Download DOCX (0.4 MB)</a>
                </div>
              </div>
              
              <h2 className="section-title">Access Information</h2>
              <p>
                Most resources are available for free download. Some specialized materials may be restricted to NEPHA members. 
                If you have trouble accessing any resources, please contact our Resource Librarian:
              </p>
              <p>
                Email: library@nepha.org.np<br />
                Phone: +977-XXXXXXXXXX
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DownloadsPage;