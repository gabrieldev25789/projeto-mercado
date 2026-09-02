import Header from "./Components/Header/Header"
import Hortifruti from "./Components/Hortifruti/Hortifruti"
import Acougue from "./Components/Acougue/Acougue"
import Mercearia from "./Components/Mercearia/Mercearia"
import Bebidas from "./Components/Bebidas/Bebidas"
import Limpeza from "./Components/Limpeza/Limpeza"
import Padaria from "./Components/Padaria/Padaria"
import { hortifruti } from "../data/dados.js"

function App() {
  return (
    <>
      <Header />
      <Hortifruti titulo={hortifruti.titulo} produtos={hortifruti.produtos}/>
      <Acougue /> 
      <Mercearia />
      <Bebidas />
      <Limpeza />
      <Padaria />
    </>
  )
}

export default App
