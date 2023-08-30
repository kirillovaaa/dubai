import React from "react";
import "./Promo.css";

import facebook from "../../images/facebook.svg";
import twitter from "../../images/twitter.svg";
import instagram from "../../images/instagram.svg";
import youtube from "../../images/youtube.svg";
import linkedin from "../../images/linkedin.svg";

function Promo() {
  return (
    <section className="promo">
      <ul className="promo__links">
        <li className="promo__link-item">
          <img src={facebook} className="promo__link-image" alt="facebook" />
        </li>
        <li className="promo__link-item">
          <img src={twitter} className="promo__link-image" alt="facebook" />
        </li>
        <li className="promo__link-item">
          <img src={youtube} className="promo__link-image" alt="facebook" />
        </li>
        <li className="promo__link-item">
          <img src={instagram} className="promo__link-image" alt="facebook" />
        </li>
        <li className="promo__link-item">
          <img src={linkedin} className="promo__link-image" alt="facebook" />
        </li>
      </ul>

      <div className="promo__rectangle">
        <div className="promo__description">
          <h1 className="promo__text">
            Welcome Home <br></br> <span class="colortext">To</span> Luxury
          </h1>
          <button className="promo__button" type="button">
            Book a consultation
          </button>
        </div>
      </div>

      <div className="promo__container">
        <div className="promo__container-item">
          <h1 className="promo-container-number">
            <span class="colortext">01</span>
          </h1>
          <div className="promo-container-text">
            <p className="promo-container-description">Lorem Ipsum</p>
            <p className="promo-container-description">Dilorem Ipsum</p>
          </div>
        </div>
        <div className="promo__container-item">
          <h1 className="promo-container-number">02</h1>
          <div className="promo-container-text">
            <p className="promo-container-description">Lorem Ipsum</p>
            <p className="promo-container-description">Dilorem Ipsum</p>
          </div>
        </div>
        <div className="promo__container-item">
          <h1 className="promo-container-number">03</h1>
          <div className="promo-container-text">
            <p className="promo-container-description">Lorem Ipsum</p>
            <p className="promo-container-description">Dilorem Ipsum</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promo;
