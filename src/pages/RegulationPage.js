import React from 'react';
import Layout from '../components/Layout';
import './NewsPage.css';

const RegulationPage = () => {
  return (
    <Layout>
      <div className="news-page">
        <div className="page-header">
          <div className="container">
            <h1>Regulation</h1>
            <p>Publication and Operational Regulations</p>
          </div>
        </div>
        
        <div className="container">
          <div className="news-content">
            <div className="news-section">
              <h2 className="section-title">NEPHA Regulations and Guidelines</h2>
              <p>
                The Nepal Public Health Association (NEPHA) has established a comprehensive set of regulations and guidelines to ensure consistency, quality, and ethical standards across all our publications, operations, and activities. These regulations serve as the foundation for our professional conduct and organizational governance.
              </p>
              
              <h2 className="section-title">Publication Regulations</h2>
              
              <div className="regulations-section">
                <div className="regulation">
                  <h3>Author Guidelines</h3>
                  <p>
                    All authors submitting manuscripts to NEPHA publications must adhere to our comprehensive author guidelines, which cover manuscript preparation, formatting requirements, ethical considerations, and submission procedures.
                  </p>
                </div>
                
                <div className="regulation">
                  <h3>Peer Review Process</h3>
                  <p>
                    Our double-blind peer review process ensures the scientific rigor and quality of all published materials. Reviewers are selected based on their expertise and must declare any potential conflicts of interest.
                  </p>
                </div>
                
                <div className="regulation">
                  <h3>Editorial Policies</h3>
                  <p>
                    Editorial decisions are made based on scientific merit, originality, and relevance to public health in Nepal. Editors must maintain confidentiality and avoid conflicts of interest in their decision-making.
                  </p>
                </div>
                
                <div className="regulation">
                  <h3>Ethical Standards</h3>
                  <p>
                    All publications must comply with internationally recognized ethical standards for research and publication, including proper attribution, plagiarism prevention, and protection of human subjects.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Operational Regulations</h2>
              
              <div className="regulations-section">
                <div className="regulation">
                  <h3>Financial Management</h3>
                  <p>
                    All financial transactions must be documented and approved according to established procedures. Financial reports are reviewed quarterly by the Finance Committee and annually by the Board of Directors.
                  </p>
                </div>
                
                <div className="regulation">
                  <h3>Membership Administration</h3>
                  <p>
                    Membership applications, renewals, and terminations are processed according to standardized procedures. All members must agree to abide by our Code of Ethics and organizational policies.
                  </p>
                </div>
                
                <div className="regulation">
                  <h3>Event Organization</h3>
                  <p>
                    All conferences, workshops, and events must be planned and executed according to established guidelines that ensure quality, accessibility, and adherence to budgetary constraints.
                  </p>
                </div>
                
                <div className="regulation">
                  <h3>Data Protection and Privacy</h3>
                  <p>
                    Personal and organizational data are protected according to national privacy laws and international best practices. Data is collected, stored, and used only for legitimate organizational purposes.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Governance Regulations</h2>
              
              <div className="regulations-section">
                <div className="regulation">
                  <h3>Board of Directors</h3>
                  <p>
                    The Board of Directors is responsible for strategic oversight and governance of the organization. Board members are elected according to established procedures and serve defined terms.
                  </p>
                </div>
                
                <div className="regulation">
                  <h3>Committee Structure</h3>
                  <p>
                    Standing and ad hoc committees are formed to address specific organizational needs. Committee chairs report to the Board on a regular basis and follow established decision-making protocols.
                  </p>
                </div>
                
                <div className="regulation">
                  <h3>Conflict of Interest</h3>
                  <p>
                    All board members, committee members, and staff must declare potential conflicts of interest and recuse themselves from decisions where conflicts exist.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Compliance and Enforcement</h2>
              <p>
                Compliance with these regulations is mandatory for all members, staff, and partners of NEPHA. Violations may result in disciplinary action, including suspension or termination of membership, employment, or partnership agreements.
              </p>
              
              <h2 className="section-title">Review and Amendment</h2>
              <p>
                These regulations are reviewed annually by the Board of Directors and may be amended to reflect changing organizational needs, legal requirements, or best practices in the field of public health.
              </p>
              
              <h2 className="section-title">Contact Information</h2>
              <p>
                For questions regarding NEPHA regulations or to report potential violations, please contact:
              </p>
              <p>
                Email: compliance@nepha.org.np<br />
                Phone: +977-XXXXXXXXXX
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RegulationPage;