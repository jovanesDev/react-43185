import React, { useState } from "react";
import { createContext } from "react";

export const CarritoContext = createContext("");

const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const addCarrito = (item) => setCarrito([...carrito, item]);

  //const giveMeTotal = carrito.reduce((prev,curr) => { prev = prev + (curr.count * curr.precio)},0)

  return (
    <CarritoContext.Provider value={{ carrito, addCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoProvider;
