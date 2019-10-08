import React from "react";

import ExpansionPanelTextBox from "./expansionPanelTextBox";

const SummaryTextboxGroup = ({ input, onChange }) => {
  let handleChange = event => {
    onChange(event, input.row);
  };

  return input.row.map(input => (
    <React.Fragment>
      {/* <div Style="pointer-events: none;"> */}
      <div>
        <ExpansionPanelTextBox input={input} onChange={handleChange} />
      </div>
    </React.Fragment>
  ));
};

export default SummaryTextboxGroup;
