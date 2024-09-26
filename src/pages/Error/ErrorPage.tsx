import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaExclamationTriangle } from 'react-icons/fa'; // Font Awesome icon

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #ece9e6, #ffffff);
  text-align: center;
  padding: 0 20px;
`;

const ErrorIcon = styled(FaExclamationTriangle)`
  font-size: 120px;
  color: #ff6f61;
  margin-bottom: 20px;
  animation: bounce 1.5s infinite ease-in-out;

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }
`;

const ErrorTitle = styled.h1`
  font-size: 96px;
  color: #007bff;
  margin-bottom: 20px;
  font-family: 'Brice Regular SemiExpanded', sans-serif;
  letter-spacing: 2px;
`;

const ErrorDescription = styled.p`
  font-size: 20px;
  color: #343a40;
  margin-bottom: 30px;
  font-family: 'Helvetica', sans-serif;
  max-width: 600px;
  line-height: 1.6;
`;

const BackButton = styled(Link)`
  padding: 15px 30px;
  background-color: #007bff;
  color: #fff;
  border-radius: 50px;
  text-decoration: none;
  font-size: 18px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(0, 123, 255, 0.3);

  &:hover {
    background-color: #0056b3;
    box-shadow: 0 15px 25px rgba(0, 123, 255, 0.5);
  }
`;

const ErrorPage: React.FC = () => {
  return (
    <ErrorContainer>
      <ErrorIcon />
      <ErrorTitle>404</ErrorTitle>
      <ErrorDescription>
        Oops! The page you're looking for doesn't exist. It may have been moved or deleted.
      </ErrorDescription>
      <BackButton to="/">Return to Home</BackButton>
    </ErrorContainer>
  );
};

export default ErrorPage;
