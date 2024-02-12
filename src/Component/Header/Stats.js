import React from 'react';
import badgeIcon from '../assets/images/stats-card_icon-1.png';
import checkmarkIcon from '../assets/images/stats-card_icon-2.png';
import ratingIcon from '../assets/images/stats-card_icon-3.png';

function Stats() {
  return (
    <div>
      <section className="stats" id="stats">
        <ul className="stats-list">
          <li>
            <a href="#" className="stats-card">
              <div className="card-icon">
                <img src={badgeIcon} alt="Badge icon" />
              </div>
              <h2 className="h2 card-title">
                12+ <strong>Years of Experience</strong>
              </h2>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </a>
          </li>
          <li>
            <a href="#" className="stats-card">
              <div className="card-icon">
                <img src={checkmarkIcon} alt="Checkmark icon" />
              </div>
              <h2 className="h2 card-title">
                230+ <strong>Completed Projects</strong>
              </h2>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </a>
          </li>
          <li>
            <a href="#" className="stats-card">
              <div className="card-icon">
                <img src={ratingIcon} alt="Peoples rating icon" />
              </div>
              <h2 className="h2 card-title">
                95+ <strong>Happy Clients</strong>
              </h2>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Stats;
