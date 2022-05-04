import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./components&images/Home";
import AboutMe from "./components&images/AboutMe";
import Projects from "./components&images/Projects";

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/sobremim" component={AboutMe} />
          <Route exact path="/projetos" component={Projects} />
          <Route path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Routes