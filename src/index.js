import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { noteReducer } from './reducers/noteReducer';

import App from './App';

const store = createStore(noteReducer);

// Provider: es el encargado de tener la store y mantenerla disponible para toda la aplicación
ReactDOM.render(
  <Provider store={store}>
    <App  />
  </Provider>,
  document.getElementById('root')
)

// // Render
// const renderApp = () => {
//   ReactDOM.render(
//     <App store={store} />,
//     document.getElementById('root')
//   )
// }

// renderApp();
// // STORE: Nos suscribimos. Asi, cada vez que cambie el estado, nos notifica. Muy util para actuliza la UI cada vez que algo se hay aactualizado
// store.subscribe(renderApp);