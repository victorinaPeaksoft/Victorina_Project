import React from "react";
import Home from "../Home/index.jsx";
import { Route, Switch } from "react-router";
import Question from "../../components/Question/index.jsx";
<<<<<<< HEAD
import Result from '../../components/Result/Result'
=======
import { Result } from "../Result/index.jsx";

>>>>>>> 574a6cc53d78f01c3881cb8aac93b042e89b8633


function Layout() {
  return (
    <div>
      <Switch>
      <Route path="/result" component={Result} />
        <Route path="/question" component={Question} />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default Layout;
