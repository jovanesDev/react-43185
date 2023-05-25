import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {collection , getDocs } from 'firebase/firestore'
import { db } from './firebase.config';

function App() {

  const [productos,setProductos] = useState([]);
  const [loading,setLoading] = useState(false);


  useEffect(() => {

    const getProductos = async () => {
       setLoading(true)
      try {
        
        const col = collection(db,"productos")
        const data = await getDocs(col)
         const result = data.docs.map(doc => doc={id:doc.id,...doc.data()})
         setProductos(result)
         setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    getProductos()

  }, [])
  


  return (
    <div className="App">
      {loading && <h1>Cargando...</h1>}
      {!loading && productos.length > 0 && productos.map((producto) => <li key={producto.id}>{producto.modelo}</li>)}
    </div>
  );
}

export default App;
