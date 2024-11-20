import React, { useState } from "react";
import SkillBar from "./Skillbar";
import "./Resume.css";

const Resume = () => {
  const [activeSection, setActiveSection] = useState("Education");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const pskills = [
    { name: "React JS", proficiency: 95 },
    { name: "Python", proficiency: 90 },
    { name: "Mongo DB & MySQL", proficiency: 85 },
    { name: "HTML & CSS", proficiency: 100 },
    { name: "JavaScript", proficiency: 85 },
    { name: "Node JS", proficiency: 70 },
  ];

  return (
    <section id="Resume">
      <div className="resume-container">
        <div className="resume-firstrow">
          <h4>Resume</h4>
          <p>My Formal Bio Details</p>
          <div className="resume-divider">
            <div className="orange-block"></div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="sidebar">
          <ul>
            <li onClick={() => handleSectionClick("Education")}>Education</li>
            <li onClick={() => handleSectionClick("Work History")}>
              Work History
            </li>
            <li onClick={() => handleSectionClick("Programming Skills")}>
              Programming Skills
            </li>
            <li onClick={() => handleSectionClick("Projects")}>Projects</li>
            <li onClick={() => handleSectionClick("Interests")}>Interests</li>
          </ul>
        </div>
        <div className="content">
          {activeSection === "Education" && (
            <div>
              <h2>Education</h2>
              <div>
                <h5>
                  Periyar Maniammai Institute of Science & Technology , Vallam
                  Thanjavur
                </h5>
                <p>BACHELOR OF COMPUTER APPLICATIONS (BCA)</p>
                <p className="year">2021 - 2024</p>
              </div>
              <div>
                <h5>
                  St Joseph's Higher Secondary School,Manjakuppam,Cuddalore
                </h5>
                <p>HIGHER SECONDARY SCHOOL LEAVING CERTIFICATE (HSC)</p>
                <p className="year">2019 - 2021</p>
              </div>
              <div>
                <h5>
                  St Joseph's Higher Secondary School,Kammiyampettai ,Cuddalore
                </h5>
                <p>SECONDARY SCHOOL LEAVING CERTIFICATE (SSCL)</p>
                <p className="year">2018 - 2029</p>
              </div>
            </div>
          )}
          {activeSection === "Work History" && (
            <div>
              <h2>Work History</h2>
              <h5>Greet LABS PVT LTD , Bangalore — Internship , Trainee</h5>
              <p>
                I worked as an Internship Trainee from June 2024 to the present,
                gaining invaluable hands-on experience in full stack web
                development. This role allowed me to apply my technical skills
                in a professional setting, working on a variety of web projects
                and collaborating with a talented team of developers
              </p>
            </div>
          )}
          {activeSection === "Programming Skills" && (
            <div>
              <h2>Programming Skills</h2>
              {pskills.map((pskill, index) => (
                <SkillBar
                  key={index}
                  skillName={pskill.name}
                  proficiency={pskill.proficiency}
                />
              ))}
            </div>
          )}
          {activeSection === "Projects" && (
            <div>
              <h2>Projects - 1</h2>
              <h5>EMOTIONAL BASED AI POWERED MUSIC PLAYER - PYTHON</h5>
              <p>
                The project aims to create a facial expression recognition
                system with a music recommendation feature to enhance user
                interaction and emotional response
              </p>
              <h2>Projects - 2</h2>
              <h5>WORLD WIDE WEATHER FORECAST - REACT JS</h5>
              <p>
              The project provides a real-time weather forecast system by integrating custom API keys, offering accurate weather data for cities globally. It features a clean, responsive user interface to enhance usability across all devices.
              </p>
            </div>
          )}
          {activeSection === "Interests" && (
            <div>
              <h2>Interests</h2>
              <p>Reading, Coding, Traveling, etc.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Resume;
