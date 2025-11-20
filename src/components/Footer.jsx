import React, { useEffect, useState } from 'react';
import feather from 'feather-icons';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    feather.replace();

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="backto-top" style={{ opacity: showBackToTop ? 1 : 0, cursor: 'pointer' }} onClick={scrollToTop}>
      <div>
        <i data-feather="arrow-up"></i>
      </div>
    </div>
  );
};

export default Footer;
