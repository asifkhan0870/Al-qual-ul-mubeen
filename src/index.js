import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css"; // Or './App.css' for global styles
import "../src/i18n/i18n"; // Import i18n configuration

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
