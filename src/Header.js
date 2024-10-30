import React, { useState, useEffect } from 'react';

import { FaHome, FaInfoCircle, FaBriefcase, FaHandsHelping, FaUserTie, FaEnvelope, FaFilm, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', icon: FaHome, path: '/' },
    { name: 'About', icon: FaInfoCircle, path: '/about' },
    { name: 'Business', icon: FaBriefcase, path: '/businesses' },
    { name: 'CSR', icon: FaHandsHelping, path: '/CSRpage' },
    { name: 'Career', icon: FaUserTie, path: '/CareersPage' },
    { name: 'Gallery', icon: FaFilm, path: '/ImageGallery' },
    { name: 'Contact', icon: FaEnvelope, path: '/ContactUs' },
  ];

  return (
    <header className={` w-full z-50 transition-all duration-300 ${scrolled ? 'bg-blue-900' : 'bg-blue-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="flex items-center">
              <img
                className="h-12 w-auto sm:h-16"
                src="/logo.png"
                alt="QEM Group Logo"
              />
              <h1 className="ml-3 text-xl font-bold text-white sm:text-2xl md:text-3xl">
                QEM GROUP
                <span className="block text-sm font-normal text-yellow-400">
									{"{"}AN ISO 9001:2015 CERTIFIED{"}"}
								</span>
              </h1>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-blue-800 rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="sr-only">Open menu</span>
              <FaBars className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="text-base font-medium text-white hover:text-yellow-400 flex items-center"
              >
                <item.icon className="mr-2" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="text-white hover:bg-blue-700 hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium flex items-center"
              onClick={() => setMenuOpen(false)}
            >
              <item.icon className="mr-2" />
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;