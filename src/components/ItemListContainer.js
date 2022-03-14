import { useState, useEffect } from "react";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  let productosIniciales = [
    {
      id: 1,
      nombre: "Compresor",
      precio: 100,
      imagen:
        "https://gammaherramientas.com.ar/wp-content/uploads/2021/01/G2852AR-Compresor-25L-web-600x600.jpg",
    },
    {
      id: 2,
      nombre: "Taladro",
      precio: 200,
      imagen:
        "https://gammaherramientas.com.ar/wp-content/uploads/G12301AR-WEB-600x600.jpg",
    },
    {
      id: 3,
      nombre: "Amoladora",
      precio: 300,
      imagen:
        "https://gammaherramientas.com.ar/wp-content/uploads/Herramientas-electricas-portatiles_Amoladora-Angular-2000-W_G1913AR-00-800x800.jpg",
    },
    {
      id: 4,
      nombre: "Soldadora",
      precio: 400,
      imagen:
        "https://gammaherramientas.com.ar/wp-content/uploads/G3469AR_web-600x600.jpg",
    },
  ];

  // CORRECCIONES EN BASE A DEVOLUCION DE TUTOR BRAIAN
  const getProductos = () =>
    new promise((resolve, reject) => {
      setTimeout(
        () =>
          productosIniciales
            ? resolve(productosIniciales)
            : reject(new Error("getProductos Error")),
        1000
      );
    });

  useEffect(() => {
    getProductos()
      .then((response) => setProductos(response))
      .catch((error) => console.log(error));
  }, []);
  //--------------------------------------------------------------------------------
  // ESTO ESTA MAL, TENGO QUE LIMPIARLO.
  /*
  const getProductos = new Promise((r) => {
    setTimeout(() => {
      r();
    }, 2000);
  }).then(() => {
    setProductos(productosIniciales);
  });
  */
  //--------------------------------------------------------------------------------
  return (
    <>
      <div className="cajaGreeting">
        <ItemList productos={productos} />
      </div>
    </>
  );
}

export default ItemListContainer;

/*
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
          {productos.map((producto) => {
            return <li>{producto.precio}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default ItemListContainer;
*/
