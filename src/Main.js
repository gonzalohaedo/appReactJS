function Main(props) {
  console.log(props.nombre);
  return (
    <div className="cajaPrueba">
      <h2>
        ¡Hola! Bienvenido {props.nombre} {props.apellido}, usted tiene{" "}
        {props.edad}.
      </h2>
      <p>Los usuarios son {props.usuarios}</p>
    </div>
  );
}

export default Main;
