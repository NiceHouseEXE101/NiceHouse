import React from 'react';
import { Box, Grid, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { styled } from '@mui/system';
import PoolImage from '../../assets/facilities/pool.jpg';
import SchoolImage from '../../assets/facilities/school.jpg';
import GymImage from '../../assets/facilities/gym.jpg';
import LogoImage from '../../assets/logo/logo-white.png';
import Background from '../../assets/background/background.png'
// Background Section
const BackgroundSection = styled(Box)({
  backgroundImage: `url(${Background})`, // Add your background image here
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '70px 0',
  textAlign: 'center',
  position: 'relative',
  zIndex: 1,
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Optional dark overlay for a luxurious feel
    zIndex: -1,
  },
});

// Title and Description
const Title = styled(Typography)({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: '#fff', // Changed to white for contrast with background
  marginBottom: '20px',
  textTransform: 'uppercase',
});

const Description = styled(Typography)({
  fontSize: '1.1rem',
  color: '#fff', // Light grey for a refined look
  marginBottom: '50px',
});

// Overlay effect for the cards
const FacilityCard = styled(Card)({
  position: 'relative',
  maxWidth: 345,
  borderRadius: '15px',
  overflow: 'hidden',
  boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  '&:hover .overlay': {
    opacity: 0, // Hide the overlay on hover
  },
});

const Overlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for the mysterious effect
  color: '#fff',
  opacity: 1,
  transition: 'opacity 0.3s ease-in-out',
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const FacilitiesSection = () => {
  return (
    <BackgroundSection>
      {/* Logo */}
      <Box sx={{ mb: 4 }}>
        <img src={LogoImage} alt="Apartment Logo" style={{ width: '150px', margin: '0 auto' }} />
      </Box>

      {/* Title and Description */}
      <Title variant="h3" sx={{fontFamily: 'Brice Regular SemiExpanded'}}>TIỆN ÍCH, DỊCH VỤ HIỆN ĐẠI</Title>
      <Description variant="body1">
      Tận hưởng các tiện nghi hàng đầu của chúng tôi, được thiết kế để mang lại sự thoải mái và thư giãn.
      </Description>

      {/* Facilities Grid */}
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <FacilityCard>
            <CardMedia component="img" height="200" image={PoolImage} alt="Infinity Pool" />
            <Overlay className="overlay">Hồ bơi vô cực</Overlay>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#343a40',fontFamily: 'Brice Regular SemiExpanded' }}>
                Hồ bơi vô cực
              </Typography>
              <Typography variant="body2" sx={{ color: '#6c757d' }}>
                Thư giãn tại hồ bơi ngay tại căn hộ.
              </Typography>
            </CardContent>
          </FacilityCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FacilityCard>
            <CardMedia component="img" height="200" image={SchoolImage} alt="Prestigious School" />
            <Overlay className="overlay">Thuận tiện di chuyển</Overlay>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#343a40',fontFamily: 'Brice Regular SemiExpanded' }}>
                Thuận tiện di chuyển
              </Typography>
              <Typography variant="body2" sx={{ color: '#6c757d' }}>
                Địa điểm gần trường Đại học FPT Quy Nhơn.
              </Typography>
            </CardContent>
          </FacilityCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FacilityCard>
            <CardMedia component="img" height="200" image={GymImage} alt="Fitness Center" />
            <Overlay className="overlay">Phòng Gym trong nhà</Overlay>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#343a40',fontFamily: 'Brice Regular SemiExpanded' }}>
                Phòng Gym trong nhà
              </Typography>
              <Typography variant="body2" sx={{ color: '#6c757d' }}>
                Nâng cao sức khỏe trong chính nơi ở của bạn.
              </Typography>
            </CardContent>
          </FacilityCard>
        </Grid>
      </Grid>
    </BackgroundSection>
  );
};

export default FacilitiesSection;
