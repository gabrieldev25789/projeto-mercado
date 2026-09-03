import { useState } from "react";
import Header from "./Components/Header/Header.jsx"
import Hortifruti from "./components/Hortifruti/Hortifruti.jsx";
import Acougue from "./components/Acougue/Acougue.jsx";
import Mercearia from "./components/Mercearia/Mercearia.jsx";
import Bebidas from "./components/Bebidas/Bebidas.jsx";
import Limpeza from "./components/Limpeza/Limpeza.jsx";
import Padaria from "./components/Padaria/Padaria.jsx";
import { hortifruti } from "../data/dados.js"

const corredores = [
  { id: "hortifruti", nome: "Hortifruti" },
  { id: "acougue", nome: "Açougue" },
  { id: "mercearia", nome: "Mercearia" },
  { id: "bebidas", nome: "Bebidas" },
  { id: "limpeza", nome: "Limpeza" },
  { id: "padaria", nome: "Padaria" },
];

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
    <Header />
    <nav>
      <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
        {corredores.map((c) => (
          <li key={c.id}>
            
              <a href="#"
              onClick={(e) => {
                e.preventDefault();
                setAtivo(c.id);
              }}
            >
              {c.nome}
            </a>
          </li>
        ))}
      </ul>
    </nav>

    {renderCorredor()}
  </>
);
}

export default App
