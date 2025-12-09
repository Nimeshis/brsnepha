import React from 'react';
import Layout from '../components/Layout';
import './EventsPage.css';

const ScientificCommitteePage = () => {
  return (
    <Layout>
      <div className="events-page">
        <div className="page-header">
          <div className="container">
            <h1>Scientific Committee</h1>
            <p>Academic and Research Leadership</p>
          </div>
        </div>
        
        <div className="container">
          <div className="events-content">
            <div className="events-section">
              <h2 className="section-title">Scientific Committee Overview</h2>
              <p>
                The Scientific Committee of the Nepal Public Health Association (NEPHA) plays a crucial role in ensuring the academic excellence and scientific rigor of our conferences, publications, and research initiatives. Comprised of leading experts in various fields of public health, the committee provides guidance on scientific content and maintains the highest standards of scholarly activity.
              </p>
              
              <h2 className="section-title">Committee Responsibilities</h2>
              
              <div className="responsibilities-grid">
                <div className="responsibility">
                  <h3>Conference Program Development</h3>
                  <p>
                    Designing conference themes, selecting keynote speakers, and developing scientific tracks that address current and emerging public health issues in Nepal.
                  </p>
                </div>
                
                <div className="responsibility">
                  <h3>Abstract Review Process</h3>
                  <p>
                    Managing the peer review process for conference abstract submissions, ensuring fair evaluation and selection of high-quality presentations.
                  </p>
                </div>
                
                <div className="responsibility">
                  <h3>Research Guidance</h3>
                  <p>
                    Providing methodological guidance for research conducted under NEPHA's auspices and reviewing research proposals for scientific merit.
                  </p>
                </div>
                
                <div className="responsibility">
                  <h3>Publication Oversight</h3>
                  <p>
                    Ensuring the scientific quality and integrity of publications produced by NEPHA, including the Nepal Journal of Public Health.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Committee Composition</h2>
              <p>
                The Scientific Committee includes experts from diverse areas of public health:
              </p>
              
              <ul>
                <li>Epidemiologists and biostatisticians</li>
                <li>Health policy and systems researchers</li>
                <li>Environmental and occupational health specialists</li>
                <li>Maternal and child health experts</li>
                <li>Infectious disease specialists</li>
                <li>Mental health and substance abuse researchers</li>
                <li>Nutritionists and food security experts</li>
                <li>Health education and promotion specialists</li>
              </ul>
              
              <h2 className="section-title">Selection Criteria</h2>
              <p>
                Members are selected based on:
              </p>
              
              <ul>
                <li>Advanced degrees in relevant fields (Master's or Doctoral level)</li>
                <li>Significant contributions to public health research or practice</li>
                <li>Experience in peer review processes</li>
                <li>Strong publication record in reputable journals</li>
                <li>Commitment to advancing public health in Nepal</li>
                <li>Ability to work collaboratively in multidisciplinary teams</li>
              </ul>
              
              <h2 className="section-title">Meeting Structure</h2>
              <p>
                The committee meets quarterly to:
              </p>
              
              <ul>
                <li>Review and approve conference themes and programs</li>
                <li>Evaluate abstract submissions for conferences</li>
                <li>Discuss emerging research priorities</li>
                <li>Review and recommend policies for research activities</li>
                <li>Plan special scientific sessions and workshops</li>
              </ul>
              
              <h2 className="section-title">Subcommittees</h2>
              
              <div className="subcommittees">
                <div className="subcommittee">
                  <h3>Research Ethics Subcommittee</h3>
                  <p>
                    Reviews research proposals for ethical considerations and ensures compliance with national and international research ethics standards.
                  </p>
                </div>
                
                <div className="subcommittee">
                  <h3>Publication Standards Subcommittee</h3>
                  <p>
                    Develops and maintains standards for NEPHA publications, including author guidelines, peer review processes, and editorial policies.
                  </p>
                </div>
                
                <div className="subcommittee">
                  <h3>Emerging Issues Subcommittee</h3>
                  <p>
                    Monitors emerging public health issues and recommends appropriate research and response strategies.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Collaboration and Partnerships</h2>
              <p>
                The Scientific Committee works closely with:
              </p>
              
              <ul>
                <li>Academic institutions across Nepal</li>
                <li>International research organizations</li>
                <li>Government health research bodies</li>
                <li>Professional associations in related fields</li>
                <li>Funding agencies and donors</li>
              </ul>
              
              <h2 className="section-title">Get Involved</h2>
              <p>
                Qualified professionals interested in contributing to NEPHA's scientific activities are encouraged to apply for membership on the Scientific Committee or its subcommittees.
              </p>
              <p>
                Contact us at: scientific@nepha.org.np
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ScientificCommitteePage;