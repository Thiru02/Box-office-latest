import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const LINKS = [
    { to: '/', text: 'Home page' },
    { to: '/starred', text: 'Starred page' },
  ];
  return (
    <div>
      <ul>
        {LINKS.map(item => (
          <li key={item.to}>
            <Link to={item.to}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
// arr = [2,3,4,5,3];
// const tot = arr.reduce((tota,num)=>tota+=num)
