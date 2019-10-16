import React from "react";
import { withStyles } from "@material-ui/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
//=============================================================================
const ExpPanelJob = withStyles({
  root: {
    width: "100%",
    backgroundColor: "#263238",
    marginBottom: 5
  },
  expanded: {
    border: "2px solid #263238"
  }
})(props => <MuiExpansionPanel margin="dense" {...props} />);
//=============================================================================
const ExpPanelSumJob = withStyles({
  root: {
    borderBottom: "1px solid #000000",
    maxHeight: 60
  },
  expanded: {}
})(props => (
  <MuiExpansionPanelSummary
    margin="dense"
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel1-content"
    {...props}
  />
));
//=============================================================================
const ExpPanelDetJob = withStyles({
  root: {
    flexFlow: "wrap",
    backgroundColor: "#111111",
    padding: 20,
    minHeight: 40
  }
})(props => (
  <MuiExpansionPanelDetails
    margin="dense"
    aria-controls="panel2-content"
    {...props}
  />
));
//=============================================================================
const ExpPanelActJob = withStyles({
  root: {
    backgroundColor: "#111111",
    padding: 5
  }
})(props => (
  <MuiExpansionPanelActions
    margin="dense"
    aria-controls="panel3-content"
    {...props}
  />
));
//=============================================================================
const ExpPanelActJobBtn = withStyles({
  root: {
    color: "#F3F3F3"
  }
})(props => <Button size="small" {...props} />);
//=============================================================================

export {
  ExpPanelJob,
  ExpPanelSumJob,
  ExpPanelDetJob,
  ExpPanelActJob,
  ExpPanelActJobBtn
};
