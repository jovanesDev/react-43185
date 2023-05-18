import React, { useState } from "react";

const Item = ({ producto, modelo, marca, precio, addCarrito, count, inCarrito }) => {
  const [counter, setCounter] = useState(1);

  const handleSum = () => setCounter(counter + 1);
  const handleRest = () => setCounter(counter - 1);

  return (
    <div style={{ border: "1px solid black", margin: "0 20px" }}>
      <h1>{modelo}</h1>

      <h3>{producto}</h3>
      <h5>{marca}</h5>
      <h2>${precio}</h2>
      {inCarrito && <h4>Cantidad : {count}</h4>}

      {!inCarrito && (
        <div>
          {/* Item Count */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              margin: "20px auto",
            }}
          >
            <button onClick={handleRest}>Restar</button>
            <h4>{counter}</h4>
            <button onClick={handleSum}>Sumar</button>
          </div>
          <button
            onClick={() =>
              addCarrito({ producto, modelo, marca, precio, count:counter })
            }
          >
            Agregar al Carrito{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default Item;
