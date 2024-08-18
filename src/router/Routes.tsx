import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";

const Routes: React.FC = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    )
}

export default Routes