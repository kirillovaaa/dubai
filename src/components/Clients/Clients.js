import React from "react";
import "./Clients.css";
import client1 from "../../images/client1.png";
import client2 from "../../images/client2.png";
import quote from "../../images/quote.svg";

function Clients() {
  return (
    <section className="clients">
      <div className="clients__item-right">
        <div className="clients__wrapper-avatar">
          <img src={client1} className="clients__wrapper-image" alt="avatar" />
          <img src={quote} className="clients__wrapper-quote" alt="quote" />
        </div>
        <div className="clients__wrapper-about">
          <span className="clients__wrapper-name">Paul</span>
          <span className="clients__wrapper-website">
            Owner in <span class="colortext">Paul.com</span>
          </span>
          <p className="clients__wrapper-description">
            Projects for many large domestic and foreign corporations,
            enterprises in many elds such as nance, banking, F&B, education,
            communication.
          </p>
        </div>
      </div>
      <div className="clients__wrapper">
        <div className="clients__item">
          <div className="clients__wrapper-avatar">
            <img
              src={client1}
              className="clients__wrapper-image"
              alt="avatar"
            />
            <img src={quote} className="clients__wrapper-quote" alt="quote" />
          </div>
          <div className="clients__wrapper-about">
            <span className="clients__wrapper-name">Paul</span>
            <span className="clients__wrapper-website">
              Owner in <span class="colortext">Paul.com</span>
            </span>
            <p className="clients__wrapper-description">
              Projects for many large domestic and foreign corporations,
              enterprises in many elds such as nance, banking, F&B, education,
              communication.
            </p>
          </div>
        </div>
        <div className="clients__item">
          <div className="clients__wrapper-avatar">
            <img
              src={client2}
              className="clients__wrapper-image"
              alt="avatar"
            />
            <img src={quote} className="clients__wrapper-quote" alt="quote" />
          </div>
          <div className="clients__wrapper-about">
            <span className="clients__wrapper-name">Robert</span>
            <span className="clients__wrapper-website">
              Founder in <span class="colortext">Apple inc.</span>
            </span>
            <p className="clients__wrapper-description">
              Founded in 2007, Sparch is specializing in providing innovative
              services such as website design, brand identity and marketing
            </p>
          </div>
        </div>
      </div>
      <div className="clients__item-left">
        <div className="clients__wrapper-avatar">
          <img src={client1} className="clients__wrapper-image" alt="avatar" />
          <img src={quote} className="clients__wrapper-quote" alt="quote" />
        </div>
        <div className="clients__wrapper-about">
          <span className="clients__wrapper-name">Paul</span>
          <span className="clients__wrapper-website">
            Owner in <span class="colortext">Paul.com</span>
          </span>
          <p className="clients__wrapper-description">
            Projects for many large domestic and foreign corporations,
            enterprises in many elds such as nance, banking, F&B, education,
            communication.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Clients;
