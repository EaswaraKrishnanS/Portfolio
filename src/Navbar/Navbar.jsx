import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
      <div className='ml-auto'>
        <ul className='navbar-nav'>
          <li><NavLink to="/About" className='nav-link'>About Me</NavLink></li>
          <li><NavLink to="/Educations" className='nav-link'>Educations</NavLink></li>
          <li><NavLink to="/Skills" className='nav-link'>Skills</NavLink></li>
          <li><NavLink to="/Projects" className='nav-link'>Projects</NavLink></li>
          <li><NavLink to="/Contact" className='nav-link'>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
