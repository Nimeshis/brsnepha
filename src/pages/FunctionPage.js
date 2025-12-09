import React from 'react';
import Layout from '../components/Layout';
import './AboutPage.css';

const FunctionPage = () => {
  return (
    <Layout>
      <div className="about-page">
        <div className="page-header">
          <div className="container">
            <h1>Function</h1>
            <p>Core Functions of NEPHA</p>
          </div>
        </div>
        
        <div className="container">
          <div className="about-content">
            <div className="about-section">
              <h2 className="section-title">Organizational Functions</h2>
              <p>
                The Nepal Public Health Association (NEPHA) fulfills its mission through a comprehensive set of core functions that address various aspects of public health development in Nepal. These functions are designed to strengthen the public health workforce, advance knowledge, influence policy, and improve health outcomes for all Nepalese citizens.
              </p>
              
              <h2 className="section-title">Professional Development Functions</h2>
              
              <div className="functions-grid">
                <div className="function">
                  <h3>Capacity Building</h3>
                  <p>
                    Organizing training programs, workshops, and continuing education courses to enhance the skills and knowledge of public health professionals at all career stages.
                  </p>
                </div>
                
                <div className="function">
                  <h3>Skill Enhancement</h3>
                  <p>
                    Providing opportunities for professionals to develop specialized competencies in areas such as epidemiology, health policy, environmental health, and health management.
                  </p>
                </div>
                
                <div className="function">
                  <h3>Certification Programs</h3>
                  <p>
                    Offering certification courses and professional development credits to support career advancement and recognition of expertise.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Knowledge Management Functions</h2>
              
              <div className="functions-grid">
                <div className="function">
                  <h3>Research Promotion</h3>
                  <p>
                    Supporting and conducting public health research to generate evidence for policy and practice. This includes funding research grants and facilitating research collaborations.
                  </p>
                </div>
                
                <div className="function">
                  <h3>Publication Activities</h3>
                  <p>
                    Publishing scholarly journals, bulletins, and other materials to disseminate research findings, best practices, and expert opinions in public health.
                  </p>
                </div>
                
                <div className="function">
                  <h3>Library Services</h3>
                  <p>
                    Maintaining a repository of public health resources including books, journals, reports, and digital materials accessible to members and researchers.
                  </p>
                </div>
                
                <div className="function">
                  <h3>Knowledge Sharing</h3>
                  <p>
                    Facilitating the exchange of knowledge and experiences through conferences, seminars, and networking events that bring together professionals from diverse backgrounds.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Advocacy and Policy Functions</h2>
              
              <div className="functions-grid">
                <div className="function">
                  <h3>Policy Development Support</h3>
                  <p>
                    Providing technical expertise and evidence-based recommendations to government agencies and policymakers in developing health policies and regulations.
                  </p>
                </div>
                
                <div className="function">
                  <h3>Health Advocacy</h3>
                  <p>
                    Championing public health issues and raising awareness about critical health challenges through campaigns, media engagement, and stakeholder outreach.
                  </p>
                </div>
                
                <div className="function">
                  <h3>Legislative Monitoring</h3>
                  <p>
                    Tracking health-related legislation and regulations to ensure they align with public health best practices and evidence-based approaches.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Networking and Collaboration Functions</h2>
              
              <div className="functions-grid">
                <div className="function">
                  <h3>Professional Networking</h3>
                  <p>
                    Creating platforms for public health professionals to connect, collaborate, and share experiences through regular meetings, conferences, and special interest groups.
                  </p>
                </div>
                
                <div className="function">
                  <h3>Institutional Partnerships</h3>
                  <p>
                    Building strategic alliances with academic institutions, government agencies, international organizations, and civil society groups to leverage resources and expertise.
                  </p>
                </div>
                
                <div className="function">
                  <h3>International Collaboration</h3>
                  <p>
                    Engaging with global public health organizations to share knowledge, participate in international initiatives, and bring global best practices to Nepal.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Service Delivery Functions</h2>
              
              <div className="functions-grid">
                <div className="function">
                  <h3>Technical Assistance</h3>
                  <p>
                    Providing expert guidance and technical support to government agencies, NGOs, and other organizations implementing public health programs.
                  </p>
                </div>
                
                <div className="function">
                  <h3>Consultation Services</h3>
                  <p>
                    Offering specialized consulting services on public health issues to organizations and institutions seeking expert advice.
                  </p>
                </div>
                
                <div className="function">
                  <h3>Emergency Response</h3>
                  <p>
                    Contributing expertise and resources during public health emergencies and disasters to support response and recovery efforts.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Membership Services Functions</h2>
              
              <div className="functions-grid">
                <div className="function">
                  <h3>Member Benefits</h3>
                  <p>
                    Providing value-added services to members including discounts on events, access to exclusive resources, and opportunities for professional recognition.
                  </p>
                </div>
                
                <div className="function">
                  <h3>Member Engagement</h3>
                  <p>
                    Facilitating active participation of members in organizational activities, governance, and decision-making processes.
                  </p>
                </div>
                
                <div className="function">
                  <h3>Alumni Network</h3>
                  <p>
                    Maintaining connections with former members and supporting their continued engagement with public health initiatives.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Organizational Development Functions</h2>
              
              <div className="functions-grid">
                <div className="function">
                  <h3>Governance</h3>
                  <p>
                    Ensuring effective organizational management through transparent governance structures, policies, and procedures.
                  </p>
                </div>
                
                <div className="function">
                  <h3>Financial Management</h3>
                  <p>
                    Managing organizational resources responsibly through sound financial practices, diversified funding sources, and regular auditing.
                  </p>
                </div>
                
                <div className="function">
                  <h3>Strategic Planning</h3>
                  <p>
                    Developing and implementing strategic plans that align with organizational mission and respond to emerging public health challenges.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Contact Information</h2>
              <p>
                For inquiries about NEPHA functions or to explore collaboration opportunities, please contact:
              </p>
              <p>
                Email: functions@nepha.org.np<br />
                Phone: +977-XXXXXXXXXX
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FunctionPage;