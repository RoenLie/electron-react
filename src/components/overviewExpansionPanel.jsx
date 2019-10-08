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

  handleChange = event => {
    this.props.input[1].values[1].value = event.target.value;

    this.setState({ value: event.target.value });
  };

  createRows = () => {
    return this.props.input.map(values => (
      <React.Fragment>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id={"panel1_" + "row" + values.row}
          >
            <SummaryTextboxGroup
              row={values.row}
              values={values}
              onChange={this.handleChange}
            />
          </ExpansionPanelSummary>

          <ExpansionPanelDetails
            aria-controls="panel2-content"
            id={"panel2_" + "row" + values.row}
          >
            <DetailsTextboxGroup
              row={values.row}
              values={values}
              onChange={this.handleChange}
            />
          </ExpansionPanelDetails>

          <ExpansionPanelActions
            aria-controls="panel3-content"
            id={"panel3_" + "row" + values.row}
          >
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
