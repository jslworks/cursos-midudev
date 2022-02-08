import { createStore } from 'redux';

// ACTIONS
import actions from './actions.js'

// REDUCERS
const counterReducer = (state = 0, action) => { // Necesitamos inicializar par a empezar la rueda
  switch (action.type) { // Recuperamos tipo de acción
    case "@counter/incremented":
      return state + 1;
      break;
    case "@counter/decremented":
      return state - 1;
      break;
    case "@counter/reseted":
      return 0;
      break;

    default:
      console.error("Unknown action");
      return state;
      break;
  }
};

// STORE
// Para crearla debemos pasarle el reducer o la maquina que tiene que utilizar para gestionar el estado
const store = createStore(counterReducer);

// Nos suscribimos par que cada vez que cambie el estado, nos notifica. Muy util para actuliza la UI cada vez que algo se hay aactualizado
store.subscribe(() => {
    store.getState();
})

// Lanzar acciones
store.dispatch(actions.increment);
store.dispatch(actions.decrement);
store.dispatch(actions.reset);
