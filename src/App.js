import { useEffect, useState } from "react";
import "./App.css";
import getGifs from "./services/getGifs";

export default function App() {
  // imgs contiene el estado actual. setImages permitirá la actualización del estado del Comp
  const [gifs, setGifs] = useState([]);

  // Cada vez que se renderice el componente, useEffect actuará
  /* El primer parámetro es el cambio, el 2º las dependencias o casos en los cuales cambiará
      Si dejas un [], se ejecutará la 1a vez y ya está */
  useEffect(() => {
    console.log("actualizando gifs");
    
    /* Exportamos la lógica de servicio para obtener los gifs
       y al obtener respuesta, actualizamos nuestro estado con los gifs recibidos */
    getGifs({keyword : 'horse' }).then((gifs) => setGifs(gifs));        
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map((singleGif) => {
            return <div>
                <h4>{singleGif.title}</h4>
                <small>{singleGif.id}</small>
                <img src={singleGif.url} alt={singleGif.title} />
              </div>
            
          })
        }
      </section>
    </div>
  );
}