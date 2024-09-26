import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap
import './index.css'; // Custom styles

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Đổi font chữ
// main.tsx
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import theme from './theme'; // Import the custom theme

// ReactDOM.render(
//   <React.StrictMode>
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <App />
//     </ThemeProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
