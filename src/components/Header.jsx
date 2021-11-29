import '../App.css';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="Header">
      <nav>
          <Link to="/">Accueil</Link>
          <Link to="/shop/shopping">Boutique</Link>
      </nav>
    </header>
  );
}

export default Header;
