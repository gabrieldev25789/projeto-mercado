import { useState } from "react";
import Header from "./Components/Header/Header.jsx"
import Hortifruti from "./Components/Hortifruti/Hortifruti.jsx";
import Acougue from "./Components/Acougue/Acougue.jsx";
import Mercearia from "./Components/Mercearia/Mercearia.jsx";
import Bebidas from "./Components/Bebidas/Bebidas.jsx";
import Limpeza from "./Components/Limpeza/Limpeza.jsx";
import Padaria from "./Components/Padaria/Padaria.jsx";
import { hortifruti } from "../data/dados.js"

function App() {
  const [ativo, setAtivo] = useState(null);

  function renderCorredor() {
    switch (ativo) {
      case "hortifruti":
        return <Hortifruti titulo={hortifruti.titulo} produtos={hortifruti.produtos} />;
      case "acougue":
        return <Acougue />;
      case "mercearia":
        return <Mercearia />;
      case "bebidas":
        return <Bebidas />;
      case "limpeza":
        return <Limpeza />;
      case "padaria":
        return <Padaria />;
      default:
        return <p>Escolha um corredor acima.</p>;
    }
  }

return (
  <>
    <Header onSelecionar={setAtivo} />

    {renderCorredor()}
  </>
);
}

export default App
