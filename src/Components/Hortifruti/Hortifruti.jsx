import { useState } from "react";
import "./Hortifruti.css";

function Hortifruti({ titulo, produtos, setCarrinhoQtd, mostrarCarrinho, fecharCarrinho }) {

  const [produtoEscolhido, setProdutoEscolhido] = useState(null)
  const [precoFinal, setPrecoFinal] = useState(0)
  const [mostrarPreco, setMostrarPreco] = useState(false)
  const [valorDigitado, setValorDigitado] = useState(0)
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false)

  const [produtosNoCarrinho, setProdutosNoCarrinho] = useState([])

  const [qtdEscolhida, setQtdEscolhida] = useState(0)
  const [qtdEscrita, setQtdEscrita] = useState(0)
  
  function escolherProduto(produto){
    setProdutoEscolhido(produto)
  }

  function fecharModal(){
    setPrecoFinal(0)
    setProdutoEscolhido(null)
    setMostrarPreco(false)
  }

function atualizarQtd(valor, origem) {
  if (valor < 0 || valor > 100000) return

  if (origem === "digitado") {
    setQtdEscrita(valor)
    setQtdEscolhida(0)
    setValorDigitado(valor)
  } else {
    setQtdEscrita(0)
    setQtdEscolhida(valor)
    setValorDigitado(0)
  }

  const precoPorKg = Number(
    produtoEscolhido.preco.replace(",", ".").replace(" / kg", "")
  )

  setPrecoFinal((valor / 1000) * precoPorKg)
  setMostrarPreco(true)
}

function addCarrinho(){
  setProdutosNoCarrinho((prev) => [
    ...prev,
    {
      ...produtoEscolhido,
      precoFinal: precoFinal.toFixed(2),
      quantidade: {qtdEscolhida: qtdEscolhida, qtdEscrita: qtdEscrita}
    }
  ])
  setCarrinhoQtd((prev) => prev + 1)
  setMostrarConfirmacao(true)  
  fecharModal()
  setQtdEscrita(0)
  setQtdEscolhida(0)
  setValorDigitado(0)
  setMostrarPreco(false)
}

function fecharConfirmacao(){
  setMostrarConfirmacao(false)
}

  return (
    <>
      <section className="hortifruti">
          <div className="hortifruti__banner">
            <h2 className="hortifruti__titulo">{titulo}</h2>
            <p className="hortifruti__subtitulo">Frutas, legumes e verduras fresquinhos</p>
          </div>
          <div className="hortifruti__grid">
            {produtos.map((produto) => (
              <div onClick={() => escolherProduto(produto)} className="hortifruti__card" key={produto.nome}>
                <div className="hortifruti__card-imagem" />
                <span className="hortifruti__card-nome">{produto.nome}</span>
                <span className="hortifruti__card-preco">R$ {produto.preco}</span>
              </div>
            ))}
          </div>
        </section>

        {produtoEscolhido && (
          <div className="modal__overlay" onClick={fecharModal}>
            <div className="modal__conteudo" onClick={(e) => e.stopPropagation()}>
              <button className="modal__fechar" onClick={fecharModal} aria-label="Fechar">✕</button>

              <h2 className="modal__titulo">{produtoEscolhido.nome}</h2>
              <p className="modal__preco">R$ {produtoEscolhido.preco}</p>

              <p className="modal__label">Escolha a quantidade</p>
              <div className="modal__opcoes">
                <button className="modal__opcao" onClick={()=> atualizarQtd(500, "botao")}>500 g</button>
                <button className="modal__opcao" onClick={()=> atualizarQtd(700, "botao")}>700 g</button>
                <button className="modal__opcao" onClick={()=> atualizarQtd(1000, "botao")}>1000 g</button>
                <button className="modal__opcao" onClick={()=> atualizarQtd(1500, "botao")}>1500 g</button>
                <button className="modal__opcao" onClick={()=> atualizarQtd(2000, "botao")}>2000 g</button>
                <button className="modal__opcao" onClick={()=> atualizarQtd(2500, "botao")}>2500 g</button>
              </div>

              <div className="modal__personalizado">
                <label htmlFor="peso-custom" className="modal__label">Ou digite um valor em gramas</label>
                <input 
                value={valorDigitado} 
                onChange={(e)=> atualizarQtd(e.target.value, "digitado")}
                id="peso-custom" 
                type="number" 
                placeholder="Ex: 850" className="modal__input" />
              </div>

              <button className="modal__confirmar" onClick={() => addCarrinho()}>Adicionar ao carrinho</button>
              {mostrarPreco && <h2>Total: {(precoFinal.toFixed(2)).replace(".", ",")}</h2>}
            </div>
          </div>
        )}

        {mostrarConfirmacao && (
          <div className="confirmacao__overlay" onClick={fecharConfirmacao}>
            <div className="confirmacao__conteudo" onClick={(e) => e.stopPropagation()}>
              <button className="confirmacao__fechar" onClick={fecharConfirmacao} aria-label="Fechar">✕</button>
              <p className="confirmacao__icone">✅</p>
              <h2>Produto adicionado ao carrinho!</h2>
            </div>
          </div>
        )}
        
      {mostrarCarrinho && (
        <div className="carrinho__overlay" onClick={fecharCarrinho}>
          <div className="carrinho__conteudo" onClick={(e) => e.stopPropagation()}>
            <button className="carrinho__fechar" onClick={fecharCarrinho} aria-label="Fechar">✕</button>
            <h2 className="carrinho__titulo">Seu carrinho</h2>

            {produtosNoCarrinho.length === 0 ? (
              <p className="carrinho__vazio">Seu carrinho está vazio</p>
            ) : (
              <div className="carrinho__lista">
                {produtosNoCarrinho.map((produto, index) => (
                  <div className="carrinho__card" key={index}>
                    <div className="carrinho__card-imagem" />
                    <div className="carrinho__card-info">
                      <span className="carrinho__card-nome">{produto.nome}</span>
                      <span className="carrinho__card-qtd">{produto.quantidade.qtdEscolhida ? produto.quantidade.qtdEscolhida : produto.quantidade.qtdEscrita} g</span>
                    </div>
                    <span className="carrinho__card-preco">
                      R$ {produto.precoFinal.replace(".", ",")}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Hortifruti