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
import SummaryTextboxGroup from "./expPanelRowHeader";
import DetailsTextboxGroup from "./expPanelRowBody";
//=============================================================================
const ExpansionPanelRow = ({
  tool,
  job,
  toolList,
  jobList,
  onDelete,
  onMove
}) => {
  const [inputs, setInputs] = React.useState({
    toolList: toolList,
    values: tool
  });

  const onClickSaveChanges = () => {
    setInputs({ ...inputs, values: tool });
  };

  const jobKey = jobList.indexOf(job);
  const toolKey = toolList.indexOf(tool);

  const onClickDeleteRow = () => {
    onDelete(toolList.splice(toolKey, 1));
  };

  const onClickMoveRow = job => {
    onMove(job, toolList.splice(toolKey, 1));
  };

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
};

export default ExpansionPanelRow;
//=============================================================================
