import { useState, useEffect } from "react";

let productosIniciales = [
  { id: 1, nombre: "Producto 1", precio: 100 },
  { id: 2, nombre: "Producto 2", precio: 200 },
  { id: 3, nombre: "Producto 3", precio: 300 },
];

function Contador() {
  let [dark, setDark] = useState(false);

  const toggleDarkMode = () => {
    setDark(!dark);
  };

  //Aca el console.log no queda desfazado con respecto a lo que figura en pantalla. Esta sincronizado
  console.log(dark);

  const [loanding, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState();

  //useEffect(function, [array]) Se compone de una funcion y un array, el array es optativo.

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

  console.log(productos);

  return (
    <div className="cajaPrueba">
      <h1>CONTADOR</h1>
      <p>El tema del sitio es: {dark.toString()}</p>
      <p>Mi contador actual va: 0</p>
      <p>La cantidad de producto es: 0</p>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <p>{loanding ? "Cargando..." : "Ya tenes los productos"}</p>
      <ul>
        {productos.map((producto, indice) => {
          return <li>{producto.nombre}</li>;
        })}
      </ul>
    </div>
  );
}

export default Contador;
