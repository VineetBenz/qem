import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountain, faIndustry, faLeaf } from '@fortawesome/free-solid-svg-icons';

const WhatWeDoContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;
  margin-top: 10%;
  background: linear-gradient(45deg, #3494e6, #ec6ead);
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 3rem;
  }
`;

const Content = styled(motion.div)`
  flex: 1;
  padding-right: 4rem;
  position: relative;
  z-index: 2;
  color: white;

  @media (max-width: 1024px) {
    padding-right: 0;
    margin-bottom: 2rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Paragraph = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

const ImageContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
`;

const Image = styled(animated.img)`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const IconContainer = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 2.5rem;
  color: white;
`;

const WhatWeDo = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['logo.png', '6.jpeg', '7.jpeg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const imageProps = useSpring({
    opacity: 1,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(0.8)' },
    reset: true,
    key: currentImageIndex,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring',
        stiffness: 100,
        damping: 15,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <WhatWeDoContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Content>
        <Title variants={childVariants}>Our Expertise</Title>
        <Paragraph variants={childVariants}>
          QEM brings together a highly skilled team of experts in geology, mining, and explosives. We specialize in efficient and environmentally responsible mineral extraction. Our operations include two Massionary Stone Mines and a Silica Sand mine in Rajasthan, with a monthly production capacity of 160,000 MT, 60% of which are finished goods.
        </Paragraph>
        <Paragraph variants={childVariants}>
          We proudly supply premium construction materials to leading companies across DELHI-NCR, including L&T, Ultratech, Sadbhav Engineering, DLF, DRA, Park Infrastructure, and Odean Builders. At QEM, we're committed to shaping the future of sustainable mining and construction.
        </Paragraph>
        <IconContainer variants={childVariants}>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <Icon icon={faMountain} />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <Icon icon={faMountain} />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <Icon icon={faIndustry} />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <Icon icon={faLeaf} />
          </motion.div>
        </IconContainer>
      </Content>
      <ImageContainer variants={childVariants}>
        <Image style={imageProps} src={images[currentImageIndex]} alt={`QEM Operations ${currentImageIndex + 1}`} />
      </ImageContainer>
    </WhatWeDoContainer>
  );
};

export default WhatWeDo;