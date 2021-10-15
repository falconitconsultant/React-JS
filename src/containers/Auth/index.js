// Init
import React from "react";
import { Route, Switch } from "react-router-dom";

// Routes
import Login from "./Login";
import Register from "./Register";

const index = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  );
};

export default index;
