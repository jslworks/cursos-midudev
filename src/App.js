import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // imgs contiene el estado actual. setImages permitirá la actualización del estado del Comp
  const [imgs, setImgs] = useState([IMAGENES]);

  // Cada vez que se renderice el componente, useEffect actuará
  /* El primer parámetro es el cambio, el 2º las dependencias o casos en los cuales cambiará
      Si dejas un [], se ejecutará la 1a vez y ya está */
  useEffect(() => {
    console.log('Load IMAGENES 2 as new State')
    setImgs(IMAGENES2)
  }, []);

  return (
    <div className="App">
      <section className='App-content'>
        {
          imgs.map(singleImg => <img src={singleImg} alt= 'horse' />)
        }
      </section>
    </div>
  );
}

// Imagenes
const endURL = '?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YW5kYWx1c2lhbiUyMGhvcnNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60';

const IMAGENES = [
  'https://images.unsplash.com/photo-1553284965-e2815db2e5a0' + endURL
  // ,'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a' + endURL
];
const IMAGENES2 = [
  'https://images.unsplash.com/photo-1504310977373-186d29f99322' + endURL
  // ,'https://images.unsplash.com/photo-1606107869722-d5cbadabe2f0' + endURL
];

export default App;
