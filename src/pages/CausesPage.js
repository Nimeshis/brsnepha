import React from 'react';
import Layout from '../components/Layout';
import './CausesPage.css';

const CausesPage = () => {
  const causes = [
    {
      id: 1,
      title: "Clean Water Initiative",
      description: "Providing clean and safe drinking water to remote communities in Nepal.",
      goal: "$50,000",
      raised: "$35,000",
      image: ""
    },
    {
      id: 2,
      title: "Healthcare Access",
      description: "Improving healthcare facilities in underserved rural areas.",
      goal: "$75,000",
      raised: "$42,000",
      image: ""
    },
    {
      id: 3,
      title: "Education Support",
      description: "Supporting education for underprivileged children in rural Nepal.",
      goal: "$30,000",
      raised: "$22,000",
      image: ""
    },
    {
      id: 4,
      title: "Disaster Relief",
      description: "Providing emergency aid and long-term recovery support after natural disasters.",
      goal: "$100,000",
      raised: "$65,000",
      image: ""
    }
  ];

  return (
    <Layout>
      <div className="causes-page">
        <div className="page-header">
          <div className="container">
            <h1>Our Causes</h1>
            <p>Support our mission to improve public health and wellbeing in Nepal</p>
          </div>
        </div>

        <div className="container">
          <div className="causes-grid">
            {causes.map((cause) => (
              <div className="cause-card" key={cause.id}>
                <div className="cause-image">
                  <div className="image-placeholder"></div>
                </div>
                <div className="cause-content">
                  <h3>{cause.title}</h3>
                  <p>{cause.description}</p>
                  <div className="cause-progress">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${(parseInt(cause.raised.replace(/[^0-9]/g, '')) / parseInt(cause.goal.replace(/[^0-9]/g, ''))) * 100}%` }}
                      ></div>
                    </div>
                    <div className="progress-info">
                      <span>Raised: {cause.raised}</span>
                      <span>Goal: {cause.goal}</span>
                    </div>
                  </div>
                  <div className="cause-actions">
                    <button className="btn primary">Donate Now</button>
                    <button className="btn secondary">Learn More</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CausesPage;