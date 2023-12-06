import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Home from './components/home-section'
import Product from './components/product-section'
import OurService  from './components/service-section'
import Footer from './components/footer'

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <Product/>
      <OurService/>
      <Footer/>
    </>
  )
}

export default App
