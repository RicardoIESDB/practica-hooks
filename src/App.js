import { useState } from "react";
import BotonIncrementar from "./BotonIncrementar";
// import "./App.css";
// import InputUsuario from "./InputUsuario";
// import SaludoUsuario from "./SaludoUsuario";

function App() {
  const [contador, setContador] = useState(0);
  const manejarIncremento = () =>{
    setContador(contador +1);
  };
  // const [nombre, setNombre] = useState("");

  return(
    <div className="App">
      <h1>Contador: {contador}</h1>
      <BotonIncrementar onIncrementar={manejarIncremento}></BotonIncrementar>

      {/* <InputUsuario nombre={nombre} setNombre={setNombre}/>

      <SaludoUsuario nombre={nombre}/> */}
    </div>
  );
}

export default App;