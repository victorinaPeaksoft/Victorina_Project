import React from "react";
import { Route, Switch } from "react-router";
import Container from "@material-ui/core/Container";
import Question from "../../components/Question/index.jsx";
import { Result } from "../Result/index.jsx";
import { Home } from "../Home/index.jsx";

function Layout() {
  return (
    <Container fixed>
      <div>
        <Switch>
          <Route path="/result" component={Result} />
          <Route path="/question" component={Question} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>

    </Container>

  );
}

export default Layout;
