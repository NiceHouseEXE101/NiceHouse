import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import { Nav, Navbar, Container } from 'react-bootstrap';
import logo1 from '../../assets/logo/logo-notext-black.png'; // Ensure the correct path for the logo
import logo2 from '../../assets/logo/logo-notext-white.png';
import '../../font/Brice Regular SemiExpanded.otf'; // Import your font styles

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  // Detect scroll to change the header's background color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: scrolling ? '#343a40' : '#e9e9e9',
        transition: 'background-color 0.3s ease',
        boxShadow: scrolling ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none',
        backdropFilter: 'blur(10px)', // Adds a subtle blur effect for transparency
        padding: '10px 0',
      }}
    >
      <Container>
        <Toolbar sx={{ justifyContent: 'space-between', display: 'flex', alignItems: 'center' }}>
          {/* Brand/Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={scrolling ? logo2 : logo1}
              alt="Resort Logo"
              style={{ height: '70px', marginRight: '15px', transition: '0.3s ease' }}
            />
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'Brice Regular SemiExpanded', // Apply the custom font
                fontWeight: 600,
                color: scrolling ? '#fff' : '#343a40', // Change text color when scrolling
                letterSpacing: '1.5px',
                transition: 'color 0.3s ease',
              }}
            >
              NICEHOUSE
            </Typography>
          </Box>

          {/* Navbar Links and Button Group */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            {/* Bootstrap Navbar for responsive links */}
            <Navbar bg="transparent" expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto" style={navStyle}  >
                  <Nav.Link href="/" style={navLinkStyle(scrolling)}>
                    Trang chủ
                  </Nav.Link>
                  <Nav.Link href="/about" style={navLinkStyle(scrolling)}>
                    Chúng tôi
                  </Nav.Link>
                  <Nav.Link href="/apartment" style={navLinkStyle(scrolling)}>
                    Dịch vụ
                  </Nav.Link>
                  <Nav.Link href="/contact" style={navLinkStyle(scrolling)}>
                    Liên hệ
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            {/* Booking Button */}
            <Button
              variant="contained"
              color="secondary"
              sx={{
                fontFamily: 'Brice Regular SemiExpanded',
                backgroundColor: scrolling ? '#fff' : '#343a40',
                color: scrolling ? '#343a40' : '#fff',
                fontWeight: 'bold',
                padding: '10px 25px',
                borderRadius: '25px',
                '&:hover': { backgroundColor: '#FF8500', color: '#fff' },
              }}
            >
              Đặt ngay
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

// Styles for the navigation
const navStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  
};

// Navigation link style with dynamic color based on scroll state
const navLinkStyle = (scrolling: any) => ({
  color: scrolling ? '#fff' : '#343a40',
  fontSize: '1.1rem',
  marginRight: '20px',
  fontWeight: 500,
  textDecoration: 'none',
  transition: 'color 0.3s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    color: '#FF6900',
  },
});

export default Header;
