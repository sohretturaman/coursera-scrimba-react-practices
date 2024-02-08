// Dots.js
import React from 'react';

const Dots = ({ number }) => {
  const dotComponents = [];
  for (let i = 0; i < number; i++) {
    dotComponents.push(<div key={i} className="dot"></div>);
  }
  return <div className="dots">{dotComponents}</div>;
};

export default Dots;
