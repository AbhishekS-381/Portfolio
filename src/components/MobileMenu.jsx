import React from 'react';

const MobileMenu = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className={`popup-mobile-menu ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="inner">
        <div className="menu-top">
          <div className="menu-header">
            <a className="logo" href="/" style={{ textDecoration: 'none' }}>
              <h2 style={{ margin: 0, fontSize: '24px', color: 'var(--primary-color)', fontFamily: 'var(--font-heading)' }}>
                ABHISHEK<span style={{ color: 'var(--secondary-color)' }}>.DEV</span>
              </h2>
            </a>
            <div className="close-button">
              <button className="close-menu-activation close" onClick={toggleMenu}><i data-feather="x"></i></button>
            </div>
          </div>
        </div>
        <div className="content">
          <ul className="primary-menu nav nav-pills">
            <li className="nav-item"><a className="nav-link smoth-animation active" href="#home" onClick={toggleMenu}>Home</a></li>
            <li className="nav-item"><a className="nav-link smoth-animation" href="#features" onClick={toggleMenu}>Projects</a></li>
            <li className="nav-item"><a className="nav-link smoth-animation" href="#resume" onClick={toggleMenu}>Resume</a></li>
            <li className="nav-item"><a className="nav-link smoth-animation" href="#contacts" onClick={toggleMenu}>Contact</a></li>
          </ul>

          <div className="social-share-style-1 mt--40">
            <span className="title">connect with me</span>
            <ul className="social-share d-flex liststyle">
              <li className="facebook"><a href="https://www.facebook.com/profile.php?id=100006960281144&mibextid=ZbWKwL">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a></li>
              <li className="instagram"><a href="https://www.instagram.com/abhishek_shankar_381/">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a></li>
              <li className="linkedin"><a href="https://www.linkedin.com/in/abh1shek-s/">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
