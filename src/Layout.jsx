import React, { useState, useEffect } from 'react';
import Header from './dist/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './dist/Footer/Footer';
import ScrollToTop from './dist/ScrollToTop/ScrollToTop.js';

function Layout() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme === 'true') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  };

  return (
    <>
      <Header toggleDarkMode={toggleDarkMode} />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
