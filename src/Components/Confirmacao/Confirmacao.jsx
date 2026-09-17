import "./Confirmacao.css";

function Confirmacao({ onFechar }) {
  return (
    <div className="confirmacao__overlay" onClick={onFechar}>
      <div className="confirmacao__conteudo" onClick={(e) => e.stopPropagation()}>
        <button className="confirmacao__fechar" onClick={onFechar} aria-label="Fechar">✕</button>
        <p className="confirmacao__icone">✅</p>
        <h2>Produto adicionado ao carrinho!</h2>
      </div>
    </div>
  );
}

export default Confirmacao