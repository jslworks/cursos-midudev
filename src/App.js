import { toggleImportanceOf } from './reducers/noteReducer';
import { useDispatch, useSelector } from 'react-redux';
// useStore devuelve toda la store, por lo tanto no es lo que buscamo
// useSelector permite suscribirte a solo una parte del estado

import { NewNote } from './components/NewNote'

const App = () => {
  const notes = useSelector(state => state);
  // const importantNotes = useSelector(state => {
  //   state.filter(note => note.important)
  // }); // Por ejemplo, obtener solo las importantes
  const dispatch = useDispatch();


  // Metodo para cambiar la importancia de las notas
  const toggleImportant = (id) => {
    dispatch(toggleImportanceOf(id));
  }

  // Hacemos formulario no controlado, es decir, que no estamos guardando los valores en la Store
  // +Ventaja: rendimiento
  // -Desventaja: pierdes algo de control
  return (
    <div>
      <NewNote />
      <ul> {
        notes.map(note => {
          return <li key={note.id} onClick={() => toggleImportant(note.id)}>
            {note.content}
            <strong>
              {
                note.important
                  ? 'important'
                  : 'not important'
              }
            </strong>
          </li>
        })
      } </ul>
    </div>
  )
}

export default App;