import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ExpansionPanelPage from "./expansionPanelPage";
import Overview from "./overview";
import ButtonRow from "./testButtons";

function LandingPage() {
  return (
    <React.Fragment>
      <ToastContainer />
      <ButtonRow />
      <Switch>
        <Route path="/overview" component={Overview} />
        <Route path="/expansionpanelpage" component={ExpansionPanelPage} />
        <Redirect from="/" exact to="/overview" />
        <Redirect to="/not-found" />
      </Switch>
    </React.Fragment>
  );
}

export default LandingPage;
