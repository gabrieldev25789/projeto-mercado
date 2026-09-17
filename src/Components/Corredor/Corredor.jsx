import "./Corredor.css";

function Corredor({ id, titulo, cor, produtos, onEscolherProduto }) {
  return (
    <section id={id} className="corredor" style={{ "--cor-corredor": cor }}>
      <div className="corredor__banner">
        <h2 className="corredor__titulo">{titulo}</h2>
      </div>
      <div className="corredor__grid">
        {produtos.map((produto) => (
          <div
            onClick={() => onEscolherProduto(produto)}
            className="corredor__card"
            key={produto.nome}
          >
            <div className="corredor__card-imagem" />
            <span className="corredor__card-nome">{produto.nome}</span>
            <span className="corredor__card-preco">R$ {produto.preco}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Corredor