import React from "react";
import Header from "./Header";
import MeuMenuView from "./meu-menu.jpg";
import pixelsArtView from "./pixels-art-photo.jpg";
import ToDoListView from "./to-do-list.jpg";

class Projects extends React.Component {
  render() {
    return (
      <article className="projects-class">
        <Header />
        <br />
        <ul>
          <div className="projects-div">
            <img alt="Visualização da página Meu-menu" src={MeuMenuView} />
            <div>
              <h2>Meu Menu</h2>
              <p>HTML.CSS.JS - Deseja construir um menu de restaurante, lanchonete (etc...)? O site "Meu menu"
                  te dá a possibilidade criar um menu de forma rápida e fácil, salvá-lo em seu navegador e utilizá-lo
                  para o gerenciamento de pedidos. Cada cliente pode ser registrado e receber cada anotação de compra.
                  De forma automática, o site retorna o valor total de cada cliente pra você.     
              </p>
            </div>
          </div>
          <br />
          <br />
          <div className="projects-div">
            <img alt="Visualização da página Pixels Art" src={pixelsArtView} />
            <div>
              <h2>Pixels Art</h2>
              <p>
                HTML.CSS.JS - Crie desenhos com cores diversas e aleatórias. 
                Defina quantos pixels usar e comece de novo quando quiser!
              </p>
            </div>
          </div>
          <br />
          <br />
          <div className="projects-div">
            <img alt="Visualização da página To Do List." src={ToDoListView} />
            <div>
              <h2>To Do List</h2>
              <p>
                HTML.CSS.JS - Crie e salve tarefas diárias ou semanais. 
              </p>
            </div>
          </div>
        </ul>
      </article>
    )
  }
}

export default Projects;