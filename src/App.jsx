import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="template-color-1 spybody" data-spy="scroll" data-target=".navbar-example2" data-offset="70">
      <Header toggleMenu={toggleMenu} />
      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <main className="main-page-wrapper">
        <Home />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
