import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Tilt } from 'react-tilt';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const VisionMissionContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 20px;
  background: linear-gradient(135deg, #6dd5ed, #2193b0);
  text-align: center;
  position: relative;
  min-height: 100vh;
  width: 100%;
`;

// const Logo = styled(motion.img)`
//   width: 150px;
//   margin-bottom: 30px;
// `;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 30px;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const ContentBox = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  padding: 40px;
  margin: 20px 0;
  max-width: 800px;
  width: 90%;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
`;

const Section = styled(motion.div)`
  margin-bottom: 30px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.2rem;
  margin-bottom: 20px;
  color: #2c3e50;
`;

const SectionContent = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #34495e;
`;

const VisionMission = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    gsap.to('.typing-text', {
      duration: 2,
      text: 'Vision & Mission',
      ease: 'none',
    });
  }, []);

  return (
    <VisionMissionContainer
      ref={containerRef}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
    >
      {/* <Logo
        src="/logo.png"
        alt="Company Logo"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
      /> */}
      <Title className="typing-text" />
      <Tilt options={{ max: 25, scale: 1.05 }}>
        <ContentBox
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Section>
            <SectionTitle>
              Our Vision
            </SectionTitle>
            <SectionContent>
              "To be the leading Mining and Infrastructure company by utilizing advanced technology, providing the most cost effective solutions, and implementing best practices in project management"
            </SectionContent>
          </Section>
          <Section>
            <SectionTitle>
              Our Mission
            </SectionTitle>
            <SectionContent>
              "To serve sincerely, efficiently and build mutual relationship with customers satisfaction, social obligation and active environment friendly policy"
            </SectionContent>
          </Section>
        </ContentBox>
      </Tilt>
    </VisionMissionContainer>
  );
};

export default VisionMission;