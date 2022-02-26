//1) Tenes la variables React en el scope
import React from "react";

//2) Tenes la variables ReactDOM en el scope
import ReactDOM from "react-dom";

//3) Tener un componente de React, tener el primer componente creado.
// Llevo el componente a su archivo y aca lo importo
import App from "./App.js";

//EJEMPLO DE COMO IMPORTAR ESTILOS
import "./styles.scss";

//4) Renderizar App en el DOM
ReactDOM.render(<App />, document.getElementById("root"));
