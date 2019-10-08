import React, { Component } from "react";

import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions
} from "./styles/expansionPanelStyle";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";

import SummaryTextboxGroup from "./summaryTextboxGroup";
import DetailsTextboxGroup from "./detailsTextboxGroup";
import { randomBytes } from "crypto";
//=============================================================================
class CustomExpansionPanel extends Component {
  handleChange = (event, row) => {
    row.value = event.target.value;
    this.setState({ value: event.target.value });

    console.log(randomBytes(199));
  };

  createRows = () => {
    return this.props.input.map((input, key) => (
      <React.Fragment>
        <ExpansionPanel key={key}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id={"panel1_"}
          >
            <SummaryTextboxGroup input={input} onChange={this.handleChange} />
          </ExpansionPanelSummary>

          <ExpansionPanelDetails aria-controls="panel2-content" id={"panel2_"}>
            <DetailsTextboxGroup input={input} onChange={this.handleChange} />
          </ExpansionPanelDetails>

          <ExpansionPanelActions aria-controls="panel3-content" id={"panel3_"}>
            <Button size="small">Cancel</Button>
            <Button size="small">Save</Button>
          </ExpansionPanelActions>
        </ExpansionPanel>
      </React.Fragment>
    ));
  };

  render() {
    return <this.createRows />;
  }
}

export default CustomExpansionPanel;
//=============================================================================
