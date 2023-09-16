import React from "react";
import ReactDOM from "react-dom/client";
import Calculadora from "./assets/Components/Calculadora";
import "./assets/CSS/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Calculadora />
  </React.StrictMode>
);
