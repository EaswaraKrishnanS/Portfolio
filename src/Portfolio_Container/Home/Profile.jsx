import React from "react";
import Typical from "react-typical"
import './Profile.css'

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">

            <a href="https://github.com/EaswaraKrishnanS">
                    <i class="fa-brands fa-github"></i>
                </a>

                <a href="https://linkedin.com/in/easwara-krishnan-s-9613b1290">
                    <i class="fa-brands fa-linkedin"></i>
                </a>

                <a href="https://www.instagram.com/_man_of_few_word_s_/">
                    <i class="fa-brands fa-instagram"></i>
                </a>

                <a href="https://x.com/Easwar_03?t=-h2oJ5BD-HVltXrpWXQD8A&s=09">
                    <i class="fa-brands fa-x-twitter"></i>
                </a>

            </div>


          </div>
          <div className="profile-details-name">
            <span className="primary-text">
                {""}
                Hello , I'm <span className="highlighted-text"> Easwara Krishnan S </span>

            </span>

          </div>
          <div className="profile-details-role">
            <span className="primary-text">
                {""}
                <h1>
                    {""}
                    <Typical
                        loop = {Infinity}
                        steps = {[
                            "Ethusiastic Developer",
                            1500,
                            "Python Full Stack Developer ",
                            1500,
                            "MERN Stack Developer ",
                            1500,
                            "Cross Platform V",
                            1500,
                            "React / React Native Developer",
                            1500,
                        ]}
                    />
                </h1>
                <span className="profile-role-tagline">
                Eager learner with hands-on Full Stack development Fresher .
                </span>

            </span>

          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
                {""}
                Hire Me{""}

            </button>
            <a href="Easwara Krishnan S_CV.pdf" download='Easwara Krishnan S_CV.pdf'>
                <button className="btn highlighted-btn">Get Resume</button>
            </a>

          </div>
        </div>
        <div className="profile-picture">
            <div className="profile-picture-background">

            </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
