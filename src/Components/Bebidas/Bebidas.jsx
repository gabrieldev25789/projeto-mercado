import { useState } from "react";
import "./Bebidas.css";

function Bebidas({ titulo, produtos, setCarrinhoQtd, mostrarCarrinho, fecharCarrinho, produtoEscolhido, setProdutoEscolhido, produtosNoCarrinho, setProdutosNoCarrinho }) {

  const [precoFinal, setPrecoFinal] = useState(0)
  const [mostrarPreco, setMostrarPreco] = useState(false)
  const [valorDigitado, setValorDigitado] = useState(0)
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false)

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
    if (valor < 0 || valor > 1000) return

    if (origem === "digitado") {
      setQtdEscrita(valor)
      setQtdEscolhida(0)
      setValorDigitado(valor)
    } else {
      setQtdEscrita(0)
      setQtdEscolhida(valor)
      setValorDigitado(0)
    }

    const precoUnitario = Number(produtoEscolhido.preco.replace(",", "."))

    setPrecoFinal(valor * precoUnitario)
    setMostrarPreco(true)
  }

  function addCarrinho(){
    setProdutosNoCarrinho((prev) => [
      ...prev,
      {
        ...produtoEscolhido,
        precoFinal: precoFinal.toFixed(2),
        quantidade: { qtdEscolhida: qtdEscolhida, qtdEscrita: qtdEscrita }
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
      <section className="bebidas">
        <div className="bebidas__banner">
          <h2 className="bebidas__titulo">{titulo}</h2>
          <p className="bebidas__subtitulo">Refrigerantes, sucos e o que mais precisar pra matar a sede</p>
        </div>
        <div className="bebidas__grid">
          {produtos.map((produto) => (
            <div onClick={() => escolherProduto(produto)} className="bebidas__card" key={produto.nome}>
              <div className="bebidas__card-imagem" />
              <span className="bebidas__card-nome">{produto.nome}</span>
              <span className="bebidas__card-preco">R$ {produto.preco}</span>
            </div>
          ))}
        </div>
      </section>

      {produtoEscolhido && (
        <div className="bebidas-modal__overlay" onClick={fecharModal}>
          <div className="bebidas-modal__conteudo" onClick={(e) => e.stopPropagation()}>
            <button className="bebidas-modal__fechar" onClick={fecharModal} aria-label="Fechar">✕</button>

            <h2 className="bebidas-modal__titulo">{produtoEscolhido.nome}</h2>
            <p className="bebidas-modal__preco">R$ {produtoEscolhido.preco}</p>

            <p className="bebidas-modal__label">Escolha a quantidade</p>
            <div className="bebidas-modal__opcoes">
              <button className="bebidas-modal__opcao" onClick={() => atualizarQtd(1, "botao")}>1 un</button>
              <button className="bebidas-modal__opcao" onClick={() => atualizarQtd(2, "botao")}>2 un</button>
              <button className="bebidas-modal__opcao" onClick={() => atualizarQtd(3, "botao")}>3 un</button>
              <button className="bebidas-modal__opcao" onClick={() => atualizarQtd(6, "botao")}>6 un</button>
              <button className="bebidas-modal__opcao" onClick={() => atualizarQtd(12, "botao")}>12 un</button>
            </div>

            <div className="bebidas-modal__personalizado">
              <label htmlFor="qtd-custom-bebidas" className="bebidas-modal__label">Ou digite a quantidade</label>
              <input
                value={valorDigitado}
                onChange={(e) => atualizarQtd(e.target.value, "digitado")}
                id="qtd-custom-bebidas"
                type="number"
                placeholder="Ex: 4"
                className="bebidas-modal__input" />
            </div>

            <button className="bebidas-modal__confirmar" onClick={() => addCarrinho()}>Adicionar ao carrinho</button>
            {mostrarPreco && <h2>Total: R$ {(precoFinal.toFixed(2)).replace(".", ",")}</h2>}
          </div>
        </div>
      )}

      {mostrarConfirmacao && (
        <div className="bebidas-confirmacao__overlay" onClick={fecharConfirmacao}>
          <div className="bebidas-confirmacao__conteudo" onClick={(e) => e.stopPropagation()}>
            <button className="bebidas-confirmacao__fechar" onClick={fecharConfirmacao} aria-label="Fechar">✕</button>
            <p className="bebidas-confirmacao__icone">✅</p>
            <h2>Produto adicionado ao carrinho!</h2>
          </div>
        </div>
      )}

      {mostrarCarrinho && (
        <div className="bebidas-carrinho__overlay" onClick={fecharCarrinho}>
          <div className="bebidas-carrinho__conteudo" onClick={(e) => e.stopPropagation()}>
            <button className="bebidas-carrinho__fechar" onClick={fecharCarrinho} aria-label="Fechar">✕</button>
            <h2 className="bebidas-carrinho__titulo">Seu carrinho</h2>

            {produtosNoCarrinho.length === 0 ? (
              <p className="bebidas-carrinho__vazio">Seu carrinho está vazio</p>
            ) : (
              <div className="bebidas-carrinho__lista">
                {produtosNoCarrinho.map((produto, index) => (
                  <div className="bebidas-carrinho__card" key={index}>
                    <div className="bebidas-carrinho__card-imagem" />
                    <div className="bebidas-carrinho__card-info">
                      <span className="bebidas-carrinho__card-nome">{produto.nome}</span>
                      <span className="bebidas-carrinho__card-qtd">{produto.quantidade.qtdEscolhida ? produto.quantidade.qtdEscolhida : produto.quantidade.qtdEscrita} un</span>
                    </div>
                    <span className="bebidas-carrinho__card-preco">
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

export default Bebidas