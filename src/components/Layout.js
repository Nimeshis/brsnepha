import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../theme.css';
import './Layout.css';

const Layout = ({ children, hasHeader = true }) => {
  return (
    <div className="layout">
      {hasHeader && <Header />}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;