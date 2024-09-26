import React from 'react';
import styled from 'styled-components';

// Container with a subtle luxury backdrop
const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.9); // Soft white background
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  backdrop-filter: blur(5px); // Adds blur for a more refined look
`;

// A loader with metallic gradient and smooth animations
const Loader = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: conic-gradient(
    from 180deg at 50% 50%, 
    #0091d5, 
    #007bbf 25%, 
    #b3cde0 50%, 
    #005b8b 75%, 
    #007bbf 100%
  );
  mask: radial-gradient(farthest-side, transparent 70%, black);
  animation: rotate 1.8s cubic-bezier(0.47, 0, 0.745, 0.715) infinite;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

// Smoothly animated subtle text under the loader
const LoadingText = styled.p`
  margin-top: 20px;
  font-size: 1.6rem;
  font-family: 'Playfair Display', serif;
  color: #3a3a3a;
  text-transform: uppercase;
  letter-spacing: 2px;
  opacity: 0.8;
  animation: fadeIn 2.5s ease-in-out infinite alternate;

  @keyframes fadeIn {
    0% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
`;

// Subtle tagline underneath for extra refinement
const Tagline = styled.p`
  position: absolute;
  bottom: 15%;
  font-size: 1.2rem;
  color: #5a5a5a;
  font-family: 'Lora', serif;
  font-style: italic;
  letter-spacing: 1px;
`;

const LoadingSpinner: React.FC = () => {
  return (
    <SpinnerContainer>
      <Loader />
      <LoadingText>Preparing your dream space...</LoadingText>
      <Tagline>Where luxury meets comfort</Tagline>
    </SpinnerContainer>
  );
};

export default LoadingSpinner;
