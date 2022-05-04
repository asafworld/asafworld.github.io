import React from "react";
import { Link } from 'react-router-dom';
// import Home from "./Home";
// import AboutMe from "./AboutMe";

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Gabriel Asaf</h1>
        <nav className="navigator">
          <hr />
          <Link className="Link-to" to="/"> Início </Link>
          <hr />
          <Link className="Link-to" to="/sobremim"> Sobre Mim </Link>
          <hr />
          <Link className="Link-to" to="/projetos"> Projetos </Link>
          <hr />
        </nav>
      </header>
    )
  }
}

export default Header;