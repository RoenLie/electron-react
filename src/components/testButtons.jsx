import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import { Link, Redirect, NavLink } from "react-router-dom";

import { toast } from "react-toastify";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(2)
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  }
}));

function ButtonRow() {
  const classes = useStyles();

  const buttonPressed = () => {
    toast.success("SUCCESS TOAST");
    toast.info("SUCCESS TOAST");
    toast.error("ERROR TOAST");
  };

  return (
    <React.Fragment>
      <Link to="/overview">
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Overview
        </Button>
      </Link>
      <Link to="/calender">
        <Button variant="contained" color="primary" className={classes.button}>
          Calender
        </Button>
      </Link>
    </React.Fragment>
  );
}

export default ButtonRow;
