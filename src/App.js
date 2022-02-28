//import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Main from "./Main";
import Footer from "./Footer";
import Header from "./Header";

//3) Tener un componente de React, tener el primer componente creado.
function App() {
  let edad = 17;
  let usuarios = ["Juan", "Pedro", "Maria"];

  return (
    <>
      <Header />
      <Main nombre="Gonzalo" apellido="Haedo" edad={edad} usuarios={usuarios} />
      <ItemListContainer mensaje="¡Hola! Soy un mensaje enviado por props." />
      <Footer />
    </>
  );
}

export default App;
