import "./Mercearia.css";

function Mercearia() {
  return (
    <section id="mercearia" className="mercearia">
      <h2 className="mercearia__titulo">Mercearia</h2>

      <div className="mercearia__grid">
        <div className="mercearia__card">
          <div className="mercearia__card-imagem" />
          <span className="mercearia__card-nome">Arroz Tipo 1 5kg</span>
          <span className="mercearia__card-preco">R$ 24,90</span>
        </div>

        <div className="mercearia__card">
          <div className="mercearia__card-imagem" />
          <span className="mercearia__card-nome">Feijão Carioca 1kg</span>
          <span className="mercearia__card-preco">R$ 8,49</span>
        </div>

        <div className="mercearia__card">
          <div className="mercearia__card-imagem" />
          <span className="mercearia__card-nome">Óleo de Soja 900ml</span>
          <span className="mercearia__card-preco">R$ 6,99</span>
        </div>

        <div className="mercearia__card">
          <div className="mercearia__card-imagem" />
          <span className="mercearia__card-nome">Açúcar Refinado 1kg</span>
          <span className="mercearia__card-preco">R$ 4,99</span>
        </div>

        <div className="mercearia__card">
          <div className="mercearia__card-imagem" />
          <span className="mercearia__card-nome">Café Torrado 500g</span>
          <span className="mercearia__card-preco">R$ 12,90</span>
        </div>

        <div className="mercearia__card">
          <div className="mercearia__card-imagem" />
          <span className="mercearia__card-nome">Macarrão Espaguete 500g</span>
          <span className="mercearia__card-preco">R$ 5,49</span>
        </div>
      </div>
    </section>
  );
}

export default Mercearia