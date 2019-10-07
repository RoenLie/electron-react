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

//=============================================================================
class CustomExpansionPanel extends Component {
  state = {};

  values = [
    { id: 0, name: "tool sn", value: "" },
    { id: 1, name: "tool type", value: "" },
    { id: 2, name: "tool size", value: "" },
    { id: 3, name: "tool wo", value: "" }
  ];

  handleChange = id => event => {
    this.values[id].value = event.target.value;
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1c-content"
            id="panel_header"
          >
            <SummaryTextboxGroup
              values={this.values}
              onChange={this.handleChange}
            />
          </ExpansionPanelSummary>

          <ExpansionPanelDetails>
            <DetailsTextboxGroup
              values={this.values}
              onChange={this.handleChange}
            />
          </ExpansionPanelDetails>

          <ExpansionPanelActions>
            <Button size="small">Cancel</Button>
            <Button size="small">Save</Button>
          </ExpansionPanelActions>
        </ExpansionPanel>
      </React.Fragment>
    );
  }
}

export default CustomExpansionPanel;
//=============================================================================
