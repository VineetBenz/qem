import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGem, FaBuilding, FaIndustry } from 'react-icons/fa';
import VisionMission from './VisionMission';
const Container = styled.div`
  padding: 40px;
  background: linear-gradient(135deg, #f0f4f8, #d9e2ec);
  font-family: 'Arial', sans-serif;
  color: #333;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 20px;
`;

const SubTitle = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  color: #34495e;
  margin-bottom: 40px;
`;

const Content = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 30px;
`;

const ImageGallery = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const ImageContainer = styled(motion.div)`
  width: 300px;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
`;

const IconBox = styled.div`
  text-align: center;
`;

const AboutUs = () => {
  const images = [
    '112.png',
    '30.jpeg',
    'oe2.jpeg',
    'mining.jpeg',
    'infra.jpeg'
  ];

  return (
    <Container>
      <Title>About QEM GROUP</Title>
      <SubTitle>Quality Earth Minerals</SubTitle>
      <Content
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Quality Earth Minerals (QEM) was incorporated in 2008 under the Companies Act 1956 as a private limited entity and has been engaged in stone mining and processing on ownership-based mining leases mainly for various construction companies. It is also involved in infrastructure development activities in Pan India. QEM is a mining, crushing and infrastructure company in the private sector with an annual turnover of approx INR 425 million for the year ended March 2017. The promoters of QEM are engaged in mining opportunities in various states of the country, viz-mining/trading of aggregate/silica sand in Rajasthan, exploration/mining for stone boulders and GSB/WMM in Bhiwani, Haryana, and screening & washing of river gravel in Ambala, Haryana along with its subsidiaries, QEM Processing Pvt Ltd and QEM Pvt Ltd.
      </Content>
      
      <ImageGallery>
        {images.map((image, index) => (
          <ImageContainer
            key={index}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image src={image} alt={`QEM Group Image ${index + 1}`} />
          </ImageContainer>
        ))}
      </ImageGallery>
      <IconContainer>
        <IconBox>
          <FaGem size={50} color="#2980b9" />
          <p>Mining Expertise</p>
        </IconBox>
        <IconBox>
          <FaBuilding size={50} color="#27ae60" />
          <p>Infrastructure Development</p>
        </IconBox>
        <IconBox>
          <FaIndustry size={50} color="#e67e22" />
          <p>Industry Leadership</p>
        </IconBox>
      </IconContainer>
      <VisionMission />
    </Container>

  );
};

export default AboutUs;