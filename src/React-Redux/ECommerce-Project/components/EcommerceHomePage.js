import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Product from "./Product";
import ProductDetail from "./ProductDetail";
import { Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import Checkout from "./Checkout";

const EcommerceHomePage = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
       
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
       
      
      </Routes>
      <Footer />
    </div>
  );
};

export default EcommerceHomePage;
