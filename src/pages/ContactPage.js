import React, { useState } from 'react';
import Layout from '../components/Layout';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    alert('Thank you for your message. We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <Layout>
      <div className="contact-page">
        <div className="container">
          <h1>Contact Us</h1>
          <div className="contact-content">
            <div className="contact-info">
              <h2 className="section-title">Get in Touch</h2>
              <p>
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <h3>Email</h3>
                  <p>info@nepha.org.np</p>
                </div>
                
                <div className="contact-item">
                  <h3>Phone</h3>
                  <p>+977-XXXXXXXXXX</p>
                </div>
                
                <div className="contact-item">
                  <h3>Address</h3>
                  <p>Kathmandu, Nepal</p>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <h2 className="section-title">Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter subject" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message" 
                    rows="5" 
                    required 
                  ></textarea>
                </div>
                
                <button type="submit" className="btn primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;