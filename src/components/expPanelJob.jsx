import React from "react";
import {
  ExpPanelJob,
  ExpPanelSumJob,
  ExpPanelDetJob,
  ExpPanelActJob,
  ExpPanelActJobBtn
} from "./styles/expnStyle";
import Droppable from "./drag_drop/droppable";
import ExpansionPanelRow from "./expPanelRow";
import SummaryTextboxGroup from "./expPanelRowHeader";

const ExpansionPanelJob = ({ input }) => {
  const jobList = input;

  const [inputs, setInputs] = React.useState({ input: input });

  const onDeleteRow = deletedRow => {
    input[input.length - 1].tool_list.push(...deletedRow);
    setInputs({ ...inputs, input: input });
  };

  const onMoveRow = (job, movedRow) => {
    job.tool_list.push(...movedRow);
    setInputs({ ...inputs, input: input });
  };

  const handleUpdate = () => {
    setInputs({ ...inputs, input: input });
  };

  const [expanded, setExpanded] = React.useState({});
  const handleChange = panel => {
    setExpanded({ ...expanded, [panel]: !expanded[panel] });
  };

  return input.map(input => (
    <React.Fragment key={Math.random().toString()}>
      <ExpPanelJob
        onChange={() => handleChange(input.objectId)}
        expanded={expanded[input.objectId]}
      >
        <ExpPanelSumJob>
          {input.job_info.map(job => (
            <SummaryTextboxGroup key={Math.random().toString()} input={job} />
          ))}
        </ExpPanelSumJob>
        <Droppable
          id={Math.random().toString()}
          job={input}
          jobList={jobList}
          onMove={handleUpdate}
        >
          <ExpPanelDetJob>
            {input.tool_list.map(tool => (
              <ExpansionPanelRow
                key={Math.random().toString()}
                tool={tool}
                job={input}
                toolList={input.tool_list}
                jobList={jobList}
                onDelete={onDeleteRow}
                onMove={onMoveRow}
              />
            ))}
          </ExpPanelDetJob>
        </Droppable>
        <ExpPanelActJob>
          <ExpPanelActJobBtn>Cancel</ExpPanelActJobBtn>
          <ExpPanelActJobBtn>Save</ExpPanelActJobBtn>
        </ExpPanelActJob>
      </ExpPanelJob>
    </React.Fragment>
  ));
};
export default ExpansionPanelJob;
