import { useEffect, useState, useRef } from 'react';
import './App.css';
import Letras from './Components/Letras/Letras';
import Palabras from './Components/Palabras/Palabras';

function App() { // Componente APP()
  // const asociadas a un hook State
  const [text, setText] = useState("");

  function changeTextHandler(event) {
    setText(event.target.value);
    console.log(text)
  }

  useEffect(
    () => {
      console.log("effect:", text)
    },
    [text]
  )

  return (
    <>
      <h1>Texto</h1>
      <main>
        <textarea onChange={changeTextHandler} value={text}>Escribir</textarea>
        <p className='LetrasPalabras'><span><Letras text={text} /></span><span><Palabras text={text} /></span></p>

      </main>
    </>
  );
}

export default App;

// <p><span>Letras</span><span>Palabras</span></p>
// <p><span>x</span><span>y</span></p>