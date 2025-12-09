import React from 'react';
import Layout from '../components/Layout';
import './EventsPage.css';

const ScientificCommittee2Page = () => {
  return (
    <Layout>
      <div className="events-page">
        <div className="page-header">
          <div className="container">
            <h1>Scientific Committee</h1>
            <p>Ensuring Excellence in Research and Academic Programs</p>
          </div>
        </div>
        
        <div className="container">
          <div className="events-content">
            <div className="events-section">
              <h2 className="section-title">Role and Responsibilities</h2>
              <p>
                The Scientific Committee of the Nepal Public Health Association (NEPHA) plays a crucial role in 
                maintaining the academic and scientific rigor of our conferences, workshops, and research initiatives. 
                Composed of experienced researchers, academics, and public health professionals, the committee ensures 
                that all scientific activities meet high standards of quality and relevance.
              </p>
              
              <div className="committee-functions">
                <h3>Key Functions</h3>
                <ul>
                  <li><strong>Abstract Review:</strong> Overseeing the peer review process for conference abstract submissions</li>
                  <li><strong>Program Development:</strong> Designing scientific programs and selecting presentations</li>
                  <li><strong>Quality Assurance:</strong> Ensuring scientific rigor and relevance of all academic content</li>
                  <li><strong>Speaker Selection:</strong> Identifying and inviting expert speakers and facilitators</li>
                  <li><strong>Research Promotion:</strong> Encouraging high-quality research among members and partners</li>
                  <li><strong>Publication Oversight:</strong> Guiding the development of conference proceedings and other scholarly outputs</li>
                </ul>
              </div>
              
              <div className="committee-structure">
                <h3>Committee Structure</h3>
                <div className="structure-details">
                  <h4>Leadership</h4>
                  <ul>
                    <li><strong>Chairperson:</strong> Provides overall leadership and direction to the committee</li>
                    <li><strong>Coordinator:</strong> Manages day-to-day operations and communications</li>
                    <li><strong>Secretary:</strong> Handles documentation and administrative functions</li>
                  </ul>
                  
                  <h4>Specialized Subcommittees</h4>
                  <ul>
                    <li><strong>Abstract Review Subcommittee:</strong> Focuses on evaluating research submissions</li>
                    <li><strong>Program Development Subcommittee:</strong> Designs conference and workshop agendas</li>
                    <li><strong>Publication Subcommittee:</strong> Oversees scholarly publications and dissemination</li>
                  </ul>
                  
                  <h4>Membership Composition</h4>
                  <ul>
                    <li>Senior academics and researchers from universities</li>
                    <li>Experienced practitioners from government and NGOs</li>
                    <li>Representatives from professional medical associations</li>
                    <li>Young researchers and emerging scholars</li>
                  </ul>
                </div>
              </div>
              
              <div className="selection-process">
                <h3>Selection Process</h3>
                <p>
                  Members of the Scientific Committee are selected through a rigorous process that considers:
                </p>
                <ul>
                  <li>Academic qualifications and research experience</li>
                  <li>Expertise in specific public health domains</li>
                  <li>Previous contributions to NEPHA activities</li>
                  <li>Commitment to advancing public health science</li>
                  <li>Geographic and institutional diversity</li>
                </ul>
                <p>
                  Committee members typically serve 3-year terms, with possibility of renewal based on performance 
                  and organizational needs.
                </p>
              </div>
              
              <div className="current-members">
                <h3>Current Committee Members</h3>
                <p>
                  The current Scientific Committee comprises leading experts from various disciplines of public health. 
                  For a complete list of current members and their biographical information, please refer to our 
                  organizational directory or contact our secretariat.
                </p>
              </div>
              
              <div className="contact-info">
                <h3>Contact the Scientific Committee</h3>
                <p>
                  For inquiries about research collaborations, conference presentations, or committee activities, 
                  please contact our Scientific Committee Coordinator:
                </p>
                <p>
                  Email: scientific.committee@nepha.org.np<br />
                  Phone: +977-1-5449509
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ScientificCommittee2Page;