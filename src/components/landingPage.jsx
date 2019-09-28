import React from "react";
import { ToastContainer } from "react-toastify";
import Calender from "./calender";
import Overview from "./overview";
import ButtonRow from "./testButtons";
import "react-toastify/dist/ReactToastify.css";
import { Route, Redirect, Switch } from "react-router-dom";
import "../App.css";

import { createMuiTheme } from "@material-ui/core/styles";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0277BD",
      text: "#FFFFFF",
      back: "#212121"
    },
    secondary: {
      main: "#D50000",
      text: "#FFFFFF"
    },
    background: {
      main: "#212121"
    }
  }
});

function LandingPage() {
  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <div Style="background-color:#212121">
          <ToastContainer />
          <ButtonRow />
          <Switch>
            <Route path="/overview" component={Overview} />
            <Route path="/calender" component={Calender} />
            <Redirect from="/" exact to="/overview" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

export default LandingPage;
