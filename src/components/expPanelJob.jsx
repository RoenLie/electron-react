import React from "react";
import {
  ExpPanelJob,
  ExpPanelSumJob,
  ExpPanelDetJob,
  ExpPanelActJob,
  ExpPanelActJobBtn
} from "./styles/expnStyle";
import Droppable from "./drag_drop/droppable";
import ExpansionPanelRow, { SummaryTextboxGroup } from "./expPanelRow";
//=============================================================================
export default function ExpansionPanelJob(props) {
  const { input: jobList } = props;

  const [inputs, setInputs] = React.useState(jobList);
  const [expanded, setExpanded] = React.useState({});

  function handleDeleteTool(deletedRow) {
    setInputs({
      ...inputs,
      input: jobList[jobList.length - 1].tool_list.push(...deletedRow)
    });
  }

  function handleMoveTool(job, movedRow) {
    job.tool_list.push(...movedRow);
    setInputs({ ...inputs, input: jobList });
  }

  function handleUpdate() {
    setInputs({ ...inputs, input: jobList });
  }

  function handleExpand(panel) {
    setExpanded({ ...expanded, [panel]: !expanded[panel] });
  }

  return jobList.map(job => (
    <React.Fragment key={Math.random().toString()}>
      <ExpPanelJob
        onChange={() => handleExpand(job.objectId)}
        expanded={expanded[job.objectId]}
      >
        <ExpPanelSumJob>
          {job.job_info.map(jobInfo => (
            <SummaryTextboxGroup
              key={Math.random().toString()}
              input={jobInfo}
            />
          ))}
        </ExpPanelSumJob>
        <Droppable
          id={Math.random().toString()}
          job={job}
          jobList={jobList}
          onMove={handleUpdate}
        >
          <ExpPanelDetJob>
            {job.tool_list.map(tool => (
              <ExpansionPanelRow
                key={Math.random().toString()}
                tool={tool}
                job={job}
                toolList={job.tool_list}
                jobList={jobList}
                onDelete={handleDeleteTool}
                onMove={handleMoveTool}
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
}
//=============================================================================
