import React from 'react';
import Layout from '../components/Layout';
import './EventsPage.css';

const Faq2Page = () => {
  return (
    <Layout>
      <div className="events-page">
        <div className="page-header">
          <div className="container">
            <h1>FAQ 2</h1>
            <p>Frequently Asked Questions</p>
          </div>
        </div>
        
        <div className="container">
          <div className="events-content">
            <div className="events-section">
              <h2 className="section-title">FAQ 2</h2>
              <p>
                This is a placeholder page for the FAQ 2 section. Content will be added here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Faq2Page;