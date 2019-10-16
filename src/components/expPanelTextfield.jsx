import React, { useState, useEffect } from "react";
import StyledTextField from "./styles/textfieldStyled";
//=============================================================================
export default function ExpansionPanelTextBox(props) {
  const { name, value, style } = props.input;

  const [values, setValues] = useState(value);

  function handleChange(event) {
    setValues(event.target.value);
  }

  useEffect(() => {
    if (value !== values) props.input.value = values;
  });

  return (
    <StyledTextField
      style={style}
      label={name}
      value={values}
      onChange={handleChange}
    />
  );
}
//=============================================================================
