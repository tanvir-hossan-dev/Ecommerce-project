import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/main.css";
import App from "./App";
import { Provider } from "react-redux";
import Store from "./Redux/app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);
