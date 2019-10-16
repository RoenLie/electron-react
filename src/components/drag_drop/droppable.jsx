import React from "react";
import PropTypes from "prop-types";
//=============================================================================
export default function Droppable(props) {
  const { jobList, job: targetJob, onMove: updateState } = props;

  function drop(event) {
    event.preventDefault();
    const jobKey = event.dataTransfer.getData("jobKey");
    const toolKey = event.dataTransfer.getData("toolKey");
    const prevToolList = jobList[jobKey].tool_list;
    const targToolList = targetJob.tool_list;
    targToolList.push(...prevToolList.splice(toolKey, 1));
    updateState();
  }

  function allowDrop(event) {
    event.preventDefault();
  }

  return (
    <div id={props.id} onDrop={drop} onDragOver={allowDrop}>
      {props.children}
    </div>
  );
}

Droppable.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node
};

//=============================================================================
