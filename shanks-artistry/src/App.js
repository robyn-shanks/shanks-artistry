import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';

import Footer from '../src/components/Footer/footer.jsx';
import Header from '../src/components/Header/header.jsx';
import HomePage from '../src/pages/HomePage/HomePage.jsx';
import GalleryPage from '../src/pages/GalleryPage/GalleryPage.jsx';
import ProductsPage from '../src/pages/ProductsPage/ProductsPage.jsx';
import ContactPage from '../src/pages/ContactPage/ContactPage.jsx';
import AdminLoginPage from '../src/pages/AdminLoginPage/AdminLoginPage.jsx';
import AdminPage from '../src/pages/AdminPage/AdminPage.jsx';
import AdminAddPage from '../src/pages/AdminAddPage/AdminAddPage.jsx';
import AdminRemovePage from '../src/pages/AdminRemovePage/AdminRemovePage.jsx';


export default function App() {

  useEffect(() => {
    axios.get('http://localhost:8080/api/data') 
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/gallery/:id" element={<ProductsPage />} /> 
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/adminlogin" element={<AdminLoginPage />} />
          <Route path="/admin/add" element={<AdminAddPage />} />
          <Route path="/admin/remove" element={<AdminRemovePage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
