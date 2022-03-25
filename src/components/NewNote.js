import { useDispatch } from "react-redux";
import { createNote } from "../reducers/noteReducer";

export const NewNote = () => {
    const dispatch = useDispatch();

    const addNote = (event) => {
        event.preventDefault();
        const { target } = event;
        const content = target.note.value; // accedemos al elemento por su nombre
        target.note.value = ''; // Manipulación directa del DOM, ya que no estamos controlando el state. Si no, seria resetear el estado
        dispatch(createNote(content));
      }

  return (
    <form onSubmit={addNote}>
      <input name="note" />
      <button>add</button>
    </form>
  );
}
