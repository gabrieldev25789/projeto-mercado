import { useState } from "react";
import { corredores } from "../data/dados.js";
import Corredor from "./Components/Corredor/Corredor.jsx";
import ProdutoModal from "./Components/ProdutoModal/ProdutoModal.jsx";
import Confirmacao from "./Components/Confirmacao/Confirmacao.jsx";
import Carrinho from "./Components/Carrinho/Carrinho.jsx";
import Header from "./Components/Header/Header.jsx";

function App() {
  const [produtoEscolhido, setProdutoEscolhido] = useState(null)
  const [corredorEscolhido, setCorredorEscolhido] = useState(null)
  const [produtosNoCarrinho, setProdutosNoCarrinho] = useState([])
  const [carrinhoQtd, setCarrinhoQtd] = useState(0)
  const [mostrarCarrinho, setMostrarCarrinho] = useState(false)
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false)
 
  function escolherProduto(produto, corredor) {
    setProdutoEscolhido(produto)
    setCorredorEscolhido(corredor)
  }
 
  function fecharModal() {
    setProdutoEscolhido(null)
    setCorredorEscolhido(null)
  }
 
  function adicionarAoCarrinho(item) {
    setProdutosNoCarrinho((prev) => [...prev, item])
    setCarrinhoQtd((prev) => prev + 1)
    setMostrarConfirmacao(true)
    fecharModal()
  }
 
  function irParaCorredor(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }
 
  return (
    <>
      <Header
        onSelecionar={irParaCorredor}
        carrinhoQtd={carrinhoQtd}
        mostrarProdutos={(e) => {
          e.preventDefault()
          setMostrarCarrinho(true)
        }}
      />
 
      {corredores.map((corredor) => (
        <Corredor
          key={corredor.id}
          id={corredor.id}
          titulo={corredor.titulo}
          cor={corredor.cor}
          produtos={corredor.produtos}
          onEscolherProduto={(produto) => escolherProduto(produto, corredor)}
        />
      ))}
 
      {produtoEscolhido && (
        <ProdutoModal
          produto={produtoEscolhido}
          cor={corredorEscolhido.cor}
          onFechar={fecharModal}
          onAdicionar={adicionarAoCarrinho}
        />
      )}
 
      {mostrarConfirmacao && (
        <Confirmacao onFechar={() => setMostrarConfirmacao(false)} />
      )}
 
      {mostrarCarrinho && (
        <Carrinho
          produtos={produtosNoCarrinho}
          onFechar={() => setMostrarCarrinho(false)}
        />
      )}
    </>
  );
}
 
export default App