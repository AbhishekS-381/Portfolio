import React, { useState, useEffect } from 'react';

const Header = ({ toggleMenu }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`rn-header header-default black-logo-version header--fixed header--sticky ${isSticky ? 'sticky' : ''}`}>
      <div className="header-wrapper rn-popup-mobile-menu m--0 row align-items-center">
        <div className="col-lg-2 col-6">
          <div className="header-left">
            <div className="logo">
              <a href="/" style={{ textDecoration: 'none' }}>
                <h2 style={{ margin: 0, fontSize: '24px', color: 'var(--primary-color)', fontFamily: 'var(--font-heading)' }}>
                  ABHISHEK<span style={{ color: 'var(--secondary-color)' }}>.DEV</span>
                </h2>
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-10 col-6">
          <div className="header-center">
            <nav id="sideNav" className="mainmenu-nav navbar-example2 d-none d-xl-block">
              <ul className="primary-menu nav nav-pills">
                <li className="nav-item"><a className="nav-link smoth-animation active" href="#home">Home</a></li>
                <li className="nav-item"><a className="nav-link smoth-animation" href="#features">Projects</a></li>
                <li className="nav-item"><a className="nav-link smoth-animation" href="#resume">Resume</a></li>
                <li className="nav-item"><a className="nav-link smoth-animation" href="#contacts">Contact</a></li>
              </ul>
            </nav>

            <div className="header-right">
              <div className="hamberger-menu d-block d-xl-none">
                <i id="menuBtn" className="feather-menu hamburger-menu" onClick={toggleMenu}></i>
              </div>
              <div className="close-menu d-block">
                <span className="closeTrigger">
                  <i data-feather="x"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
