import "./Padaria.css";

function Padaria() {

  return (
    <section id="padaria" className="padaria">
      <h2 className="padaria__titulo">Padaria</h2>

      <div className="padaria__grid">
        <div className="padaria__card">
          <div className="padaria__card-imagem" />
          <span className="padaria__card-nome">Pão Francês</span>
          <span className="padaria__card-preco">R$ 0,89 / unid</span>
        </div>

        <div className="padaria__card">
          <div className="padaria__card-imagem" />
          <span className="padaria__card-nome">Pão de Forma</span>
          <span className="padaria__card-preco">R$ 8,99</span>
        </div>

        <div className="padaria__card">
          <div className="padaria__card-imagem" />
          <span className="padaria__card-nome">Croissant</span>
          <span className="padaria__card-preco">R$ 4,49 / unid</span>
        </div>

        <div className="padaria__card">
          <div className="padaria__card-imagem" />
          <span className="padaria__card-nome">Bolo de Fubá</span>
          <span className="padaria__card-preco">R$ 12,99</span>
        </div>

        <div className="padaria__card">
          <div className="padaria__card-imagem" />
          <span className="padaria__card-nome">Rosca Doce</span>
          <span className="padaria__card-preco">R$ 9,99</span>
        </div>

        <div className="padaria__card">
          <div className="padaria__card-imagem" />
          <span className="padaria__card-nome">Pão de Queijo (pacote)</span>
          <span className="padaria__card-preco">R$ 14,49</span>
        </div>
      </div>
    </section>
  );
}

export default Padaria