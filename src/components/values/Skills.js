import React, { useState, useEffect } from 'react';

const Skills = ({ skills }) => {
  const [move, setMove] = useState(0);
  const arr = skills?.split(',');
  const services = arr?.map(skill => {
    return <h3 key={skill}>{skill}</h3>;
  });

  useEffect(() => {
    document.addEventListener('scroll', () => {
      let movement = Math.round(window.scrollY / 7);
      setMove(movement);
    });
  }, [move]);

  return (
    <div
      id="skills"
      style={{
        transform: `rotate(-90deg) translate3d(${move}px, 0, 0)`,
      }}>
      {services}
    </div>
  );
};

export default Skills;
