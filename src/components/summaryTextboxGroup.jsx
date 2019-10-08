import React from "react";

import ExpansionPanelTextBox from "./expansionPanelTextBox";

const SummaryTextboxGroup = ({ input, onChange }) => {
  return input.map((input, key) => (
    <React.Fragment>
      <div key={key} Style="pointer-events: none;">
        <ExpansionPanelTextBox input={input} onChange={onChange} />
      </div>
    </React.Fragment>
  ));
};

export default SummaryTextboxGroup;
