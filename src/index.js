import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "html-css-template/css/reset.module.css";
import "html-css-template/css/login.module.css";
import "html-css-template/css/cadastro.module.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
