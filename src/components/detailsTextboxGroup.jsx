import React from "react";
import ExpansionPanelTextBox from "./expansionPanelTextBox";
//=============================================================================
const DetailsTextboxGroup = ({ values, onChange }) => {
  return (
    <React.Fragment>
      {values.map(({ id, name, value }) => (
        <ExpansionPanelTextBox
          key={id}
          name={name}
          value={value}
          onChange={onChange(id)}
        />
      ))}
    </React.Fragment>
  );
};

export default DetailsTextboxGroup;
//=============================================================================
