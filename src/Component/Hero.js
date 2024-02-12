// Hero.js
import React from 'react';
import ima from './assets/images/hero-banner.png'
function Hero() {
  return (
    <div className='container'>
      <section className="hero" id="home">
        <figure className="hero-banner">
          <picture>
            <source srcSet={ima} media="(min-width: 768px)" /> 
             <source srcSet="./assets/images/hero-banner-md.png" media="(min-width: 500px)" />
            <img src="./assets/images/hero-banner-sm.png" alt="A man in a blue shirt with a happy expression" className="w-100" />
          </picture>
        </figure>

        <div className="hero-content">
          <h2 className="h2 hero-title">We Design & Build Creative Products</h2>
          <a href="#contact" className="btn btn-primary">Get in touch</a>
        </div>

        <ul className="">
          <li>
            <a href="#" className="hero-social-link">
              <ion-icon name="logo-facebook"></ion-icon>
              <div className="tooltip">Facebook</div>
            </a>
          </li>

          <li>
            <a href="#" className="hero-social-link">
              <ion-icon name="logo-twitter"></ion-icon>
              <div className="tooltip">Twitter</div>
            </a>
          </li>

          <li>
            <a href="#" className="hero-social-link">
              <ion-icon name="logo-linkedin"></ion-icon>
              <div className="tooltip">Linkedin</div>
            </a>
          </li>
        </ul>

        <a href="#stats" className="scroll-down">Scroll</a>
      </section>
    </div>
  );
}

export default Hero;
