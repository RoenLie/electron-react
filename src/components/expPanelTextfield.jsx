import React from "react";
import StyledTextField from "./styles/textfieldStyled";
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
      <StyledTextField label={name} value={value} onChange={handleChange} />
    </React.Fragment>
  );
};

export default ExpansionPanelTextBox;
//=============================================================================
