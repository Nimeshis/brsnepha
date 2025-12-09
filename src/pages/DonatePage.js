import React from 'react';
import Layout from '../components/Layout';
import './DonatePage.css';

const DonatePage = () => {
  return (
    <Layout>
      <div className="donate-page">
        <div className="page-header">
          <div className="container">
            <h1>Donate</h1>
            <p>Support our cause</p>
          </div>
        </div>
        
        <div className="container">
          <div className="donate-content">
            <div className="donate-section">
              <h2 className="section-title">Donate</h2>
              <p>
                This is a placeholder page for the Donate section. Content will be added here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DonatePage;