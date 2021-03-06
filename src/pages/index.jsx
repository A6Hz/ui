import React from "react";
import { Route, Redirect, Switch, Router } from "react-router-dom";
import login from "./login";
import history from "../helpers/history"
import Layout from "./layout";
import home from "./home";
import empleados from "./empleados"
// eslint-disable-next-line react/display-name
export default () => (
  <Router history={history}>
    <Switch>

      <Route exact path="/" component={login} />

      <Layout>
        <Route exact path="/home" component={home} />
        <Route exact path="/empleados" component={empleados} />
      </Layout>
    </Switch>
  </Router>
);