import "./Acougue.css";

function Acougue() {
  return (
    <section id="acougue" className="acougue">
      <h2 className="acougue__titulo">Açougue</h2>

      <div className="acougue__grid">
        <div className="acougue__card">
          <div className="acougue__card-imagem" />
          <span className="acougue__card-nome">Picanha</span>
          <span className="acougue__card-preco">R$ 54,90 / kg</span>
        </div>

        <div className="acougue__card">
          <div className="acougue__card-imagem" />
          <span className="acougue__card-nome">Alcatra</span>
          <span className="acougue__card-preco">R$ 39,90 / kg</span>
        </div>

        <div className="acougue__card">
          <div className="acougue__card-imagem" />
          <span className="acougue__card-nome">Frango Inteiro</span>
          <span className="acougue__card-preco">R$ 9,99 / kg</span>
        </div>

        <div className="acougue__card">
          <div className="acougue__card-imagem" />
          <span className="acougue__card-nome">Linguiça Toscana</span>
          <span className="acougue__card-preco">R$ 16,90 / kg</span>
        </div>

        <div className="acougue__card">
          <div className="acougue__card-imagem" />
          <span className="acougue__card-nome">Costela Bovina</span>
          <span className="acougue__card-preco">R$ 29,90 / kg</span>
        </div>

        <div className="acougue__card">
          <div className="acougue__card-imagem" />
          <span className="acougue__card-nome">Carne Moída</span>
          <span className="acougue__card-preco">R$ 24,90 / kg</span>
        </div>
      </div>
    </section>
  );
}

export default Acougue