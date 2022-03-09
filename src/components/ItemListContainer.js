import { useState, useEffect } from "react";

let productosIniciales = [
  { id: 1, nombre: "Producto 1", precio: 100 },
  { id: 2, nombre: "Producto 2", precio: 200 },
  { id: 3, nombre: "Producto 3", precio: 300 },
];

function ItemListContainer(greeting) {
  const [loanding, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosIniciales);
      }, 2000);
    });

    promesa
      .then((respuestaDeLaApi) => {
        setProductos(productosIniciales);
        setLoading(false);
      })
      .catch((errorDeLaApi) => {
        console.log(errorDeLaApi);
        setError(
          "Hubo un error al cargar los datos, vuelva a intentarlo por favor."
        );
      })
      .finally(() => {
        setLoading(false);
      });

    //console.log(promesa);
  });

  return (
    <>
      <div className="cajaGreeting">
        <h2>{greeting.mensaje}</h2>
        <p>{loanding ? "Cargando..." : "Ya tenes los productos"}</p>
        <ul>
          {productos.map((producto, indice) => {
            return <li>{producto.nombre}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default ItemListContainer;
