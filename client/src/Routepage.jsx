import React from 'react'
import Register from "./components/user/Register";
import {Routes, Route } from "react-router-dom";
import Login from "./components/user/Login";
import AddProduct from "./components/product/AddProduct";
import ShowProduct from "./components/product/ShowProduct";
import UpdateProduct from "./components/product/UpdateProduct";
import Cart from "./components/product/Cart";
import Gallery from "./components/product/Gallery";
import Home from "./components/product/Home";
import Admin from "./components/Admin/Admin";
import Requireauth from './Requireauth';
import NAVBAR from "./components/NAVBAR/NAVBAR";
const Routepage = () => {
    
  return (
    <>
       <NAVBAR />
       <Routes>
        <Route path="/" element={<Home />} />
   
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin" element={<Admin />} />
        
              <Route path="/addproduct" element={<Requireauth><AddProduct /></Requireauth>} />
              <Route path="/gallery" element={<Requireauth><Gallery /></Requireauth>} />
              <Route path="/showproduct" element={<Requireauth><ShowProduct /></Requireauth>} />
              <Route path="/updateproduct/:id" element={<Requireauth><UpdateProduct /></Requireauth>} />
              <Route path="/cart" element={<Requireauth><Cart /></Requireauth>} />
     
        </Routes>
    </>
  )
}

export default Routepage