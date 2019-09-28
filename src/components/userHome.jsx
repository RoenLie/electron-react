import React from "react";
import logo from "../logo.svg";
import { ToastContainer } from "react-toastify";
import SimpleTable from "./testForm";
import IconLabelButtons from "./testButtons";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";

function LandingPage() {
  return (
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ToastContainer />
          <IconLabelButtons />
          <SimpleTable />
        </header>
      </div>
    </React.Fragment>
  );
}

export default LandingPage;
