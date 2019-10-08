import React from "react";
import FormControl from "@material-ui/core/FormControl";
import {
  StyledInputLabel,
  StyledInput
} from "./styles/expansionPanelTextboxStyle";
//=============================================================================
const ExpansionPanelTextBox = ({ input, onChange }) => {
  const handleChange = event => {
    onChange(event, input);
  };

  let { row, name, value } = input;

  return (
    <React.Fragment>
      <FormControl>
        <StyledInputLabel key={row + name}>{name}</StyledInputLabel>
        <StyledInput
          id={row}
          name={name}
          value={value}
          onChange={handleChange}
        />
      </FormControl>
    </React.Fragment>
  );
};

export default ExpansionPanelTextBox;
//=============================================================================
