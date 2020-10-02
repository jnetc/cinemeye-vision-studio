import React from 'react';

const Title = ({ context }) => {
  return (
    <div className="intro-title">
      <h1>{context.title}</h1>
      <h2>{context.subtitle}</h2>
    </div>
  );
};

export default Title;
