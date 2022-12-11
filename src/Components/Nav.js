import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavList,LinkStyled } from './Navs.styled';

const Nav = () => {
  const LINKS = [
    { to: '/', text: 'Home page' },
    { to: '/starred', text: 'Starred page' },
  ];
  const Navs = ()=>{
    const location = useLocation
  }
  return (
    <div>
      <NavList>
        {LINKS.map(item => (
          <li key={item.to}>
            <LinkStyled to={item.to} className={item.to=== location.pathname?'active':''}>{item.text}</LinkStyled>
          </li>
        ))}
      </NavList>
    </div>
  );
};

export default Nav;
// arr = [2,3,4,5,3];
// const tot = arr.reduce((tota,num)=>tota+=num)
