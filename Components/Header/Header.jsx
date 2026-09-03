import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <a href="/" className="header__logo">
          <span className="header__logo-atac">MERCA</span>
          <span className="header__logo-dao">DÃO</span>
        </a>

        <form className="header__busca">
          <input
            type="text"
            placeholder="Buscar produto..."
            className="header__busca-input"
          />
          <button type="submit" className="header__busca-btn" aria-label="Buscar">
            🔍
          </button>
        </form>

        <a href="/carrinho" className="header__carrinho">
          🛒
          <span className="header__carrinho-count">0</span>
        </a>
      </div>

      <nav className="header__secoes">
        <ul>
          <li><a href="#hortifruti">Hortifruti</a></li>
          <li><a href="#acougue">Açougue</a></li>
          <li><a href="#mercearia">Mercearia</a></li>
          <li><a href="#bebidas">Bebidas</a></li>
          <li><a href="#limpeza">Limpeza</a></li>
          <li><a href="#padaria">Padaria</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header 