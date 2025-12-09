import React from 'react';
import Layout from '../components/Layout';
import './NewsArchivePage.css';

const NewsArchivePage = () => {
  // Sample news categories
  const newsCategories = [
    { id: 1, name: 'Announcements', count: 2, icon: '📢' },
    { id: 2, name: 'Conference', count: 0, icon: '🎤' },
    { id: 3, name: 'Events', count: 1, icon: '📅' },
    { id: 4, name: 'Health News', count: 0, icon: '🏥' },
    { id: 5, name: 'NEPHA News', count: 27, icon: '📰' },
    { id: 6, name: 'Press Release', count: 18, icon: '📄' }
  ];

  // Sample news items
  const newsItems = [
    {
      id: 1,
      title: 'Annual General Assembly',
      date: 'November 21, 2025',
      category: 'NEPHA News',
      excerpt: 'Details about the upcoming annual general assembly meeting...',
      image: 'https://nepha.org.np/wp-content/themes/nepalpublic/assets/images/dummy.png'
    },
    {
      id: 2,
      title: 'एक पालिका, एक जनस्वास्थ्य अधिकृत',
      date: 'June 29, 2025',
      category: 'NEPHA News',
      excerpt: 'Initiative to establish health officials in local governments...',
      image: 'https://nepha.org.np/wp-content/themes/nepalpublic/assets/images/dummy.png'
    },
    {
      id: 3,
      title: 'World Blood Donor Day 2025',
      date: 'June 29, 2025',
      category: 'Press Release',
      excerpt: 'Celebrating blood donors and raising awareness about blood donation...',
      image: 'https://nepha.org.np/wp-content/themes/nepalpublic/assets/images/dummy.png'
    },
    {
      id: 4,
      title: 'Meeting with Academic Public Health professionals',
      date: 'June 29, 2025',
      category: 'NEPHA News',
      excerpt: 'Collaboration meeting with academic institutions...',
      image: 'https://nepha.org.np/wp-content/themes/nepalpublic/assets/images/dummy.png'
    },
    {
      id: 5,
      title: 'World Environment Day 2025',
      date: 'June 29, 2025',
      category: 'Press Release',
      excerpt: 'Promoting environmental health awareness...',
      image: 'https://nepha.org.np/wp-content/themes/nepalpublic/assets/images/dummy.png'
    }
  ];

  return (
    <Layout>
      <div className="news-archive-page">
        <div className="container">
          <div className="page-header">
            <h1>News & Events</h1>
            <p>Stay updated with our latest news and events</p>
          </div>
          
          <div className="news-content">
            <div className="categories-section">
              <h2 className="section-title">News Categories</h2>
              <div className="categories-grid">
                {newsCategories.map((category) => (
                  <div className="category-card" key={category.id}>
                    <div className="category-icon">{category.icon}</div>
                    <div className="category-info">
                      <h3>{category.name}</h3>
                      <span className="category-count">{category.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="latest-news">
              <h2 className="section-title">Latest News</h2>
              <div className="news-grid">
                {newsItems.map((news) => (
                  <div className="news-card" key={news.id}>
                    <div className="news-image">
                      <img src={news.image} alt={news.title} />
                    </div>
                    <div className="news-content">
                      <div className="news-meta">
                        <span className="news-category">{news.category}</span>
                        <span className="news-date">{news.date}</span>
                      </div>
                      <h3 className="news-title">{news.title}</h3>
                      <p className="news-excerpt">{news.excerpt}</p>
                      <button className="btn primary">Read More</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewsArchivePage;