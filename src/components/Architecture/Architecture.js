import React from "react";
import "./Architecture.css";
import architecture from "../../images/architecture.png";
import architecture2 from "../../images/architecture2.png";
import pointer from "../../images/pointer.svg";
import pointergray from "../../images/pointer-gray.svg";

function Architecture() {
  return (
    <section className="architecture">
      <div className="architecture__heading">
        <h2 className="architecture__heading-title">Useful articles</h2>
        <div className="architecture__heading-buttons">
          <button className="architecture__heading-button">
            View all articles
          </button>
          <img
            src={pointergray}
            className="architecture__heading-icon"
            alt="pointer"
          />
        </div>
      </div>
      <div className="architecture__items">
        <div className="architecture__item">
          <img
            src={architecture}
            className="architecture__item-image"
            alt="villas"
          />
          <h2 className="architecture__item-name">Discover Architecture</h2>
        </div>
        <div className="architecture__about">
          <p className="architecture__data">Jule 03, 2022</p>
          <p className="architecture__title">Discover Architecture</p>
          <p className="architecture__description">
            Projects for many large domestic and foreign corporations,
            enterprises in many elds such
          </p>
          <div className="architecture__about-buttons">
            <button className="architecture__about-button">Learn more</button>
            <img
              src={pointer}
              className="architecture__about-icon"
              alt="pointer"
            />
          </div>
        </div>
        <div className="architecture__item">
          <img
            src={architecture2}
            className="architecture__item-image"
            alt="villas"
          />
          <h2 className="architecture__item-name">Discover Architecture</h2>
        </div>
      </div>
    </section>
  );
}

export default Architecture;
