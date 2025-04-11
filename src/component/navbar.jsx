import React, { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const toggleNavbar = () => setIsOpen(!isOpen);
  const navItems = ['Home', 'Features', 'How it works', 'Shoq', 'For Coaches', 'About'];
  return (
    <>
      <nav className="flex justify-between items-center px-8 py-4 lg:px-[72px]">
        {/* Logo Section */}
        <div className="flex space-x-2 items-center">
          <img src="/images/logo.png" alt="logo" className="w-8 h-8" />
          <h6 className="font-semibold text-white">PulseAim</h6>
        </div>

        {/* Nav Links */}
        <ul className="flex items-center text-white space-x-6 text-sm cursor-pointer">
          <li>
            <button onClick={toggleNavbar} className="flex items-center lg:hidden">
              <i className="bi bi-list text-2xl"></i>
            </button>
          </li>

          {navItems.map((item, index) => (
            <li
              key={index}
              onClick={() => setActiveLink(item)}
              className={`hidden lg:block border-b-2 text-[16px] ${
                activeLink === item
                  ? "border-orange-500 text-orange-500"
                  : "border-transparent text-white"
              }`}
            >
              {item}
            </li>
          ))}

          <li className="hidden lg:block">
            <button className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500 text-[16px] transition">
              Contact us
            </button>
          </li>
        </ul>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleNavbar}
        ></div>
      )}

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-white w-64 p-8 z-50 transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between pb-8">
          <img src="/images/logo.png" alt="logo" className="w-8 h-8" />
          <button onClick={toggleNavbar}>
            <i className="bi bi-x text-3xl text-gray-500"></i>
          </button>
        </div>
        <ul className="flex flex-col space-y-4 text-black text-sm cursor-pointer">
          {navItems.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                setActiveLink(item);
                toggleNavbar();
              }}
              className={`text-[16px] ${
                activeLink === item ? "text-orange-500 font-semibold" : ""
              }`}
            >
              {item}
            </li>
          ))}
          <li>
            <button className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500 w-full">
              Contact us
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};
