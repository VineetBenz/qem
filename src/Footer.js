import React from 'react';
import { FaHome, FaInfoCircle, FaLaptop, FaBriefcase, FaEnvelope, FaFileAlt, FaLock, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1e3c72] text-white py-8 px-4 font-sans relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="w-full flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <img src="logo.png" alt="QEM GROUP Logo" className="w-24 mb-2" />
            <p className="text-xs text-center max-w-[200px]"></p>
          </div>
          <ul className="flex flex-wrap justify-center">
            {[
              { href: "/", icon: <FaHome />, text: "Home" },
              { href: "/AboutUs", icon: <FaInfoCircle />, text: "About Us" },
              { href: "/platform", icon: <FaLaptop />, text: "Platform" },
              { href: "/careers", icon: <FaBriefcase />, text: "Careers" },
              { href: "/contact", icon: <FaEnvelope />, text: "Contact Us" },
              { href: "/terms", icon: <FaFileAlt />, text: "Terms" },
              { href: "/privacy", icon: <FaLock />, text: "Privacy" },
            ].map((link, index) => (
              <li key={index} className="mx-2 my-1">
                <a href={link.href} className="flex items-center hover:text-orange-400 transition-colors">
                  <span className="mr-1">{link.icon}</span> {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap justify-center mt-4 md:absolute md:bottom-20 md:right-8">
          {["g20.jpeg", "aam.jpeg", "bbbp.jpeg", "ci.jpeg"].map((src, index) => (
            <img 
              key={index}
              src={src} 
              alt={`Scheme ${index + 1}`} 
              className="w-16 h-10 object-cover rounded m-1"
            />
          ))}
        </div>
      </div>
      <div className="w-full text-center mt-8 pt-4 border-t border-white border-opacity-10 text-sm">
        © 2024, QEM Group. All Rights Reserved
      </div>
      <button 
        onClick={scrollToTop} 
        aria-label="Scroll to top"
        className="fixed bottom-5 right-5 bg-orange-400 text-[#1e3c72] rounded-full w-10 h-10 flex items-center justify-center text-xl cursor-pointer shadow-lg hover:bg-orange-300 transition-colors"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;