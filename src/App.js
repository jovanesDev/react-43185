import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import AbstraccionSelect from './AbstraccionSelect';

function App() {

  const formulario = useRef(null) // querySelector || getElementByID

  

   const handleClick = (e) => {
    console.log(e,'evento')
    console.log(e.nativeEvent,'Native-evento')
   }

   const onResize = (e) => {
    console.log('resized')
   }

   useEffect(() => {
    
    window.addEventListener('resize',onResize)
  
    return () => {
      window.removeEventListener('resize',onResize)
    }
  }, [])

  // 21:40 lo resolveremos juntos , mientras intenten a hacer 

  const [text,setText] = useState('')

  const handleChange = (e) => {
    // esto deberia ser un handleKeyDown 
    // Y no deberia guardar en el setText la letra si es vocal 
    setText(e.target.value)
  }

  const vocales = ['a', 'e', 'i', 'o', 'u']


const handleSubmit = (e) => {
  e.preventDefault()
  setText('')
  formulario.current.reset()
  console.log(text)
}

const handleKeyDown = (e) => {
  if(vocales.includes(e.key.toLowerCase())) {
    alert(`${JSON.stringify(vocales)} no estan permitidos`)
    return
  } 
  setText(e.key)
  //console.log(e.key)
}

  return (
    <div className="App">
      <button onClick={handleClick}>Click</button>

    <form onSubmit={handleSubmit} ref={formulario} action="">
      {/* Bloquear los vocales */}
      <input value={text} onKeyDown={handleKeyDown} type="text" defaultValue={text} />
      <button type='submit'>Sumbit</button>
    </form>

      
      <h1>{text}</h1>

      <hr />
      <hr />
      <h1>Abstraccion con Select</h1>
      <hr />
      <hr />
      <AbstraccionSelect/>
    </div>
  );
}

export default App;
