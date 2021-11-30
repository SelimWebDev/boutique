import '../App.css';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="Header">
      <div className="top-bar"></div>
      <nav>
          <Link to="/">Accueil</Link>
          <Link to="/shop/shopping">Boutique</Link>
      </nav>
    </header>
  );
}

export default Header;
