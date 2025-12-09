import React from 'react';
import Layout from '../components/Layout';
import './NewsPage.css';

const EditorialTeamPage = () => {
  return (
    <Layout>
      <div className="news-page">
        <div className="page-header">
          <div className="container">
            <h1>Editorial Team</h1>
            <p>Meet Our Editorial Leadership</p>
          </div>
        </div>
        
        <div className="container">
          <div className="news-content">
            <div className="news-section">
              <h2 className="section-title">Editorial Team</h2>
              <p>
                The Nepal Public Health Association (NEPHA) Editorial Team is responsible for maintaining the highest standards of scientific rigor and quality in our publications, including the Nepal Journal of Public Health and our periodic bulletins. Our team comprises experienced researchers, academics, and practitioners who volunteer their expertise to advance public health knowledge in Nepal.
              </p>
              
              <h2 className="section-title">Editorial Leadership</h2>
              
              <div className="editorial-team">
                <div className="team-member">
                  <h3>Dr. Rajendra KC</h3>
                  <p>
                    <strong>Editor-in-Chief</strong><br />
                    Professor of Public Health, Institute of Medicine, Tribhuvan University<br />
                    Dr. KC provides overall leadership for the editorial process and ensures alignment with NEPHA's mission and publication standards.
                  </p>
                </div>
                
                <div className="team-member">
                  <h3>Dr. Sharmila Thapa</h3>
                  <p>
                    <strong>Deputy Editor</strong><br />
                    Senior Researcher, Nepal Health Research Council<br />
                    Dr. Thapa oversees the peer review process and manages day-to-day editorial operations.
                  </p>
                </div>
                
                <div className="team-member">
                  <h3>Dr. Kiran Poudel</h3>
                  <p>
                    <strong>Managing Editor</strong><br />
                    Associate Professor, Kathmandu University School of Medical Sciences<br />
                    Dr. Poudel coordinates manuscript handling, reviewer assignments, and publication schedules.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Associate Editors</h2>
              
              <div className="editorial-team">
                <div className="team-member">
                  <h3>Dr. Prakash Bhandari</h3>
                  <p>
                    <strong>Epidemiology and Biostatistics</strong><br />
                    Statistical Consultant, Public Health Analytics Nepal<br />
                    Expertise in quantitative research methods and statistical analysis.
                  </p>
                </div>
                
                <div className="team-member">
                  <h3>Dr. Sunita Shrestha</h3>
                  <p>
                    <strong>Health Policy and Systems Research</strong><br />
                    Health Policy Advisor, Ministry of Health and Population<br />
                    Specializes in health policy analysis and health system strengthening.
                  </p>
                </div>
                
                <div className="team-member">
                  <h3>Dr. Anil Kumar Jha</h3>
                  <p>
                    <strong>Environmental and Occupational Health</strong><br />
                    Professor, Central Department of Environmental Science, Tribhuvan University<br />
                    Expert in environmental risk assessment and occupational health.
                  </p>
                </div>
                
                <div className="team-member">
                  <h3>Dr. Reena KC</h3>
                  <p>
                    <strong>Maternal and Child Health</strong><br />
                    Maternal Health Specialist, UNICEF Nepal<br />
                    Focuses on reproductive health and child development programs.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Editorial Board</h2>
              <p>
                Our Editorial Board comprises leading public health experts from academia, government, and international organizations who provide strategic guidance and oversight for our publications.
              </p>
              
              <div className="board-members">
                <div className="board-member">
                  <h3>Dr. Bharat Mani Dixit</h3>
                  <p>Former Secretary, Ministry of Health and Population</p>
                </div>
                
                <div className="board-member">
                  <h3>Dr. Sabina Ranjitkar</h3>
                  <p>Dean, Institute of Medicine, Tribhuvan University</p>
                </div>
                
                <div className="board-member">
                  <h3>Dr. Lila Jung Rana</h3>
                  <p>Public Health Specialist, World Health Organization</p>
                </div>
                
                <div className="board-member">
                  <h3>Prof. Dr. Sharad Kumar Ghimire</h3>
                  <p>Director, Nepal Health Research Council</p>
                </div>
                
                <div className="board-member">
                  <h3>Dr. Mandira Sharma</h3>
                  <p>Professor Emeritus, Kathmandu University School of Medical Sciences</p>
                </div>
              </div>
              
              <h2 className="section-title">Reviewer Pool</h2>
              <p>
                We maintain a pool of expert reviewers from diverse areas of public health who provide critical peer review of submitted manuscripts. Our reviewers are selected based on their expertise, publication record, and commitment to scientific excellence.
              </p>
              
              <h2 className="section-title">Editorial Process</h2>
              <p>
                Our editorial process follows these steps:
              </p>
              
              <ol>
                <li><strong>Initial Screening:</strong> Manuscripts are checked for adherence to submission guidelines and scope relevance</li>
                <li><strong>Peer Review:</strong> Manuscripts undergo double-blind peer review by at least two independent experts</li>
                <li><strong>Decision Making:</strong> Editors evaluate reviews and make acceptance, revision, or rejection decisions</li>
                <li><strong>Revision:</strong> Authors may be asked to revise manuscripts based on reviewer feedback</li>
                <li><strong>Copy Editing:</strong> Accepted manuscripts undergo copyediting and proofreading</li>
                <li><strong>Publication:</strong> Final manuscripts are published in print and digital formats</li>
              </ol>
              
              <h2 className="section-title">Contact Information</h2>
              <p>
                For inquiries about editorial matters or to submit manuscripts, please contact:
              </p>
              <p>
                Email: editor@nepha.org.np<br />
                Phone: +977-XXXXXXXXXX
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EditorialTeamPage;