import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import ExpansionPanelPage from "./expPanelPage";

function LandingPage() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/expansionpanelpage" component={ExpansionPanelPage} />
        <Redirect from="/" exact to="/expansionpanelpage" />
        <Redirect to="/not-found" />
      </Switch>
    </React.Fragment>
  );
}

export default LandingPage;
