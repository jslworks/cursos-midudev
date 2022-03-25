import { toggleImportanceOf } from "../reducers/noteReducer";
import { useDispatch, useSelector } from "react-redux";
import Notes from "./Notes";

export default function NotesContainer(){
    const notes = useSelector(state => state);
    // const importantNotes = useSelector(state => {
    //   state.filter(note => note.important)
    // }); // Por ejemplo, obtener solo las importantes
    const dispatch = useDispatch();
  
    // Metodo para cambiar la importancia de las notas
    const toggleImportant = (id) => {
      dispatch(toggleImportanceOf(id));
    };
  
    return <Notes notes={notes} toggleImportant={toggleImportant}/>
  }