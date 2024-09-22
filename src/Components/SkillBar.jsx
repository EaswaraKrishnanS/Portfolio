import React, { useState, useEffect } from 'react';

const SkillBar = ({ skillName, proficiency }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(proficiency);
    }, 100);

    return () => clearTimeout(timer);
  }, [proficiency]);

  return (
    <div className="mb-3">
      <span>{skillName}</span>
      <div className="progress" style={{height : 7}}>
        <div
          className="progress-bar bg-primary"
          role="progressbar"
          style={{ width: `${width}%`, transition: 'width 1s ease-in-out' }}
          aria-valuenow={width}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
