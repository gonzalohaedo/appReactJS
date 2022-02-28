import Logo from "./images/logoGamma.png";
import CartWidget from "./components/CartWidget";
import NavBar from "./components/NavBar";

function Header() {
  return (
    <header className="cajaHeader">
      <div className="headerLogo">
        <img src={Logo} alt="" />
      </div>
      <div className="headerNav">
        <NavBar />
      </div>
      <div className="headerCart">
        <CartWidget />
      </div>
    </header>
  );
}

export default Header;
