import React, { useEffect, useState } from 'react';
import feather from 'feather-icons';

const Home = () => {
  const [isEngineerVisible, setIsEngineerVisible] = useState(true);

  useEffect(() => {
    feather.replace();

    const interval = setInterval(() => {
      setIsEngineerVisible(prev => !prev);
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="rn-slider-area">
      <div className="slide slider-style-1">
        <div className="container">
          <div className="row row--30 align-items-center">
            <div className="order-2 order-lg-1 col-lg-7 mt_md--50 mt_sm--50 mt_lg--30">
              <div className="content">
                <div className="inner">
                  <span className="subtitle">Hello!!</span>
                  <h1 className="title">Hi, I’m <span>Abhishek</span><br />
                    <span className="header-caption" id="page-top">
                      <span className="cd-headline clip is-full-width">
                        <span>a </span>
                        <span className="cd-words-wrapper">
                          <b className={isEngineerVisible ? "is-visible" : "is-hidden"}>Software Engineer.</b>
                          <b className={!isEngineerVisible ? "is-visible" : "is-hidden"}>Back-End Developer.</b>
                        </span>
                      </span>
                    </span>
                  </h1>

                  <div>
                    <p className="description">In my professional journey, I am dedicated to gaining valuable experience and
                      continually developing
                      my skills while aligning seamlessly with the growth trajectory of the organizations I collaborate
                      with. Moving forward, I am eager to explore emerging technologies and innovative practices
                      to further enrich my skill set and make meaningful contributions to the success of the
                      organizations I engage with.</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12">
                    <div className="social-share-inner-left">
                      <span className="title">Connect with me on</span>
                      <ul className="social-share d-flex liststyle">
                        <li className="facebook"><a
                          href="https://www.facebook.com/profile.php?id=100006960281144&mibextid=ZbWKwL"
                          target="_blank"><i data-feather="facebook"></i></a>
                        </li>
                        <li className="instagram"><a href="https://www.instagram.com/abhishek_shankar_381/"
                          target="_blank"><i data-feather="instagram"></i></a>
                        </li>
                        <li className="linkedin"><a href="https://www.linkedin.com/in/abh1shek-s/" target="_blank"><i
                          data-feather="linkedin"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12 mt_mobile--30">
                    <div className="skill-share-inner">
                      <span className="title">Working on</span>
                      <ul className="skill-share d-flex liststyle">
                        <li>
                          <a href="https://nodejs.org/en" target="_blank">
                            <img src="/assets/images/icons/icons-01.png" alt="Icons Images" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.mysql.com/" target="_blank">
                            <img src="/assets/images/icons/icons-02.png" alt="Icons Images" />
                          </a>
                        </li>
                        <li>
                          <a href="https://github.com/" target="_blank">
                            <img src="/assets/images/icons/icons-03.png" alt="Icons Images" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 order-lg-2 col-lg-5">
              <div className="thumbnail">
                <div className="inner">
                  <img src="/assets/images/slider/banner-01.jpg" alt="Personal Portfolio Images" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
