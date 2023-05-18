import React, { useContext } from "react";
import { ProductoContext } from "../context/ProductoProvider";
import Item from "./Item";
import { useNavigate } from "react-router-dom";
import { CarritoContext } from "../context/CarritoProvider";

const ItemListContainer = () => {
  const { productos } = useContext(ProductoContext);
  const { carrito,addCarrito } = useContext(CarritoContext);

  const navigate = useNavigate();
  return (
    <div>
      <button onClick={()=> navigate('/carrito')}>Carrito</button>
      <h4>Carrito hay {carrito.length} </h4>
      <div style={{ display: "flex" }}>
        <>
          {productos.map((producto) => (
            <Item addCarrito={addCarrito} {...producto} />
          ))}
        </>
      </div>
    </div>
  );
};

export default ItemListContainer;
