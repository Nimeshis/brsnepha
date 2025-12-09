import React from 'react';
import Layout from '../components/Layout';
import './AboutPage.css';

const SubCommitteePage = () => {
  return (
    <Layout>
      <div className="about-page">
        <div className="page-header">
          <div className="container">
            <h1>Sub Committee</h1>
            <p>Our Specialized Committees</p>
          </div>
        </div>
        
        <div className="container">
          <div className="about-content">
            <div className="about-section">
              <h2 className="section-title">Sub Committees</h2>
              <p>
                The Nepal Public Health Association (NEPHA) has established several specialized subcommittees to focus on specific areas of public health and organizational functions. These committees play a vital role in advancing our mission through targeted initiatives, research, and program implementation.
              </p>
              
              <h2 className="section-title">Standing Subcommittees</h2>
              
              <div className="subcommittees">
                <div className="subcommittee">
                  <h3>Research and Publications Subcommittee</h3>
                  <p>
                    Oversees all research activities and publication processes. Reviews research proposals, coordinates peer review processes, and ensures quality standards for all published materials.
                  </p>
                  <p><strong>Chair:</strong> Dr. Ram Prasad Sharma</p>
                </div>
                
                <div className="subcommittee">
                  <h3>Training and Capacity Building Subcommittee</h3>
                  <p>
                    Develops and implements training programs for public health professionals. Coordinates workshops, seminars, and continuing education activities to enhance professional skills.
                  </p>
                  <p><strong>Chair:</strong> Dr. Sita Kumari Thapa</p>
                </div>
                
                <div className="subcommittee">
                  <h3>Policy and Advocacy Subcommittee</h3>
                  <p>
                    Engages in health policy development and advocacy efforts. Represents NEPHA in policy discussions and works to influence evidence-based health policies.
                  </p>
                  <p><strong>Chair:</strong> Dr. Hari Bahadur KC</p>
                </div>
                
                <div className="subcommittee">
                  <h3>Membership Services Subcommittee</h3>
                  <p>
                    Manages membership services, recruitment, and retention. Develops member benefits and ensures member satisfaction through responsive services.
                  </p>
                  <p><strong>Chair:</strong> Dr. Maya Devi Gautam</p>
                </div>
              </div>
              
              <h2 className="section-title">Special Interest Groups</h2>
              
              <div className="subcommittees">
                <div className="subcommittee">
                  <h3>Environmental Health Special Interest Group</h3>
                  <p>
                    Focuses on environmental determinants of health including air and water quality, occupational health, and climate change impacts on health.
                  </p>
                  <p><strong>Coordinator:</strong> Dr. Krishna Prasad Bhandari</p>
                </div>
                
                <div className="subcommittee">
                  <h3>Maternal and Child Health Special Interest Group</h3>
                  <p>
                    Addresses issues related to maternal and child health including reproductive health, nutrition, and child development.
                  </p>
                  <p><strong>Coordinator:</strong> Dr. Radha Gyawali</p>
                </div>
                
                <div className="subcommittee">
                  <h3>Infectious Diseases Special Interest Group</h3>
                  <p>
                    Monitors and responds to infectious disease threats including surveillance, outbreak investigation, and prevention strategies.
                  </p>
                  <p><strong>Coordinator:</strong> Dr. Dipak KC</p>
                </div>
                
                <div className="subcommittee">
                  <h3>Mental Health Special Interest Group</h3>
                  <p>
                    Promotes mental health awareness, reduces stigma, and advocates for improved mental health services across Nepal.
                  </p>
                  <p><strong>Coordinator:</strong> Dr. Anjali Thapa</p>
                </div>
              </div>
              
              <h2 className="section-title">Ad Hoc Committees</h2>
              
              <div className="subcommittees">
                <div className="subcommittee">
                  <h3>Annual Conference Planning Committee</h3>
                  <p>
                    Organizes NEPHA's annual public health conference including theme development, speaker selection, and program coordination.
                  </p>
                  <p><strong>Chair:</strong> Rotating position</p>
                </div>
                
                <div className="subcommittee">
                  <h3>Ethics Review Committee</h3>
                  <p>
                    Reviews ethical considerations in research and organizational activities. Investigates potential violations of the Code of Ethics.
                  </p>
                  <p><strong>Chair:</strong> Dr. Bhaktapur</p>
                </div>
                
                <div className="subcommittee">
                  <h3>Finance and Budget Committee</h3>
                  <p>
                    Reviews financial operations, audits expenditures, and makes recommendations on budget matters to ensure fiscal responsibility.
                  </p>
                  <p><strong>Chair:</strong> CA. Rajendra Prasad Joshi</p>
                </div>
              </div>
              
              <h2 className="section-title">Committee Participation</h2>
              <p>
                NEPHA members are encouraged to participate in subcommittees based on their interests and expertise. Serving on committees provides valuable opportunities for professional development, networking, and contributing to the advancement of public health in Nepal.
              </p>
              
              <h2 className="section-title">Meeting Schedule</h2>
              <p>
                Most subcommittees meet quarterly, with additional meetings scheduled as needed for special projects or urgent matters. Meeting agendas, minutes, and reports are shared with committee members and relevant stakeholders.
              </p>
              
              <h2 className="section-title">Contact Information</h2>
              <p>
                For more information about subcommittees or to express interest in joining a committee, please contact:
              </p>
              <p>
                Email: committees@nepha.org.np<br />
                Phone: +977-XXXXXXXXXX
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SubCommitteePage;