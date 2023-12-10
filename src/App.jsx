import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home-section';
import Product from './components/product-section';
import OurService from './components/service-section';
import Footer from './components/footer';
<<<<<<< HEAD
=======
import Cart from './components/cart';
>>>>>>> fed4ff3 (make a cart (not working rn) and make login page)
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
<<<<<<< HEAD
=======
          <Route path="/cart" element={<Cart />} />
>>>>>>> fed4ff3 (make a cart (not working rn) and make login page)
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
