import React from "react";
import "./AboutMe.css";
import Profilepic from "../../Assets/Home/me 4.jpg";

const AboutMe = () => {
  return (
    <section id="AboutMe">
      <div className="aboutme-container">
        <div className="aboutme-firstrow">
          <h4>About Me</h4>
          <p>Why Choose Me?</p>
          <div className="aboutme-divider">
            <div className="orange-block"></div>
          </div>
        </div>
        <div className="aboutme-secondrow">
          <div className="first-column">
            <img src={Profilepic} alt="Profile" />
          </div>
          <div className="second-column">
            <div className="first-row">
              <p>
                I am a Fresher Developer with an eagerness to learn and grow. My
                Skills includes developing applications using HTML and CSS,Core
                Java, Python, participating in group projects, and helping to
                design user interface for a project. My greatest strengths are
                my problem-solving skills, my ability to work well in a team,
                and my aptitude for quickly adapting to new technologies. I am
                highly organized and detail-oriented with excellent
                communication skills. I have a strong passion for learning and
                possess the ability to understand complex concepts. I am
                confident that I can use my skills and knowledge to contribute
                effectively in the development of software products
              </p>
            </div>
            <div className="second-row">
              <h4>Here Are Few Highlights</h4>
              <ul>
                <li>Full Stack Web and Mobile Development</li>
                <li>Interactive Front-End Development</li>
                <li>React and React Native</li>
                <li>Redux for State Management</li>
                <li>Building REST APIs</li>
                <li>Managing Databases</li>
              </ul>
            </div>
            <div className="AboutMe-options">
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
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
