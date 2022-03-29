import logo from './logo.svg';
import './App.css';

function App() {

  function changeTextHandler (event) {

  }

  return (
   <>
    <h1>Texto</h1>
    <main>
    <textarea onChange={changeTextHandler}>Escribir</textarea>
    <p><span>Letras</span><span>Palabras</span></p>
    <p><span>x</span><span>y</span></p>
 
    </main>
   </>
  );
}

export default App;
