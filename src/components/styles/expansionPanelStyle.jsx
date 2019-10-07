import { withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";

const ExpansionPanel = withStyles({
  root: {
    width: "100%",
    backgroundColor: "#424242",
    "&$expanded": {
      margin: "dense"
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
    minHeight: 30
  }
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    backgroundColor: "#263238",
    padding: theme.spacing(1),
    minHeight: 40
  }
}))(MuiExpansionPanelDetails);

const ExpansionPanelActions = withStyles(theme => ({
  root: {
    backgroundColor: "#263238",
    padding: theme.spacing(1)
  }
}))(MuiExpansionPanelActions);

export {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions
};
