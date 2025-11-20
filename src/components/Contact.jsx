import React from 'react';
import feather from 'feather-icons';
import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <div className="rn-contact-area rn-section-gap section-separator" id="contacts">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <span className="subtitle">Contact</span>
              <h2 className="title">Connect With Me</h2>
            </div>
          </div>
        </div>
        <div className="row mt--50 mt_md--40 mt_sm--40 mt-contact-sm">
          <div className="col-lg-12">
            <div className="contact-about-area">
              <div className="title-area">
                <h4 className="title">Abhishek S</h4>
                <span>Software Engineer</span>
              </div>
              <div className="description">
                <p>Contact me via mail and mobile.
                </p>
                <span className="phone">Phone: <a href="https://wa.me/9080441018" target="_blank">+91 9080441018</a></span>
                <span className="mail">Email: <a href="mailto:abhishek31023@gmail.com"
                  target="_blank">abhishek31023@gmail.com</a></span>
              </div>
              <div className="social-area">
                <div className="name">FIND ME AT</div>
                <div className="social-icone">
                  <a href="https://www.facebook.com/profile.php?id=100006960281144&mibextid=ZbWKwL" target="_blank"><i
                    data-feather="facebook"></i></a>
                  <a href="https://www.linkedin.com/in/abh1shek-s/" target="_blank"><i data-feather="linkedin"></i></a>
                  <a href="https://www.instagram.com/abhishek_shankar_381/" target="_blank"><i
                    data-feather="instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
