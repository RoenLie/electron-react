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

  function handleUpdate() {
    setInputs({ ...inputs, input: jobList });
  }

  function sortBySize() {}

  return jobList.map(job => (
    <React.Fragment key={job.objectId}>
      <ExpPanelJob>
        <ExpPanelSumJob>
          {job.job_info.map(jobInfo => (
            <SummaryTextboxGroup key={jobInfo.name} input={[jobInfo]} />
          ))}
        </ExpPanelSumJob>
        <Droppable job={job} jobList={jobList} onMove={handleUpdate}>
          <ExpPanelDetJob>
            {job.tool_list.map(tool => (
              <ExpansionPanelRow
                key={tool[0].value}
                tool={tool}
                job={job}
                toolList={job.tool_list}
                jobList={jobList}
              />
            ))}
          </ExpPanelDetJob>
        </Droppable>
        <ExpPanelActJob>
          <ExpPanelActJobBtn>Remove</ExpPanelActJobBtn>
        </ExpPanelActJob>
      </ExpPanelJob>
    </React.Fragment>
  ));
}
//=============================================================================
