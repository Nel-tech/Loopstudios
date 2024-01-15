import React from "react";

function Footer() {
  return (
    <div className="footer-container">
      <main>
        <div>
          <img src="/images/logo.svg" alt="" className="logoName" />
        </div>

        <div className="social-container">
          <img src="/images/icon-facebook.svg" alt="" className="" />
          <img src="/images/icon-instagram.svg" alt="" className="" />
          <img src="/images/icon-pinterest.svg" alt="" className="" />
          <img src="/public/images/icon-twitter.svg" alt="" className="" />
        </div>
      </main>
      <nav className="footer-nav">
      <ul className="nav-container">
          <li>
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#Careers" className="nav-link">
              Careers
            </a>
          </li>
          <li>
            <a href="#events" className="nav-link">
              Events
            </a>
          </li>
          <li>
            <a href="#podcasts" className="nav-link">
              Podcasts
            </a>
          </li>

          <li>
            <a href="#support" className="nav-link">
              Supports
            </a>
          </li>
        </ul>

        <div className="copyright">
          &copy; 2021 Loopstudios.All rights reserved
        </div>
      </nav>
    </div>
  );
}

export default Footer;
