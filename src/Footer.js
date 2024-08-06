import React from 'react';
import styled from 'styled-components';
import { FaHome, FaInfoCircle, FaLaptop, FaBriefcase, FaEnvelope, FaFileAlt, FaLock, FaArrowUp } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  background-color: #1e3c72;
  color: #ffffff;
  padding: 2rem 0 1rem;
  font-family: 'Arial', sans-serif;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 100px;
  margin-bottom: 0.5rem;
`;

const Address = styled.p`
  font-size: 0.8rem;
  text-align: center;
  max-width: 200px;
`;

const LinkList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  margin: 0;
`;

const LinkItem = styled.li`
  margin: 0 1rem;
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

const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  width: 220px;
  height: 120px;
  object-fit: cover;
  margin: 0.5rem;
  border-radius: 5px;
`;

const Copyright = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 1rem;
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
        <TopSection>
          <LogoSection>
            <Logo src="logo.png" alt="QEM GROUP Logo" />
            <Address>QEM Group, 7th Floor, Ambiance Mall, Gurugram</Address>
          </LogoSection>
          <LinkList>
            <LinkItem><Link href="/"><Icon><FaHome /></Icon> Home</Link></LinkItem>
            <LinkItem><Link href="/AboutUs"><Icon><FaInfoCircle /></Icon> About Us</Link></LinkItem>
            <LinkItem><Link href="/platform"><Icon><FaLaptop /></Icon> Platform</Link></LinkItem>
            <LinkItem><Link href="/careers"><Icon><FaBriefcase /></Icon> Careers</Link></LinkItem>
            <LinkItem><Link href="/contact"><Icon><FaEnvelope /></Icon> Contact Us</Link></LinkItem>
            <LinkItem><Link href="/terms"><Icon><FaFileAlt /></Icon> Terms</Link></LinkItem>
            <LinkItem><Link href="/privacy"><Icon><FaLock /></Icon> Privacy</Link></LinkItem>
          </LinkList>
        </TopSection>
        <ImageSection>
          <Image src="g20.jpeg" alt="G20" />
          <Image src="aam.jpeg" alt="AAM" />
          <Image src="bbbp.jpeg" alt="G20" />
          <Image src="ci.jpeg" alt="AAM" />
        </ImageSection>
      </FooterContent>
      <Copyright>
        © 2024, QEM Group. All Rights Reserved
      </Copyright>
      <ScrollToTop onClick={scrollToTop} aria-label="Scroll to top">
        <FaArrowUp />
      </ScrollToTop>
    </FooterWrapper>
  );
};

export default Footer;