import React from "react";
import FormControl from "@material-ui/core/FormControl";
import {
  StyledInputLabel,
  StyledInput
} from "./styles/expansionPanelTextboxStyle";
//=============================================================================
const ExpansionPanelTextBox = ({ input, onChange }) => {
  let { row, id, name, value } = input;

  return (
    <React.Fragment>
      <FormControl>
        <StyledInputLabel>{name}</StyledInputLabel>
        <StyledInput
          id={row}
          name={name}
          value={value}
          onChange={onChange}
        />
      </FormControl>
    </React.Fragment>
  );
};

export default ExpansionPanelTextBox;
//=============================================================================
