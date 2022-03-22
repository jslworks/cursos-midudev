import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { noteReducer } from './reducers/noteReducer';

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

  return (
    <ul>
      {
        state.map(note => {
          return <li key={note.id}>
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
      }
    </ul>
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