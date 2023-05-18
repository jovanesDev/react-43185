import React, { createContext } from 'react'

export const ProductoContext = createContext('')

const ProductoProvider = ({children}) => {

    // esto podria ser un estado para el fetch y hay que meter en useEffect
    const productos = [
        {
            producto:'zapatilla',
            modelo:'AireForce 1',
            marca:'Nike',
            precio:10000
        },
        {
            producto:'zapatilla',
            modelo:'Air Max 90',
            marca:'Nike',
            precio:20000
        }
    ]

  return (
    <ProductoContext.Provider value={{productos}} >
        {children}
    </ProductoContext.Provider>
  )
}

export default ProductoProvider