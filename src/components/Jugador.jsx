import React from 'react'

const Jugador = (props) => {

    const {nombre,apellido} = props;
  return (
    <div>
        <h1>{nombre}</h1>
        <h1>{apellido}</h1>
        <hr />
    </div>
  )
}

export default Jugador