import React, { useContext } from 'react'
import { CarritoContext } from '../context/CarritoProvider'
import Item from '../components/Item'

const Carrito = () => {
    const {carrito} = useContext(CarritoContext)
  return (
    <div>
        {carrito.map((item) => (
            <Item inCarrito key={item.precio} {...item} />
        ))}

        {/* <div>
            <h4>Total es {giveMeTotal}</h4>
        </div> */}
    </div>
  )
}

export default Carrito