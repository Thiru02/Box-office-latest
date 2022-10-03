import React from 'react';

const Titlepage = ({ title, subtitle }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default Titlepage;
