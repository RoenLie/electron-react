import React, { Component } from "react";
import CustomExpansionPanel from "./expansionPanelOverview";
import inputData from "../services/inputData";

class ExpansionPanelPage extends Component {
  input = inputData;

  render() {
    return <CustomExpansionPanel input={this.input} />;
  }
}

export default ExpansionPanelPage;
