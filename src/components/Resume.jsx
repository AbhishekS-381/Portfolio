import React, { useState } from 'react';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <div className="rn-resume-area rn-section-gap section-separator" id="resume">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <span className="subtitle">3+ Years of Experience</span>
              <h2 className="title">My Resume</h2>
            </div>
          </div>
        </div>
        <div className="row mt--45">
          <div className="col-lg-12">
            <ul className="rn-nav-list nav nav-tabs" id="myTabs" role="tablist">
              <li className="nav-item">
                <a className={`nav-link ${activeTab === 'education' ? 'active' : ''}`} id="education-tab" data-toggle="tab" href="#education" role="tab"
                  aria-controls="education" aria-selected={activeTab === 'education'} onClick={(e) => { e.preventDefault(); setActiveTab('education'); }}>education & experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="experience-tab"
                  href="https://firebasestorage.googleapis.com/v0/b/sreevaishnaves.appspot.com/o/Personal%20Files%2FAbhishek%20S.pdf?alt=media&token=bd824c8c-ed9a-4a3e-aef6-4229fad97ac8"
                  target="_blank" role="tab" aria-controls="experience" aria-selected="false">download resume</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${activeTab === 'professional' ? 'active' : ''}`} id="professional-tab" data-toggle="tab" href="#professional" role="tab"
                  aria-controls="professional" aria-selected={activeTab === 'professional'} onClick={(e) => { e.preventDefault(); setActiveTab('professional'); }}>professional
                  Skills</a>
              </li>
            </ul>

            <div className="rn-nav-content tab-content" id="myTabContents">

              <div className={`tab-pane fade ${activeTab === 'education' ? 'show active' : ''} single-tab-area`} id="education" role="tabpanel"
                aria-labelledby="education-tab">
                <div className="personal-experience-inner mt--40">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-12">
                      <div className="content">
                        <span className="subtitle">Schooling and Degree</span>
                        <h4 className="maintitle">Educational Qualification</h4>
                        <div className="experience-list">

                          <div className="resume-single-list">
                            <div className="inner">
                              <div className="heading">
                                <div className="title">
                                  <h4>Bachelors of Engineering</h4>
                                  <span>Sri Krishna College of Technology (2018 - 2022)</span>
                                  <span>B.E Computer Science and Engineering</span>
                                  <span>First class with Distinction</span>
                                </div>
                                <div className="date-of-time">
                                  <span>8.5 CGPA</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="resume-single-list">
                            <div className="inner">
                              <div className="heading">
                                <div className="title">
                                  <h4> Class 12th</h4>
                                  <span>Alpha Wisdom Vidhyashram, CBSE (2017 - 2018)</span>
                                </div>
                                <div className="date-of-time">
                                  <span>76.6 %</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="resume-single-list">
                            <div className="inner">
                              <div className="heading">
                                <div className="title">
                                  <h4> Class 10th</h4>
                                  <span>Alpha Wisdom Vidhyashram, CBSE (2015 - 2016)</span>
                                </div>
                                <div className="date-of-time">
                                  <span>8.5 CGPA</span>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-12 col-12 mt_md--60 mt_sm--60">
                      <div className="content">
                        <span className="subtitle">2022 - Present</span>
                        <h4 className="maintitle">Professional Experience</h4>
                        <div className="experience-list">

                          <div className="resume-single-list">
                            <div className="inner">
                              <div className="heading">
                                <div className="title">
                                  <h4>Software Engineer</h4>
                                  <span>Automatic Data Processing (March 2025 - Present)</span>
                                </div>
                              </div>
                              <div className="description">
                                <ul>
                                  <li><strong>Primarily worked as a back-end engineer</strong> leveraging Node.js to
                                    create, enhance, and troubleshoot APIs and backend services, ensuring comprehensive
                                    test coverage for all possible scenarios.</li>
                                  <li><strong>Worked on back-end storage management technologies</strong> like Redis,
                                    MySQL, and S3, optimizing performance and reliability.</li>
                                  <li><strong>Enhanced deployment knowledge</strong> by working with Docker, Kubernetes,
                                    EC2, and Kibana for log monitoring, improving service efficiency and debugging
                                    processes.</li>
                                  <li><strong>Gained experience in end-to-end testing (UAT) and performance
                                    testing</strong>, identifying edge cases to improve API standards during the
                                    development phase.</li>
                                  <li><strong>Integrated new technologies</strong> into existing systems, increasing
                                    capabilities and improving overall performance.</li>
                                  <li><strong>Improved software performance</strong> by identifying and resolving
                                    bottlenecks in the code.</li>
                                  <li><strong>Mentored junior developers</strong>, sharing knowledge and expertise to
                                    support their professional growth and development within the team.</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="resume-single-list">
                            <div className="inner">
                              <div className="heading">
                                <div className="title">
                                  <h4>Associate Software Engineer</h4>
                                  <span>Automatic Data Processing (August 2022 - March 2025)</span>
                                </div>
                              </div>
                              <div className="description">
                                <ul>
                                  <li><strong>Created and enhanced APIs and backend services</strong> using Node.js and
                                    TypeScript, ensuring 95% test coverage, which improved system reliability by 15%.</li>
                                  <li><strong>Utilized system design principles</strong> to architect scalable services
                                    and leveraged knowledge of design patterns to ensure efficient microservices
                                    communication.</li>
                                  <li><strong>Implemented microservices architecture</strong> using Docker, Kubernetes,
                                    EC2, and AWS services. Utilized Kibana for log monitoring, enhancing issue debugging
                                    due to pod failures.</li>
                                  <li><strong>Optimized data storage</strong> using Redis and MySQL, reducing data
                                    retrieval time by 30%.</li>
                                  <li><strong>Engineered an ETL process</strong> to read, parse, and validate
                                    user-uploaded Excel files against multiple criteria, reducing implementation team work
                                    time from 5 hours to 5 minutes by automating data insertion into multiple system
                                    tables.</li>
                                  <li><strong>Conducted end-to-end testing (UAT) and performance testing</strong> to
                                    enhance API standards, resulting in a 20% reduction in bugs.</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="resume-single-list">
                            <div className="inner">
                              <div className="heading">
                                <div className="title">
                                  <h4>Intern</h4>
                                  <span>Automatic Data Processing (April 2022 - August 2022)</span>
                                </div>
                              </div>
                              <div className="description">
                                <ul>
                                  <li><strong>Contributed to product development using Agile workflow</strong>,
                                    collaborating with cross-functional teams to deliver 2 key projects on time.</li>
                                  <li><strong>Collaboratively developed and deployed web applications</strong> using
                                    JavaScript, HTML, CSS, EJS, Express.js, Node.js, and Git, gaining comprehensive
                                    hands-on experience while contributing to team-driven project success.</li>
                                  <li><strong>Engineered and launched 4+ fully functional applications</strong> using the
                                    company's no-code platform, enhancing user experience and increasing platform
                                    engagement by 30%.</li>
                                  <li><strong>Gained hands-on experience with the company's no-code platform</strong>,
                                    building working projects and understanding its capabilities in creating applications.
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`tab-pane fade ${activeTab === 'professional' ? 'show active' : ''}`} id="professional" role="tabpanel" aria-labelledby="professional-tab">
                <div className="personal-experience-inner mt--40">
                  <div className="row row--40">

                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="progress-wrapper">
                        <div className="content">
                          <span className="subtitle">Features</span>
                          <h4 className="maintitle">Programming Skills</h4>

                          <div className="progress-charts">
                            <h6 className="heading heading-h6">NodeJS</h6>
                            <div className="progress">
                              <div className="progress-bar wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay=".3s"
                                role="progressbar" style={{ width: '80%' }} aria-valuenow="85" aria-valuemin="0"
                                aria-valuemax="100"><span className="percent-label"></span></div>
                            </div>
                          </div>

                          <div className="progress-charts">
                            <h6 className="heading heading-h6">JavaScript</h6>
                            <div className="progress">
                              <div className="progress-bar wow fadeInLeft" data-wow-duration="0.6s" data-wow-delay=".4s"
                                role="progressbar" style={{ width: '80%' }} aria-valuenow="85" aria-valuemin="0"
                                aria-valuemax="100"><span className="percent-label"></span></div>
                            </div>
                          </div>

                          <div className="progress-charts">
                            <h6 className="heading heading-h6">Java</h6>
                            <div className="progress">
                              <div className="progress-bar wow fadeInLeft" data-wow-duration="0.7s" data-wow-delay=".5s"
                                role="progressbar" style={{ width: '60%' }} aria-valuenow="85" aria-valuemin="0"
                                aria-valuemax="100"><span className="percent-label"></span></div>
                            </div>
                          </div>

                          <div className="progress-charts">
                            <h6 className="heading heading-h6">TypeScript</h6>
                            <div className="progress">
                              <div className="progress-bar wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay=".6s"
                                role="progressbar" style={{ width: '65%' }} aria-valuenow="85" aria-valuemin="0"
                                aria-valuemax="100"><span className="percent-label"></span></div>
                            </div>
                          </div>

                          <div className="progress-charts">
                            <h6 className="heading heading-h6">C++</h6>
                            <div className="progress">
                              <div className="progress-bar wow fadeInLeft" data-wow-duration="0.9s" data-wow-delay=".7s"
                                role="progressbar" style={{ width: '60%' }} aria-valuenow="85" aria-valuemin="0"
                                aria-valuemax="100"><span className="percent-label"></span></div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-12 mt_sm--60">
                      <div className="progress-wrapper">
                        <div className="content">
                          <span className="subtitle">Features</span>
                          <h4 className="maintitle">Project Skills</h4>
                          <div className="progress-charts">
                            <h6 className="heading heading-h6">Database (SQL, Redis)</h6>
                            <div className="progress">
                              <div className="progress-bar wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay=".3s"
                                role="progressbar" style={{ width: '75%' }} aria-valuenow="85" aria-valuemin="0"
                                aria-valuemax="100"><span className="percent-label"></span></div>
                            </div>
                          </div>

                          <div className="progress-charts">
                            <h6 className="heading heading-h6">Testing (Unit/Integration, End-to-End)</h6>
                            <div className="progress">
                              <div className="progress-bar wow fadeInLeft" data-wow-duration="0.6s" data-wow-delay=".4s"
                                role="progressbar" style={{ width: '80%' }} aria-valuenow="85" aria-valuemin="0"
                                aria-valuemax="100"><span className="percent-label"></span></div>
                            </div>
                          </div>

                          <div className="progress-charts">
                            <h6 className="heading heading-h6">AWS (EC2, S3, etc)</h6>
                            <div className="progress">
                              <div className="progress-bar wow fadeInLeft" data-wow-duration="0.7s" data-wow-delay=".5s"
                                role="progressbar" style={{ width: '60%' }} aria-valuenow="85" aria-valuemin="0"
                                aria-valuemax="100"><span className="percent-label"></span></div>
                            </div>
                          </div>

                          <div className="progress-charts">
                            <h6 className="heading heading-h6">Log Monitoring (Kibana, Splunk)</h6>
                            <div className="progress">
                              <div className="progress-bar wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay=".6s"
                                role="progressbar" style={{ width: '70%' }} aria-valuenow="85" aria-valuemin="0"
                                aria-valuemax="100"><span className="percent-label"></span></div>
                            </div>
                          </div>

                          <div className="progress-charts">
                            <h6 className="heading heading-h6">Deployment (Docker, Kubernetes)</h6>
                            <div className="progress">
                              <div className="progress-bar wow fadeInLeft" data-wow-duration="0.9s" data-wow-delay=".7s"
                                role="progressbar" style={{ width: '55%' }} aria-valuenow="85" aria-valuemin="0"
                                aria-valuemax="100"><span className="percent-label"></span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
