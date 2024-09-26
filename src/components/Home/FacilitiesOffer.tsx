import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Typography } from '@mui/material';
import styled from 'styled-components';

// Styled components for hover effects and styling
const ServiceItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    border-radius: 15px;
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const RoomPricing = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  background-color: rgba(255, 0, 0, 0.8);
  color: white;
  padding: 5px 15px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
`;

const FacilitiesOffer: React.FC = () => {
  return (
    <div style={{ background: '#f9f9f9', padding: '50px 0' }}>
      <Container>
        {/* Header Section */}
        <Row className="justify-content-center text-center mb-4">
          <Col md={8}>            
            <Typography variant="h3" style={{ 
                fontWeight: '700',
                fontSize: '2.4rem',
                fontFamily: 'Brice Regular SemiExpanded',
                color: '#343a40',              
              }}>
              ƯU ĐÃI CÓ HẠN TỪ HÔM NAY<br /> GIẢM GIÁ CỰC SỐC
            </Typography>
          </Col>
        </Row>

        {/* Offer Items */}
        <Row>
          <Col md={4} className="mb-4">
            <ServiceItem>
              <img
                src="https://wp.ditsolution.net/royella-multipurpose/wp-content/uploads/2023/11/offers-2.jpg"
                alt="Double Suite Room"
              />
              <RoomPricing>25% off</RoomPricing>
              <Typography variant="h6" className="mt-3" style={{
                   fontSize: '1.3rem',
                   fontFamily: 'Brice Regular SemiExpanded',
                   color: '#343a40',       
                   fontWeight: '700'       
              }}>
                Double Suite Room
              </Typography>
              <p>From: $200</p>
              <p>4.5 (Review)</p>
              <Button variant="primary">Book Now</Button>
            </ServiceItem>
          </Col>

          <Col md={4} className="mb-4">
            <ServiceItem>
              <img
                src="https://wp.ditsolution.net/royella-multipurpose/wp-content/uploads/2023/11/offers-2-1.jpg"
                alt="Superior Bed Room"
              />
              <RoomPricing>28% off</RoomPricing>
              <Typography variant="h6" className="mt-3" style={{
                   fontSize: '1.3rem',
                   fontFamily: 'Brice Regular SemiExpanded',
                   color: '#343a40',       
                   fontWeight: '700'       
              }}>
                Superior Bed Room
              </Typography>
              <p>From: $180</p>
              <p>4.5 (Review)</p>
              <Button variant="primary">Book Now</Button>
            </ServiceItem>
          </Col>

          <Col md={4} className="mb-4">
            <ServiceItem>
              <img
                src="https://wp.ditsolution.net/royella-multipurpose/wp-content/uploads/2023/11/offers-3.jpg"
                alt="Deluxe Double Room"
              />
              <RoomPricing>35% off</RoomPricing>
              <Typography variant="h6" className="mt-3" style={{
                   fontSize: '1.3rem',
                   fontFamily: 'Brice Regular SemiExpanded',
                   color: '#343a40',       
                   fontWeight: '700'       
              }}>
                Deluxe Double Room
              </Typography>
              <p>From: $220</p>
              <p>4.5 (Review)</p>
              <Button variant="primary">Book Now</Button>
            </ServiceItem>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FacilitiesOffer;
