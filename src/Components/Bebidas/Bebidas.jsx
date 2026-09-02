import "./Bebidas.css";

function Bebidas() {

  return (
    <section id="bebidas" className="bebidas">
      <h2 className="bebidas__titulo">Bebidas</h2>

      <div className="bebidas__grid">
        <div className="bebidas__card">
          <div className="bebidas__card-imagem" />
          <span className="bebidas__card-nome">Refrigerante Cola 2L</span>
          <span className="bebidas__card-preco">R$ 8,99</span>
        </div>

        <div className="bebidas__card">
          <div className="bebidas__card-imagem" />
          <span className="bebidas__card-nome">Água Mineral 1,5L</span>
          <span className="bebidas__card-preco">R$ 3,49</span>
        </div>

        <div className="bebidas__card">
          <div className="bebidas__card-imagem" />
          <span className="bebidas__card-nome">Suco de Laranja 1L</span>
          <span className="bebidas__card-preco">R$ 6,99</span>
        </div>

        <div className="bebidas__card">
          <div className="bebidas__card-imagem" />
          <span className="bebidas__card-nome">Cerveja Pilsen 350ml</span>
          <span className="bebidas__card-preco">R$ 3,99</span>
        </div>

        <div className="bebidas__card">
          <div className="bebidas__card-imagem" />
          <span className="bebidas__card-nome">Energético 473ml</span>
          <span className="bebidas__card-preco">R$ 9,49</span>
        </div>

        <div className="bebidas__card">
          <div className="bebidas__card-imagem" />
          <span className="bebidas__card-nome">Chá Gelado 1,5L</span>
          <span className="bebidas__card-preco">R$ 7,49</span>
        </div>
      </div>
    </section>
  );
}

export default Bebidas