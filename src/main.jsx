import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
      <App />
  </Provider>
);