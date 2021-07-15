import React from "react";
import Home from "../Home/index.jsx";
import { Route, Switch } from "react-router";
import Question from "../../components/Question/index.jsx";
import Result from '../../components/Result/Result'


function Layout() {
  return (
    <div>
      <Switch>
        <Route path='/result' component={Result} />
        <Route path="/question" component={Question} />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default Layout;
