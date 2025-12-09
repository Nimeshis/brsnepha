import React from 'react';
import Layout from '../components/Layout';
import './AboutPage.css';

const PartnersPage = () => {
  return (
    <Layout>
      <div className="about-page">
        <div className="page-header">
          <div className="container">
            <h1>Partners</h1>
            <p>Our Valued Collaborators</p>
          </div>
        </div>
        
        <div className="container">
          <div className="about-content">
            <div className="about-section">
              <h2 className="section-title">Strategic Partnerships</h2>
              <p>
                The Nepal Public Health Association (NEPHA) collaborates with a diverse range of partners to advance public health in Nepal. These strategic partnerships enable us to leverage resources, expertise, and networks to maximize our impact and reach.
              </p>
              
              <h2 className="section-title">International Organizations</h2>
              
              <div className="partners-grid">
                <div className="partner">
                  <h3>World Health Organization (WHO)</h3>
                  <p>
                    Collaborating on policy development, technical assistance, and capacity building initiatives to strengthen Nepal's health systems.
                  </p>
                </div>
                
                <div className="partner">
                  <h3>UNICEF Nepal</h3>
                  <p>
                    Partnering on maternal and child health programs, immunization campaigns, and nutrition initiatives.
                  </p>
                </div>
                
                <div className="partner">
                  <h3>United Nations Population Fund (UNFPA)</h3>
                  <p>
                    Working together on reproductive health, family planning, and gender equality programs.
                  </p>
                </div>
                
                <div className="partner">
                  <h3>World Bank</h3>
                  <p>
                    Collaborating on health system strengthening projects and policy research initiatives.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Government Agencies</h2>
              
              <div className="partners-grid">
                <div className="partner">
                  <h3>Ministry of Health and Population</h3>
                  <p>
                    Close collaboration on national health policies, guidelines development, and program implementation.
                  </p>
                </div>
                
                <div className="partner">
                  <h3>Department of Health Services</h3>
                  <p>
                    Partnership on service delivery improvement, quality assurance, and health facility strengthening.
                  </p>
                </div>
                
                <div className="partner">
                  <h3>Tribhuvan University Institute of Medicine</h3>
                  <p>
                    Academic collaboration on research, education, and training of health professionals.
                  </p>
                </div>
                
                <div className="partner">
                  <h3>Public Health Research and Training Center</h3>
                  <p>
                    Joint research initiatives and capacity building programs for public health professionals.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Academic Institutions</h2>
              
              <div className="partners-grid">
                <div className="partner">
                  <h3>Kathmandu University School of Medical Sciences</h3>
                  <p>
                    Collaboration on public health education, research, and student training programs.
                  </p>
                </div>
                
                <div className="partner">
                  <h3>Pokhara University Public Health Program</h3>
                  <p>
                    Partnership on curriculum development and distance learning initiatives for public health professionals.
                  </p>
                </div>
                
                <div className="partner">
                  <h3>Nepal Health Research Council</h3>
                  <p>
                    Joint research projects and policy analysis to inform evidence-based decision making.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Non-Governmental Organizations</h2>
              
              <div className="partners-grid">
                <div className="partner">
                  <h3>Johns Hopkins Center for Communication Programs Nepal</h3>
                  <p>
                    Collaboration on health communication, behavior change, and social marketing initiatives.
                  </p>
                </div>
                
                <div className="partner">
                  <h3>Save the Children Nepal</h3>
                  <p>
                    Partnership on child health, nutrition, and education programs in underserved communities.
                  </p>
                </div>
                
                <div className="partner">
                  <h3>World Food Programme Nepal</h3>
                  <p>
                    Joint efforts on nutrition programs and food security initiatives.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Private Sector</h2>
              
              <div className="partners-grid">
                <div className="partner">
                  <h3>Leading Pharmaceutical Companies</h3>
                  <p>
                    Collaboration on drug quality assurance, rational use of medicines, and access to essential medicines.
                  </p>
                </div>
                
                <div className="partner">
                  <h3>Health Technology Companies</h3>
                  <p>
                    Partnership on digital health solutions, telemedicine, and health information systems.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Benefits of Partnership</h2>
              <p>
                Our partnerships provide mutual benefits including:
              </p>
              
              <ul>
                <li>Enhanced program reach and impact</li>
                <li>Access to specialized expertise and resources</li>
                <li>Improved knowledge sharing and learning</li>
                <li>Increased credibility and legitimacy</li>
                <li>Cost-effective program implementation</li>
                <li>Opportunities for innovation and scaling</li>
              </ul>
              
              <h2 className="section-title">Becoming a Partner</h2>
              <p>
                Organizations interested in partnering with NEPHA are encouraged to reach out to discuss potential collaboration opportunities:
              </p>
              <p>
                Email: partnerships@nepha.org.np<br />
                Phone: +977-XXXXXXXXXX
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PartnersPage;