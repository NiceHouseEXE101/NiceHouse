import React from 'react';
import styled, { keyframes } from 'styled-components';
import member1 from '../../assets/members/member1.jpg';
import member2 from '../../assets/members/member1.jpg';
import member3 from '../../assets/members/member1.jpg';
import member4 from '../../assets/members/member1.jpg';
import member5 from '../../assets/members/member1.jpg';
import member6 from '../../assets/members/member1.jpg';


// Keyframes for smooth entrance animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Define the type for the TeamMember props
interface TeamMemberProps {
  index: number;
}

// Container for the whole About Us page
const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 100px 50px; /* Spaced to avoid being covered by header */
  max-width: 1200px;
  margin: auto;
  animation: ${fadeIn} 0.5s ease;
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

// Left side for team members
const TeamSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex: 1;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Individual team member container with irregular shape
const TeamMember = styled.div<TeamMemberProps>`
  margin: 20px;
  text-align: center;
  width: 180px;
  transform: rotate(${props => (props.index % 2 === 0 ? '-5deg' : '5deg')});
  animation: ${fadeIn} 0.8s ease;
  
  @media (max-width: 768px) {
    margin: 10px;
    transform: none; /* Remove rotation on small screens for simplicity */
  }
`;

// Image style with custom shape
const TeamImage = styled.img`
  width: 100%;
  height: 180px;
  clip-path: polygon(50% 0%, 100% 35%, 85% 100%, 15% 100%, 0% 35%);
  object-fit: cover;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }
`;

// Name of the team member
const MemberName = styled.h3`
  margin-top: 10px;
  font-size: 16px;
  font-family: 'Brice Regular SemiExpanded', sans-serif;
  color: #343a40;
`;

// Right side for NICEHOUSE info
const InfoSection = styled.div`
  flex: 1;
  padding-left: 40px;

  @media (max-width: 768px) {
    padding-left: 0;
    margin-top: 30px;
  }
`;

// Highlighted NICEHOUSE title
const NicehouseTitle = styled.h1`
  font-family: 'Brice Regular SemiExpanded';
  font-size: 60px;
  color: #343a40;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

// Introduction text for NICEHOUSE
const IntroductionText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #343a40;
  margin-bottom: 20px;
`;

// Buttons for "Join Us" and "Support Us"
const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
`;

const Button = styled.button`
  padding: 12px 20px;
  border-radius: 25px;
  border: 2px solid #343a40;
  background-color: transparent;
  color: #343a40;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #343a40;
    color: #fff;
  }
`;

// Inquiries section with contact details
const InquiriesSection = styled.div`
  margin-top: 40px;
  font-size: 18px;
  color: #343a40;
`;

const InquiryTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  font-family: 'Brice Regular SemiExpanded', sans-serif;
`;

const PhoneNumber = styled.p`
  font-size: 20px;
  color: #343a40;
`;
const memberImages = [member1, member2, member3, member4, member5, member6];
// Component for AboutUs page
const AboutUs: React.FC = () => {
  return (
    <AboutUsContainer>
      {/* Left Side: Team Members */}
      <TeamSection>
        {['Member 1', 'Member 2', 'Member 3', 'Member 4', 'Member 5', 'Member 6'].map((name, index) => (
          <TeamMember key={index} index={index}>
            <TeamImage src={memberImages[index]} alt={name} />
            <MemberName>{name}</MemberName>
          </TeamMember>
        ))}
      </TeamSection>

      {/* Right Side: NICEHOUSE Info */}
      <InfoSection>
        <NicehouseTitle>NICEHOUSE</NicehouseTitle>
        <IntroductionText>
          Welcome to NICEHOUSE, where we provide luxurious and top-tier living experiences. 
          We believe in offering our residents an unmatched lifestyle, combining comfort, 
          elegance, and convenience at the heart of the city.
        </IntroductionText>

        <ButtonGroup>
          <Button>Join Us</Button>
          <Button>Support Us</Button>
        </ButtonGroup>

        {/* Inquiries Section */}
        <InquiriesSection>
          <InquiryTitle>Have any questions?</InquiryTitle>
          <p>Contact us directly at:</p>
          <PhoneNumber>+1 (800) 123-4567</PhoneNumber>
        </InquiriesSection>
      </InfoSection>
    </AboutUsContainer>
  );
};

export default AboutUs;
