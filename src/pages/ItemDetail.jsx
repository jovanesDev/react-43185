import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ItemDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams(); 

  // o 1 o 2

  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  const items = [
    {
      id: '1',
      titulo: "Item 1",
      descripcion:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto magnam esse quia perspiciatis quam iure debitis. Dolorum soluta, esse in aliquam maiores enim dolor officia perspiciatis quo? Veniam, quidem hic.",
    },
    {
      id: '2',
      titulo: "Item 2",
      descripcion:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto magnam esse quia perspiciatis quam iure debitis. Dolorum soluta, esse in aliquam maiores enim dolor officia perspiciatis quo? Veniam, quidem hic.",
    },
  ];

  useEffect(() => {

    setTimeout(() => {
      const filter = items.find((item) => item.id === id);
      setItem(filter)
      setLoading(false)
    }, 2000);



  }, []);

  const agregarAlCarrito = () => {
    // agarrar el item y guardar en el state del carrito 
    navigate('/checkout')
  }
 

  return (
    <Fragment>
      <button className="btn btn-dark" onClick={() => navigate(-1)}>
        Volver
      </button>
      <hr />
      {loading && <h1>Cargando..</h1>}
      {item && !loading && (
        <div>
          <h1>{item.titulo}</h1>
          <p>{item.descripcion}</p>
          <p>Id es :{item.id}</p>


          <h1>ACA VA MI COUNTER</h1>
          <button onClick={agregarAlCarrito} >Agregar al carrito</button>
        </div>
      )}
    </Fragment>
  );
};

export default ItemDetail;
