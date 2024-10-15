import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const email = "easwarakrishnan0317@gmail.com";
  const subject = "";
  const body = "";
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_y3z5a58", "template_cf58t89", form.current, {
        publicKey: "SWxTIuJD580QrvMsG",
      })
      .then(
        () => {
          alert("Message sent successfully Through Email!");
        },
        (error) => {
          alert("Failed To Send Message Through Email", error.text);
        }
      );
  };

  return (
    <section id="Contact">
      <div className="background-container">
        <div className="overlay"></div>
        <div className="contact-container">
          <div className="firstrow">
            <h2>Contact Me</h2>
            <p>Lets Keep In Touch</p>
            <div className="contact-divider">
              <div className="orange-block"></div>
            </div>
          </div>
          <div className="contact-form">
            <div className="colz">
              <div className="colz-icon">
                <a
                  href="https://github.com/EaswaraKrishnanS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
                    subject
                  )}&body=${encodeURIComponent(body)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-google"></i>
                </a>
                <a
                  href="https://linkedin.com/in/easwara-krishnan-s-9613b1290"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  href="https://www.instagram.com/_man_of_few_word_s_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="https://x.com/Easwar_03?t=-h2oJ5BD-HVltXrpWXQD8A&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </div>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="your_name"
                  placeholder="Your Name" required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="your_email"
                  id="email"
                  placeholder="Your Email" required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message" required
                ></textarea>
              </div>
              <button type="submit" className="send-button">
                Send ✈
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
