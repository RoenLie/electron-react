import React from "react";
import { makeStyles, withStyles } from "@material-ui/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
//=============================================================================
const ExpPanelJob = withStyles({
  root: {
    width: "100%",
    backgroundColor: "#263238",
    marginBottom: 5
  }
})(props => <ExpansionPanel margin="dense" {...props} />);
//=============================================================================
const ExpPanelSumJob = withStyles({
  root: {
    borderBottom: "1px solid #000000",
    maxHeight: 60
  },
  expanded: {}
})(props => (
  <ExpansionPanelSummary
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
  <ExpansionPanelDetails
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
  <ExpansionPanelActions
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
const expnStyles = makeStyles({
  expnRoot: {
    width: "100%",
    backgroundColor: "#263238",
    marginBottom: 5,
    margin: "dense",
    expanded: { margin: "dense" }
  },
  expnSum: {
    backgroundColor: "#263238",
    borderBottom: "1px solid #000000",
    color: "rgba(255, 255, 255, 1)",
    minHeight: 30,
    focused: {
      backgroundColor: "#424242"
    }
  },
  expnDetailsJob: {
    flexFlow: "wrap",
    backgroundColor: "#111111",
    padding: 20,
    minHeight: 40
  },
  expnDetailsTool: {
    flexFlow: "wrap",
    backgroundColor: "#313131",
    padding: 20,
    minHeight: 40
  },
  expnActionsJob: {
    backgroundColor: "#111111",
    padding: 5
  },
  expnActionsTool: {
    backgroundColor: "#313131",
    padding: 5
  },
  expnActionsButton: {
    size: "small",
    color: "#F3F3F3"
  }
});

export {
  ExpPanelJob,
  ExpPanelSumJob,
  ExpPanelDetJob,
  ExpPanelActJob,
  ExpPanelActJobBtn
};

export default expnStyles;
