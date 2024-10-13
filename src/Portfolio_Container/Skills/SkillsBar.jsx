import React, { useState, useEffect } from 'react';
import './Skills.css';

const SkillBar = ({ skillName, proficiency }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(proficiency);
    }, 100);
    return () => clearTimeout(timer);
  }, [proficiency]);

  return (
    <div className="skills-container">
      <span className="skills-name">{skillName}</span>
      <div className="skills-bar">
        <div className="skills-progress" style={{ width: `${width}%` }}></div>
      </div>
    </div>
  );
};

export default SkillBar;
