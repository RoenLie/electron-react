import React from "react";
import FormControl from "@material-ui/core/FormControl";
import {
  StyledInputLabel,
  StyledInput
} from "./styles/expansionPanelTextboxStyle";
//=============================================================================
const ExpansionPanelTextBox = ({ id, name, value, onChange }) => {
  return (
    <React.Fragment>
      <FormControl>
        <StyledInputLabel>{name}</StyledInputLabel>
        <StyledInput id={id} name={name} value={value} onChange={onChange} />
      </FormControl>
    </React.Fragment>
  );
};

export default ExpansionPanelTextBox;
//=============================================================================
