import "./Limpeza.css";

function Limpeza() {

  return (
    <section id="limpeza" className="limpeza">
      <h2 className="limpeza__titulo">Limpeza</h2>

      <div className="limpeza__grid">
        <div className="limpeza__card">
          <div className="limpeza__card-imagem" />
          <span className="limpeza__card-nome">Detergente Neutro 500ml</span>
          <span className="limpeza__card-preco">R$ 2,99</span>
        </div>

        <div className="limpeza__card">
          <div className="limpeza__card-imagem" />
          <span className="limpeza__card-nome">Sabão em Pó 1kg</span>
          <span className="limpeza__card-preco">R$ 12,99</span>
        </div>

        <div className="limpeza__card">
          <div className="limpeza__card-imagem" />
          <span className="limpeza__card-nome">Água Sanitária 1L</span>
          <span className="limpeza__card-preco">R$ 4,49</span>
        </div>

        <div className="limpeza__card">
          <div className="limpeza__card-imagem" />
          <span className="limpeza__card-nome">Amaciante 2L</span>
          <span className="limpeza__card-preco">R$ 14,99</span>
        </div>

        <div className="limpeza__card">
          <div className="limpeza__card-imagem" />
          <span className="limpeza__card-nome">Desinfetante 500ml</span>
          <span className="limpeza__card-preco">R$ 6,99</span>
        </div>

        <div className="limpeza__card">
          <div className="limpeza__card-imagem" />
          <span className="limpeza__card-nome">Esponja Multiuso (pacote)</span>
          <span className="limpeza__card-preco">R$ 3,49</span>
        </div>
      </div>
    </section>
  );
}

export default Limpeza