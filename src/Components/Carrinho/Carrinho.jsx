import "./Carrinho.css";

function Carrinho({ produtos, onFechar }) {
  return (
    <div className="carrinho__overlay" onClick={onFechar}>
      <div className="carrinho__conteudo" onClick={(e) => e.stopPropagation()}>
        <button className="carrinho__fechar" onClick={onFechar} aria-label="Fechar">✕</button>
        <h2 className="carrinho__titulo">Seu carrinho</h2>

        {produtos.length === 0 ? (
          <p className="carrinho__vazio">Seu carrinho está vazio</p>
        ) : (
          <div className="carrinho__lista">
            {produtos.map((produto, index) => {
              const qtd = produto.quantidade.qtdEscolhida || produto.quantidade.qtdEscrita
              const rotuloQtd = produto.unidade === "kg" ? `${qtd} g` : `${qtd} ${produto.unidade}`

              return (
                <div className="carrinho__card" key={index}>
                  <div className="carrinho__card-imagem" />
                  <div className="carrinho__card-info">
                    <span className="carrinho__card-nome">{produto.nome}</span>
                    <span className="carrinho__card-qtd">{rotuloQtd}</span>
                  </div>
                  <span className="carrinho__card-preco">
                    R$ {produto.precoFinal.replace(".", ",")}
                  </span>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Carrinho