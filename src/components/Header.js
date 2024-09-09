import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useAuth } from '../AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';

const Header = ({ isSticky }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/'); // Redirect to home or login page after logout
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <header className={`bg-white py-2 z-20 relative border-b border-whitesmoke ${isSticky ? 'sticky top-0' : ''}`}>
      <div className="container mx-auto flex justify-between items-center p-4 max-w-7xl">
        <div className="flex items-center">
          <Link to="/">
            <img src="/assets/img/onclickmedlogo.png" alt="OneClick-med Logo" className="h-10 w-auto cursor-pointer" />
          </Link>
        </div>
        <nav className="hidden md:flex space-x-4">
          <a
            href="https://www.oneclickmed.ng"
            target="_blank"
            rel="noreferrer"
            className="block py-2.5 px-4 rounded transition duration-200 bg-ocmblue text-white px-4 py-2 rounded-md hover:bg-ocmyellow transition duration-300"
          >
            View Live Site
          </a>
          {user && (
            <>
              <Link
                to="/write"
                className="block py-2.5 px-4 rounded transition duration-200 text-gray-700 hover:text-gray-800"
              >
                Write
              </Link>

              <button
                onClick={handleLogout}
                className="block py-2.5 px-4 rounded transition duration-200 text-gray-700 hover:text-gray-800"
              >
                Logout
              </button>
            </>
          )}
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none" aria-label="Menu">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden h-[100vh] z-20 bg-white border-t border-whitesmoke absolute w-full">
          <nav className="flex flex-col space-y-2 p-4">
            <a
              href="https://www.oneclickmed.ng"
              target="_blank"
              rel="noreferrer"
              className="py-2.5 px-4 rounded transition duration-200 bg-ocmblue text-white px-4 py-2 rounded-md hover:bg-ocmyellow transition duration-300"
              onClick={toggleMenu}
            >
              View Live Site
            </a>
            {user && (
              <>
                <Link
                  to="/write"
                  className="block py-2.5 px-4 rounded transition duration-200 text-gray-700 hover:text-gray-800"
                  onClick={toggleMenu}
                >
                  Write
                </Link>

                <button
                  onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}
                  className="block py-2.5 px-4 rounded transition duration-200 text-gray-700 hover:text-gray-800"
                >
                  Logout
                </button>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
