import React from "react";
import PropTypes from "prop-types";

export default function Droppable(props) {
  const { jobList, job, onMove: updateState } = props;

  function drop(event) {
    event.preventDefault();

    const jobKey = event.dataTransfer.getData("jobKey");
    const toolKey = event.dataTransfer.getData("toolKey");
    const tool = jobList[jobKey].tool_list.splice(toolKey, 1);

    job.tool_list.push(...tool);
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
// working example //
// import React, { Component } from "react";
// import PropTypes from "prop-types";

// class Droppable extends Component {
//   drop = event => {
//     event.preventDefault();
//     const data = event.dataTransfer.getData("transfer");
//     event.target.appendChild(document.getElementById(data));
//   };

//   allowDrop = event => {
//     event.preventDefault();
//   };

//   render() {
//     return (
//       <div
//         id={this.props.id}
//         onDrop={this.drop}
//         onDragOver={this.allowDrop}
//         style={this.props.style}
//       >
//         {this.props.children}
//       </div>
//     );
//   }
// }

// Droppable.propTypes = {
//   id: PropTypes.string,
//   style: PropTypes.object,
//   children: PropTypes.node
// };

// export default Droppable;
