import { createStore } from 'redux';

function App() {
  return (
    <div>
      {store.getState()}
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
    case "@counter/reseated":
      return 0;

    default:
      console.error("Unknown action");
      return state;
  }
};

// STORE
// Para crearla debemos pasarle el reducer o la maquina que tiene que utilizar para gestionar el estado
const store = createStore(counterReducer);

// Nos suscribimos par que cada vez que cambie el estado, nos notifica. Muy util para actuliza la UI cada vez que algo se hay aactualizado
store.subscribe(() => {
  store.getState();
});

export default App;
