import Icono from "../images/iconoCarritoDeCompras.png";

function CartWidget() {
  return (
    <div>
      <img src={Icono} alt="" className="iconoCarrito" />
    </div>
  );
}

export default CartWidget;
