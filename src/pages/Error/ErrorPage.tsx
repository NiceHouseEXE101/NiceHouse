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
  color: #343a40;
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
  background-color: #343a40;
  color: #fff;
  border-radius: 50px;
  text-decoration: none;
  font-size: 18px;
  transition: all 0.3s ease;
  box-shadow: #495057;

  &:hover {
    background-color: #495057;
    box-shadow: #495057;
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
