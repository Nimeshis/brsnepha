import React from 'react';
import Layout from '../components/Layout';
import './AboutPage.css';

const ProjectsPage = () => {
  return (
    <Layout>
      <div className="about-page">
        <div className="page-header">
          <div className="container">
            <h1>Projects</h1>
            <p>Our Ongoing and Completed Projects</p>
          </div>
        </div>
        
        <div className="container">
          <div className="about-content">
            <div className="about-section">
              <h2 className="section-title">NEPHA Projects</h2>
              <p>
                The Nepal Public Health Association (NEPHA) implements and supports various projects aimed at improving public health outcomes in Nepal. These initiatives range from research studies and capacity building programs to advocacy campaigns and community health interventions.
              </p>
              
              <h2 className="section-title">Current Projects</h2>
              
              <div className="projects-grid">
                <div className="project">
                  <h3>Strengthening Health Systems in Federal Nepal</h3>
                  <p>
                    A comprehensive project focused on supporting the transition to federal governance in Nepal's health sector. This initiative includes policy analysis, capacity building for provincial health officials, and development of guidelines for decentralized health service delivery.
                  </p>
                  <p><strong>Status:</strong> Ongoing (2024-2026)</p>
                  <p><strong>Funding:</strong> World Bank</p>
                </div>
                
                <div className="project">
                  <h3>Public Health Workforce Development Program</h3>
                  <p>
                    A capacity building initiative aimed at enhancing the skills of public health professionals across Nepal. The program includes training workshops, mentorship opportunities, and development of continuing education curricula.
                  </p>
                  <p><strong>Status:</strong> Ongoing (2023-2025)</p>
                  <p><strong>Funding:</strong> WHO Nepal</p>
                </div>
                
                <div className="project">
                  <h3>Mental Health Awareness Campaign</h3>
                  <p>
                    A nationwide campaign to reduce stigma around mental health issues and improve access to mental health services. Activities include community workshops, media engagement, and training for healthcare providers.
                  </p>
                  <p><strong>Status:</strong> Ongoing (2024-2025)</p>
                  <p><strong>Funding:</strong> UNICEF Nepal</p>
                </div>
              </div>
              
              <h2 className="section-title">Recently Completed Projects</h2>
              
              <div className="projects-grid">
                <div className="project">
                  <h3>COVID-19 Response and Recovery Initiative</h3>
                  <p>
                    A multi-phase project that supported Nepal's response to the COVID-19 pandemic through research, policy recommendations, and community engagement. Activities included epidemiological studies, guideline development, and public awareness campaigns.
                  </p>
                  <p><strong>Status:</strong> Completed (2020-2023)</p>
                  <p><strong>Funding:</strong> Multiple donors</p>
                </div>
                
                <div className="project">
                  <h3>Maternal and Child Health Improvement Project</h3>
                  <p>
                    Focused on reducing maternal and infant mortality through improved access to quality healthcare services. The project included training for healthcare workers, community mobilization, and policy advocacy.
                  </p>
                  <p><strong>Status:</strong> Completed (2019-2022)</p>
                  <p><strong>Funding:</strong> USAID Nepal</p>
                </div>
                
                <div className="project">
                  <h3>Environmental Health Risk Assessment Study</h3>
                  <p>
                    A comprehensive study examining environmental health risks in urban and rural settings across Nepal. The research informed policy development and community intervention strategies.
                  </p>
                  <p><strong>Status:</strong> Completed (2021-2023)</p>
                  <p><strong>Funding:</strong> Nepal Health Research Council</p>
                </div>
              </div>
              
              <h2 className="section-title">Research Initiatives</h2>
              
              <div className="projects-grid">
                <div className="project">
                  <h3>Non-Communicable Diseases Surveillance System</h3>
                  <p>
                    Development of a national surveillance system for tracking non-communicable diseases and their risk factors. This initiative supports evidence-based policy making and resource allocation.
                  </p>
                  <p><strong>Status:</strong> Pilot phase (2024)</p>
                  <p><strong>Funding:</strong> Ministry of Health and Population</p>
                </div>
                
                <div className="project">
                  <h3>Health Equity and Social Determinants Research</h3>
                  <p>
                    Investigating the social determinants of health disparities in Nepal and developing interventions to address inequities in health outcomes across different population groups.
                  </p>
                  <p><strong>Status:</strong> Data collection phase (2023-2025)</p>
                  <p><strong>Funding:</strong> International Development Research Centre</p>
                </div>
              </div>
              
              <h2 className="section-title">Partnership Projects</h2>
              <p>
                NEPHA collaborates with various national and international partners to implement projects that align with our mission of improving public health in Nepal. These partnerships leverage resources, expertise, and networks to maximize impact.
              </p>
              
              <h2 className="section-title">Project Implementation Approach</h2>
              <p>
                Our project implementation follows a systematic approach that includes:
              </p>
              
              <ul>
                <li>Needs assessment and situational analysis</li>
                <li>Stakeholder engagement and partnership development</li>
                <li>Evidence-based intervention design</li>
                <li>Capacity building for local implementation</li>
                <li>Monitoring and evaluation throughout project lifecycle</li>
                <li>Documentation and knowledge sharing</li>
                <li>Sustainability planning for long-term impact</li>
              </ul>
              
              <h2 className="section-title">Get Involved</h2>
              <p>
                Interested in collaborating with NEPHA on future projects or learning more about our initiatives? Please contact our Project Coordinator:
              </p>
              <p>
                Email: projects@nepha.org.np<br />
                Phone: +977-XXXXXXXXXX
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsPage;