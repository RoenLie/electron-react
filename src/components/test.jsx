import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

  const StyledTextField = withStyles({
    root: {
      borderBottom: "1px solid white",
      backgroundColor:"white",
      color:"white"
    }
  })(TextField);








class Overview extends Component {
  render() {
    return (
    <div>
      <StyledTextField id="textfieldtest1" label="label" value="this is value"/>
    </div>
    );
  }
}

export default Overview;
