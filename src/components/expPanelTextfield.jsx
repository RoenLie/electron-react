import React from "react";
import FormControl from "@material-ui/core/FormControl";
import {
  StyledInputLabel,
  StyledInput
} from "./styles/expansionPanelTextboxStyle";
//=============================================================================
const ExpansionPanelTextBox = ({ input }) => {
  const [values, setValues] = React.useState({ value: input.value });

  const handleChange = event => {
    input.value = event.target.value;
    setValues({ ...values, value: event.target.value });
  };

  const { name, value } = input;

  return (
    <React.Fragment>
      <FormControl>
        <StyledInputLabel>{name}</StyledInputLabel>
        <StyledInput value={value} onChange={handleChange} />
      </FormControl>
    </React.Fragment>
  );
};

export default ExpansionPanelTextBox;
//=============================================================================
