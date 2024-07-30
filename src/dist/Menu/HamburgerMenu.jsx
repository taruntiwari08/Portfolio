import React, { useState } from 'react';
import './HamburgerMenu.css';
import { Link, NavLink } from 'react-router-dom';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = ()=>{
     setIsOpen(false);
  };

  return (
    <div className="hamburger-menu">
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      {isOpen && (
        <div className="menu-content">
          <NavLink  to="/" onClick={closeMenu}>Home</NavLink>
          <Link  to="/projects" onClick={closeMenu}>Projects</Link>
          <Link to="/resume" onClick={closeMenu}> Resume</Link>
          <Link  to="/contact" onClick={closeMenu}>Contact</Link>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
