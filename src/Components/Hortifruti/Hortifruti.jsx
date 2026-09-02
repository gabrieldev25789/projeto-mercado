import "./Hortifruti.css";

function Hortifruti({ titulo, produtos }) {

  return (
    <section id="hortifruti" className="hortifruti">
      <h2 className="hortifruti__titulo">{titulo}</h2>

      <div className="hortifruti__grid">
        {produtos.map((produto) => (
          <div className="hortifruti__card" key={produto.nome}>
            <div className="hortifruti__card-imagem" />
            <span className="hortifruti__card-nome">{produto.nome}</span>
            <span className="hortifruti__card-preco">{produto.preco}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hortifruti