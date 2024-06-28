import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import icons from react-icons library
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="left">
        <h1 classname="name">Spencer Hirsch</h1>
      </div>
      <nav className="middle">
        <ul>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/experience">Experience</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/resume">Resume</NavLink></li>
        </ul>
      </nav>
      <div className="right">
        <a href="https://github.com/spencerhirsch" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/hirsch-spencer" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://instagram.com/spencerhirsch" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
    </header>
  );
};

export default Header;
