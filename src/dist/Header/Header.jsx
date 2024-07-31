import React from "react";
import { Link, NavLink } from "react-router-dom";
import HamburgerMenu from "../Menu/HamburgerMenu";

function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className= "border-gray-200 px-4 lg:px-6 py-2.5 bg-white flex ">
        <Link to ="/">
       <div className="font-serif font-semibold lg:text-xl text-lg mt-[10px] lg:mt-[-55px] cursor-pointer "> <span className="lg:text-orange-500 lg:text-8xl mr-[-20px] text-white "> . </span> Tarun Tiwari <span className="lg:text-sm text-xs lg:text-black text-white font-extralight font-roboto  lg:mx-4 "> ( Frontend Developer )</span></div>
       </Link>
        <div className="flex justify-end ml-auto max-w-screen-xl">
          <ul className="lg:flex hidden space-x-4 mt-4 font-light font-roboto ">
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
            <span className=" font-extrabold"> | </span>
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
            <span className=" font-extrabold"> | </span>
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
            <span className=" font-extrabold"> | </span>
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
        </div>
        <div class="lg:hidden">
            <HamburgerMenu/>
        </div>
      </nav>
    </header>
  );
}

export default Header;
