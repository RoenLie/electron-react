import { withStyles } from "@material-ui/core/styles";

import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
// ============================================================================
const StyledInputLabel = withStyles({
  root: {
    marginTop: 5,
    color: "rgb(0, 188, 212)",
    "&:hover": {}
  },
  focused: {
    // backgroundColor: works but not color
  },
  shrink: {
    color: "rgb(0, 188, 212)"
  }
})(InputLabel);

const StyledInput = withStyles({
  root: {
    color: "rgb(243, 243, 243)",
    margin: "dense",
    marginRight: 5,
    "&:hover": {}
  },
  focused: {
    color: "rgb(243, 243, 243)"
  },
  underline: {
    "&:before": { borderBottom: "1px solid RGB(100,100,100)" },
    "&:after": {
      borderBottom: "1px solid rgb(0, 188, 212)"
    }
  }
})(Input);

export { StyledInputLabel, StyledInput };
// ============================================================================
