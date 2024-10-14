import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="Contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>Lets Keep In Touch</p>
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="send-button">Send ✈</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
