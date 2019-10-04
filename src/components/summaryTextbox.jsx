import React from 'react';

import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

const StyledInput = withStyles({
  root: {
    color: "#FFFFFF",
    borderBottom: "1px solid white",
    margin:"dense",
  }
})(Input);

const StyledInputLabel = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(InputLabel);

const SummaryTextBox = ({id,value}) =>{
  return (
    // <div Style="pointer-events: none;">
    <div>
      <FormControl>
        <StyledInputLabel>field1</StyledInputLabel>
        <StyledInput
          id={id}
          type="text"
          value = {value}
        />
      </FormControl>
    </div>
  );
}
 
export default SummaryTextBox;