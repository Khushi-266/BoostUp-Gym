import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white body-font shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <div className="flex items-center w-full md:w-auto justify-between md:justify-start">
          <button
            className="md:hidden text-white focus:outline-none mr-4"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-7 h-7"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <a className="flex items-center text-2xl font-extrabold tracking-wide space-x-2 select-none cursor-pointer">
            <span className="text-red-500">Boost</span>
            <span className="text-white">Up</span>
            <span>Gym</span>
          </a>
        </div>

        <nav
          className={`${isOpen ? 'flex' : 'hidden'
            } flex-col md:flex md:flex-row md:items-center w-full md:w-auto mt-4 md:mt-0 gap-6 transition-all duration-300 ease-in-out`}
        >
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="text-base hover:text-red-500 transition-colors duration-200 font-medium"
          >
            Home
          </a>
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="text-base hover:text-red-500 transition-colors duration-200 font-medium"
          >
            Services
          </a>
          <a
            href="#facilities"
            onClick={() => setIsOpen(false)}
            className="text-base hover:text-red-500 transition-colors duration-200 font-medium"
          >
            Facilities
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-base hover:text-red-500 transition-colors duration-200 font-medium"
          >
            Contact
          </a>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;
