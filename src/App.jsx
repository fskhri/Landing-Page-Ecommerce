import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home-section';
import Product from './components/product-section';
import OurService from './components/service-section';
import Footer from './components/footer';
import Cart from './components/cart';
import Login from './components/login';

function App() {
  return (
    <Router>
      <div className="h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/services" element={<OurService />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
