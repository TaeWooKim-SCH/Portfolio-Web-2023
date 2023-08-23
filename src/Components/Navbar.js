import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

import './Navbar.css';

const PgBar = styled.div`
  width: ${(props) => props.width};
  height: 7px;
  position: fixed;
  top: 0;
  left: 0;
  border-radius: 2px;
  background-color: #FFED90;
  
  @media (max-width: 400px) {
    height: 3px;
  }
`

export default function Navbar() {
  const [location, setLocation] = useState(0);

  const scrollHandler = useCallback(() => {
      const {scrollTop} = document.documentElement;
      const {clientHeight} = document.documentElement;
      const {scrollHeight} = document.body;
      const height = scrollHeight - clientHeight;
      setLocation((scrollTop / height) * 100)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler, true);
  }, [scrollHandler])

  return(
    <nav>
      <section className="nav-right">
        <a className="nav-link" href="#home">HOME</a>
        <a className="nav-link" href="#about">ABOUT</a>
        <a className="nav-link" href="#skills">SKILLS</a>
        <a className="nav-link" href="#projects">PROJECTS</a>
        <a className="nav-link" href="#contact">CONTACT</a>
      </section>
      <PgBar width={`${location}%`} />
    </nav>
  );
}


// eslint-disable-next-line no-unused-expressions
` <NavLink 
          className="nav-link" 
          to="/" 
          style={({isActive}) => {
            return isActive ? style : null
          }}
        >HOME</NavLink>
        <NavLink 
          className="nav-link" 
          to="/about"
          style={({isActive}) => {
            return isActive ? style : null
          }}
        >ABOUT</NavLink>
        <NavLink 
          className="nav-link" 
          to="/skills"
          style={({isActive}) => {
            return isActive ? style : null
          }}
        >SKILLS</NavLink>
        <NavLink 
          className="nav-link" 
          to="/projects"
          style={({isActive}) => {
            return isActive ? style : null
          }}
        >PROJECTS</NavLink>
        <NavLink 
          className="nav-link" 
          to="/contact"
          style={({isActive}) => {
            return isActive ? style : null
          }}
        >CONTACT</NavLink> `