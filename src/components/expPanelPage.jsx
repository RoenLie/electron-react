import React, { Component } from "react";
import ExpansionPanelRow from "./expPanelRow";
import inputData from "../services/inputData";

import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions
} from "./styles/expansionPanelStyle";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";

class ExpansionPanelPage extends Component {
  input = inputData;

  render() {
    return (
      <React.Fragment>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id={"panel1_"}
          ></ExpansionPanelSummary>

          <ExpansionPanelDetails aria-controls="panel2-content" id={"panel2_"}>
            <ExpansionPanelRow input={this.input} />
          </ExpansionPanelDetails>

          <ExpansionPanelActions aria-controls="panel3-content" id={"panel3_"}>
            <Button size="small">Cancel</Button>
            <Button size="small">Save</Button>
          </ExpansionPanelActions>
        </ExpansionPanel>
      </React.Fragment>
    );
  }
}

export default ExpansionPanelPage;
