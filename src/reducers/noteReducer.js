export const noteReducer = (state = [], action) => {
  if (action.type === "@notes/created") {
    // state.push(action.payload); // De base push modifica el array original
    // return state.concat(action.payload); // Para evitar lo anterior, usamos concat
    return [...state, action.payload]; // Similar a usar concat
  }

  // Tipo cambiar importancia
  if (action.type === "@notes/toggle_important") {
    const { id } = action.payload; // recuperamos id
    // Recuperamos el estado y, por cada nota, si tiene esa idea, cambiamos su importancia
    return state.map(note => {
      // Para no mutar el objeto, utilizamos spread operator. Copiamos todas las notas y creamos uno nuevo
      // Ojo, si note tiene otro objeto dentro habría que utilizar spread dentro de spread. Se puede utiliza fibers.js
      return {
        ...note,
        important: !note.important
      }
    });

  }

  return state;
};
