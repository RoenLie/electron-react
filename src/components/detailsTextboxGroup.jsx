import React from "react";
import ExpansionPanelTextBox from "./expansionPanelTextBox";
//=============================================================================
const DetailsTextboxGroup = ({ input, onChange }) => {
  return input.map((input, key) => (
    <React.Fragment>
      <div key={key}>
        <ExpansionPanelTextBox input={input} onChange={onChange} />
      </div>
    </React.Fragment>
  ));
};
export default DetailsTextboxGroup;
