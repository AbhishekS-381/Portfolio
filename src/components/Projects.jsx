import React, { useEffect } from 'react';
import feather from 'feather-icons';

const Projects = () => {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <div className="rn-service-area rn-section-gap section-separator" id="features">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-left" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100"
              data-aos-once="true">
              <span className="subtitle">Projects</span>
              <h2 className="title">What I Did</h2>
            </div>
          </div>
        </div>
        <div className="row row--25 mt_md--10 mt_sm--10">

          <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30">
            <div className="rn-service">
              <div className="inner">
                <div className="icon">
                  <i data-feather="layout"></i>
                </div>
                <div className="content">
                  <h4 className="title"><a href="https://sreevaishnaves.onrender.com/" target="_blank">Restaurant
                    Website</a></h4>
                  <div className="description">
                    <ul>
                      <li><strong>Designed and developed a restaurant website</strong> with menu listings, images, Google
                        Maps integration, and contact details using HTML, CSS, and JavaScript, significantly enhancing
                        user engagement by 4 folds.</li>
                      <li><strong>Leveraged Firebase for image storage</strong>, reducing image load times by 40% and
                        improving overall user engagement.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <a className="over-link" href="https://sreevaishnaves.onrender.com/" target="_blank"></a>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30">
            <div className="rn-service">
              <div className="inner">
                <div className="icon">
                  <i data-feather="grid"></i>
                </div>
                <div className="content">
                  <h4 className="title"><a href="https://github.com/AbhishekS-381/Minutes-of-Meet" target="_blank">Minutes
                    of Meet</a></h4>
                  <div className="description">
                    <ul>
                      <li><strong>Created a web application</strong> allowing project managers to create teams, record
                        meeting minutes, assign checklists, and view history using REST API, EJS for the front-end,
                        Node.js for the backend, and MySQL for data storage, targeting a 50% increase in team
                        productivity.</li>
                      <li><strong>Added authorization and authentication</strong> to provide different viewing experiences
                        for users based on their roles, enhancing security and user experience.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <a className="over-link" href="https://github.com/AbhishekS-381/Minutes-of-Meet" target="_blank"></a>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30">
            <div className="rn-service">
              <div className="inner">
                <div className="icon">
                  <i data-feather="aperture"></i>
                </div>
                <div className="content">
                  <h4 className="title"><a href="https://github.com/AbhishekS-381/To-Do-List" target="_blank">To-Do List</a>
                  </h4>
                  <div className="description">
                    <ul>
                      <li><strong>Developed a basic web application</strong> where action items can be added, deleted, or
                        modified.</li>
                      <li><strong>Front-end built</strong> using EJS, HTML, and CSS for a smooth and user-friendly
                        experience.</li>
                      <li><strong>Utilized MySQL</strong> as the data store to ensure reliable storage and retrieval of
                        information.</li>
                      <li><strong>Designed the back-end</strong> using Node.js, implementing a REST API-based architecture
                        for seamless functionality.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <a className="over-link" href="https://github.com/AbhishekS-381/To-Do-List" target="_blank"></a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;
