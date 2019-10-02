import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";

import SummaryTextbox from "./summaryTextbox";
import DetailsTextbox from "./detailsTextbox";

const ExpansionPanel = withStyles({
  root: {
    width: "100%",
    backgroundColor: "rgba(50, 50, 50, 1)",
    color: "rgba(255, 255, 255, 1)",
    "&$expanded": {
      margin: "auto"
    }
  },
  expanded: {}
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: "#424242",
    color: "rgba(255, 255, 255, 1)",
    marginTop: 5,
    marginBottom: -1,
    minHeight: 40,
    "&$expanded": {
      minHeight: 40
    }
  },
  expanded: {}
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    backgroundColor: "#263238",
    color: "rgba(255, 255, 255, 1)",
    padding: theme.spacing(1)
  }
}))(MuiExpansionPanelDetails);

const ExpansionPanelActions = withStyles(theme => ({
  root: {
    backgroundColor: "#263238",
    color: "rgba(255, 255, 255, 1)",
    padding: theme.spacing(1)
  }
}))(MuiExpansionPanelActions);
//=============================================================================
const CustomExpansionPanel = () => {
  const props = {
    textbox: {
      id: "test",
      value: "this is the value"
    }
  };

  return (
    <React.Fragment>
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel_header"
        >
          <SummaryTextbox label="tool sn" />
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          <DetailsTextbox
            key={props.textbox}
            label="tool sn"
            value={props.textbox}
          />
        </ExpansionPanelDetails>

        <ExpansionPanelActions>
          <Button size="small">Cancel</Button>
          <Button size="small" color="primary">
            Save
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </React.Fragment>
  );
};

export default CustomExpansionPanel;
