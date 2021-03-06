import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./home/home.page";

const RoutingComponent = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  );
};

export default RoutingComponent;
