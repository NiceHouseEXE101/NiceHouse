import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Typography } from '@mui/material';
import SchoolImage from '../assets/facilities/school.jpg';

const FacilitiesOffer: React.FC = () => {
  return (
    <div style={{ background: '#f9f9f9', padding: '50px 0' }}>
      <Container>
        <Row className="justify-content-center text-center mb-4">
          <Col md={8}>
            <Typography variant="h5" style={{ color: '#007bff', marginBottom: '10px' }}>
              OFFERS
            </Typography>
            <Typography variant="h3" style={{ fontWeight: 'bold' }}>
              NICEHOUSE’S LIMITED PERIOD <br /> BEST OFFERS
            </Typography>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="mb-4">
            <div className="service-item">
              <img
                src="https://wp.ditsolution.net/royella-multipurpose/wp-content/uploads/2023/11/offers-2.jpg"
                alt="Double Suite Room"
                className="img-fluid"
              />
              <div className="room-pricing">
                <span className="dolar">25% off</span>
              </div>
              <Typography variant="h6" className="mt-3">
                Double Suite Room
              </Typography>
              <p>From: $200</p>
              <p>4.5 (Review)</p>
              <Button variant="primary">Book Now</Button>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="service-item">
              <img
                src="https://wp.ditsolution.net/royella-multipurpose/wp-content/uploads/2023/11/offers-2-1.jpg"
                alt="Superior Bed Room"
                className="img-fluid"
              />
              <div className="room-pricing">
                <span className="dolar">28% off</span>
              </div>
              <Typography variant="h6" className="mt-3">
                Superior Bed Room
              </Typography>
              <p>From: $180</p>
              <p>4.5 (Review)</p>
              <Button variant="primary">Book Now</Button>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="service-item">
              <img
                src="https://wp.ditsolution.net/royella-multipurpose/wp-content/uploads/2023/11/offers-3.jpg"
                alt="Deluxe Double Room"
                className="img-fluid"
              />
              <div className="room-pricing">
                <span className="dolar">35% off</span>
              </div>
              <Typography variant="h6" className="mt-3">
                Deluxe Double Room
              </Typography>
              <p>From: $220</p>
              <p>4.5 (Review)</p>
              <Button variant="primary">Book Now</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FacilitiesOffer;
