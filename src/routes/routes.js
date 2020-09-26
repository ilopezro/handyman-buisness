import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingViewPage from "components/landing/index";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <LandingViewPage />} />
      </Switch>
    </Router>
  );
};

export default Routes;
