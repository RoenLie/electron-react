import React from "react";
import PropTypes from "prop-types";
//=============================================================================
export default function Draggable(props) {
  const { jobKey, toolKey } = props;

  function drag(event) {
    event.dataTransfer.setData("jobKey", jobKey);
    event.dataTransfer.setData("toolKey", toolKey);
  }

  function noAllowDrop(event) {
    event.stopPropagation();
  }

  return (
    <div draggable="true" onDragStart={drag} onDragOver={noAllowDrop}>
      {props.children}
    </div>
  );
}

Draggable.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node
};
//=============================================================================
