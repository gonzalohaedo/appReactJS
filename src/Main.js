//IMPORTAR UN HOOK
//import { useState } from "react";
import ItemCount from "./components/ItemCount";
//import Contador from "./Contador";

function Main() {
  return (
    <>
      <ItemCount stock={10} />
    </>
  );
}

export default Main;

//--------------------------------------------------------------------------------
// CODIGO QUE VOY SACANDO PERO QUE GUARDO COMO EJEMPLO
/* 
function Main(props) {
  console.log(props.nombre);
  return (
    <div className="cajaPrueba">
      <h2>
        ¡Hola! Bienvenido {props.nombre} {props.apellido}, usted tiene{" "}
        {props.edad}.
      </h2>
      <p>Los usuarios son {props.usuarios}</p>
    </div>
  );
}
*/
//--------------------------------------------------------------------------------
/*
  //let contador = 0;

  //contador y setContador es un ej, le puedo poner cualquier nombre.
  const [contador, setContador] = useState(0);

  const handleClick = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    setContador(contador - 1);
  };

  const resetear = () => {
    setContador(0);
  };

      <div className="cajaPrueba">
        <h2>
          ¡Hola! Bienvenido {props.nombre} {props.apellido}, usted tiene{" "}
          {props.edad}.
        </h2>
        <p>Mi contador actual: {contador}</p>
        <button onClick={handleClick}>Aumentar</button>
        <button onClick={restar}>Restar</button>
        <button onClick={resetear}>Resetear</button>
        <img src="/logo192.png" alt="" />
      </div>
      <ul>
        <li>Sin items</li>
      </ul>
      <Contador />
*/
