import Item from "./Item";

function ItemList(props) {
  return (
    <>
      {props.productos.map((p) => {
        return (
          <Item
            id={p.id}
            nombre={p.nombre}
            precio={p.precio}
            imagen={p.imagen}
          />
        );
      })}
    </>
  );
}

export default ItemList;

/*
function ItemList() {
  return (
    <>
      <div className="cajaItemList">
        <h2>Soy el componente ITEMLIST</h2>
      </div>
    </>
  );
}

export default ItemList;
*/
