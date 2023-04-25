import "./App.css";
import Card from "./components/Card/Card";
import Contador from "./components/Contador/Contador";
// import Navbar from './components/Navbar/Navbar';
import Container from "./layout/Container";
import Contacto from "./pages/Contacto";
import Home from "./pages/Home";
import {AiFillAndroid}  from "react-icons/ai";


// Break hasta 21:57 

function App() {

  const contenido = [
    {
      titulo:'batman',
      descripcion:'DC',
    },
    {
      titulo:'superman',
      descripcion:'DC',
      imagen:'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/AMZVGO3IIJEWBI4JRKF32SRI5U.jfif'
    }
  ]

  return (
    <div className="App">
     <h1><AiFillAndroid/></h1>
      <Container>
        <Home />
      </Container>

      <h1>--------------------</h1>

      <Container>
        <Contacto />
      </Container>

      <h1>---------------------</h1>
      <Contador initialValue={10}/> 
      <Contador/> 
      <Contador initialValue={5}/> 

      {contenido.map((superheroe,index) => (
        <Card key={index} titulo={superheroe.titulo} descripcion={superheroe.descripcion} imagen={superheroe.imagen}/>
      ))}

      
      {/* <h1 className='text-danger'>Hola Mundo </h1>
      <Navbar items={['Inicio','Categorias','Sobre Nosotros','Contacto']} navbarLogoCss={"text-danger navbar-brand"} navbarLogo={'Coder House'}   />
      <Navbar  items={['Producto1','Producto2','Producto3','Producto4','Producto5','Producto6','Producto7']} className={"navbar navbar-expand-lg navbar-light bg-warning"} navbarLogo={'Mercado Libre'} /> */}
    </div>
  );
}

export default App;
