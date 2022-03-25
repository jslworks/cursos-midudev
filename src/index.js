import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./App";
import { noteReducer } from "./reducers/noteReducer.js";

const store = createStore(noteReducer);

// Provider: es el encargado de tener la store y mantenerla disponible para toda la aplicación
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
