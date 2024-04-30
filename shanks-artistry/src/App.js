import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from '../src/components/Footer/footer.jsx';
import Header from '../src/components/Header/header.jsx';
import HomePage from '../src/pages/HomePage/HomePage.jsx';
import GalleryPage from '../src/pages/GalleryPage/GalleryPage.jsx';
import ProductsPage from '../src/pages/ProductsPage/ProductsPage.jsx';
import ContactPage from '../src/pages/ContactPage/ContactPage.jsx';
import AdminLoginPage from '../src/pages/AdminLoginPage/AdminLoginPage.jsx';
import AdminAddPage from '../src/pages/AdminAddPage/AdminAddPage.jsx';
import AdminRemovePage from '../src/pages/AdminRemovePage/AdminRemovePage.jsx';


export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage/>} />
        <Route path="/products" element={<ProductsPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/adminlogin" element={<AdminLoginPage/>} />
        <Route path="/adminadd" element={<AdminAddPage/>} />
        <Route path="/adminremove" element={<AdminRemovePage/>} />
        
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

