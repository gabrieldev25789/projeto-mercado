import { useState } from "react";
import "./Limpeza.css";

function Limpeza({ titulo, produtos, setCarrinhoQtd, mostrarCarrinho, fecharCarrinho, produtoEscolhido, setProdutoEscolhido, produtosNoCarrinho, setProdutosNoCarrinho }) {

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
      <section className="limpeza">
        <div className="limpeza__banner">
          <h2 className="limpeza__titulo">{titulo}</h2>
          <p className="limpeza__subtitulo">Tudo pra deixar a casa em ordem</p>
        </div>
        <div className="limpeza__grid">
          {produtos.map((produto) => (
            <div onClick={() => escolherProduto(produto)} className="limpeza__card" key={produto.nome}>
              <div className="limpeza__card-imagem" />
              <span className="limpeza__card-nome">{produto.nome}</span>
              <span className="limpeza__card-preco">R$ {produto.preco}</span>
            </div>
          ))}
        </div>
      </section>

      {produtoEscolhido && (
        <div className="limpeza-modal__overlay" onClick={fecharModal}>
          <div className="limpeza-modal__conteudo" onClick={(e) => e.stopPropagation()}>
            <button className="limpeza-modal__fechar" onClick={fecharModal} aria-label="Fechar">✕</button>

            <h2 className="limpeza-modal__titulo">{produtoEscolhido.nome}</h2>
            <p className="limpeza-modal__preco">R$ {produtoEscolhido.preco}</p>

            <p className="limpeza-modal__label">Escolha a quantidade</p>
            <div className="limpeza-modal__opcoes">
              <button className="limpeza-modal__opcao" onClick={() => atualizarQtd(1, "botao")}>1 un</button>
              <button className="limpeza-modal__opcao" onClick={() => atualizarQtd(2, "botao")}>2 un</button>
              <button className="limpeza-modal__opcao" onClick={() => atualizarQtd(3, "botao")}>3 un</button>
              <button className="limpeza-modal__opcao" onClick={() => atualizarQtd(5, "botao")}>5 un</button>
              <button className="limpeza-modal__opcao" onClick={() => atualizarQtd(10, "botao")}>10 un</button>
            </div>

            <div className="limpeza-modal__personalizado">
              <label htmlFor="qtd-custom-limpeza" className="limpeza-modal__label">Ou digite a quantidade</label>
              <input
                value={valorDigitado}
                onChange={(e) => atualizarQtd(e.target.value, "digitado")}
                id="qtd-custom-limpeza"
                type="number"
                placeholder="Ex: 4"
                className="limpeza-modal__input" />
            </div>

            <button className="limpeza-modal__confirmar" onClick={() => addCarrinho()}>Adicionar ao carrinho</button>
            {mostrarPreco && <h2>Total: R$ {(precoFinal.toFixed(2)).replace(".", ",")}</h2>}
          </div>
        </div>
      )}

      {mostrarConfirmacao && (
        <div className="limpeza-confirmacao__overlay" onClick={fecharConfirmacao}>
          <div className="limpeza-confirmacao__conteudo" onClick={(e) => e.stopPropagation()}>
            <button className="limpeza-confirmacao__fechar" onClick={fecharConfirmacao} aria-label="Fechar">✕</button>
            <p className="limpeza-confirmacao__icone">✅</p>
            <h2>Produto adicionado ao carrinho!</h2>
          </div>
        </div>
      )}

      {mostrarCarrinho && (
        <div className="limpeza-carrinho__overlay" onClick={fecharCarrinho}>
          <div className="limpeza-carrinho__conteudo" onClick={(e) => e.stopPropagation()}>
            <button className="limpeza-carrinho__fechar" onClick={fecharCarrinho} aria-label="Fechar">✕</button>
            <h2 className="limpeza-carrinho__titulo">Seu carrinho</h2>

            {produtosNoCarrinho.length === 0 ? (
              <p className="limpeza-carrinho__vazio">Seu carrinho está vazio</p>
            ) : (
              <div className="limpeza-carrinho__lista">
                {produtosNoCarrinho.map((produto, index) => (
                  <div className="limpeza-carrinho__card" key={index}>
                    <div className="limpeza-carrinho__card-imagem" />
                    <div className="limpeza-carrinho__card-info">
                      <span className="limpeza-carrinho__card-nome">{produto.nome}</span>
                      <span className="limpeza-carrinho__card-qtd">{produto.quantidade.qtdEscolhida ? produto.quantidade.qtdEscolhida : produto.quantidade.qtdEscrita} un</span>
                    </div>
                    <span className="limpeza-carrinho__card-preco">
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

export default Limpeza