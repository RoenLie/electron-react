import React from "react";

import {
  ExpPanelJob,
  ExpPanelSumJob,
  ExpPanelDetJob,
  ExpPanelActJob,
  ExpPanelActJobBtn
} from "./styles/expnStyle";

import Draggable from "./drag_drop/draggable";
import SimpleMenu from "./expPanelRowMenu";
import ExpansionPanelTextBox from "./expPanelTextfield";
//=============================================================================
function SummaryTextboxGroup({ input: fields }) {
  return fields.map(field => (
    <div key={Math.random().toString()} style={{ pointerEvents: "none" }}>
      <ExpansionPanelTextBox input={field} />
    </div>
  ));
}
//=============================================================================
function DetailsTextboxGroup({ input: fields }) {
  return fields.map(field => (
    <React.Fragment key={Math.random().toString()}>
      <ExpansionPanelTextBox input={field} />
    </React.Fragment>
  ));
}
export { SummaryTextboxGroup, DetailsTextboxGroup };
//=============================================================================
export default function ExpansionPanelRow(props) {
  const { tool, job, toolList, jobList, onDelete, onMove } = props;
  const jobKey = jobList.indexOf(job);
  const toolKey = toolList.indexOf(tool);

  const [inputs, setInputs] = React.useState({
    toolList: toolList,
    values: tool
  });

  function onClickSaveChanges() {
    setInputs({ ...inputs, values: tool });
  }

  function onClickDeleteRow() {
    onDelete(toolList.splice(toolKey, 1));
  }

  function onClickMoveRow(job) {
    onMove(job, toolList.splice(toolKey, 1));
  }

  return (
    <React.Fragment>
      <Draggable
        id={Math.random().toString()}
        jobKey={jobKey}
        toolKey={toolKey}
      >
        <ExpPanelJob>
          <ExpPanelSumJob>
            <SummaryTextboxGroup input={tool} />
          </ExpPanelSumJob>

          <ExpPanelDetJob>
            <DetailsTextboxGroup input={tool} />
          </ExpPanelDetJob>

          <ExpPanelActJob>
            <ExpPanelActJobBtn onClick={onClickSaveChanges}>
              save
            </ExpPanelActJobBtn>
            <SimpleMenu
              jobList={jobList}
              toolKey={toolKey}
              onClick={onClickMoveRow}
            />
            <ExpPanelActJobBtn onClick={onClickDeleteRow}>
              remove
            </ExpPanelActJobBtn>
          </ExpPanelActJob>
        </ExpPanelJob>
      </Draggable>
    </React.Fragment>
  );
}
//=============================================================================
