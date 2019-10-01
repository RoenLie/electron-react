import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";

import { toast } from "react-toastify";

const useStyles = makeStyles(theme => ({
  button1: {
    margin: theme.spacing(2),
    backgroundColor: "rgb(0, 188, 212)",
    color: "rgb(255, 255, 255)"
  },
  button2: {
    margin: theme.spacing(2),
    backgroundColor: "rgb(0, 188, 212)",
    color: "rgb(255, 255, 255)"
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  link: {
    textDecoration: "none"
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
      <Link className={classes.link} to="/overview">
        <Button variant="contained" className={classes.button1}>
          Overview
        </Button>
      </Link>
      <Link className={classes.link} to="/calender">
        <Button variant="contained" className={classes.button1}>
          Calender
        </Button>
      </Link>
    </React.Fragment>
  );
}

export default ButtonRow;
