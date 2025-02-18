import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center my-[10px] px-[20px] lg:px-[170px] bg-black bg-opacity-90 sticky top-0 z-50 rounded-full">
      <img src={logo} alt="Logo" />

      {/* Hamburger Icon for Mobile */}
      <div
        className="lg:hidden text-3xl text-white cursor-pointer z-20 px-4" // Added px-4 for spacing
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navbar Links */}
      <ul
        className={`lg:flex items-center list-none gap-[40px] text-[20px] 
        ${isMobileMenuOpen ? "block" : "hidden"} 
        lg:block absolute lg:static top-[70px] left-0 w-full lg:w-auto 
        bg-black rounded-[20px] lg:bg-transparent shadow-lg lg:shadow-none lg:p-0 p-5 z-10 transition-all duration-300`}
      >
        <li onClick={() => { setMenu("home"); setMobileMenuOpen(false); }} className="cursor-pointer text-white hover:text-red-600 transition-colors mt-4 lg:mt-0">
          <AnchorLink offset={50} href='#home'>Home</AnchorLink>
        </li>
        <li onClick={() => { setMenu("about"); setMobileMenuOpen(false); }} className="cursor-pointer text-white hover:text-red-600 transition-colors mt-4 lg:mt-0">
          <AnchorLink offset={50} href='#about'>About Me</AnchorLink>
        </li>
        <li onClick={() => { setMenu("services"); setMobileMenuOpen(false); }} className="cursor-pointer text-white hover:text-red-600 transition-colors mt-4 lg:mt-0">
          <AnchorLink offset={50} href='#service'>Services</AnchorLink>
        </li>
        <li onClick={() => { setMenu("portfolio"); setMobileMenuOpen(false); }} className="cursor-pointer text-white hover:text-red-600 transition-colors mt-4 lg:mt-0">
          <AnchorLink offset={50} href='#work'>Portfolio</AnchorLink>
        </li>
        <li onClick={() => { setMenu("contact"); setMobileMenuOpen(false); }} className="cursor-pointer text-white hover:text-red-600 transition-colors mt-4 lg:mt-0">
          <AnchorLink offset={50} href='#contact'>Contact</AnchorLink>
        </li>
      </ul>

      {/* Connect Button */}
      <div className="hidden lg:block py-[10px] px-[40px] rounded-full bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#B923E1_102.06%)] text-[20px] cursor-pointer transform transition-transform duration-300 hover:scale-110">
        <AnchorLink offset={50} href='#contact'>Connect With Me</AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
