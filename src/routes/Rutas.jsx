import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Checkout from '../pages/Checkout'
import Home from '../pages/Home'
import ItemDetail from '../pages/ItemDetail'
import Navbar from '../components/Navbar'

const Rutas = () => {

    const navbar_items = [
        {
            path:"/",
            name:"Home"
        },
        {
            path:"/checkout",
            name:"Checkout"
        },
    ]

  return (
    <BrowserRouter>
        <Navbar navbar_items={navbar_items}/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/checkout'element={<Checkout/>} />
            <Route path='/item/:id' element={<ItemDetail/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Rutas