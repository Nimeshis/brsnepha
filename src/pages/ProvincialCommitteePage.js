import React from 'react';
import Layout from '../components/Layout';
import './AboutPage.css';

const ProvincialCommitteePage = () => {
  return (
    <Layout>
      <div className="about-page">
        <div className="page-header">
          <div className="container">
            <h1>Provincial Committee</h1>
            <p>Our Provincial Leadership</p>
          </div>
        </div>
        
        <div className="container">
          <div className="about-content">
            <div className="about-section">
              <h2 className="section-title">Provincial Committee Structure</h2>
              <p>
                The Nepal Public Health Association (NEPHA) has established Provincial Committees in each of Nepal's seven provinces to ensure effective representation and implementation of our programs at the local level. These committees play a crucial role in adapting national initiatives to provincial contexts and addressing region-specific public health challenges.
              </p>
              
              <h2 className="section-title">Role and Responsibilities</h2>
              <p>
                Provincial Committees are responsible for:
              </p>
              
              <ul>
                <li>Implementing NEPHA programs and activities at the provincial level</li>
                <li>Identifying and addressing region-specific public health issues</li>
                <li>Facilitating communication between national headquarters and local members</li>
                <li>Organizing provincial conferences, workshops, and training sessions</li>
                <li>Representing provincial interests in national policy discussions</li>
                <li>Mobilizing local resources and partnerships for public health initiatives</li>
                <li>Collecting and reporting data on public health indicators in their province</li>
              </ul>
              
              <h2 className="section-title">Committee Composition</h2>
              
              <div className="committee-structure">
                <div className="role">
                  <h3>Provincial President</h3>
                  <p>
                    Provides overall leadership for the provincial committee and represents the province at national meetings. Coordinates with the national executive committee and oversees implementation of provincial programs.
                  </p>
                </div>
                
                <div className="role">
                  <h3>Provincial Secretary</h3>
                  <p>
                    Manages administrative functions, maintains records, and handles communications for the provincial committee. Prepares reports and ensures documentation of all provincial activities.
                  </p>
                </div>
                
                <div className="role">
                  <h3>Provincial Treasurer</h3>
                  <p>
                    Manages provincial finances, oversees budget implementation, and ensures proper accounting of funds allocated for provincial activities.
                  </p>
                </div>
                
                <div className="role">
                  <h3>Subject Matter Experts</h3>
                  <p>
                    Members with expertise in specific areas such as epidemiology, health policy, environmental health, and community health who provide technical guidance for provincial initiatives.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Provincial Chapters</h2>
              
              <div className="provinces">
                <div className="province">
                  <h3>Koshi Province</h3>
                  <p>
                    Led by Provincial President Brajesh Kumar Mehata, the Koshi Province committee focuses on addressing public health challenges in the easternmost region of Nepal, including issues related to flood management and cross-border health concerns.
                  </p>
                </div>
                
                <div className="province">
                  <h3>Madhesh Province</h3>
                  <p>
                    Under the leadership of Provincial President Amarendra Ray, this committee addresses health issues specific to the southern plains of Nepal, including vector-borne diseases and malnutrition.
                  </p>
                </div>
                
                <div className="province">
                  <h3>Bagmati Province</h3>
                  <p>
                    [Information to be updated]
                  </p>
                </div>
                
                <div className="province">
                  <h3>Gandaki Province</h3>
                  <p>
                    [Information to be updated]
                  </p>
                </div>
                
                <div className="province">
                  <h3>Lumbini Province</h3>
                  <p>
                    [Information to be updated]
                  </p>
                </div>
                
                <div className="province">
                  <h3>Karnali Province</h3>
                  <p>
                    [Information to be updated]
                  </p>
                </div>
                
                <div className="province">
                  <h3>Sudurpaschim Province</h3>
                  <p>
                    [Information to be updated]
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Coordination with National Office</h2>
              <p>
                Provincial Committees maintain regular communication with the national office through:
              </p>
              
              <ul>
                <li>Monthly video conferences with national leadership</li>
                <li>Quarterly progress reports submitted to the national office</li>
                <li>Annual provincial conferences with national participation</li>
                <li>Joint planning sessions for major initiatives</li>
                <li>Shared digital platforms for communication and resource sharing</li>
              </ul>
              
              <h2 className="section-title">Capacity Building</h2>
              <p>
                NEPHA provides ongoing support to Provincial Committees through:
              </p>
              
              <ul>
                <li>Training programs for committee members</li>
                <li>Technical assistance for program implementation</li>
                <li>Access to national resources and expertise</li>
                <li>Funding support for provincial activities</li>
                <li>Mentorship from experienced national staff</li>
              </ul>
              
              <h2 className="section-title">Contact Information</h2>
              <p>
                For more information about Provincial Committees or to get involved, please contact:
              </p>
              <p>
                Email: provinces@nepha.org.np<br />
                Phone: +977-XXXXXXXXXX
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProvincialCommitteePage;