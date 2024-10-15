import React, { useState, useEffect } from "react";
import "./Skillbar.css";

const SkillBar = ({ skillName, proficiency }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(proficiency);
    }, 100);
    return () => clearTimeout(timer);
  }, [proficiency]);

  return (
    <div className="skill-container">
      <span className="skill-name">{skillName}</span>
      <div className="skill-bar">
        <div className="skill-progress" style={{ width: `${width}%` }}></div>
      </div>
    </div>
  );
};

export default SkillBar;
