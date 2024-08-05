import React from 'react';
import styled from 'styled-components';
import { FaHome, FaInfoCircle, FaLaptop, FaBriefcase, FaEnvelope, FaFileAlt, FaLock, FaArrowUp } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  background: linear-gradient(to right, #1e3c72, #2a5298);
  color: #ffffff;
  padding: 3rem 0 1rem;
  font-family: 'Arial', sans-serif;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const LogoSection = styled.div`
  flex: 1;
  min-width: 200px;
  margin-bottom: 2rem;
`;

const Logo = styled.img`
  width: 150px;
  margin-bottom: 1rem;
`;

const Address = styled.p`
  font-size: 0.9rem;
  max-width: 200px;
`;

const LinkSection = styled.div`
  flex: 1;
  min-width: 200px;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
  color: #ffa500;
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const LinkList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 0.5rem;
`;

const Link = styled.a`
  color: #ffffff;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;

  &:hover {
    color: #ffa500;
  }
`;

const Icon = styled.span`
  margin-right: 0.5rem;
`;

const Copyright = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 2rem;
  font-size: 0.9rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1rem;
`;

const ScrollToTop = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #ffa500;
  color: #1e3c72;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ffb52e;
  }
`;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterWrapper>
      <FooterContent>
        <LogoSection>
          <Logo src="logo.png" alt="QEM GROUP Logo" />
          <Address>QEM Group, 7th Floor, Ambiance Mall, Gurugram</Address>
        </LogoSection>
        <LinkSection>
          <SectionTitle>Quick Links</SectionTitle>
          <LinkList>
            <LinkItem><Link href="/"><Icon><FaHome /></Icon> Home</Link></LinkItem>
            <LinkItem><Link href="/AboutUs"><Icon><FaInfoCircle /></Icon> About Us</Link></LinkItem>
            <LinkItem><Link href="/platform"><Icon><FaLaptop /></Icon> Platform</Link></LinkItem>
            <LinkItem><Link href="/careers"><Icon><FaBriefcase /></Icon> Careers</Link></LinkItem>
          </LinkList>
        </LinkSection>
        <LinkSection>
          <SectionTitle>Support</SectionTitle>
          <LinkList>
            <LinkItem><Link href="/contact"><Icon><FaEnvelope /></Icon> Contact Us</Link></LinkItem>
            <LinkItem><Link href="/terms"><Icon><FaFileAlt /></Icon> Terms of Service</Link></LinkItem>
            <LinkItem><Link href="/privacy"><Icon><FaLock /></Icon> Privacy Policy</Link></LinkItem>
          </LinkList>
        </LinkSection>
      </FooterContent>
      <Copyright>
        © 2024, qem Group. All Rights Reserved
      </Copyright>
      <ScrollToTop onClick={scrollToTop} aria-label="Scroll to top">
        <FaArrowUp />
      </ScrollToTop>
    </FooterWrapper>
  );
};

export default Footer;