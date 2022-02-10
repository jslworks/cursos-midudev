// Exportamos la lógica de servicio para obtener los gifs

const apikey = "1VGGi4FZ6ZADpWjwkrqtmvlOsJQ1gRu4";

//
export default function getGifs({ keyword = "horse" } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${keyword}&limit=3&offset=0&rating=g&lang=en`;

  return fetch(apiURL) // Consultamos la url de ésta API
    .then((res) => res.json()) // Procesamos la respuesta de la Promise
    .then((response) => {
      const { data } = response;
      // Accedemos al json y transformamos el array en uno de gifs que queremos guardar
      return data.map((image) => {
        const { images, title, id } = image;
        const { url } = images.downsized_medium;
        return { title, id, url }
      });
    });
}

/* Explicación de --> getGifs({keyword = 'horse' } = {}) {

  Por defecto, el valor será un objeto vacío "= {}" y si no llega, se establecerá 'horse'
  */
