import React from "react";
import SkillBar from "./SkillsBar.jsx";
import './Skills.css'

const Skills = () => {
  const pskills = [
    { name: "HTML", proficiency: 95 },
    { name: "CSS", proficiency: 90 },
    { name: "JavaScript", proficiency: 75 },
    { name: "Python", proficiency: 75 },
  ];

  const lskills = [
    { name: "Bootstrap", proficiency: 80 },
    { name: "React JS", proficiency: 90 },
    { name: "Redux", proficiency: 70 },
  ];

  const fskills = [
    { name: "Node JS", proficiency: 75 },
    { name: "Express JS", proficiency: 55 },
  ];

  const db = [
    { name: "MySQL", proficiency: 80 },
    { name: "MongoDB", proficiency: 50 },
  ];

  const dev = [
    { name: "VS Code", proficiency: 90 },
    { name: "Git", proficiency: 60 },
    { name: "GitHub", proficiency: 80 },
    { name: "Postman", proficiency: 70 },
    { name: "Jupyter Notebook", proficiency: 75 },
  ];

  return (
    <section id="Skill">
    <div>
      <div className='skill-firstrow'>
          <h4>Skills</h4>
          <p>My Programming Skills</p>
          <div className="skill-divider">
            <div className="orange-block"></div>
          </div>
        </div>
        <div className='skill-container'>
        <div>
          <h4  className="h4">Programming Languages</h4>

          {pskills.map((pskill, index) => (
            <SkillBar
              key={index}
              skillName={pskill.name}
              proficiency={pskill.proficiency}
            />
          ))}
        </div>
        <br />
        <div>
          <h4  className="h4">Libraries</h4>

          {lskills.map((lskills, index) => (
            <SkillBar
              key={index}
              skillName={lskills.name}
              proficiency={lskills.proficiency}
            />
          ))}
        </div>

        <br />

        <div>
          <h4 className="h4">Frameworks</h4>

          {fskills.map((fskills, index) => (
            <SkillBar
              key={index}
              skillName={fskills.name}
              proficiency={fskills.proficiency}
            />
          ))}
        </div>

        <br />

        <div>
          <h4  className="h4">Data Bases</h4>

          {db.map((db, index) => (
            <SkillBar
              key={index}
              skillName={db.name}
              proficiency={db.proficiency}
            />
          ))}
        </div>

        <br />

        <div>
          <h4 className="h4">Web Dev Tools</h4>

          {dev.map((dev, index) => (
            <SkillBar
              key={index}
              skillName={dev.name}
              proficiency={dev.proficiency}
            />
          ))}
        </div>

        <br />
      </div>
      </div>
      </section>
  );
};

export default Skills;
