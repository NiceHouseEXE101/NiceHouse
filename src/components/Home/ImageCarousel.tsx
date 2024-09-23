  import React, { useState } from 'react';
  import { Button, Box, Typography } from '@mui/material';

  // Import images from assets folder
  import image1 from '../../assets/carousels/1.png';
  import image2 from '../../assets/carousels/2.png';
  import image3 from '../../assets/carousels/3.png';
  import image4 from '../../assets/carousels/4.png';

  const images = [
    {
      src: image1,
      // title: 'Welcome to Our Resort',
    },
    {
      src: image2,
      // title: 'Relax by the Ocean',
    },
    {
      src: image3,
      // title: 'Luxury Dining',
    },
    {
      src: image4,
      // title: 'Luxury Dining',
    },
  ];

  const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(false);

    const nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };

    const handleMouseMove = (e) => {
      const carouselWidth = e.currentTarget.offsetWidth;
      const mouseX = e.clientX;

      // Show left button if mouse is in the left 20% of the screen
      if (mouseX < carouselWidth * 0.2) {
        setShowLeftButton(true);
      } else {
        setShowLeftButton(false);
      }

      // Show right button if mouse is in the right 20% of the screen
      if (mouseX > carouselWidth * 0.8) {
        setShowRightButton(true);
      } else {
        setShowRightButton(false);
      }
    };

    return (
      <Box
        sx={{
          position: 'relative',
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000', // Dark background for contrast
        }}
        onMouseMove={handleMouseMove}
      >
        {/* Image */}
        <Box
          component="img"
          src={images[currentIndex].src}
          alt={images[currentIndex].title}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            transition: 'opacity 1s ease-in-out',
            opacity: 1, 
          }}
        />

        {/* Text Overlay */}
        <Box
          // sx={{
          //   position: 'absolute',
          //   top: '50%',
          //   left: '50%',
          //   transform: 'translate(-50%, -50%)',
          //   zIndex: 2,
          //   color: '#fff',
          //   textAlign: 'center',
          //   backgroundColor: 'rgba(0, 0, 0, 0.5)',
          //   padding: '20px 40px',
          //   borderRadius: '12px',
          //   animation: 'fadeInUp 1s ease',
          //   width: '50%',
          // }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontFamily: 'Arial, sans-serif',
              lineHeight: 1.2,
              color: '#FF6900',
              fontSize: { xs: '2rem', md: '3rem' }, // Responsive font size
              textShadow: '2px 2px 8px rgba(0,0,0,0.8)', // Add shadow for emphasis
            }}
          >
            {images[currentIndex].title}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              marginTop: '15px',
              fontSize: '1.2rem',
              color: '#fff',
              fontWeight: 400,
              maxWidth: '600px',
              lineHeight: 1.6,
            }}
          >
            {images[currentIndex].description}
          </Typography>
        </Box>

        {/* Previous Button */}
        {showLeftButton && (
          <Button
            onClick={prevImage}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '30px',
              zIndex: 3,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              color: '#fff',
              minWidth: '50px',
              minHeight: '50px',
              borderRadius: '50%',
              fontSize: '30px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              transform: 'translateY(-50%)',
              transition: 'opacity 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
              },
            }}
          >
            {'<'}
          </Button>
        )}

        {/* Next Button */}
        {showRightButton && (
          <Button
            onClick={nextImage}
            sx={{
              position: 'absolute',
              top: '50%',
              right: '30px',
              zIndex: 3,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              color: '#fff',
              minWidth: '50px',
              minHeight: '50px',
              borderRadius: '50%',
              fontSize: '30px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              transform: 'translateY(-50%)',
              transition: 'opacity 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
              },
            }}
          >
            {'>'}
          </Button>
        )}
      </Box>
    );
  };

  export default ImageCarousel;
