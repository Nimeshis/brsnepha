import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
// Import the NEPHA logo
import nephaLogo from '../assets/neppha.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isMembershipDropdownOpen, setIsMembershipDropdownOpen] = useState(false);
  const [isCommitteesDropdownOpen, setIsCommitteesDropdownOpen] = useState(false);
  const [isConferencesSubmenuOpen, setIsConferencesSubmenuOpen] = useState(false);
  const [isPublicationsSubmenuOpen, setIsPublicationsSubmenuOpen] = useState(false);

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsMoreDropdownOpen(false);
    setIsAboutDropdownOpen(false);
    setIsMembershipDropdownOpen(false);
    setIsCommitteesDropdownOpen(false);
    setIsConferencesSubmenuOpen(false);
    setIsPublicationsSubmenuOpen(false);
  };

  // Toggle dropdowns on mobile
  const toggleMoreDropdown = (e) => {
    e.stopPropagation();
    setIsMoreDropdownOpen(!isMoreDropdownOpen);
  };
  
  const toggleAboutDropdown = (e) => {
    e.stopPropagation();
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };
  
  const toggleMembershipDropdown = (e) => {
    e.stopPropagation();
    setIsMembershipDropdownOpen(!isMembershipDropdownOpen);
  };
  
  const toggleCommitteesDropdown = (e) => {
    e.stopPropagation();
    setIsCommitteesDropdownOpen(!isCommitteesDropdownOpen);
  };
  
  const toggleConferencesSubmenu = (e) => {
    e.stopPropagation();
    setIsConferencesSubmenuOpen(!isConferencesSubmenuOpen);
  };
  
  const togglePublicationsSubmenu = (e) => {
    e.stopPropagation();
    setIsPublicationsSubmenuOpen(!isPublicationsSubmenuOpen);
  };

  // Close dropdowns when mouse leaves the dropdown area (desktop)
  const handleMoreMouseLeave = () => {
    // Only auto-close on desktop, not mobile
    if (window.innerWidth > 992) {
      setIsMoreDropdownOpen(false);
      setIsConferencesSubmenuOpen(false);
      setIsMembershipDropdownOpen(false);
      setIsPublicationsSubmenuOpen(false);
    }
  };
  
  const handleAboutMouseLeave = () => {
    if (window.innerWidth > 992) {
      setIsAboutDropdownOpen(false);
    }
  };
  
  const handleMembershipMouseLeave = () => {
    if (window.innerWidth > 992) {
      setIsMembershipDropdownOpen(false);
    }
  };
  
  const handleCommitteesMouseLeave = () => {
    if (window.innerWidth > 992) {
      setIsCommitteesDropdownOpen(false);
    }
  };
  
  const handleConferencesMouseLeave = () => {
    if (window.innerWidth > 992) {
      setIsConferencesSubmenuOpen(false);
    }
  };
  
  const handlePublicationsMouseLeave = () => {
    if (window.innerWidth > 992) {
      setIsPublicationsSubmenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">
              <img src={nephaLogo} alt="NEPHA Logo" className="logo-image" />
            </Link>
            <div className="organization-info">
              <Link to="/" className="organization-name">
                Nepal Public Health Association
              </Link>
              <span className="organization-name-nepali">
                नेपाल जनस्वास्थ्य संघ
              </span>
            </div>
          </div>
          
          {/* Desktop Navigation - Minimal with adaptive dropdowns */}
          <nav className="navigation desktop-nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li 
                className={`dropdown ${isAboutDropdownOpen ? 'active' : ''}`}
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={handleAboutMouseLeave}
              >
                <Link to="/about">About <i className="fas fa-chevron-down"></i></Link>
                <ul className="dropdown-menu">
                  <li><Link to="/about/introduction">Introduction</Link></li>
                  <li><Link to="/about/history">History</Link></li>
                  <li><Link to="/about/mission-and-vision">Mission and Vision</Link></li>
                  <li><Link to="/about/objective">Objective</Link></li>
                  <li><Link to="/about/approach">Approach</Link></li>
                  <li><Link to="/about/activities">Activities</Link></li>
                  <li><Link to="/about/operation">Operation</Link></li>
                  <li><Link to="/about/function">Function</Link></li>
                  <li><Link to="/about/organogram">Organogram</Link></li>
                  <li><Link to="/about/downloads">Downloads</Link></li>
                  <li><Link to="/about/projects">Projects</Link></li>
                  <li><Link to="/about/partners">Partners</Link></li>
                  <li><Link to="/code-of-ethics">Code of Ethics</Link></li>
                </ul>
              </li>
              <li><Link to="/causes">Causes</Link></li>
              <li><Link to="/events">Events</Link></li>
             
              <li 
                className={`dropdown ${isCommitteesDropdownOpen ? 'active' : ''}`}
                onMouseEnter={() => setIsCommitteesDropdownOpen(true)}
                onMouseLeave={handleCommitteesMouseLeave}
              >
                <Link to="#">Committees <i className="fas fa-chevron-down"></i></Link>
                <ul className="dropdown-menu">
                  <li><Link to="/advisory-committee">Advisory Committee</Link></li>
                  <li><Link to="/sub-committee">Sub Committee</Link></li>
                  <li><Link to="/staff">Staff</Link></li>
                  <li><Link to="/central-committee">Central Committee</Link></li>
                  <li><Link to="/provincial-committee">Provincial Committee</Link></li>
                </ul>
              </li>
             
              <li 
                className={`dropdown ${isMoreDropdownOpen ? 'active' : ''}`}
                onMouseEnter={() => setIsMoreDropdownOpen(true)}
                onMouseLeave={handleMoreMouseLeave}
              >
                <Link to="#">More <i className="fas fa-chevron-down"></i></Link>
                <ul className="dropdown-menu">
                  <li className="dropdown-submenu">
                    <Link to="#" onMouseEnter={() => setIsConferencesSubmenuOpen(true)} onMouseLeave={handleConferencesMouseLeave}>Conferences <i className="fas fa-chevron-right"></i></Link>
                    <ul className="dropdown-submenu-content">
                      <li><Link to="/conference-2020">Conference 2020</Link></li>
                      <li><Link to="/conference-2025">Conference 2025</Link></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <Link to="#" onMouseEnter={() => setIsMembershipDropdownOpen(true)} onMouseLeave={handleMembershipMouseLeave}>Membership <i className="fas fa-chevron-right"></i></Link>
                    <ul className="dropdown-submenu-content">
                      <li><Link to="/individual-membership-form">Individual Membership</Link></li>
                      <li><Link to="/membership-form">Membership Registration</Link></li>
                      <li><Link to="/organizational-membership">Organizational Membership</Link></li>
                      <li><Link to="/membership-info">Membership Benefits</Link></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <Link to="#" onMouseEnter={() => setIsPublicationsSubmenuOpen(true)} onMouseLeave={handlePublicationsMouseLeave}>Publications <i className="fas fa-chevron-right"></i></Link>
                    <ul className="dropdown-submenu-content">
                      <li><Link to="/publication">Publication</Link></li>
                      <li><Link to="/publication/bidhan">Bidhan</Link></li>
                      <li><Link to="/publication/regulation">Regulation</Link></li>
                      <li><Link to="/publication/bulletine">Bulletine</Link></li>
                      <li><Link to="/about-the-journal">About the Journal</Link></li>
                      <li><Link to="/editorial-team">Editorial Team</Link></li>
                      <li><Link to="/manuscript-submission-guideline">Manuscript Submission Guideline</Link></li>
                      <li><Link to="/manuscript-submission">Manuscript Submission</Link></li>
                      <li><Link to="/archives">Archives</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/election-2078">Election 2078</Link></li>
                  <li><Link to="/election-2081">Election 2081</Link></li>
                  <li><Link to="/gallery">Gallery</Link></li>
                  <li><Link to="/news">News & Events</Link></li>
                  <li><Link to="/login">Login</Link></li>
                  {/* <li><Link to="/important-links">Important Links</Link></li> */}
                  {/* <li><Link to="/annual-general-assembly">Annual General Assembly</Link></li> */}
                </ul>
              </li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <nav className={`navigation mobile-nav ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
            <li className={`dropdown ${isAboutDropdownOpen ? 'active' : ''}`}>
              <Link to="/about" onClick={toggleAboutDropdown}>About <i className="fas fa-chevron-down"></i></Link>
              <ul className="dropdown-menu">
                <li><Link to="/about/introduction" onClick={closeMobileMenu}>Introduction</Link></li>
                <li><Link to="/about/history" onClick={closeMobileMenu}>History</Link></li>
                <li><Link to="/about/mission-and-vision" onClick={closeMobileMenu}>Mission and Vision</Link></li>
                <li><Link to="/about/objective" onClick={closeMobileMenu}>Objective</Link></li>
                <li><Link to="/about/approach" onClick={closeMobileMenu}>Approach</Link></li>
                <li><Link to="/about/activities" onClick={closeMobileMenu}>Activities</Link></li>
                <li><Link to="/about/operation" onClick={closeMobileMenu}>Operation</Link></li>
                <li><Link to="/about/function" onClick={closeMobileMenu}>Function</Link></li>
                <li><Link to="/about/organogram" onClick={closeMobileMenu}>Organogram</Link></li>
                <li><Link to="/about/downloads" onClick={closeMobileMenu}>Downloads</Link></li>
                <li><Link to="/about/projects" onClick={closeMobileMenu}>Projects</Link></li>
                <li><Link to="/about/partners" onClick={closeMobileMenu}>Partners</Link></li>
                <li><Link to="/code-of-ethics" onClick={closeMobileMenu}>Code of Ethics</Link></li>
              </ul>
            </li>
            <li><Link to="/causes" onClick={closeMobileMenu}>Causes</Link></li>
            <li><Link to="/events" onClick={closeMobileMenu}>Events</Link></li>
            
            <li className={`dropdown ${isCommitteesDropdownOpen ? 'active' : ''}`}>
              <Link to="#" onClick={toggleCommitteesDropdown}>Committees <i className="fas fa-chevron-down"></i></Link>
              <ul className="dropdown-menu">
                <li><Link to="/advisory-committee" onClick={closeMobileMenu}>Advisory Committee</Link></li>
                <li><Link to="/sub-committee" onClick={closeMobileMenu}>Sub Committee</Link></li>
                <li><Link to="/staff" onClick={closeMobileMenu}>Staff</Link></li>
                <li><Link to="/central-committee" onClick={closeMobileMenu}>Central Committee</Link></li>
                <li><Link to="/provincial-committee" onClick={closeMobileMenu}>Provincial Committee</Link></li>
              </ul>
            </li>
            <li className={`dropdown ${isMoreDropdownOpen ? 'active' : ''}`}>
              <Link to="#" onClick={toggleMoreDropdown}>More <i className="fas fa-chevron-down"></i></Link>
              <ul className="dropdown-menu">
                <li className={`dropdown-submenu ${isConferencesSubmenuOpen ? 'active' : ''}`}>
                  <Link to="#" onClick={toggleConferencesSubmenu}>Conferences <i className="fas fa-chevron-right"></i></Link>
                  <ul className="dropdown-submenu-content">
                    <li><Link to="/conference-2020" onClick={closeMobileMenu}>Conference 2020</Link></li>
                    <li><Link to="/conference-2025" onClick={closeMobileMenu}>Conference 2025</Link></li>
                  </ul>
                </li>
                <li className={`dropdown-submenu ${isMembershipDropdownOpen ? 'active' : ''}`}>
                  <Link to="#" onClick={toggleMembershipDropdown}>Membership <i className="fas fa-chevron-right"></i></Link>
                  <ul className="dropdown-submenu-content">
                    <li><Link to="/individual-membership-form" onClick={closeMobileMenu}>Individual Membership</Link></li>
                    <li><Link to="/membership-registration-form-2" onClick={closeMobileMenu}>Membership Registration</Link></li>
                    <li><Link to="/organizational-membership" onClick={closeMobileMenu}>Organizational Membership</Link></li>
                    <li><Link to="/membership-info" onClick={closeMobileMenu}>Membership Benefits</Link></li>
                  </ul>
                </li>
                <li className={`dropdown-submenu ${isPublicationsSubmenuOpen ? 'active' : ''}`}>
                  <Link to="#" onClick={togglePublicationsSubmenu}>Publications <i className="fas fa-chevron-right"></i></Link>
                  <ul className="dropdown-submenu-content">
                    <li><Link to="/publication" onClick={closeMobileMenu}>Publication</Link></li>
                    <li><Link to="/publication/bidhan" onClick={closeMobileMenu}>Bidhan</Link></li>
                    <li><Link to="/publication/regulation" onClick={closeMobileMenu}>Regulation</Link></li>
                    <li><Link to="/publication/bulletine" onClick={closeMobileMenu}>Bulletine</Link></li>
                    <li><Link to="/about-the-journal" onClick={closeMobileMenu}>About the Journal</Link></li>
                    <li><Link to="/editorial-team" onClick={closeMobileMenu}>Editorial Team</Link></li>
                    <li><Link to="/manuscript-submission-guideline" onClick={closeMobileMenu}>Manuscript Submission Guideline</Link></li>
                    <li><Link to="/manuscript-submission" onClick={closeMobileMenu}>Manuscript Submission</Link></li>
                    <li><Link to="/archives" onClick={closeMobileMenu}>Archives</Link></li>
                  </ul>
                </li>
                <li><Link to="/election-2078" onClick={closeMobileMenu}>Election 2078</Link></li>
                <li><Link to="/election-2081" onClick={closeMobileMenu}>Election 2081</Link></li>
                <li><Link to="/gallery" onClick={closeMobileMenu}>Gallery</Link></li>
                <li><Link to="/news" onClick={closeMobileMenu}>News & Events</Link></li>
                <li><Link to="/login" onClick={closeMobileMenu}>Login</Link></li>
                <li><Link to="/important-links" onClick={closeMobileMenu}>Important Links</Link></li>
                <li><Link to="/annual-general-assembly" onClick={closeMobileMenu}>Annual General Assembly</Link></li>
              </ul>
            </li>
            <li><Link to="/contact" onClick={closeMobileMenu}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;