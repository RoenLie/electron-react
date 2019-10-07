import React from "react";

import ExpansionPanelTextBox from "./expansionPanelTextBox";

const SummaryTextboxGroup = ({ values, onChange }) => {
  return (
    <React.Fragment>
      {values.map(({ id, name, value }) => (
        <div Style="pointer-events: none;">
          <ExpansionPanelTextBox
            key={id}
            name={name}
            value={value}
            onChange={onChange}
          />
        </div>
      ))}
    </React.Fragment>
  );
};

export default SummaryTextboxGroup;
