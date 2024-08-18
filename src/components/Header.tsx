import React from "react";
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
      <header>
        <h1>Gabriel Asaf</h1>
        <nav className="navigator">
          <hr />
          <Link className="Link-to" to="/"> Início </Link>
          <hr />
        </nav>
      </header>
    )
}

export default Header;