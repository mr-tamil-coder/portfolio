import React from 'react';
import project1Image from './assets/images/project-1.png';
import project2Image from './assets/images/project-2.png';
import project3Image from './assets/images/project-3.png';
import project4Image from './assets/images/project-4.png';
import project5Image from './assets/images/project-5.png';
import project6Image from './assets/images/project-6.png';
import project7Image from './assets/images/project-7.png';

function Projects() {
  return (
    <section className="project" id="portfolio">
      <ul className="project-list">
        <li>
          <div className="project-content section-content">
            <p className="section-subtitle">My Works</p>
            <h2 className="h3 section-title">See My Works Which Will Amaze You!</h2>
            <p className="section-text">
              We develop the best quality website that serves for the long-term. Well-documented, clean, easy and
              elegant interface helps any non-technical clients.
            </p>
          </div>
        </li>
        <li>
          <a href="#" className="project-card">
            <figure className="card-banner">
              <img src={project1Image} className="w-100" alt="A macintosh on a yellow background." />
            </figure>
            <div className="card-content">
              <h3 className="h4 card-title">Lorem Ipsum Dolor 01</h3>
              <time className="publish-date" dateTime="2022-04">
                April 2022
              </time>
            </div>
          </a>
        </li>
        <li>
          {/* ... Repeat the structure for other projects with appropriate image imports */}
        </li>
        <li>
          <button className="load-more">Load more work</button>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
