import React, { useState } from 'react';
import Layout from '../components/Layout';
import './LoginPage.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted:', formData);
  };

  return (
    <Layout>
      <div className="login-page">
        <div className="container">
          <div className="login-container">
            <div className="login-header">
              <h1>Login</h1>
            </div>
            
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username or Email</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group checkbox-group">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>
              
              <button type="submit" className="btn primary">Login</button>
              
              <div className="forgot-password">
                <a href="#forgot">Forgot Password?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;