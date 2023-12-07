// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home-section';
import Product from './components/product-section';
import OurService from './components/service-section';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/services" element={<OurService />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
