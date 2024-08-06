import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useSpring, animated } from 'react-spring';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BoardOfDirectors = () => {
  const [directors, setDirectors] = useState([]);
  const [selectedDirector, setSelectedDirector] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const randomDirectors = getRandomDirectors(8);
    setDirectors(randomDirectors);
  }, []);

  return (
    <BoardWrapper>
      <Content>
        <Title data-aos="fade-down">Our Teams</Title>
        <CardContainer>
          {directors.map((director, index) => (
            <DirectorCard
              key={index}
              director={director}
              index={index}
              setSelectedDirector={setSelectedDirector}
            />
          ))}
        </CardContainer>
        <AnimatePresence>
          {selectedDirector && (
            <DirectorModal
              director={selectedDirector}
              onClose={() => setSelectedDirector(null)}
            />
          )}
        </AnimatePresence>
      </Content>
    </BoardWrapper>
  );
};

const DirectorCard = ({ director, index, setSelectedDirector }) => {
  const springProps = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    delay: index * 200,
  });

  return (
    <AnimatedCard style={springProps} onClick={() => setSelectedDirector(director)}>
      <Avatar src={director.avatar} alt={director.name} data-aos="zoom-in" />
      <Name>{director.name}</Name>
      <Position>{director.position}</Position>
      <SocialIcons>
        <FaLinkedin />
        <FaTwitter />
        <FaGithub />
      </SocialIcons>
    </AnimatedCard>
  );
};

const DirectorModal = ({ director, onClose }) => {
  return (
    <ModalOverlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <ModalContent
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <ModalAvatar src={director.avatar} alt={director.name} />
        <ModalName>{director.name}</ModalName>
        <ModalPosition>{director.position}</ModalPosition>
        <ModalBio>{director.bio}</ModalBio>
        <CloseButton onClick={onClose}>&times;</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

// Helper function to get random directors
const getRandomDirectors = (count) => {
  const allDirectors = [
   
    {
      name: 'Michael Chen',
      position: 'CEO',
      avatar: 'logo.png',
      bio: 'Michael Chen is a visionary leader who has successfully led multiple startups to acquisition.',
    },
    {
      name: 'Vinit Maharia',
      position: 'CFO',
      avatar: 'logo.png',
      bio: 'Sophia Rodriguez is a financial expert with a track record of driving profitable growth in Fortune 500 companies.',
    },
    {
      name: 'David Kim',
      position: 'CTO',
      avatar: 'logo.png',
      bio: 'David Kim is an innovative technologist with a passion for creating cutting-edge solutions.',
    },
    {
      name: 'Vinit Maharia',
      position: 'CFO',
      avatar: 'logo.png',
      bio: 'Sophia Rodriguez is a financial expert with a track record of driving profitable growth in Fortune 500 companies.',
    },
    {
      name: 'Vinit Maharia',
      position: 'CFO',
      avatar: 'logo.png',
      bio: 'Sophia Rodriguez is a financial expert with a track record of driving profitable growth in Fortune 500 companies.',
    },{
      name: 'Vinit Maharia',
      position: 'CFO',
      avatar: 'logo.png',
      bio: 'Sophia Rodriguez is a financial expert with a track record of driving profitable growth in Fortune 500 companies.',
    },{
      name: 'Vinit Maharia',
      position: 'CFO',
      avatar: 'logo.png',
      bio: 'Sophia Rodriguez is a financial expert with a track record of driving profitable growth in Fortune 500 companies.',
    },{
      name: 'Vinit Maharia',
      position: 'CFO',
      avatar: 'logo.png',
      bio: 'Sophia Rodriguez is a financial expert with a track record of driving profitable growth in Fortune 500 companies.',
    },{
      name: 'Vinit Maharia',
      position: 'CFO',
      avatar: 'logo.png',
      bio: 'Sophia Rodriguez is a financial expert with a track record of driving profitable growth in Fortune 500 companies.',
    },
    {
      name: 'Vinit Maharia',
      position: 'CFO',
      avatar: 'logo.png',
      bio: 'Sophia Rodriguez is a financial expert with a track record of driving profitable growth in Fortune 500 companies.',
    },{
      name: 'Vinit Maharia',
      position: 'CFO',
      avatar: 'logo.png',
      bio: 'Sophia Rodriguez is a financial expert with a track record of driving profitable growth in Fortune 500 companies.',
    },
    
  ];
  
  return allDirectors.sort(() => 0.5 - Math.random()).slice(0, count);
};

// Animations
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Styled components
const BoardWrapper = styled.div`
  position: relative;
  
  min-height: 100vh;
  background: linear-gradient(-45deg, #1a1a2e, #16213e, #0f3460, #e94560);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
 
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #ffffff;
  margin-bottom: 3rem;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const CardContainer = styled.div`
  display: grid;
   
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  justify-items: center;
`;

const AnimatedCard = styled(animated.div)`
  background-color: rgba(255, 255, 255, 0.1);
  
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  width: 100%;
  max-width: 280px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  backdrop-filter: blur(5px);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 3px solid #e94560;
`;

const Name = styled.h2`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 0.5rem;
`;

const Position = styled.p`
  font-size: 1rem;
  color: #e94560;
  margin-bottom: 1rem;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  font-size: 1.2rem;
  color: #fff;

  svg {
    transition: color 0.3s ease;
    &:hover {
      color: #e94560;
    }
  }
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled(motion.div)`
  background-color: #16213e;
  border-radius: 15px;
  padding: 2rem;
  max-width: 500px;
  width: 90%;
  position: relative;
  color: #fff;
`;

const ModalAvatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 3px solid #e94560;
`;

const ModalName = styled.h2`
  font-size: 2rem;
  color: #e94560;
  margin-bottom: 0.5rem;
`;

const ModalPosition = styled.p`
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 1rem;
`;

const ModalBio = styled.p`
  font-size: 1rem;
  color: #ccc;
  line-height: 1.6;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  background: none;
  border: none;
  color: #e94560;
  cursor: pointer;
`;

export default BoardOfDirectors;