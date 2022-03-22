import { react, useEffect, useState } from "react";
import getGifs from "../services/getGifs";
import Gif from './Gif';

export default function ListOfGifs({ params }) {
    const { keyword } = params;
    const [ loading, setLoading ] = useState(false);
    // imgs contiene el estado actual. setImages permitirá la actualización del estado del Comp
    const [gifs, setGifs] = useState([]);

    // Cada vez que se renderice el componente, useEffect actuará
    /* El primer parámetro es el cambio, el 2º las dependencias o casos en los cuales cambiará
        Si dejas un [], se ejecutará la 1a vez y ya está */
    useEffect(() => {
        setLoading(true)
        /* Exportamos la lógica de servicio para obtener los gifs
        y al obtener respuesta, actualizamos nuestro estado con los gifs recibidos */
        getGifs({ keyword }) // keyword se convierte en una dependencia del efecto
            .then((gifs) => {
                setGifs(gifs);
                setLoading(false); // Dejar de cargar
            });
    }, [keyword]);

    if (loading) return <i>😵</i>

    return <> { 
        gifs.map(({ id, title, url }) => 
            <Gif
                id={id}
                key={id}
                title={title}
                url={url}
            />
        )
    } </>
}