import { useEffect, useState } from 'react';
import './App.css';

const apiURL = 'https://api.giphy.com/v1/gifs/search?api_key=1VGGi4FZ6ZADpWjwkrqtmvlOsJQ1gRu4&q=horse&limit=4&offset=0&rating=g&lang=en';

function App() {
  // imgs contiene el estado actual. setImages permitirá la actualización del estado del Comp
  const [gifs, setGifs] = useState([]);

  // Cada vez que se renderice el componente, useEffect actuará
  /* El primer parámetro es el cambio, el 2º las dependencias o casos en los cuales cambiará
      Si dejas un [], se ejecutará la 1a vez y ya está */
  useEffect(() => {
    console.log('actualizando gifs')
    fetch(apiURL) // Consultamos la url de ésta API
      .then(res => res.json()) // Procesamos la respuesta de la Promise
      .then(response => {
        const {data} = response;
        // Accedemos al json y transformamos el array en uno de gifs que queremos guardar
        const gifs = data.map(image => image.images.downsized_medium.url);
        setGifs(gifs); // Le decimos que nuestro estado ahora tendra los gifs
      })
  }, []);

  return (
    <div className="App">
      <section className='App-content'>
        {
          gifs.map(singleImg => <img src={singleImg} alt= 'horse' />)
        }
      </section>
    </div>
  );
}

export default App;
