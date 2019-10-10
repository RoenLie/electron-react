import React, { Component } from "react";

import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions
} from "./styles/expansionPanelStyle";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";

import SummaryTextboxGroup from "./expPanelRowHeader";
import DetailsTextboxGroup from "./expPanelRowBody";
//=============================================================================
class ExpansionPanelRow extends Component {
  createRows = () => {
    return this.props.input.map(input => (
      <div key={Math.random().toString()}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id={"panel1_"}
          >
            <SummaryTextboxGroup input={input} />
          </ExpansionPanelSummary>

          <ExpansionPanelDetails aria-controls="panel2-content" id={"panel2_"}>
            <DetailsTextboxGroup input={input} />
          </ExpansionPanelDetails>

          <ExpansionPanelActions aria-controls="panel3-content" id={"panel3_"}>
            <Button size="small">Cancel</Button>
            <Button size="small">Save</Button>
          </ExpansionPanelActions>
        </ExpansionPanel>
      </div>
    ));
  };

  render() {
    return <this.createRows />;
  }
}

export default ExpansionPanelRow;
//=============================================================================
