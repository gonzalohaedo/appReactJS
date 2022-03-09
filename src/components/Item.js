function Item(props) {
  return (
    <div className="cajaItem">
      <h2>{props.id}</h2>
      <h2>{props.nombre}</h2>
      <h2>{props.precio}</h2>
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
