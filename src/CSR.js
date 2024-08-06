import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const images = ['9.jpeg', '10.jpeg','11.jpeg', '12.jpeg','22.jpeg','23.jpeg'];

const CarouselContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 50px;
  margin-bottom: 50px;
  background-size: cover;
  background-position: center;
  transition: background-image 0.5s ease-in-out;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background-image: url(${props => props.backgroundImage});
`;

const ContentOverlay = styled.div`
  background-color: rgba(0, 18, 0, 0.5);
  color: white;
  padding: 2rem;
  max-width: 600px;
  border-radius: 0 0 10px 0;
  margin-top: -50px;
  margin-left: 0;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ReadMoreButton = styled.button`
  background-color: white;
  color: green;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const CSR = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <CarouselContainer backgroundImage={images[currentImageIndex]}>
      <ContentOverlay>
        <Title>Corporate Social Responsibility</Title>
        <Paragraph>
          QEM Group is committed to sustainable development by fostering strong relationships with surrounding communities. 
          Their CSR and Periphery Development activities focus on healthcare, education, talent promotion, sports, art and culture, 
          environmental protection, energy conservation, clean water and sanitation, skill development, livelihood promotion, 
          infrastructure development, post-disaster recovery, hunger eradication, and other community initiatives. These efforts 
          have made a positive impact on the socio-economic development of the peripheral areas and beyond. The organization's 
          dedication to community well-being is central to its sustainability strategy.
        </Paragraph>
        <ReadMoreButton>Read More →</ReadMoreButton>
      </ContentOverlay>
    </CarouselContainer>
  );
};

export default CSR;