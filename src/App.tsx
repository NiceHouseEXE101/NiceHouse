import React from 'react';
import { BrowserRouter as Router,  } from 'react-router-dom';
import './App.css'
import Header from './components/Home/Header';

import Footer from './components/Home/Footer';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <HomePage/>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
