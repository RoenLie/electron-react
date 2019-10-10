import React from "react";
import ExpansionPanelTextBox from "./expPanelTextfield";
//=============================================================================
const DetailsTextboxGroup = ({ input }) => {
  return input.map(input => (
    <React.Fragment key={Math.random().toString()}>
      <div>
        <ExpansionPanelTextBox input={input} />
      </div>
    </React.Fragment>
  ));
};
export default DetailsTextboxGroup;
