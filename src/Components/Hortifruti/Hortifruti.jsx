import { useEffect, useState } from "react";
import "./Hortifruti.css";

function Hortifruti({ titulo, produtos, setCarrinhoQtd }) {

  const [produtoEscolhido, setProdutoEscolhido] = useState(null)
  const [precoFinal, setPrecoFinal] = useState(0)
  const [mostrarPreco, setMostrarPreco] = useState(false)
  const [valorDigitado, setValorDigitado] = useState(0)
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false)
  
  function escolherProduto(produto){
    setProdutoEscolhido(produto)
  }

  useEffect(()=>{
    console.log(produtoEscolhido)
  }, [produtoEscolhido])

  function fecharModal(){
    setPrecoFinal(0)
    setProdutoEscolhido(null)
    setMostrarPreco(false)
  }

function digitarQtd(valor){
  if(valor < 0 || valor > 100000) return 

  setValorDigitado(valor)

  const precoPorKg = Number(
    produtoEscolhido.preco.replace(",", ".").replace(" / kg", "")
  );

  setPrecoFinal((valor / 1000) * precoPorKg)

  console.log(precoFinal.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    }))

  setMostrarPreco(true)
}

function escolherQtd(valor) {
  setValorDigitado(0)
  setMostrarPreco(true)
  const precoPorKg = Number(
    produtoEscolhido.preco.replace(",", ".").replace(" / kg", "")
  );

  setPrecoFinal((valor / 1000) * precoPorKg)

  console.log(
    precoFinal.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    })
  );
}

function addCarrinho(){
  setMostrarConfirmacao(true)  
  fecharModal()
  setCarrinhoQtd((prev)=> prev + 1)
  console.log(precoFinal.toFixed(2))
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
                <button className="modal__opcao" onClick={()=> escolherQtd(500)}>500 g</button>
                <button className="modal__opcao" onClick={()=> escolherQtd(700)}>700 g</button>
                <button className="modal__opcao" onClick={()=> escolherQtd(1000)}>1000 g</button>
                <button className="modal__opcao" onClick={()=> escolherQtd(1500)}>1500 g</button>
                <button className="modal__opcao" onClick={()=> escolherQtd(2000)}>2000 g</button>
                <button className="modal__opcao" onClick={()=> escolherQtd(2500)}>2500 g</button>
              </div>

              <div className="modal__personalizado">
                <label htmlFor="peso-custom" className="modal__label">Ou digite um valor em gramas</label>
                <input 
                value={valorDigitado} 
                onChange={(e)=> digitarQtd(e.target.value)}
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
    </>
  );
}

export default Hortifruti