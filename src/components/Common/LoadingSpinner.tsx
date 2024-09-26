import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo/logo-black.png';
import background1 from '../../assets/carousels/1.png';
import background2 from '../../assets/carousels/2.png';

// Container chính cho loading và chuyển cảnh
const TransitionContainer = styled.div<{ isTransitioning: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(${(props) => (props.isTransitioning ? background1 : background2)}) no-repeat center center/cover;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  transition: background 1.5s ease-in-out, transform 0.5s ease-in-out;
`;

// Logo ở giữa trang với hiệu ứng fade-in và bounce (nhún)
const Logo = styled.img<{ isTransitioning: boolean }>`
  width: 120px;
  height: auto;
  z-index: 10;
  animation: ${(props) => (props.isTransitioning ? 'fadeOut 1s forwards' : 'fadeIn 2s ease, bounce 2s ease infinite alternate')};
  
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }
`;

// Mảnh nhỏ lật và phóng to
const Fragment = styled.div<{ delay: number; isTransitioning: boolean }>`
  position: absolute;
  width: 100px;
  height: 100px;
  background-size: cover;
  background-position: center;
  animation: ${(props) => (props.isTransitioning ? 'flipOut' : 'flipIn')} 1.5s ease forwards;
  animation-delay: ${(props) => props.delay}s;
  transform-style: preserve-3d;

  @keyframes flipIn {
    0% {
      transform: rotateY(90deg) scale(0.5);
      opacity: 0;
    }
    100% {
      transform: rotateY(0deg) scale(1);
      opacity: 1;
    }
  }

  @keyframes flipOut {
    0% {
      transform: rotateY(0deg) scale(1);
      opacity: 1;
    }
    100% {
      transform: rotateY(-90deg) scale(5); // Phóng to toàn màn hình
      opacity: 0;
    }
  }
`;

const PageTransition: React.FC = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Giả lập chuyển tiếp trang sau 3 giây
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTransitioning(true); // Bắt đầu chuyển cảnh
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <TransitionContainer isTransitioning={isTransitioning}>
      <Logo src={logo} alt="NICEHOUSE Logo" isTransitioning={isTransitioning} />

      {/* Tạo các mảnh nhỏ từ background */}
      {[...Array(16)].map((_, index) => (
        <Fragment
          key={index}
          delay={index * 0.1}
          isTransitioning={isTransitioning}
          style={{
            backgroundImage: `url(${background1})`,
            top: `${Math.floor(index / Math.floor(window.innerWidth / 150)) * 15}vh`,
            left: `${(index % Math.floor(window.innerWidth / 150)) * 15}vw`,
          }}
        />
      ))}a
    </TransitionContainer>
  );
};

export default PageTransition;
