'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = ({show = true}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  if (!show){
    return null
  }
  return (
    <header className="bg-white py-2 z-20 border-b border-whitesmoke sticky top-0 md:static md:top-auto">
      <div className="container mx-auto flex items-center justify-between p-4 md:px-0">
        <div className="text-2xl ">
          <Logo />
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link href="/blog" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 text-gray-700 hover:text-gray-800">
            Blog
          </Link>
          <Link href="/#about" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 text-gray-700 hover:text-gray-800">About</Link>
          <Link href="/contact" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 text-gray-700 hover:text-gray-800">Contact</Link>
          <a
            href="https://277hfb0ua0w.typeform.com/to/izegW8S1?typeform-source=oneclickmed.ng"
            target="_blank"
            rel="noreferrer"
            className="block py-2.5 px-4 rounded bg-ocmblue text-white hover:bg-ocmyellow transition duration-300 mt-4 md:mt-0"
          >
            Join Waitlist
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Hamburger Menu" className="cursor-pointer" >
            {isMenuOpen ? <FiX className="w-8 h-8 text-gray-800" /> : <FiMenu className="w-8 h-8 text-gray-800" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden">
          <div id="mobile-menu" className="h-screen flex flex-col items-center bg-white absolute w-full left-0 space-y-4 py-4 border border-whitesmoke">
            <Link href="/blog" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 text-gray-700 hover:text-gray-800">
              Blog
            </Link>
            <Link href="/#about" onClick={toggleMenu} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 text-gray-700 hover:text-gray-800">About</Link>
            <Link href="/contact" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 text-gray-700 hover:text-gray-800">Contact</Link>
            <a
              href="https://277hfb0ua0w.typeform.com/to/izegW8S1?typeform-source=oneclickmed.ng"
              target="_blank"
              rel="noreferrer"
              className="block py-2.5 px-4 rounded bg-ocmblue text-white hover:bg-ocmyellow transition duration-300 mt-4 md:mt-0"
            >
              Join WaitList
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
