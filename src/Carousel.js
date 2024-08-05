import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import logo from './/logo.jpeg'; // Assume you have this logo file
import styled from 'styled-components';


// Import your logo images
import logo1 from './1.jpeg';
import logo2 from './2.jpeg';
import logo3 from './3.jpeg';
import logo4 from './4.jpeg';
import logo5 from './5.jpeg';
import logo6 from './1.jpeg';
import logo7 from './2.jpeg';
import logo8 from './3.jpeg';
import logo9 from './4.jpeg';
import logo10 from './5.jpeg';

const StyledSlider = styled(Slider)`
  .slick-track {
    display: flex;
    animation: scroll 30s linear infinite;
  }

  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-250px * 5))}
  }
`;

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    cssEase: "linear",
    pauseOnHover: false,
    swipe: false,
    touchMove: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  const logoStyles = {
    width: 'auto',
    height: '70px',
    margin: '0 50px',
    objectFit: 'contain',
  };

  // Double the logos to ensure smooth looping
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10];
  
  // Double the logos array to ensure smooth looping
  const doubledLogos = [...logos];

  return (
    <StyledSlider {...settings}>
      {doubledLogos.map((logo, index) => (
        <div key={index}>
          <img 
            src={logo} 
            alt={`Logo ${index % 10 + 1}`} 
            style={logoStyles}
          />
        </div>
      ))}
    </StyledSlider>
  );
};

export default Carousel;