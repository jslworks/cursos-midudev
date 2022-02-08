import ReactDOM from 'react-dom';
import { createStore } from 'redux';

function App() {
  return (
    <div>
      <div>
        {store.getState()}
      </div>
      <button
        onClick={()=> store.dispatch(increment)}
      > + </button>
      <button
        onClick={()=> store.dispatch(decrement)}
      > - </button>
      <button
        onClick={()=> store.dispatch(reset)}
      > reset </button>
    </div>
  );
}

// ACTIONS
const increment = { type: "@counter/incremented" };
const decrement = { type: "@counter/decremented" };
const reset = { type: "@counter/reseted" };

// REDUCERS
const counterReducer = (state = 0, action) => {
  // Necesitamos inicializar par a empezar la rueda
  switch (
    action.type // Recuperamos tipo de acción
  ) {
    case "@counter/incremented":
      return state + 1;
    case "@counter/decremented":
      return state - 1;
    case "@counter/reseted":
      return 0;
    default:
      return state;
  }
};

// STORE: Para crearla debemos pasarle el reducer o la maquina que tiene que utilizar para gestionar el estado
const store = createStore(
  counterReducer, 
  /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

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
