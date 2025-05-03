import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {  
  if (!localStorage.token) {
    return <Navigate to="/adminlogin" replace />;
  }

  return children;
};

export default ProtectedRoute; 