import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from '../src/components/Footer/footer.jsx';
import Header from '../src/components/Header/header.jsx';
import HomePage from '../src/pages/HomePage/HomePage.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <HomePage />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

