import React from "react";
import Header from "./Header";
import htmlLogo from "./html-logo.png";
import cssLogo from "./css-logo.png";
import JsLogo from "./js-icon.png";
import ReactLogo from "./react-logo.png";
import BootstrapLogo from "./bootstrap-logo.png";
import MyLinkedinLogo from "./mylinkedin_icon.jpeg";
import ApiLogo from "./api-logo.png";

class Home extends React.Component {
  render() {
    return (
      <article className="home">
        <Header />
        <section className="section-habilidades">
          <div>
            <h1>Estruturação e estilização de páginas online com HTML e CSS</h1>
            <p>HTML e CSS</p>
          </div>
          <hr className="home-hr"/>
          <div className="html-css-icons">
           <><img alt="icon html"src={htmlLogo}/></> 
           <><img alt="icon css" src={cssLogo}/></>
          </div>
        </section>
        <hr className="between-sections"/>
        <section className="section-habilidades">
          <div className="java-script-icon">
            <img alt="icon js" src={JsLogo}/>
          </div>
          <hr className="home-hr"/>
          <div>
            <h1>Páginas com funcionamento lógico simples e efetivo</h1>
            <p>JavaScript</p>
          </div>
        </section>
        <hr className="between-sections"/>
        <section className="section-habilidades">
          <div>
            <h1>Uso de Bibliotecas JS e Frameworks para maximizar <br /> a qualidade de cada projeto</h1>
            <p>React, Bootstrap, dentre outras...</p>
          </div>
          <hr className="home-hr"/>
          <div className="react-boots-icon">
            <img id="react-logo" alt="react logo" src={ReactLogo}/>
            <img alt="bootstrap logo" src={BootstrapLogo}/>
          </div>
        </section>
        <hr className="between-sections"/>
        <section className="section-habilidades">
          <div className="react-boots-icon">
            <img id="api-logo" alt="react logo" src={ApiLogo}/>
          </div>
          <hr className="home-hr"/>
          <div>
            <h1>Sites com acesso a dados externos disponibilizados por empresas, <br /> fóruns, etc.</h1>
            <p>API</p>
          </div>
        </section>
        <br />
        <section className="identity-section">
          <img className="gabriel-photo" alt="gabriel linkedin logo" src={MyLinkedinLogo} />
          <p>Estudante de Desenvolvimento Web na Trybe! <br /> Formado em Direito na Faculdade de Direito Milton Campos.</p>
        </section>
      </article>
    )
  }
}

export default Home;