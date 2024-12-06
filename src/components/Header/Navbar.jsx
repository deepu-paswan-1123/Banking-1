import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAppMenuOpen, setIsAppMenuOpen] = useState(false);
  const [isCommunityMenuOpen, setIsCommunityMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://via.placeholder.com/40"
            alt="Logo"
            className="w-8 h-8"
          />
          <span className="text-lg font-bold">Unine</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 text-sm">
          <li>
            <a href="#learn" className="hover:text-gray-400">
              Learn
            </a>
          </li>

          {/* Dropdown: App */}
          <li className="relative">
            <button
              onClick={() => setIsAppMenuOpen(!isAppMenuOpen)}
              className="hover:text-gray-400 flex items-center gap-1"
            >
              App
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isAppMenuOpen && (
              <ul className="absolute left-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#ios">iOS App</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#android">Android App</a>
                </li>
              </ul>
            )}
          </li>

          {/* Dropdown: Community */}
          <li className="relative">
            <button
              onClick={() => setIsCommunityMenuOpen(!isCommunityMenuOpen)}
              className="hover:text-gray-400 flex items-center gap-1"
            >
              Community
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isCommunityMenuOpen && (
              <ul className="absolute left-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#forum">Forums</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#events">Events</a>
                </li>
              </ul>
            )}
          </li>

          <li>
            <a href="#work" className="hover:text-gray-400">
              Unine at Work
            </a>
          </li>
        </ul>

        {/* Right Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-gray-400 hover:text-white">Sign up</button>
          <button className="bg-green-500 text-black px-4 py-2 rounded-md hover:bg-green-600">
            Get a demo
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden flex flex-col space-y-4 p-4 bg-gray-900">
          <li>
            <a href="#learn" className="block text-white hover:text-gray-400">
              Learn
            </a>
          </li>
          <li>
            <button
              onClick={() => setIsAppMenuOpen(!isAppMenuOpen)}
              className="block text-white hover:text-gray-400"
            >
              App
            </button>
            {isAppMenuOpen && (
              <ul className="ml-4 bg-gray-800 rounded-md p-2">
                <li className="hover:bg-gray-700 px-2 py-1">
                  <a href="#ios">iOS App</a>
                </li>
                <li className="hover:bg-gray-700 px-2 py-1">
                  <a href="#android">Android App</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              onClick={() => setIsCommunityMenuOpen(!isCommunityMenuOpen)}
              className="block text-white hover:text-gray-400"
            >
              Community
            </button>
            {isCommunityMenuOpen && (
              <ul className="ml-4 bg-gray-800 rounded-md p-2">
                <li className="hover:bg-gray-700 px-2 py-1">
                  <a href="#forum">Forums</a>
                </li>
                <li className="hover:bg-gray-700 px-2 py-1">
                  <a href="#events">Events</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#work" className="block text-white hover:text-gray-400">
              Unine at Work
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
