import React from 'react';
import { Box, Typography } from '@mui/material';
import styled, { keyframes } from 'styled-components';
import useInView from './useInView'; // Custom hook for intersection observer
import PoolImage from '../../assets/facilities/pool.jpg';
import FitnessImage from '../../assets/facilities/pool.jpg';
import GardenImage from '../../assets/facilities/pool.jpg';

// Slide animations for images
const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Text fade-in animation
const fadeInUp = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Container for the facilities section
const FacilitiesContainer = styled(Box)`
  padding: 80px 20px;
  background: linear-gradient(135deg, #f5f5f5, #e0e0e0);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Image Container with alternating slide-in animation
const ImageContainer = styled(Box)`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  align-items: center;
  justify-content: space-between;
  margin: 60px 0;
  opacity: 0;
  animation: ${({ reverse, isVisible }) =>
    isVisible ? (reverse ? slideInRight : slideInLeft) : 'none'} 1.2s forwards ease-out;
  @media (max-width: 960px) {
    flex-direction: column;
    text-align: center;
  }
`;

// Image Styling with hover effect
const Image = styled.img`
  width: 45%;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease, filter 0.4s ease;
  filter: brightness(80%);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.2);
    filter: brightness(100%);
  }

  @media (max-width: 960px) {
    width: 80%;
    margin-bottom: 30px;
  }
`;

// Text Container with fade-in animation
const TextContainer = styled(Box)`
  width: 50%;
  padding: 0 30px;
  opacity: 0;
  animation: ${({ isVisible }) => (isVisible ? fadeInUp : 'none')} 1s forwards ease-out;
  @media (max-width: 960px) {
    width: 90%;
    padding: 0;
  }
`;

// Section Title Styling
const FacilitiesTitle = styled(Typography)`
  font-size: 48px;
  font-weight: bold;
  color: #2d3e50;
  text-align: center;
  margin-bottom: 60px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-family: 'Poppins', sans-serif;
`;

// Facility Title
const FacilityTitle = styled(Typography)`
  font-size: 32px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
`;

// Description Styling
const Description = styled(Typography)`
  font-size: 18px;
  color: #555;
  line-height: 1.8;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 0.5px;
`;

// Individual facility item with image and description
const FacilityItem = ({ imageSrc, title, description, reverse }) => {
  const [setElement, isVisible] = useInView({ threshold: 0.3 });

  return (
    <ImageContainer reverse={reverse} isVisible={isVisible} ref={setElement}>
      <Image src={imageSrc} alt={title} />
      <TextContainer isVisible={isVisible}>
        <FacilityTitle>{title}</FacilityTitle>
        <Description>{description}</Description>
      </TextContainer>
    </ImageContainer>
  );
};

const Facilities = () => {
  return (
    <FacilitiesContainer>
      <FacilitiesTitle>Enjoy Complete & Best Quality Facilities</FacilitiesTitle>
      <FacilityItem
        imageSrc={PoolImage}
        title="Swimming Pool"
        description="Relax and unwind in our state-of-the-art swimming pool with a serene view."
        reverse={false}
      />
      <FacilityItem
        imageSrc={FitnessImage}
        title="Fitness Center"
        description="Stay fit and healthy with our fully equipped fitness center available 24/7."
        reverse={true}
      />
      <FacilityItem
        imageSrc={GardenImage}
        title="Rooftop Garden"
        description="Enjoy the breathtaking views from our rooftop garden designed for relaxation."
        reverse={false}
      />
    </FacilitiesContainer>
  );
};

export default Facilities;
