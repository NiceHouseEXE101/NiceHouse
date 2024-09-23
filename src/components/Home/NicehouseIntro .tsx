import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import styled from 'styled-components';

// Main Container with a clean, modern background and centered layout
const Container = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 40px 80px;
  background: linear-gradient(120deg, #ffffff, #f3f3f3);
  border-radius: 30px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  max-width: 1100px;
  margin: 50px auto;
  overflow: hidden;

  @media (max-width: 960px) {
    flex-direction: column;
    padding: 30px;
  }
`;

// Left Section with simple, elegant padding and space management
const LeftSection = styled(Box)`
  flex: 1;
  padding-right: 50px;
  @media (max-width: 960px) {
    padding-right: 0;
    text-align: center;
  }
`;

// Title with modern fonts and elegant uppercase styling
const Title = styled(Typography)`
  font-size: 48px;
  font-weight: 700;
  color: #1a3d7c;
  text-transform: uppercase;
  margin-bottom: 15px;
  font-family: 'Poppins', sans-serif;
`;

// Subtitle with a refined, minimalistic look
const Heading = styled(Typography)`
  font-size: 28px;
  color: #888;
  margin-bottom: 25px;
  letter-spacing: 1.2px;
  font-family: 'Poppins', sans-serif;
`;

// Description with optimized spacing for readability and a luxurious feel
const Description = styled(Typography)`
  font-size: 18px;
  color: #555;
  line-height: 1.8;
  margin-bottom: 30px;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 0.5px;
  transition: color 0.3s ease;

  &:hover {
    color: #1a3d7c;
  }
`;

// Right Section with a modern, sleek border and hover effect
const RightSection = styled(Box)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #fafafa;
  border: 1px solid #ddd;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: 16/9;
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

// Video Frame with a minimalistic design to blend with the overall look
const VideoFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 15px;
`;

// Button with a modern, subtle hover effect
const VideoButton = styled(Button)`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 30px;
  background-color: #1a3d7c;
  color: #fff;
  border-radius: 30px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #333;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const IntroSection = () => {
  return (
    <Container>
      <LeftSection>
        <Title>About NICEHOUSE</Title>
        <Heading>Your Luxury Home Experience</Heading>
        <Description>
          Discover the epitome of luxurious living at NICEHOUSE. Our apartments are designed with elegance and sophistication, blending modern conveniences with timeless beauty. Enjoy stunning interiors, world-class amenities, and a serene environment that makes you feel at home.
        </Description>
      </LeftSection>
      <RightSection>
        <VideoFrame
          src="https://www.youtube.com/embed/VIDEO_ID"
          title="Apartment Tour"
          allowFullScreen
        />
        <VideoButton>Start/Pause</VideoButton>
      </RightSection>
    </Container>
  );
};

export default IntroSection;
