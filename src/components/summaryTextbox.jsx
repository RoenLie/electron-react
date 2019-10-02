import React from "react";

import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

const SummaryTextBox = ({ label: labelText }) => {
  const StyledInput = withStyles({
    root: {
      color: "#FFFFFF",
      borderBottom: "1px solid white"
    }
  })(Input);

  const StyledInputLabel = withStyles({
    root: {
      color: "#FFFFFF"
    }
  })(InputLabel);

  return (
    <div Style="pointer-events: none;">
      {/* ======================================================================= */}
      <FormControl>
        <StyledInputLabel>Name</StyledInputLabel>
        <StyledInput
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

export default SummaryTextBox;
