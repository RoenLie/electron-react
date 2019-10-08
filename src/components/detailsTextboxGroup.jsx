import React from "react";
import ExpansionPanelTextBox from "./expansionPanelTextBox";
//=============================================================================
const DetailsTextboxGroup = ({input, onChange }) => {
  return input.row.map(input => (
    <React.Fragment>
      <div>
        <ExpansionPanelTextBox input={input} onChange={onChange} />
      </div>
    </React.Fragment>
  ));
};
export default DetailsTextboxGroup;
