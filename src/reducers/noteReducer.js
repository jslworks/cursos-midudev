export const noteReducer = (state = [], action) => {
  if (action.type === "@notes/created") {
    // state.push(action.payload); // De base push modifica el array original
    return state.concat(action.payload); // Para evitar lo anterior, usamos concat
  }

  // Tipo cambiar importancia
  if (action.type === "@notes/toggle_important") {
    const { id } = action.payload; // recuperamos id
    // Recuperamos el estado y, por cada nota, si tiene esa idea, cambiamos su importancia
    return state.map(note => {
        if(note.id === id){
            return note.important = !note.important;
        }
        return note;
    });

  }

  return state;
};
