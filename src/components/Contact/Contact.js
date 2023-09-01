import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <div className="contact__container">
        <p className="contact__question">Do you have any questions?</p>
        <h1 className="contact__title">Contact Us</h1>
        <div className="contact__input">
          <input
            className="contact__field-input"
            type="text"
            autoComplete="email"
            placeholder="Enter your email"
          />
          <button className="contact__input-button" type="submit">
            Send
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
