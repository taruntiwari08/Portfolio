import React, { useState } from 'react';
import './HamburgerMenu.css';
import { Link, NavLink } from 'react-router-dom';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    closeMenu()
  };
 
  
  return (
    <div className="hamburger-menu">
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>

      {isOpen && (
        <div className="menu-content dark:bg-slate-800 dark:text-slate-200">
          <NavLink className={`dark:text-slate-400`} to="/" onClick={closeMenu}>Home</NavLink>
          <Link className={`dark:text-slate-400`} to="/projects" onClick={closeMenu}>Projects</Link>
          <Link className={`dark:text-slate-400`} to="/resume" onClick={closeMenu}>Resume</Link>
          <Link className={`dark:text-slate-400`} to="/contact" onClick={closeMenu}>Contact</Link>

          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className=" p-2 dark:text-slate-400 text-gray-800  "
          >
            Change Theme
          </button>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
