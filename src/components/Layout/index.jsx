import React from "react";
import { Route, Switch } from "react-router";
import Question from "../../components/Question/index.jsx";
import {Result} from "../Result/index.jsx";
import {Home} from "../Home/index.jsx";

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
