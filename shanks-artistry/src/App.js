import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from '../src/components/Footer/footer.jsx';
import Header from '../src/components/Header/header.jsx';
import HomePage from '../src/pages/HomePage/HomePage.jsx';
import GalleryPage from '../src/pages/GalleryPage/GalleryPage.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage/>} />
        
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

