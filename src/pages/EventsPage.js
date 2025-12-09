import React from 'react';
import Layout from '../components/Layout';
import './EventsPage.css';

const EventsPage = () => {
  const events = [
    {
      id: 1,
      title: "Annual Health Conference 2025",
      date: "December 15, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Kathmandu Conference Center",
      description: "Join us for our annual conference featuring leading experts in public health.",
      image: ""
    },
    {
      id: 2,
      title: "Community Health Camp",
      date: "January 20, 2026",
      time: "8:00 AM - 4:00 PM",
      location: "Pokhara Community Center",
      description: "Free health screening and consultation services for local communities.",
      image: ""
    },
    {
      id: 3,
      title: "Volunteer Training Workshop",
      date: "February 5, 2026",
      time: "10:00 AM - 3:00 PM",
      location: "NEPHA Headquarters, Kathmandu",
      description: "Training session for new volunteers joining our organization.",
      image: ""
    },
    {
      id: 4,
      title: "World Health Day Celebration",
      date: "April 7, 2026",
      time: "12:00 PM - 6:00 PM",
      location: "Durbar Square, Kathmandu",
      description: "Public event celebrating World Health Day with health awareness activities.",
      image: ""
    }
  ];

  return (
    <Layout>
      <div className="events-page">
        <div className="page-header">
          <div className="container">
            <h1>Upcoming Events</h1>
            <p>Join us for our upcoming events and activities</p>
          </div>
        </div>

        <div className="container">
          <div className="events-list">
            {events.map((event) => (
              <div className="event-card" key={event.id}>
                <div className="event-date">
                  <div className="date-number">{new Date(event.date).getDate()}</div>
                  <div className="date-month">{new Date(event.date).toLocaleString('default', { month: 'short' })}</div>
                </div>
                <div className="event-content">
                  <h3>{event.title}</h3>
                  <div className="event-meta">
                    <span className="event-time"><i className="icon-clock"></i> {event.time}</span>
                    <span className="event-location"><i className="icon-location"></i> {event.location}</span>
                  </div>
                  <p>{event.description}</p>
                  <button className="btn primary">Register Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EventsPage;