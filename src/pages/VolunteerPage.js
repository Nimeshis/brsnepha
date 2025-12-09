import React, { useState } from 'react';
import Layout from '../components/Layout';
import './VolunteerPage.css';

const VolunteerPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    availability: '',
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
    alert('Thank you for your interest in volunteering! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      skills: '',
      availability: '',
      message: ''
    });
  };

  const volunteerOpportunities = [
    {
      id: 1,
      title: "Medical Volunteer",
      description: "Provide medical assistance in rural health camps and clinics.",
      requirements: ["Medical degree or certification", "Minimum 6 months commitment"]
    },
    {
      id: 2,
      title: "Community Outreach",
      description: "Engage with local communities to promote health awareness.",
      requirements: ["Strong communication skills", "Fluency in Nepali preferred"]
    },
    {
      id: 3,
      title: "Education Support",
      description: "Help teach health and hygiene practices in schools.",
      requirements: ["Teaching experience", "Passion for education"]
    },
    {
      id: 4,
      title: "Administrative Support",
      description: "Assist with office work, data entry, and coordination.",
      requirements: ["Computer literacy", "Organizational skills"]
    }
  ];

  return (
    <Layout>
      <div className="volunteer-page">
        <div className="page-header">
          <div className="container">
            <h1>Volunteer With Us</h1>
            <p>Make a difference in the lives of communities across Nepal</p>
          </div>
        </div>

        <div className="container">
          <div className="volunteer-content">
            <div className="volunteer-opportunities">
              <h2 className="section-title">Volunteer Opportunities</h2>
              <div className="opportunities-grid">
                {volunteerOpportunities.map((opportunity) => (
                  <div className="opportunity-card" key={opportunity.id}>
                    <h3>{opportunity.title}</h3>
                    <p>{opportunity.description}</p>
                    <div className="requirements">
                      <h4>Requirements:</h4>
                      <ul>
                        {opportunity.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <button className="btn primary">Apply Now</button>
                  </div>
                ))}
              </div>
            </div>

            <div className="volunteer-form-section">
              <h2 className="section-title">General Volunteer Application</h2>
              <form onSubmit={handleSubmit} className="volunteer-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
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
                  <label htmlFor="email">Email Address *</label>
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
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="skills">Skills & Expertise</label>
                  <textarea
                    id="skills"
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    placeholder="List your relevant skills and expertise"
                    rows="3"
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="availability">Availability</label>
                  <select
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                  >
                    <option value="">Select your availability</option>
                    <option value="weekends">Weekends only</option>
                    <option value="evenings">Evenings only</option>
                    <option value="flexible">Flexible schedule</option>
                    <option value="full-time">Full-time (3+ months)</option>
                    <option value="part-time">Part-time (1-3 months)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Why do you want to volunteer? *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us why you're interested in volunteering with NEPHA"
                    rows="4"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn primary volunteer-btn">Submit Application</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VolunteerPage;