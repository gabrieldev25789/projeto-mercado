import { useState } from "react";
import { parsePreco } from "../../../data/precoUtils.js";
import "./ProdutoModal.css";

function ProdutoModal({ produto, cor, onFechar, onAdicionar }) {
  const [precoFinal, setPrecoFinal] = useState(0)
  const [mostrarPreco, setMostrarPreco] = useState(false)
  const [valorDigitado, setValorDigitado] = useState(0)
  const [qtdEscolhida, setQtdEscolhida] = useState(0)
  const [qtdEscrita, setQtdEscrita] = useState(0)

  const { modo, unidade, calcular } = parsePreco(produto.preco)

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

    setPrecoFinal(calcular(valor))
    setMostrarPreco(true)
  }

  function confirmar() {
    onAdicionar({
      ...produto,
      precoFinal: precoFinal.toFixed(2),
      unidade,
      quantidade: { qtdEscolhida, qtdEscrita },
    })
  }

  const opcoesPeso = [500, 700, 1000, 1500, 2000, 2500]
  const opcoesUnidade = [1, 2, 3, 5, 10]
  const opcoes = modo === "peso" ? opcoesPeso : opcoesUnidade

  return (
    <div className="produto-modal__overlay" onClick={onFechar}>
      <div
        className="produto-modal__conteudo"
        style={{ "--cor-corredor": cor }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="produto-modal__fechar" onClick={onFechar} aria-label="Fechar">✕</button>

        <h2 className="produto-modal__titulo">{produto.nome}</h2>
        <p className="produto-modal__preco">R$ {produto.preco}</p>

        <p className="produto-modal__label">Escolha a quantidade</p>
        <div className="produto-modal__opcoes">
          {opcoes.map((valor) => (
            <button
              key={valor}
              className="produto-modal__opcao"
              onClick={() => atualizarQtd(valor, "botao")}
            >
              {valor} {modo === "peso" ? "g" : unidade}
            </button>
          ))}
        </div>

        <div className="produto-modal__personalizado">
          <label htmlFor="qtd-custom" className="produto-modal__label">
            Ou digite {modo === "peso" ? "um valor em gramas" : "a quantidade"}
          </label>
          <input
            value={valorDigitado}
            onChange={(e) => atualizarQtd(e.target.value, "digitado")}
            id="qtd-custom"
            type="number"
            placeholder={modo === "peso" ? "Ex: 850" : "Ex: 4"}
            className="produto-modal__input"
          />
        </div>

        <button className="produto-modal__confirmar" onClick={confirmar}>
          Adicionar ao carrinho
        </button>
        {mostrarPreco && <h2>Total: R$ {precoFinal.toFixed(2).replace(".", ",")}</h2>}
      </div>
    </div>
  );
}

export default ProdutoModal