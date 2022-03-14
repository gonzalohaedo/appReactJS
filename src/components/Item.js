function Item(props) {
  return (
    <div className="cajaItem">
      <img src={props.imagen} alt={props.nombre} />
      <h2 className="cajaItem--nombre">{props.nombre}</h2>
      <h2>${props.precio}</h2>
      <button>Más información</button>
    </div>
  );
}

export default Item;

/*
function Item() {
  return (
    <div className="cajaItem">
      <h2>Soy el componente ITEM</h2>
    </div>
  );
}

export default Item;
*/
