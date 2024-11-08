import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import member1 from '../../assets/members/NICEHOUSE_KIEN.png';
import member2 from '../../assets/members/NICEHOUSE_NGAN.png';
import member3 from '../../assets/members/NICEHOUSE_QUYEN.png';
import member4 from '../../assets/members/NICEHOUSE_SON.png';
import member5 from '../../assets/members/NICEHOUSE_TRAN.png';
import member6 from '../../assets/members/NICEHOUSE_TRUONG.png';
import qrCodeImage from '../../assets/qrcode/qr-code.png'; 

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
  clip-path: polygon(50% 0%, 100% 10%, 85% 100%, 15% 100%, 0% 10%);
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
const members = [{
  id: 1,
  name: 'Nguyen Trung Kien',
  image: member1
},
{
  id: 2,
  name: 'Tran Vi Bao Ngan',
  image: member2
},
{
  id: 3,
  name: 'Pham Ngoc Quyen',
  image: member3
},
{
  id: 4,
  name: 'Phan Mai Son',
  image: member4
},
{
  id: 5,
  name: 'Bui Ngoc Bao Tran',
  image: member5
},
{
  id: 6,
  name: 'Vo Phuc Truong',
  image: member6
}];

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
  position: relative;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const QRCodeImage = styled.img`
  width: 90%;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const AboutUs: React.FC = () => {
const [isModalOpen, setModalOpen] = useState(false);
const toggleModal = () => setModalOpen(!isModalOpen);
  return (
    <AboutUsContainer>
      {/* Left Side: Team Members */}
      <TeamSection>
        {members.map((member, index) => (
          <TeamMember key={member.id} index={index}>
            <TeamImage src={member.image} alt={member.name} />
            <MemberName>{member.name}</MemberName>
          </TeamMember>
        ))}
      </TeamSection>

      {/* Right Side: NICEHOUSE Info */}
      <InfoSection>
        <NicehouseTitle>NICEHOUSE</NicehouseTitle>
        <IntroductionText>
          Chào mừng đến với NICEHOUSE, nơi chúng tôi cung cấp những trải nghiệm sống sang trọng và đẳng cấp. Chúng tôi tin tưởng vào việc mang đến cho cư dân một phong cách sống vô song, kết hợp sự thoải mái, thanh lịch và tiện lợi ngay tại trung tâm thành phố.
        </IntroductionText>

        <ButtonGroup>
          <Button>Tìm hiểu thêm</Button>
          <Button onClick={toggleModal}>Nâng cấp dịch vụ </Button>
        </ButtonGroup>

        {/* Inquiries Section */}
        <InquiriesSection>
          <InquiryTitle>Bạn có thắc mắc?</InquiryTitle>
          <p>Liên hệ trực tiếp với chúng tôi :</p>
          <PhoneNumber>+84 972 839 374</PhoneNumber>
        </InquiriesSection>
      </InfoSection>
      {isModalOpen && (
        <ModalOverlay onClick={toggleModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={toggleModal}>&times;</CloseButton>
            <h2>SUPPORT NICEHOUSE</h2>
            <QRCodeImage src={qrCodeImage} alt="QR Code for Donation" />
            <p>Hỗ trợ nâng cao dịch vụ</p>
          </ModalContent>
        </ModalOverlay>
      )}
    </AboutUsContainer>
  );
};

export default AboutUs;
