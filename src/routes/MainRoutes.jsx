import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Carrito from "../pages/Carrito";
import ProductoProvider from "../context/ProductoProvider";
import CarritoProvider from "../context/CarritoProvider";

const MainRoutes = () => {
  return (
    <Router>
      <ProductoProvider>
        <CarritoProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </CarritoProvider>
      </ProductoProvider>
    </Router>
  );
};

export default MainRoutes;
