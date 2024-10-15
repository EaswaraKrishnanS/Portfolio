import React from "react";
import ReactTypingEffect from "react-typing-effect";
import "./Profile.css";

const Profile = () => {
  const email = "easwarakrishnan0317@gmail.com";
  const subject = "";
  const body = "";

  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
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
          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello, I'm{" "}
              <span className="highlighted-text"> Easwara Krishnan S </span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                {""}
                <ReactTypingEffect
                  text={[
                    "Enthusiastic Developer",
                    "Python Full Stack Developer",
                    "MERN Stack Developer",
                    "Cross Platform Developer",
                    "React / React Native Developer",
                  ]}
                  speed={100}
                  eraseSpeed={50}
                  eraseDelay={1500}
                />
              </h1>
              <span className="profile-role-tagline">
                Eager learner with hands-on Full Stack development experience.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{""}
            </button>
            <a
              href="Easwara Krishnan S_CV.pdf"
              download="Easwara Krishnan S_CV.pdf"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
