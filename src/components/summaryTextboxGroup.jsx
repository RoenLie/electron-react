import React from "react";

import ExpansionPanelTextBox from "./expansionPanelTextBox";

const SummaryTextboxGroup = ({ row, values, onChange }) => {
  return values.values.map(values => (
    <React.Fragment>
      <div Style="pointer-events: none;">
        <ExpansionPanelTextBox row={row} values={values} onChange={onChange} />
      </div>
    </React.Fragment>
  ));
};

export default SummaryTextboxGroup;
