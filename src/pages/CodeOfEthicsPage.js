import React from 'react';
import Layout from '../components/Layout';
import './AboutPage.css';

const CodeOfEthicsPage = () => {
  return (
    <Layout>
      <div className="about-page">
        <div className="page-header">
          <div className="container">
            <h1>Code of Ethics</h1>
            <p>Ethical Standards for Public Health Professionals</p>
          </div>
        </div>
        
        <div className="container">
          <div className="about-content">
            <div className="about-section">
              <h2 className="section-title">Introduction</h2>
              <p>
                The Nepal Public Health Association (NEPHA) has established this Code of Ethics to guide the professional conduct of public health professionals in Nepal. This code serves as a framework for ethical decision-making and sets the standard for professional behavior in the practice of public health.
              </p>
              <p>
                As public health professionals, we recognize our responsibility to protect and promote the health and well-being of all people, with particular attention to vulnerable and underserved populations. This code reflects our commitment to the highest standards of integrity, competence, and accountability in our work.
              </p>
              
              <h2 className="section-title">Core Ethical Principles</h2>
              
              <div className="ethics-principles">
                <div className="principle">
                  <h3>1. Respect for Persons</h3>
                  <p>
                    Public health professionals shall respect the inherent dignity and worth of all individuals. This includes respecting autonomy, obtaining informed consent when appropriate, and protecting the privacy and confidentiality of individuals and communities.
                  </p>
                </div>
                
                <div className="principle">
                  <h3>2. Beneficence</h3>
                  <p>
                    Public health professionals shall act to promote the well-being of populations and communities. This includes taking positive steps to prevent harm and to maximize benefits in all professional activities.
                  </p>
                </div>
                
                <div className="principle">
                  <h3>3. Non-maleficence</h3>
                  <p>
                    Public health professionals shall avoid causing harm to individuals and communities. When harm is unavoidable, it must be minimized and justified by the potential benefits.
                  </p>
                </div>
                
                <div className="principle">
                  <h3>4. Justice</h3>
                  <p>
                    Public health professionals shall promote fairness in the distribution of health resources and opportunities. This includes working to eliminate health disparities and ensuring equitable access to public health services.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Professional Responsibilities</h2>
              
              <div className="responsibilities">
                <div className="responsibility">
                  <h3>Scientific Integrity</h3>
                  <p>
                    Maintain the highest standards of scientific rigor in research, data collection, analysis, and reporting. Ensure that findings are presented accurately and without bias. Acknowledge limitations and uncertainties in data and interpretations.
                  </p>
                </div>
                
                <div className="responsibility">
                  <h3>Competence</h3>
                  <p>
                    Practice within the boundaries of one's education, training, and experience. Engage in continuous professional development to maintain current knowledge and skills. Seek consultation or referral when encountering situations beyond one's expertise.
                  </p>
                </div>
                
                <div className="responsibility">
                  <h3>Confidentiality</h3>
                  <p>
                    Protect the privacy of individuals and communities by safeguarding confidential information obtained in the course of professional activities. Share information only with appropriate consent or as required by law.
                  </p>
                </div>
                
                <div className="responsibility">
                  <h3>Conflict of Interest</h3>
                  <p>
                    Disclose any actual or potential conflicts of interest that may influence professional judgment or actions. Avoid situations where personal interests could compromise professional responsibilities or public trust.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Responsibilities to Communities</h2>
              <p>
                Public health professionals have special obligations to the communities they serve:
              </p>
              
              <ul>
                <li>Engage communities as partners in public health initiatives</li>
                <li>Ensure that community voices are heard in decision-making processes</li>
                <li>Respect cultural values and practices while promoting health</li>
                <li>Work to address the root causes of health inequities</li>
                <li>Advocate for policies and programs that benefit population health</li>
                <li>Respond promptly and effectively to public health emergencies</li>
              </ul>
              
              <h2 className="section-title">Responsibilities to Employers and Organizations</h2>
              <p>
                Public health professionals shall:
              </p>
              
              <ul>
                <li>Maintain loyalty to employers while prioritizing public health</li>
                <li>Report unethical or illegal activities through appropriate channels</li>
                <li>Use organizational resources responsibly and appropriately</li>
                <li>Represent their organizations accurately and professionally</li>
                <li>Comply with organizational policies and procedures</li>
              </ul>
              
              <h2 className="section-title">Enforcement and Compliance</h2>
              <p>
                Violations of this Code of Ethics may result in disciplinary action by NEPHA, including but not limited to:
              </p>
              
              <ul>
                <li>Written warning</li>
                <li>Suspension of membership privileges</li>
                <li>Revocation of membership</li>
                <li>Referral to appropriate licensing or regulatory bodies</li>
              </ul>
              
              <p>
                Alleged violations will be investigated through a fair and transparent process that ensures due process rights for all parties involved.
              </p>
              
              <h2 className="section-title">Review and Amendment</h2>
              <p>
                This Code of Ethics shall be reviewed periodically by the NEPHA Ethics Committee and may be amended by the Board of Directors as needed to reflect evolving professional standards and societal expectations.
              </p>
              
              <h2 className="section-title">Contact Information</h2>
              <p>
                Questions regarding this Code of Ethics or reports of potential violations should be directed to:
              </p>
              <p>
                NEPHA Ethics Committee<br />
                Email: ethics@nepha.org.np<br />
                Phone: +977-XXXXXXXXXX
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CodeOfEthicsPage;