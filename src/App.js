import { useState } from "react";
import Boton from "./Boton"; //Hermano 1
import Visor from "./Visor"; //Hermano 2
// import BotonIncrementar from "./BotonIncrementar";
// import "./App.css";
// import InputUsuario from "./InputUsuario";
// import SaludoUsuario from "./SaludoUsuario";

function App() {
  const [contador, setContador] = useState(0);

  const manejarClick = () =>{
    setContador(contador + 1);
  };
  // const manejarIncremento = () =>{
  //   setContador(contador +1);
  // };
  // const [nombre, setNombre] = useState("");

    return(
      <div>
        <h1>Comunicación entre Hermanos</h1>
        <Boton onClick={manejarClick}></Boton>
        <Visor valor={contador}></Visor>
      </div>
    );

  // return(
  //   <div className="App">
  //     <h1>Contador: {contador}</h1>
  //     <BotonIncrementar onIncrementar={manejarIncremento}></BotonIncrementar>

  //     {/* <InputUsuario nombre={nombre} setNombre={setNombre}/>

  //     <SaludoUsuario nombre={nombre}/> */}
  //   </div>
  // );
}

export default App;