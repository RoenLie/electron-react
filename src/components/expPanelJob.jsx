import React from "react";

import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions
} from "./styles/expansionPanelStyle";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import ExpansionPanelRow from "./expPanelRow";
import SummaryTextboxGroup from "./expPanelRowHeader";

const ExpansionPanelJob = ({ input }) => {
  return input.map(input => (
    <React.Fragment key={Math.random().toString()}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
        >
          {input.job_info.map(job => (
            <SummaryTextboxGroup key={Math.random().toString()} input={job} />
          ))}
        </ExpansionPanelSummary>

        <ExpansionPanelDetails aria-controls="panel2-content">
          {input.tool_list.map(tool => (
            <ExpansionPanelRow
              key={Math.random().toString()}
              input={tool}
              origin={input.tool_list}
            />
          ))}
        </ExpansionPanelDetails>

        <ExpansionPanelActions aria-controls="panel3-content" id={"panel3_"}>
          <Button size="small">Cancel</Button>
          <Button size="small">Save</Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </React.Fragment>
  ));
};
export default ExpansionPanelJob;
