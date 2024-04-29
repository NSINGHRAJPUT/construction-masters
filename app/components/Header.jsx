"use client";

import { useState } from "react";
import { FaBuilding } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close the menu after clicking a link
    }
  };

  return (
    <header className="bg-white h-[10vh] shadow-md px-[2.5%] py-2 flex justify-between items-center">
      <div className="flex items-center">
        <FaBuilding className="text-[#EC9706] text-2xl mr-2" />

        <h1 className="text-xl font-semibold">BuildMasters</h1>
      </div>
      <nav className="hidden md:flex items-center space-x-4">
        <a
          href="#home"
          onClick={() => scrollTo("home")}
          className="text-black cursor-pointer"
        >
          Home
        </a>
        <a
          href="#services"
          onClick={() => scrollTo("services")}
          className="text-black cursor-pointer"
        >
          Services
        </a>
        <a
          href="#about"
          onClick={() => scrollTo("about")}
          className="text-black cursor-pointer"
        >
          About
        </a>
        <a
          href="#blog"
          onClick={() => scrollTo("blog")}
          className="text-black cursor-pointer"
        >
          Blog
        </a>
        <a
          href="#contact"
          onClick={() => scrollTo("contact")}
          className="bg-[#EC9706] text-white py-2 px-4 rounded-md cursor-pointer"
        >
          Contact Us
        </a>
      </nav>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="outline-none focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-14 right-4 bg-white rounded-md shadow-md py-2 px-4 space-y-2">
          <a
            href="#home"
            onClick={() => scrollTo("home")}
            className="block text-black cursor-pointer"
          >
            Home
          </a>
          <a
            href="#services"
            onClick={() => scrollTo("services")}
            className="block text-black cursor-pointer"
          >
            Services
          </a>
          <a
            href="#about"
            onClick={() => scrollTo("about")}
            className="block text-black cursor-pointer"
          >
            About
          </a>
          <a
            href="#blog"
            onClick={() => scrollTo("blog")}
            className="block text-black cursor-pointer"
          >
            Blog
          </a>
          <a
            href="#contact"
            onClick={() => scrollTo("contact")}
            className="block bg-[#EC9706] text-white py-2 px-4 rounded-md cursor-pointer"
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
