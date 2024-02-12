import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="h1 logo">
          <a href="#">
            Coding Stella<span>.</span>
          </a>
        </p>
        <p className="copyright">
          &copy; 2022 <a href="#">Jack</a>. All rights reserved
        </p>
      </div>

      {/* GO TO TOP */}
      <a href="#top" className="go-top" data-go-top title="Go to Top">
        <ion-icon name="arrow-up"></ion-icon>
      </a>
    </footer>
  );
}

export default Footer;
