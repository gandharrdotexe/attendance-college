
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
      <nav className="bg-blue-500 text-white shadow-md">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold">
            MyLogo
          </a>
  
          {/* Links for Desktop */}
          <div className="hidden md:flex space-x-6">
            <RouterLink to="/" className="hover:text-blue-200">
              Faculty
            </RouterLink>
            <RouterLink to="/hod" className="hover:text-blue-200">
              HOD
            </RouterLink>
            <RouterLink to="/principal" className="hover:text-blue-200">
              Principal
            </RouterLink>
            
          </div>
  
          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        </div>
  
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-600">
            <a
              href="#home"
              className="block px-4 py-2 hover:bg-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-4 py-2 hover:bg-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#features"
              className="block px-4 py-2 hover:bg-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 hover:bg-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    );
}

export default Navbar
