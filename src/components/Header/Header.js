import React from "react";
import rectangle from "../../images/rectangle.svg";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__rectangle">
          <img
            src={rectangle}
            className="header__rectangle-image"
            alt="rectangle"
          />
          <div className="header__logo">
            <h2 className="header__logo-name">DubaiRealty</h2>
            <h3 className="header__logo-description">Real Estate</h3>
          </div>
        </div>

        <div className="header__nav">
          <button className="header__nav-button" type="button">
            BYU
          </button>
          <button className="header__nav-button" type="button">
            BLOG
          </button>
          <button className="header__nav-button" type="button">
            ABOUT
          </button>
          <button className="header__nav-button" type="button">
            CONTACT
          </button>
        </div>
      </div>

      <div className="header__contacts">
        <button className="header__consultation-button">
          Book a consultation
        </button>

        <div className="header__lang-buttons">
          <button className="header__lang-button">Ru</button>
          <button class="header__lang-button">En</button>
        </div>

        <p className="header__number">+7 (212) 674-25-10</p>
      </div>
    </header>
  );
}

export default Header;
