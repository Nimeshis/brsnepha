import React from 'react';
import Layout from '../components/Layout';
import './NewsPage.css';

const ArchivesPage = () => {
  return (
    <Layout>
      <div className="news-page">
        <div className="page-header">
          <div className="container">
            <h1>Publication Archives</h1>
            <p>Historical collection of NEPHA publications and resources</p>
          </div>
        </div>
        
        <div className="container">
          <div className="news-content">
            <div className="news-section">
              <h2 className="section-title">Archived Publications</h2>
              <p>
                The Nepal Public Health Association (NEPHA) maintains an extensive archive of publications, newsletters, 
                research papers, and other resources dating back to our founding in 1990. These materials document the 
                evolution of public health discourse and practice in Nepal over the past three decades.
              </p>
              
              <div className="archive-categories">
                <h3>Archive Categories</h3>
                <div className="category-list">
                  <div className="category-item">
                    <h4>Bidhan (Constitutional Documents)</h4>
                    <p>
                      Historical versions of NEPHA's constitutional documents, bylaws, and organizational policies that 
                      have guided our development and operations since inception.
                    </p>
                  </div>
                  
                  <div className="category-item">
                    <h4>Annual Reports</h4>
                    <p>
                      Comprehensive annual reports detailing NEPHA's activities, achievements, financial statements, 
                      and future plans for each fiscal year.
                    </p>
                  </div>
                  
                  <div className="category-item">
                    <h4>Conference Proceedings</h4>
                    <p>
                      Proceedings from our annual conferences, including presentation abstracts, full papers, and 
                      keynote addresses from leading public health experts.
                    </p>
                  </div>
                  
                  <div className="category-item">
                    <h4>Newsletters and Bulletins</h4>
                    <p>
                      Regular communications to members featuring updates on public health issues, member activities, 
                      upcoming events, and organizational news.
                    </p>
                  </div>
                  
                  <div className="category-item">
                    <h4>Research Papers</h4>
                    <p>
                      Peer-reviewed research publications by NEPHA members and collaborators on various public health 
                      topics relevant to Nepal's context.
                    </p>
                  </div>
                  
                  <div className="category-item">
                    <h4>Policy Briefs</h4>
                    <p>
                      Evidence-based policy recommendations on critical public health issues developed by NEPHA's 
                      expert committees and working groups.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="access-information">
                <h3>Accessing Archives</h3>
                <p>
                  Many of our archived publications are available for free download by NEPHA members. Non-members 
                  may access selected materials for research purposes. For access to restricted archives or special 
                  collections, please contact our publications team.
                </p>
                <p>
                  Email: publications@nepha.org.np<br />
                  Phone: +977-1-5449509
                </p>
              </div>
              
              <div className="digital-initiative">
                <h3>Digital Archive Initiative</h3>
                <p>
                  We are continuously working to digitize our historical collections to improve accessibility and 
                  preservation. If you have historical NEPHA materials that you would like to contribute to our 
                  digital archive, please contact us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ArchivesPage;