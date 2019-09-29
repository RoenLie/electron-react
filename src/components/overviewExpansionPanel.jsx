import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import { createMuiTheme } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";

import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles(theme => ({
  icon: {
    verticalAlign: "top",
    height: 20,
    width: 20
  },
  details: {
    alignItems: "center"
  },
  column: {
    flexBasis: "33.33%"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    color: "rgba(255, 255, 255, 1)"
  }
}));

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
    backgroundColor: "rgba(75, 75, 75, 1)",
    color: "rgba(255, 255, 255, 1)",
    marginTop: 5,
    marginBottom: -1,
    minHeight: 40,
    // maxHeight: 60,
    "&$expanded": {
      minHeight: 40
      // maxHeight: 60
    }
  },
  expanded: {}
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    backgroundColor: "rgba(100, 100, 100, 1)",
    color: "rgba(255, 255, 255, 1)",
    padding: theme.spacing(1)
  }
}))(MuiExpansionPanelDetails);

const ExpansionPanelActions = withStyles(theme => ({
  root: {
    backgroundColor: "rgba(100, 100, 100, 1)",
    color: "rgba(255, 255, 255, 1)",
    padding: theme.spacing(1)
  }
}))(MuiExpansionPanelActions);
//=============================================================================
const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        color: "white"
      }
    }
  }
});
//=============================================================================
const TextBox = ({ label: labelText }) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({});

  const handleChange = text => event => {
    setValues({ ...values, [text]: event.target.value });
  };

  return (
    <div className={classes.column}>
      <TextField
        id="standard-name"
        label={labelText}
        className={classes.textField}
        value={values.name}
        onChange={handleChange("text")}
        margin="small"
      />
    </div>
  );
};
//=============================================================================
const HeaderTextBox = ({ label: labelText }) => {
  const [name, setName] = React.useState("Composed TextField");
  const classes = useStyles();

  const handleChange = event => {
    setName(event.target.value);
  };

  return (
    <div className={classes.container}>
      {/* ======================================================================= */}
      <FormControl theme={theme}>
        <InputLabel>Name</InputLabel>
        <Input
          id="component-simple"
          label={labelText}
          value="hello this is text"
          readOnly={true}
          margin="dense"
        />
      </FormControl>
      {/* ===================================================================== */}
    </div>
  );
};
//=============================================================================
export default function DetailedExpansionPanel() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <HeaderTextBox label="tool sn" />
        </ExpansionPanelSummary>

        <ExpansionPanelDetails className={classes.details}>
          <TextBox label="tool sn" />
          <TextBox label="tool type" />
          <TextBox label="tool status" />
        </ExpansionPanelDetails>

        <ExpansionPanelActions>
          <Button size="small">Cancel</Button>
          <Button size="small" color="primary">
            Save
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>Location</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>
              Select trip destination
            </Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.column} />
          <div className={classes.column} />
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
}
