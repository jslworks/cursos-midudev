// Exportamos la lógica de servicio para obtener los gifs

const apiURL =
  "https://api.giphy.com/v1/gifs/search?api_key=1VGGi4FZ6ZADpWjwkrqtmvlOsJQ1gRu4&q=horse&limit=4&offset=0&rating=g&lang=en";

export default function getGifs() {
  return fetch(apiURL) // Consultamos la url de ésta API
    .then((res) => res.json()) // Procesamos la respuesta de la Promise
    .then((response) => {
      const { data } = response;
      // Accedemos al json y transformamos el array en uno de gifs que queremos guardar
      return data.map((image) => image.images.downsized_medium.url);
    });
}
