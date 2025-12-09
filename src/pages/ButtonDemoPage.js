import React from 'react';
import Button from '../components/Button';
import './ButtonDemoPage.css';

const ButtonDemoPage = () => {
  return (
    <div className="button-demo-page">
      <div className="container">
        <header className="page-header">
          <h1>Button Component Demo</h1>
          <p>Showcasing the reusable button component with different variants and sizes</p>
        </header>

        <section className="demo-section">
          <h2>Variants</h2>
          <div className="button-group">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
          </div>
        </section>

        <section className="demo-section">
          <h2>Sizes</h2>
          <div className="button-group">
            <Button variant="primary" size="small">Small Button</Button>
            <Button variant="primary" size="medium">Medium Button</Button>
            <Button variant="primary" size="large">Large Button</Button>
          </div>
        </section>

        <section className="demo-section">
          <h2>States</h2>
          <div className="button-group">
            <Button variant="primary">Normal State</Button>
            <Button variant="primary" disabled>Disabled State</Button>
          </div>
        </section>

        <section className="demo-section">
          <h2>Full Width</h2>
          <div className="button-group">
            <Button variant="primary" fullWidth>Full Width Button</Button>
          </div>
        </section>

        <section className="demo-section">
          <h2>Interactive Demo</h2>
          <div className="button-group">
            <Button 
              variant="primary" 
              onClick={() => alert('Primary button clicked!')}
            >
              Click Me!
            </Button>
            <Button 
              variant="secondary" 
              onClick={() => console.log('Secondary button clicked!')}
            >
              Log to Console
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ButtonDemoPage;