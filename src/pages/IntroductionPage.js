import React from 'react';
import Layout from '../components/Layout';
import './AboutPage.css';

const IntroductionPage = () => {
  return (
    <Layout>
      <div className="about-page">
        <div className="page-header">
          <div className="container">
            <h1>Introduction</h1>
            <p>Learn about the Nepal Public Health Association</p>
          </div>
        </div>
        
        <div className="container">
          <div className="about-content">
            <div className="about-section">
              <h2 className="section-title">About NEPHA</h2>
              <p>
                The Nepal Public Health Association (NEPHA) is a non-governmental, non-profit, and non-political civil organization of public health professionals in Nepal. Established in 2046 BS (1989 AD), NEPHA has been working for the promotion of public health in Nepal for over three decades.
              </p>
              <p>
                NEPHA aims to organize all the public health professionals and to develop their professional abilities for quality and people-centered health care services in the country. The organization plays a crucial role in supporting both government and non-government organizations by providing input on public health policy and program development.
              </p>
              
              <h2 className="section-title">Our Purpose</h2>
              <p>
                NEPHA serves as a platform for public health professionals to collaborate, share knowledge, and advocate for improved health policies and practices in Nepal. With over 1,000 active members, the organization focuses on enhancing professional skills, conducting research, and implementing health awareness programs to address critical public health issues.
              </p>
              <p>
                The organization emphasizes sustainable practices, innovation, and community engagement in its approach to health and social development, aiming to address health disparities and improve the overall health status of the Nepalese population.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IntroductionPage;