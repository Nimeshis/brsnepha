import React from 'react';
import Layout from '../components/Layout';
import './AboutPage.css';

const AboutTheJournalPage = () => {
  return (
    <Layout>
      <div className="about-page">
        <div className="page-header">
          <div className="container">
            <h1>About The Journal</h1>
            <p>Nepal Journal of Public Health</p>
          </div>
        </div>
        
        <div className="container">
          <div className="about-content">
            <div className="about-section">
              <h2 className="section-title">Nepal Journal of Public Health</h2>
              <p>
                The Nepal Journal of Public Health is the flagship academic publication of the Nepal Public Health Association (NEPHA). Established to promote scholarly discourse and disseminate research findings in the field of public health, the journal serves as a platform for researchers, practitioners, and policymakers to share knowledge and insights relevant to the Nepalese context.
              </p>
              
              <h2 className="section-title">Journal Mission</h2>
              <p>
                Our mission is to advance the field of public health in Nepal by publishing high-quality, peer-reviewed research that informs policy and practice. We are committed to promoting evidence-based decision-making and contributing to the global body of public health knowledge while remaining rooted in the unique challenges and opportunities of the Nepalese context.
              </p>
              
              <h2 className="section-title">Scope and Focus</h2>
              <p>
                The journal welcomes submissions across all areas of public health, with particular interest in:
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
                <li>Indigenous health practices</li>
              </ul>
              
              <h2 className="section-title">Publication Details</h2>
              <div className="journal-details">
                <div className="detail-item">
                  <h3>Frequency</h3>
                  <p>Bi-annual (June and December)</p>
                </div>
                
                <div className="detail-item">
                  <h3>Format</h3>
                  <p>Print and Digital</p>
                </div>
                
                <div className="detail-item">
                  <h3>Language</h3>
                  <p>English</p>
                </div>
                
                <div className="detail-item">
                  <h3>ISSN</h3>
                  <p>XXXX-XXXX (Pending)</p>
                </div>
              </div>
              
              <h2 className="section-title">Peer Review Process</h2>
              <p>
                All submissions undergo a rigorous double-blind peer review process. Manuscripts are evaluated by experts in the relevant field for scientific rigor, originality, significance, and clarity. The review process typically takes 6-8 weeks from submission to decision.
              </p>
              
              <h2 className="section-title">Indexing and Abstracting</h2>
              <p>
                The journal is indexed in major databases including:
              </p>
              
              <ul>
                <li>PubMed</li>
                <li>Directory of Open Access Journals (DOAJ)</li>
                <li>Google Scholar</li>
                <li>Academic Search Complete</li>
                <li>Regional Indexes for South Asian Publications</li>
              </ul>
              
              <h2 className="section-title">Editorial Board</h2>
              <p>
                Our editorial board comprises leading public health experts from academia, government, and international organizations. For information about our current editorial team, please visit our <a href="/editorial-team">Editorial Team</a> page.
              </p>
              
              <h2 className="section-title">Submission Guidelines</h2>
              <p>
                Authors interested in submitting manuscripts should review our comprehensive guidelines available at <a href="/manuscript-submission-guideline">Manuscript Submission Guidelines</a>. We welcome original research articles, review articles, case studies, and policy perspectives.
              </p>
              
              <h2 className="section-title">Contact Information</h2>
              <p>
                For editorial inquiries, manuscript submissions, or subscription information, please contact:
              </p>
              <p>
                Editor-in-Chief<br />
                Nepal Journal of Public Health<br />
                Email: editor@njph.org.np<br />
                Phone: +977-XXXXXXXXXX
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutTheJournalPage;