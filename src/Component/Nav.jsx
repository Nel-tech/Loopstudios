import React from "react";

function Nav() {
  return (
    <div>
      <nav>
        <img src="/images/logo.svg" alt="" className="logoName" />

        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#Careers">Careers</a>
          </li>
          <li>
            <a href="#events">Events</a>
          </li>
          <li>
            <a href="#podcasts">Podcasts</a>
          </li>

          <li>
            <a href="#support">Supports</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
