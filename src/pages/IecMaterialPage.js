import React from 'react';
import Layout from '../components/Layout';
import './CausesPage.css';

const IecMaterialPage = () => {
  return (
    <Layout>
      <div className="causes-page">
        <div className="page-header">
          <div className="container">
            <h1>IEC Material</h1>
            <p>Information, Education, and Communication materials</p>
          </div>
        </div>
        
        <div className="container">
          <div className="causes-content">
            <div className="causes-section">
              <h2 className="section-title">IEC Material</h2>
              <p>
                This is a placeholder page for the IEC Material section. Content will be added here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IecMaterialPage;