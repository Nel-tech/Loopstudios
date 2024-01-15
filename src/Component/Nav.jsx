import React from "react";

function Nav() {
  return (
    <div>
      <nav>
        <img src="/images/logo.svg" alt="" className="logoName" />

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
      </nav>
    </div>
  );
}

export default Nav;
