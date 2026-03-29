import React from "react";
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"
import Navbar from "./components/Navbar"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer";
import ScrollToTop from "./components/Scrolltotop";



function App() {
  return (
    <>
      <Navbar />
      <Navigation />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
