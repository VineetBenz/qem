import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaInfoCircle, FaBriefcase, FaHandsHelping, FaUserTie, FaEnvelope } from 'react-icons/fa';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  padding: 15px 0;
  transition: all 0.3s ease;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 30px;
`;

const LogoContainer = styled(motion.div)`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 15px;
`;

const CompanyName = styled(motion.h1)`
  color: #333;
  font-family: 'Montserrat', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
  }
`;

const NavItem = styled(motion.li)`
  margin-right: 30px;
  margin-bottom: 10px;
  &:last-child {
    margin-right: 0;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 1.4rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  &:hover {
    color: #f39c12;
    text-shadow: 0 0 10px rgba(243, 156, 18, 0.5);
  }
  svg {
    margin-right: 8px;
    font-size: 1.6rem;
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

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
    { name: 'Business', icon: FaBriefcase, path: '/business' },
    { name: 'CSR', icon: FaHandsHelping, path: '/csr' },
    { name: 'Career', icon: FaUserTie, path: '/career' },
    { name: 'Contact', icon: FaEnvelope, path: '/contact' },
  ];

  return (
    <StyledHeader style={{ background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.9)' }}>
      <HeaderContent>
        <LogoContainer
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Logo src="/logo.png" alt="QEM Group Logo" />
          <CompanyName
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            QEM Group
          </CompanyName>
        </LogoContainer>
        <Nav>
          <ul>
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink to={item.path}>
                  <item.icon />
                  {item.name}
                </NavLink>
              </NavItem>
            ))}
          </ul>
        </Nav>
      </HeaderContent>
    </StyledHeader>
  );
};

export default Header;