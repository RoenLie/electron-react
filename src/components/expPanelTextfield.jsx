import React from "react";
import FormControl from "@material-ui/core/FormControl";
import {
  StyledInputLabel,
  StyledInput
} from "./styles/expansionPanelTextboxStyle";
//=============================================================================
const ExpansionPanelTextBox = ({ input }) => {
  const [values, setValues] = React.useState({
    text: ""
  });

  const handleChange = name => event => {
    input.value = event.target.value;
    setValues({ ...values, [name]: event.target.value });
  };

  const { name, value } = input;

  return (
    <React.Fragment>
      <FormControl>
        <StyledInputLabel>{name}</StyledInputLabel>
        <StyledInput value={value} onChange={handleChange("text")} />
      </FormControl>
    </React.Fragment>
  );
};

export default ExpansionPanelTextBox;
//=============================================================================
