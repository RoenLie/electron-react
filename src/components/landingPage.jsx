import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ExpansionPanelPage from "./expPanelPage";
import ButtonRow from "./buttonRow";

function LandingPage() {
  return (
    <React.Fragment>
      <ToastContainer />
      <ButtonRow />
      <Switch>
        <Route path="/expansionpanelpage" component={ExpansionPanelPage} />
        <Redirect from="/" exact to="/expansionpanelpage" />
        <Redirect to="/not-found" />
      </Switch>
    </React.Fragment>
  );
}

export default LandingPage;
