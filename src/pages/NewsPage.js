import React from 'react';
import Layout from '../components/Layout';
import './NewsPage.css';

const NewsPage = () => {
  const newsItems = [
    {
      id: 1,
      title: "Annual General Assembly",
      date: "November 21, 2025",
      category: "NEPHA News",
      excerpt: "The annual general assembly of NEPHA will be held on November 21, 2025."
    },
    {
      id: 2,
      title: "एक पालिका, एक जनस्वास्थ्य अधिकृत",
      date: "June 29, 2025",
      category: "NEPHA News",
      excerpt: "Initiative to establish one public health authority per municipality."
    },
    {
      id: 3,
      title: "World Blood Donor Day 2025",
      date: "June 29, 2025",
      category: "Press Release",
      excerpt: "Celebrating voluntary blood donation and raising awareness."
    },
    {
      id: 4,
      title: "Meeting with Academic Public Health professionals",
      date: "June 29, 2025",
      category: "NEPHA News",
      excerpt: "Discussion on collaboration between NEPHA and academic institutions."
    },
    {
      id: 5,
      title: "World Environment Day 2025",
      date: "June 29, 2025",
      category: "Press Release",
      excerpt: "Promoting environmental health and sustainability."
    },
    {
      id: 6,
      title: "World No Tobacco Day 2025",
      date: "June 29, 2025",
      category: "NEPHA News",
      excerpt: "Campaign to raise awareness about tobacco control."
    }
  ];

  return (
    <Layout>
      <div className="news-page">
        <div className="container">
          <h1>News & Events</h1>
          <div className="news-grid">
            {newsItems.map(item => (
              <div className="news-card" key={item.id}>
                <div className="news-image"></div>
                <div className="news-content">
                  <span className="news-date">{item.date}</span>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <span className="news-category">{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewsPage;