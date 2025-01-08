import { useState } from "react";
import { FaHome, FaCog, FaInfoCircle } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4 shadow-lg sticky top-0 z-50">
      {/* Container */}
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo/Title */}
        <h1 className="text-white text-3xl font-extrabold tracking-wide">
          Habit<span className="text-yellow-300">Tracker</span>
        </h1>

        {/* Menu for larger screens */}
        <div className="hidden md:flex space-x-6 items-center">
          <a
            href="#"
            className="flex items-center space-x-2 text-white text-lg hover:text-yellow-300 transition duration-300"
          >
            <FaHome />
            <span>Dashboard</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 text-white text-lg hover:text-yellow-300 transition duration-300"
          >
            <FaCog />
            <span>Settings</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 text-white text-lg hover:text-yellow-300 transition duration-300"
          >
            <FaInfoCircle />
            <span>About</span>
          </a>
        </div>

        {/* Hamburger menu for mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Dropdown menu */}
      {isMenuOpen && (
        <div className="absolute top-16 right-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500  backdrop-blur-md text-white rounded-lg shadow-2xl p-4 md:hidden">
          <a
            href="#"
            className="block px-4 py-2 text-lg hover:bg-white/20 hover:text-yellow-300 rounded transition duration-300"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-lg hover:bg-white/20 hover:text-yellow-300 rounded transition duration-300"
          >
            Settings
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-lg hover:bg-white/20 hover:text-yellow-300 rounded transition duration-300"
          >
            About
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
