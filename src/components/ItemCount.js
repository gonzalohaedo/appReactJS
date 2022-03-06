//IMPORTAR UN HOOK
import { useState } from "react";

function ItemCount(props) {
  //let contador = 0;

  //contador y setContador es un ej, le puedo poner cualquier nombre.
  const [contador, setContador] = useState(0);

  const handleClick = () => {
    if (contador < props.stock) setContador(contador + 1);
  };

  const restar = () => {
    if (contador > 0) setContador(contador - 1);
  };

  const resetear = () => {
    setContador(0);
  };

  const addToCart = () => {
    props.onAdd(contador);
    setContador(1);
  };

  return (
    <>
      (
      <div className="cajaPrueba">
        <div className="cajaContador">
          <div className="box1">
            <p>Unidades disponibles: {props.stock}</p>
          </div>
          <div className="box2">
            <button onClick={restar}>-</button>
            <p>{contador}</p>
            <button onClick={handleClick}>+</button>
          </div>
          <div className="box3">
            <button onClick={addToCart}>Agregar al carrito</button>
            <button onClick={resetear}>Limpiar</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemCount;
