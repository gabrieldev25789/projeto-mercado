import { useState } from "react";
import "./Padaria.css";

function Padaria({ titulo, produtos, setCarrinhoQtd, mostrarCarrinho, fecharCarrinho, produtoEscolhido, setProdutoEscolhido, produtosNoCarrinho, setProdutosNoCarrinho }) {

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

    const precoUnitario = Number(
      produtoEscolhido.preco.replace(",", ".").replace(" / unid", "")
    )

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
      <section className="padaria">
        <div className="padaria__banner">
          <h2 className="padaria__titulo">{titulo}</h2>
          <p className="padaria__subtitulo">Pães, bolos e doces fresquinhos do dia</p>
        </div>
        <div className="padaria__grid">
          {produtos.map((produto) => (
            <div onClick={() => escolherProduto(produto)} className="padaria__card" key={produto.nome}>
              <div className="padaria__card-imagem" />
              <span className="padaria__card-nome">{produto.nome}</span>
              <span className="padaria__card-preco">R$ {produto.preco}</span>
            </div>
          ))}
        </div>
      </section>

      {produtoEscolhido && (
        <div className="padaria-modal__overlay" onClick={fecharModal}>
          <div className="padaria-modal__conteudo" onClick={(e) => e.stopPropagation()}>
            <button className="padaria-modal__fechar" onClick={fecharModal} aria-label="Fechar">✕</button>

            <h2 className="padaria-modal__titulo">{produtoEscolhido.nome}</h2>
            <p className="padaria-modal__preco">R$ {produtoEscolhido.preco}</p>

            <p className="padaria-modal__label">Escolha a quantidade</p>
            <div className="padaria-modal__opcoes">
              <button className="padaria-modal__opcao" onClick={() => atualizarQtd(1, "botao")}>1 un</button>
              <button className="padaria-modal__opcao" onClick={() => atualizarQtd(2, "botao")}>2 un</button>
              <button className="padaria-modal__opcao" onClick={() => atualizarQtd(3, "botao")}>3 un</button>
              <button className="padaria-modal__opcao" onClick={() => atualizarQtd(6, "botao")}>6 un</button>
              <button className="padaria-modal__opcao" onClick={() => atualizarQtd(10, "botao")}>10 un</button>
            </div>

            <div className="padaria-modal__personalizado">
              <label htmlFor="qtd-custom-padaria" className="padaria-modal__label">Ou digite a quantidade</label>
              <input
                value={valorDigitado}
                onChange={(e) => atualizarQtd(e.target.value, "digitado")}
                id="qtd-custom-padaria"
                type="number"
                placeholder="Ex: 4"
                className="padaria-modal__input" />
            </div>

            <button className="padaria-modal__confirmar" onClick={() => addCarrinho()}>Adicionar ao carrinho</button>
            {mostrarPreco && <h2>Total: R$ {(precoFinal.toFixed(2)).replace(".", ",")}</h2>}
          </div>
        </div>
      )}

      {mostrarConfirmacao && (
        <div className="padaria-confirmacao__overlay" onClick={fecharConfirmacao}>
          <div className="padaria-confirmacao__conteudo" onClick={(e) => e.stopPropagation()}>
            <button className="padaria-confirmacao__fechar" onClick={fecharConfirmacao} aria-label="Fechar">✕</button>
            <p className="padaria-confirmacao__icone">✅</p>
            <h2>Produto adicionado ao carrinho!</h2>
          </div>
        </div>
      )}

      {mostrarCarrinho && (
        <div className="padaria-carrinho__overlay" onClick={fecharCarrinho}>
          <div className="padaria-carrinho__conteudo" onClick={(e) => e.stopPropagation()}>
            <button className="padaria-carrinho__fechar" onClick={fecharCarrinho} aria-label="Fechar">✕</button>
            <h2 className="padaria-carrinho__titulo">Seu carrinho</h2>

            {produtosNoCarrinho.length === 0 ? (
              <p className="padaria-carrinho__vazio">Seu carrinho está vazio</p>
            ) : (
              <div className="padaria-carrinho__lista">
                {produtosNoCarrinho.map((produto, index) => (
                  <div className="padaria-carrinho__card" key={index}>
                    <div className="padaria-carrinho__card-imagem" />
                    <div className="padaria-carrinho__card-info">
                      <span className="padaria-carrinho__card-nome">{produto.nome}</span>
                      <span className="padaria-carrinho__card-qtd">{produto.quantidade.qtdEscolhida ? produto.quantidade.qtdEscolhida : produto.quantidade.qtdEscrita} un</span>
                    </div>
                    <span className="padaria-carrinho__card-preco">
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

export default Padaria