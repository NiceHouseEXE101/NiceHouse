import React, { useState } from 'react';
import { Container, Grid, Box, Typography, Checkbox, FormControlLabel, Slider, Pagination } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Theme setup
const theme = createTheme({
  palette: {
    primary: { main: '#007bff' },
    secondary: { main: '#343a40' },
  },
  typography: {
    fontFamily: 'Brice Regular, Helvetica, Arial, sans-serif',
  },
});

const ApartmentList = () => {
  const [bedrooms, setBedrooms] = useState(1);
  const [priceRange, setPriceRange] = useState([500, 2000]);
  const [furnished, setFurnished] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <Grid container spacing={4}>
          {/* Filter Sidebar */}
          <Grid item xs={12} md={3}>
            <Box sx={{ backgroundColor: '#f8f9fa', padding: '1rem', borderRadius: '8px' }}>
              <Typography variant="h6" color="primary" sx={{ marginBottom: '1rem' }}>
                Filter Options
              </Typography>
              {/* Bedrooms Filter */}
              <Typography variant="body1" color="secondary" gutterBottom>Number of Bedrooms</Typography>
              <Slider
                value={bedrooms}
                onChange={(e, value) => setBedrooms(value as number)}
                aria-labelledby="bedroom-slider"
                valueLabelDisplay="auto"
                min={1}
                max={5}
                sx={{ marginBottom: '1rem' }}
              />
              {/* Price Range Filter */}
              <Typography variant="body1" color="secondary" gutterBottom>Price Range</Typography>
              <Slider
                value={priceRange}
                onChange={handlePriceChange}
                valueLabelDisplay="auto"
                min={500}
                max={5000}
                step={100}
                sx={{ marginBottom: '1rem' }}
              />
              {/* Furnished Filter */}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={furnished}
                    onChange={() => setFurnished(!furnished)}
                    color="primary"
                  />
                }
                label="Furnished"
              />
            </Box>
          </Grid>

          {/* Apartment Listings */}
          <Grid item xs={12} md={9}>
            <Grid container spacing={3}>
              {/* Placeholder for dynamic listings */}
              {[...Array(6)].map((_, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Box sx={{ 
                    padding: '1rem', 
                    borderRadius: '8px', 
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
                    textAlign: 'center', 
                    backgroundColor: '#fff' 
                  }}>
                    <img src="room-placeholder.jpg" alt="Room" style={{ width: '100%', borderRadius: '8px' }} />
                    <Typography variant="h6" color="primary" sx={{ marginTop: '0.5rem' }}>
                      Apartment {index + 1}
                    </Typography>
                    <Typography variant="body2" color="secondary">Price: ${500 + index * 100}</Typography>
                    <Typography variant="body2" color="secondary">Bedrooms: {1 + index % 4}</Typography>
                    <Typography variant="body2" color="secondary">Furnished: {index % 2 === 0 ? 'Yes' : 'No'}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            {/* Pagination */}
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
              <Pagination
                count={5}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
                sx={{ '.MuiPaginationItem-root': { fontSize: '1.2rem' } }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default ApartmentList;
