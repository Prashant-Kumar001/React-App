import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import DayNightToggle from "./DayNightToggle";
import { FaWindowClose } from "react-icons/fa";
import { PiUserCircleCheck } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { useTheme } from "../context/ThemeContext";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [IsNavigationBarOn, SetNavigatingBarOn] = useState(false);
  const showNavigationBar = () => {
    SetNavigatingBarOn(!IsNavigationBarOn);
  };
  const { theme } = useTheme();
  return (
    <>
      <header className={`backdrop-blur-md mt-16  .c-animation  shadow-lg max-w-full py-2 text-center sticky top-0 z-[999] ${theme ? 'bg-nav-light-gray' : 'bg-[#121212]'}`}>
        <nav className="flex justify-between items-center md:py-2 py-3 px-2">
          <GiHamburgerMenu
            className="md:hidden text-6xl cursor-pointer"
            onClick={() => showNavigationBar()}
            aria-label="Menu"
          />
          <h1 className="hidden md:block text-2xl md:text-4xl font-extrabold">
            your <span className="text-2xl md:text-4xl text-red-500">logo</span>
          </h1>
          <ul className="hidden md:flex gap-10">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? `${theme ? ' text-nav-deep-red' : 'text-nav-light-gray'}` : "text-nav-navy-blue"
                  } cursor-pointer text-2xl  font-bold uppercase hover:underline `
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? `${theme ? ' text-nav-deep-red' : 'text-nav-light-gray'}` : "text-gray-700"
                  } cursor-pointer text-2xl  font-bold uppercase hover:underline`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? `${theme ? ' text-nav-deep-red' : 'text-nav-light-gray'}` : "text-gray-700"
                  } cursor-pointer text-2xl  font-bold uppercase hover:underline`
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/github"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? `${theme ? ' text-nav-deep-red' : 'text-nav-light-gray'}` : "text-gray-700"
                  } cursor-pointer text-2xl  font-bold uppercase hover:underline`
                }
              >
                Github
              </NavLink>
            </li>
          </ul>
          <div className="flex gap-2">
            <div className="hidden md:block ">
              <DayNightToggle />
            </div>
            <button className="btn px-6 py-3 text-2xl font-bold rounded-lg flex gap-3 items-center hover:bg-blue-700 hover:text-white">
              <PiUserCircleCheck className="text-4xl  " />
              Login
              <IoIosArrowDown className="text-3xl c-down-arrow" />
            </button>
            <button className="hidden md:block px-8 py-3 text-2xl rounded-lg bg-orange-700 text-yellow-50">
              Get Started
            </button>
          </div>
        </nav>
      </header>

      {IsNavigationBarOn && (
        <div className="fixed z-50 top-0 inset-0 left-0 w-full h-screen bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white w-full max-w-md p-4 text-center text-black font-bold rounded-lg">
            <ul className="flex flex-col gap-10 w-full max-w-md p-4 text-center items-center text-white font-bold">
              <li className="text-2xl text-red-600 hover:text-red-500 font-bold uppercase underline">
                <Link to="/" onClick={() => showNavigationBar()}>
                  Home
                </Link>
              </li>
              <li className="text-2xl text-red-600 hover:text-red-500 font-bold uppercase underline">
                <Link to="/about" onClick={() => showNavigationBar()}>
                  About
                </Link>
              </li>
              <li className="text-2xl text-red-600 hover:text-red-500 font-bold uppercase underline">
                <Link to="/contact" onClick={() => showNavigationBar()}>
                  Contact
                </Link>
              </li>
              <li className="text-2xl text-red-600 hover:text-red-500 font-bold uppercase underline">
                <Link to="/github" onClick={() => showNavigationBar()}>
                  Github
                </Link>
              </li>
              <button
                className="text-3xl bg-slate-700 text-white px-6 py-2 rounded-md font-bold uppercase"
                onClick={() => showNavigationBar()}
              >
                <FaWindowClose className="text-5xl" />
              </button>
              <DayNightToggle />
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
