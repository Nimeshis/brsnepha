import React from 'react';
import Layout from '../components/Layout';
import './HomePage.css';

const ImportantLinksPage = () => {
  return (
    <Layout>
      <div className="home-page">
        <div className="page-header">
          <div className="container">
            <h1>Important Links</h1>
            <p>Useful resources and links</p>
          </div>
        </div>
        
        <div className="container">
          <div className="home-content">
            <div className="home-section">
              <h2 className="section-title">Important Links</h2>
              <p>
                This is a placeholder page for the Important Links section. Content will be added here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ImportantLinksPage;