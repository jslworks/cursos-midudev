import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { createNote, toggleImportanceOf, noteReducer } from './reducers/noteReducer';

const store = createStore(noteReducer);

store.dispatch({
  type: '@notes/created',
  payload: {
    content: 'Me encantan las clases de midudev',
    important: true,
    id: 1
  }
});

store.dispatch({
  type: '@notes/created',
  payload: {
    content: 'pero tengo hambre!!! jajaja',
    important: false,
    id: 2
  }
});

const App = () => {
  const state = store.getState();

  const addNote = (event) => {
    event.preventDefault();
    const { target } = event;
    const content = target.note.value; // accedemos al elemento por su nombre
    target.note.value = ''; // Manipulación directa del DOM, ya que no estamos controlando el state. Si no, seria resetear el estado
    store.dispatch(createNote(content));
  }

  // Metodo para cambiar la importancia de las notas
  const toggleImportant = (id) => {
    store.dispatch(toggleImportanceOf(id));
  }

  // Hacemos formulario no controlado, es decir, que no estamos guardando los valores en la Store
  // +Ventaja: rendimiento
  // -Desventaja: pierdes algo de control
  return (
    <div>
      <form onSubmit={addNote}>
        <input name='note' />
        <button>add</button>
      </form>
      <ul> {
        state.map(note => {
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

// Render
const renderApp = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
}
renderApp();

// STORE: Nos suscribimos. Asi, cada vez que cambie el estado, nos notifica. Muy util para actuliza la UI cada vez que algo se hay aactualizado
store.subscribe(renderApp);

export default App;