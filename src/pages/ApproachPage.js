import React from 'react';
import Layout from '../components/Layout';
import './AboutPage.css';

const ApproachPage = () => {
  return (
    <Layout>
      <div className="about-page">
        <div className="page-header">
          <div className="container">
            <h1>Approach</h1>
            <p>Our Strategic Approach</p>
          </div>
        </div>
        
        <div className="container">
          <div className="about-content">
            <div className="about-section">
              <h2 className="section-title">Holistic Approach to Public Health</h2>
              <p>
                The Nepal Public Health Association (NEPHA) employs a comprehensive and multi-faceted approach to address public health challenges in Nepal. Our strategic framework integrates evidence-based practices, community engagement, policy advocacy, and professional development to create sustainable improvements in public health outcomes.
              </p>
              
              <h2 className="section-title">Core Principles</h2>
              <div className="approach-principles">
                <div className="principle-item">
                  <h3>Evidence-Based Practice</h3>
                  <p>
                    All our initiatives are grounded in rigorous research and data-driven insights. We conduct and support studies on critical public health issues, ensuring that our programs and advocacy efforts are based on solid evidence.
                  </p>
                </div>
                
                <div className="principle-item">
                  <h3>Community-Centered Solutions</h3>
                  <p>
                    We believe in engaging communities as active participants in public health initiatives. Our programs are designed with community input and focus on empowering local populations to take ownership of their health.
                  </p>
                </div>
                
                <div className="principle-item">
                  <h3>Collaborative Partnerships</h3>
                  <p>
                    Recognizing that public health challenges require collective action, we build strategic partnerships with government agencies, international organizations, academic institutions, and civil society groups.
                  </p>
                </div>
                
                <div className="principle-item">
                  <h3>Sustainable Development</h3>
                  <p>
                    Our approach emphasizes long-term sustainability, ensuring that our interventions continue to benefit communities well beyond the initial implementation phase.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Implementation Strategies</h2>
              <p>
                To operationalize our approach, NEPHA utilizes several key strategies:
              </p>
              
              <ul>
                <li><strong>Capacity Building:</strong> Providing training and professional development opportunities for public health professionals at all levels</li>
                <li><strong>Policy Advocacy:</strong> Engaging with policymakers to influence health legislation and regulations based on evidence and best practices</li>
                <li><strong>Research and Innovation:</strong> Conducting and supporting research to identify effective interventions and innovative solutions</li>
                <li><strong>Knowledge Sharing:</strong> Creating platforms for exchanging ideas, experiences, and best practices among professionals</li>
                <li><strong>Public Awareness:</strong> Implementing campaigns to educate the public about health issues and preventive measures</li>
                <li><strong>Network Development:</strong> Building connections among public health professionals, organizations, and institutions</li>
              </ul>
              
              <h2 className="section-title">Focus Areas</h2>
              <p>
                Our approach is particularly focused on addressing health disparities, improving access to quality healthcare services, strengthening health systems, and responding to emerging public health threats. We place special emphasis on vulnerable populations, including women, children, elderly, and marginalized communities.
              </p>
              
              <h2 className="section-title">Monitoring and Evaluation</h2>
              <p>
                We maintain a robust monitoring and evaluation framework to assess the impact of our initiatives and continuously improve our approaches. This ensures accountability and enables us to adapt our strategies based on lessons learned and changing health needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ApproachPage;