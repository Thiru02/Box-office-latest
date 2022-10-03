import React from 'react';
import Nav from './Nav';
import Titlepage from './Pages/Titlepage';

const Mainpage = ({ children }) => {
  return (
    <div>
      <Titlepage
        title="Box Office"
        subtitle="Are you lookig for a movie or an actor?"
      />
      <Nav />
      {children}
    </div>
  );
};

export default Mainpage;
