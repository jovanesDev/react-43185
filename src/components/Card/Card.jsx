import React from 'react'
import batman from '../../assets/batman.jpeg'

const Card = (props) => {
    const {titulo,descripcion,imagen} = props;
  return (
    <div className="card" style={{width:'18rem'}}>
    <img src={ imagen || batman} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{titulo}</h5>
      <p className="card-text">{descripcion}</p>
      <button className="btn btn-primary">Agregar Al carrito</button>
    </div>
  </div>
  )
}

export default Card