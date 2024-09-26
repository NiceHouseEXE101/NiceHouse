// theme.ts
import { createTheme } from '@mui/material/styles';

// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff', // Primary blue
    },
    secondary: {
      main: '#343a40', // Dark gray
    },
    text: {
      primary: '#fff', // White for text
    },
  },
  typography: {
    fontFamily: 'Helvetica, sans-serif',
    h1: {
      fontFamily: 'Brice Regular, sans-serif',
      fontSize: '2.5rem',
    },
    h2: {
      fontFamily: 'Brice Regular, sans-serif',
      fontSize: '2rem',
    },
    body1: {
      fontFamily: 'Helvetica, sans-serif',
      fontSize: '1rem',
    },
    button: {
      fontFamily: 'Helvetica, sans-serif',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Disable uppercase transformation
        },
      },
    },
  },
});

export default theme;
