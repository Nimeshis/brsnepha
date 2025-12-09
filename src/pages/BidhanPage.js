import React from 'react';
import Layout from '../components/Layout';
import './NewsPage.css';

const BidhanPage = () => {
  return (
    <Layout>
      <div className="news-page">
        <div className="page-header">
          <div className="container">
            <h1>Bidhan</h1>
            <p>Publication Bidhan</p>
          </div>
        </div>
        
        <div className="container">
          <div className="news-content">
            <div className="news-section">
              <h2 className="section-title">Bidhan</h2>
              <p>
                This is a placeholder page for the Bidhan section. Content will be added here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BidhanPage;