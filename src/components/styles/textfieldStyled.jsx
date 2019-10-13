import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const StyledTextField = withStyles({
  root: {
    "& label.MuiInputLabel-root": {
      color: "rgb(0, 188, 212)"
    },
    "& .MuiInput-root": {
      color: "rgb(243, 243, 243)"
    },
    "& .MuiInput-underline::before": {
      borderBottomColor: "#515151"
    },
    "& .MuiInput-underline::after": {
      borderBottomColor: "rgb(0, 188, 212)"
    }
  }
})(props => <TextField margin="dense" {...props} />);

export default StyledTextField;
