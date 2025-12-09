import React from 'react';
import Layout from '../components/Layout';
import './ElectionPage.css';

const ElectionPage = () => {
  const electionData = [
    {
      id: 1,
      sn: '१.',
      description: 'निर्वाचन सम्बन्धि सूचना',
      date: '२०८०/१०/२५',
      link: '#',
      englishDescription: 'Election Related Notice',
      englishDate: '2080/10/25'
    },
    {
      id: 2,
      sn: '२.',
      description: 'निर्वाचन सम्बन्धि  विस्तृत कार्य तालिका',
      date: '२०८०/१२/१४',
      link: '#',
      englishDescription: 'Detailed Election Work Schedule',
      englishDate: '2080/12/14'
    },
    {
      id: 3,
      sn: '३.',
      description: 'मतदाता नामावली : नेफाको सम्पूर्ण मतदाताहरुको नामावली यहाँ हेर्नुहोस  ।',
      date: '२०८०/१२/१४',
      link: '#',
      englishDescription: 'Voter List: View complete voter list here.',
      englishDate: '2080/12/14'
    },
    {
      id: 4,
      sn: '४.',
      description: 'अन्तिम नामावली प्रकाशन',
      date: '२०८०/१२/२०',
      link: '#',
      englishDescription: 'Final List Publication',
      englishDate: '2080/12/20'
    },
    {
      id: 5,
      sn: '५.',
      description: 'उम्मेदवारी दर्ता शुल्क',
      date: '२०८०/१२/२२',
      link: '#',
      englishDescription: 'Candidate Registration Fee',
      englishDate: '2080/12/22'
    },
    {
      id: 6,
      sn: '६.',
      description: 'उम्मेदवारको नामावली सुची प्रकाशन',
      date: '२०८०/१२/२३',
      link: '#',
      englishDescription: 'Publication of Candidate List',
      englishDate: '2080/12/23'
    }
  ];

  return (
    <Layout>
      <div className="election-page">
        <div className="container">
          <div className="page-header">
            <h1>Election 2081</h1>
            <h2>नेपाल जनस्वास्थ्य संघको निर्वाचन (२०८१)</h2>
            <h3>NEPHA ELECTION (2081)</h3>
          </div>
          
          <div className="election-content">
            <p>निर्वाचन सम्बन्धि कार्य तालिका र आवश्यक  लिंकहरु</p>
            <p>Election Related Work Schedule and Necessary Links</p>
            
            <div className="table-container">
              <table className="election-table">
                <thead>
                  <tr>
                    <th>क्र.स</th>
                    <th>विवरण</th>
                    <th>प्रकाशित मिति</th>
                    <th>लिंक</th>
                    <th>SN.</th>
                    <th>Description</th>
                    <th>Published Date</th>
                    <th>Link</th>
                  </tr>
                </thead>
                <tbody>
                  {electionData.map((item) => (
                    <tr key={item.id}>
                      <td>{item.sn}</td>
                      <td>{item.description}</td>
                      <td>{item.date}</td>
                      <td><a href={item.link} className="btn primary">Click Here</a></td>
                      <td>{item.id}.</td>
                      <td>{item.englishDescription}</td>
                      <td>{item.englishDate}</td>
                      <td><a href={item.link} className="btn primary">Click Here</a></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="election-note">
              <p>कार्य तालिका बमोजिम थप कार्यको सूचना र लिंकहरु यहाँ प्रकाशित हुने छ ।</p>
              <p>Additional work information and links will be published here as per the schedule.</p>
              <br />
              <p>धन्यवाद !</p>
              <p>Thank You!</p>
              <br />
              <p>केन्द्रीय निर्वाचन समिति</p>
              <p>Central Election Committee</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ElectionPage;