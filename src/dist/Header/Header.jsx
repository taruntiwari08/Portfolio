import React from "react";
import { Link, NavLink } from "react-router-dom";
import HamburgerMenu from "../Menu/HamburgerMenu";

function Header({ toggleDarkMode }) {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-slate-950 bg-white flex justify-between items-center">
        <Link to="/">
          <div className="font-serif dark:text-white font-semibold lg:text-xl text-lg mt-[10px] lg:mt-[-55px] cursor-pointer ">
            {" "}
            <span className="lg:text-orange-500 lg:text-8xl text-white dark:text-slate-950  ">.</span> Tarun Tiwari
          </div>
        </Link>
        
        <div className="flex items-center space-x-4">
          <ul className="lg:flex hidden space-x-4 mt-4 font-light font-roboto">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-600" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Home
              </NavLink>
            </li>
            <span className="font-extrabold"> | </span>
            <li>
              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-600" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Resume
              </NavLink>
            </li>
            <span className="font-extrabold"> | </span>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-600" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Projects
              </NavLink>
            </li>
            <span className="font-extrabold"> | </span>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-600" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className=" -mb-1 w-10 h-10 hidden md:block  bg-gray-200 dark:bg-gray-700 rounded-full transition-all duration-300 ease-in-out"
            title="Toggle Dark Mode"
          >
            <span className="text-gray-700 dark:text-white text-lg">
              {document.documentElement.classList.contains("dark") ? "🌙" : "🌞"}
            </span>
          </button>
        </div>

        <div className="lg:hidden">
          <HamburgerMenu />
        </div>
      </nav>
    </header>
  );
}

export default Header;
