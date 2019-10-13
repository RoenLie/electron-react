import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import expnStyles from "./styles/expnStyle";

import Droppable from "./drag_drop/droppable";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import ExpansionPanelRow from "./expPanelRow";
import SummaryTextboxGroup from "./expPanelRowHeader";

const ExpansionPanelJob = ({ input }) => {
  const [inputs, setInputs] = React.useState({ input: input });

  const onDeleteRow = deletedRow => {
    input[input.length - 1].tool_list.push(...deletedRow);
    setInputs({ ...inputs, input: input });
  };

  const onMoveRow = (job, movedRow) => {
    job.tool_list.push(...movedRow);
    setInputs({ ...inputs, input: input });
  };

  const originalInput = input;

  return input.map(input => (
    <React.Fragment key={Math.random().toString()}>
      <ExpansionPanel className={expnStyles().expnRoot}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          className={expnStyles().expnSum}
        >
          {input.job_info.map(job => (
            <SummaryTextboxGroup key={Math.random().toString()} input={job} />
          ))}
        </ExpansionPanelSummary>
        <Droppable id={Math.random().toString()}>
          <ExpansionPanelDetails
            aria-controls="panel2-content"
            className={expnStyles().expnDetailsJob}
          >
            {input.tool_list.map(tool => (
              <ExpansionPanelRow
                key={Math.random().toString()}
                input={tool}
                origin={input.tool_list}
                jobList={originalInput}
                onDelete={onDeleteRow}
                onMove={onMoveRow}
              />
            ))}
          </ExpansionPanelDetails>
        </Droppable>
        <ExpansionPanelActions
          aria-controls="panel3-content"
          className={expnStyles().expnActionsJob}
        >
          <Button className={expnStyles().expnActionsButton}>Cancel</Button>
          <Button className={expnStyles().expnActionsButton}>Save</Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </React.Fragment>
  ));
};
export default ExpansionPanelJob;
