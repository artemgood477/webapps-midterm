// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage'; 
import CheckoutPage from './pages/CheckoutPage'; 
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} /> 
          <Route path="/checkout" element={<CheckoutPage />} /> 
        </Routes>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
