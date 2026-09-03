import "./Hortifruti.css";

 function Hortifruti() {

  return (
    <section id="hortifruti" className="hortifruti">
      <h2 className="hortifruti__titulo">Hortifruti</h2>

      <div className="hortifruti__grid">
        <div className="hortifruti__card">
          <div className="hortifruti__card-imagem" />
          <span className="hortifruti__card-nome">Banana Prata</span>
          <span className="hortifruti__card-preco">R$ 4,99 / kg</span>
        </div>

        <div className="hortifruti__card">
          <div className="hortifruti__card-imagem" />
          <span className="hortifruti__card-nome">Tomate</span>
          <span className="hortifruti__card-preco">R$ 6,49 / kg</span>
        </div>

        <div className="hortifruti__card">
          <div className="hortifruti__card-imagem" />
          <span className="hortifruti__card-nome">Batata</span>
          <span className="hortifruti__card-preco">R$ 3,99 / kg</span>
        </div>

        <div className="hortifruti__card">
          <div className="hortifruti__card-imagem" />
          <span className="hortifruti__card-nome">Cebola</span>
          <span className="hortifruti__card-preco">R$ 4,49 / kg</span>
        </div>

        <div className="hortifruti__card">
          <div className="hortifruti__card-imagem" />
          <span className="hortifruti__card-nome">Maçã</span>
          <span className="hortifruti__card-preco">R$ 7,99 / kg</span>
        </div>

        <div className="hortifruti__card">
          <div className="hortifruti__card-imagem" />
          <span className="hortifruti__card-nome">Alface</span>
          <span className="hortifruti__card-preco">R$ 2,49 / unid</span>
        </div>
      </div>
    </section>
  );
}

export default Hortifruti