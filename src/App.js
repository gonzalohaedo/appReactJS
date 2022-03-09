//import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Main from "./Main";
import Footer from "./Footer";
import Header from "./Header";
import Contador from "./Contador";
import ItemList from "./components/ItemList";
import Item from "./components/Item";

//3) Tener un componente de React, tener el primer componente creado.
function App() {
  let edad = 17;
  let usuarios = ["Juan", "Pedro", "Maria"];

  return (
    <>
      <Header />
      <Main nombre="Gonzalo" apellido="Haedo" edad={edad} usuarios={usuarios} />
      <Contador />
      <ItemListContainer mensaje="Soy el componente ITEMLISTCONTAINER (Mensaje enviado por props)" />
      <ItemList />
      <Item />
      <Footer />
    </>
  );
}

export default App;
