// components/Hero.tsx
import React from 'react';
import { Button, Typography } from '@mui/material';

const Hero = () => {
  return (
    <div
      style={{
        height: '90vh',
        backgroundImage: 'url("/path-to-banner-image.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      <div>
        <Typography variant="h2" style={{ fontWeight: 'bold' }}>
          Welcome to Our Resort
        </Typography>
        <Typography variant="h6" style={{ margin: '20px 0' }}>
          Enjoy a luxury experience like no other.
        </Typography>
        {/* <Button variant="contained" color="primary" size="large">
          Book Now
        </Button> */}
      </div>
    </div>
  );
};

export default Hero;
