import React from 'react';
import Layout from '../components/Layout';
import './NewsPage.css';

const ManuscriptSubmissionPage = () => {
  return (
    <Layout>
      <div className="news-page">
        <div className="page-header">
          <div className="container">
            <h1>Manuscript Submission</h1>
            <p>Submit Your Research to NEPHA Publications</p>
          </div>
        </div>
        
        <div className="container">
          <div className="news-content">
            <div className="news-section">
              <h2 className="section-title">Submitting to NEPHA Publications</h2>
              <p>
                The Nepal Public Health Association (NEPHA) welcomes manuscript submissions for consideration in our publications, including the Nepal Journal of Public Health and our periodic bulletins. We encourage researchers, practitioners, and scholars to share their work with our community of public health professionals.
              </p>
              
              <h2 className="section-title">Submission Guidelines</h2>
              
              <div className="guidelines-section">
                <div className="guideline">
                  <h3>Eligibility</h3>
                  <p>
                    Manuscripts may be submitted by individuals or groups engaged in public health research, practice, or education. All submissions must be original work that has not been published elsewhere.
                  </p>
                </div>
                
                <div className="guideline">
                  <h3>Types of Manuscripts</h3>
                  <p>
                    We accept the following types of manuscripts:
                  </p>
                  <ul>
                    <li>Original research articles</li>
                    <li>Review articles</li>
                    <li>Case studies</li>
                    <li>Policy analyses</li>
                    <li>Commentaries and perspectives</li>
                    <li>Letters to the editor</li>
                  </ul>
                </div>
                
                <div className="guideline">
                  <h3>Content Requirements</h3>
                  <p>
                    Manuscripts should address issues relevant to public health in Nepal or the broader South Asian region. Topics of particular interest include:
                  </p>
                  <ul>
                    <li>Epidemiology and disease surveillance</li>
                    <li>Health policy and systems research</li>
                    <li>Environmental and occupational health</li>
                    <li>Maternal and child health</li>
                    <li>Nutrition and food security</li>
                    <li>Infectious disease control</li>
                    <li>Mental health and substance abuse</li>
                    <li>Health equity and social determinants</li>
                  </ul>
                </div>
              </div>
              
              <h2 className="section-title">Formatting Requirements</h2>
              
              <div className="formatting-section">
                <div className="requirement">
                  <h3>General Formatting</h3>
                  <ul>
                    <li>Manuscripts should be written in English</li>
                    <li>Text should be double-spaced with 1-inch margins</li>
                    <li>Font should be Times New Roman, size 12</li>
                    <li>Pages should be numbered consecutively</li>
                  </ul>
                </div>
                
                <div className="requirement">
                  <h3>Structure</h3>
                  <p>
                    Manuscripts should generally follow this structure:
                  </p>
                  <ol>
                    <li>Title page with author information</li>
                    <li>Abstract (250 words maximum)</li>
                    <li>Keywords (3-6 terms)</li>
                    <li>Main text (Introduction, Methods, Results, Discussion)</li>
                    <li>References</li>
                    <li>Tables and figures</li>
                    <li>Appendices (if applicable)</li>
                  </ol>
                </div>
                
                <div className="requirement">
                  <h3>Reference Style</h3>
                  <p>
                    References should follow the Vancouver citation style. All references cited in the text must appear in the reference list, and all references listed must be cited in the text.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Ethical Considerations</h2>
              
              <div className="ethics-section">
                <div className="ethics">
                  <h3>Human Subjects</h3>
                  <p>
                    Research involving human subjects must have appropriate ethical approval from an institutional review board or ethics committee. This information should be included in the manuscript.
                  </p>
                </div>
                
                <div className="ethics">
                  <h3>Animal Welfare</h3>
                  <p>
                    Research involving animals must comply with national and international guidelines for animal welfare and use.
                  </p>
                </div>
                
                <div className="ethics">
                  <h3>Plagiarism</h3>
                  <p>
                    All submissions are checked for plagiarism. Plagiarism in any form is grounds for immediate rejection and possible sanctions.
                  </p>
                </div>
                
                <div className="ethics">
                  <h3>Authorship</h3>
                  <p>
                    Authorship should be based on substantial contributions to conception, design, execution, or interpretation of the research. All authors must approve the final version of the manuscript.
                  </p>
                </div>
              </div>
              
              <h2 className="section-title">Submission Process</h2>
              <p>
                To submit a manuscript, please follow these steps:
              </p>
              
              <ol>
                <li>Prepare your manuscript according to these guidelines</li>
                <li>Obtain approval from all co-authors</li>
                <li>Submit through our online submission system at: submit.nepha.org.np</li>
                <li>Include all required supplementary files</li>
                <li>Pay any applicable processing fees (waivers available for authors from low-income institutions)</li>
              </ol>
              
              <h2 className="section-title">Review Process</h2>
              <p>
                All submissions undergo a double-blind peer review process:
              </p>
              
              <ul>
                <li>Initial screening by editorial staff</li>
                <li>Assignment to at least two independent reviewers</li>
                <li>Review process typically takes 6-8 weeks</li>
                <li>Authors may be asked to revise and resubmit</li>
                <li>Final decision by the Editor-in-Chief</li>
              </ul>
              
              <h2 className="section-title">Contact Information</h2>
              <p>
                For questions about manuscript submission, please contact:
              </p>
              <p>
                Email: submissions@nepha.org.np<br />
                Phone: +977-XXXXXXXXXX
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ManuscriptSubmissionPage;