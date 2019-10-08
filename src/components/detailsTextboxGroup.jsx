import React from "react";
import ExpansionPanelTextBox from "./expansionPanelTextBox";
//=============================================================================
const DetailsTextboxGroup = ({ row, values, onChange }) => {
  return values.values.map(values => (
    <React.Fragment>
      <div>
        <ExpansionPanelTextBox row={row} values={values} onChange={onChange} />
      </div>
    </React.Fragment>
  ));
};
export default DetailsTextboxGroup;
