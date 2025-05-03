import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
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
import ProtectedRoute from '../src/components/ProtectedRoute/ProtectedRoute.jsx';
import { api } from './api';

export default function App() {

  useEffect(() => {
    api.get('/api/data')
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
          <Route path="/adminlogin" element={<AdminLoginPage />} />
          
          <Route path="/admin" element={
            <ProtectedRoute>
              <Routes>
                <Route index element={<AdminPage />} />
                <Route path="add" element={<AdminAddPage />} />
                <Route path="remove" element={<AdminRemovePage />} />
              </Routes>
            </ProtectedRoute>
          } />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
