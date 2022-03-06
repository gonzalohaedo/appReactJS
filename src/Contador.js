import { useState } from "react";

function Contador() {
  let [dark, setDark] = useState(false);

  const toggleDarkMode = () => {
    setDark(!dark);
  };

  //Aca el console.log no queda desfazado con respecto a lo que figura en pantalla. Esta sincronizado
  console.log(dark);

  return (
    <div>
      <h1>CONTADOR</h1>
      <p>El tema del sitio es: {dark.toString()}</p>
      <p>Mi contador actual va: 0</p>
      <p>La cantidad de producto es: 0</p>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  );
}

export default Contador;
