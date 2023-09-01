import React from "react";
import "./Footer.css";
import rectangle from "../../images/rectangle.svg";

function List() {
  return (
    <footer className="footer">
      <div className="footer__rectangle">
        <img
          src={rectangle}
          className="footer__rectangle-image"
          alt="rectangle"
        />
        <div className="footer__logo">
          <h2 className="footer__logo-name">DubaiRealty</h2>
          <h3 className="footer__logo-description">Real Estate</h3>
        </div>
      </div>
      <div className="footer__wrapper">
        <div className="footer__wrapper-item">
          <p className="footer__wrapper-item-title">Buy</p>
          <ul className="footer__container-item">
            <li className="footer__container-item">Apartment in Dubai</li>
            <li className="footer__container-item">House in Dubai</li>
            <li className="footer__container-item">Apartments in Dubai</li>
            <li className="footer__container-item">Loft in Dubai</li>
            <li className="footer__container-item">Penthouse in Dubai</li>
            <li className="footer__container-item">Villa an Dubay</li>
          </ul>
        </div>
        <div className="footer__wrapper-item">
          <p className="footer__wrapper-item-title">Services</p>
          <ul className="footer__container-item">
            <li className="footer__container-item">
              Property management in Dubai, UAE
            </li>
            <li className="footer__container-item">
              Sell ​​property in Dubai, UAE
            </li>
            <li className="footer__container-item">
              Rent property in Dubai, UAE
            </li>
            <li className="footer__container-item">
              Investments in Dubai, UAE
            </li>
            <li className="footer__container-item">
              Real estate for cryptocurrency in Dubai
            </li>
            <li className="footer__container-item">Moving to Dubai, UAE</li>
          </ul>
        </div>
        <div className="footer__wrapper-item">
          <p className="footer__wrapper-item-title">Information</p>
          <ul className="footer__container-item">
            <li className="footer__container-item">Video</li>
            <li className="footer__container-item">Podcasts</li>
            <li className="footer__container-item">Laws</li>
            <li className="footer__container-item">Questions and answers</li>
            <li className="footer__container-item">Books</li>
            <li className="footer__container-item">Articles</li>
          </ul>
        </div>
        <div className="footer__wrapper-item">
          <p className="footer__wrapper-item-title">About company</p>
          <ul className="footer__container-item">
            <li className="footer__container-item">Jobs</li>
            <li className="footer__container-item">Story</li>
            <li className="footer__container-item">Licenses</li>
            <li className="footer__container-item">Why are we</li>
            <li className="footer__container-item">Real estate agency</li>
          </ul>
        </div>
        <div className="footer__wrapper-item">
          <p className="footer__wrapper-item-title">Contact</p>
          <div className="footer__wrapper-item-contact">
            <p className="footer__wrapper-item-adress">
              964 Worthington Drive Dubai, UAE
            </p>
            <p className="footer__wrapper-item-information">
              dubairealty@mail.com
            </p>
            <button className="footer__wrapper-item-button">
              Book a consultation
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default List;
