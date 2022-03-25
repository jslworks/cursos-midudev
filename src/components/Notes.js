import { toggleImportanceOf } from "../reducers/noteReducer";
import { useDispatch, useSelector } from "react-redux";

export const Notes = () => {
  const notes = useSelector((state) => state);
  // const importantNotes = useSelector(state => {
  //   state.filter(note => note.important)
  // }); // Por ejemplo, obtener solo las importantes
  const dispatch = useDispatch();

  // Metodo para cambiar la importancia de las notas
  const toggleImportant = (id) => {
    dispatch(toggleImportanceOf(id));
  };

  return (
    <ul>
      {notes.map((note) => {
        return (
          <li key={note.id} onClick={() => toggleImportant(note.id)}>
            {note.content}
            <strong>{note.important ? "important" : "not important"}</strong>
          </li>
        );
      })}
    </ul>
  );
};
