import React from "react";

import {
  ExpPanelJob,
  ExpPanelSumJob,
  ExpPanelDetJob
} from "./styles/expnStyle";

import Draggable from "./drag_drop/draggable";
import ExpansionPanelTextBox from "./expPanelTextfield";
//=============================================================================
function SummaryTextboxGroup({ input: fields }) {
  return fields.map(field => (
    <div key={field.name} style={{ pointerEvents: "none" }}>
      <ExpansionPanelTextBox input={field} />
    </div>
  ));
}
//=============================================================================
function DetailsTextboxGroup(props) {
  const { input } = props;
  return input.map(field => (
    <ExpansionPanelTextBox key={field.name} input={field} />
  ));
}
export { SummaryTextboxGroup, DetailsTextboxGroup };
//=============================================================================
export default function ExpansionPanelRow(props) {
  const { tool, job, toolList, jobList } = props;

  const jobKey = jobList.indexOf(job);
  const toolKey = toolList.indexOf(tool);

  return (
    <React.Fragment>
      <Draggable jobKey={jobKey} toolKey={toolKey}>
        <ExpPanelJob>
          <ExpPanelSumJob>
            <SummaryTextboxGroup input={tool} />
          </ExpPanelSumJob>
          <ExpPanelDetJob>
            <DetailsTextboxGroup input={tool} />
          </ExpPanelDetJob>
        </ExpPanelJob>
      </Draggable>
    </React.Fragment>
  );
}
//=============================================================================
