import React from "react";

import ExpansionPanelTextBox from "./expPanelTextfield";

const SummaryTextboxGroup = ({ input }) => {
  return input.map(input => (
    <React.Fragment key={Math.random().toString()}>
      <div Style="pointer-events: none;">
        <ExpansionPanelTextBox input={input} />
      </div>
    </React.Fragment>
  ));
};

export default SummaryTextboxGroup;
