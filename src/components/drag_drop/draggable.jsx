import React, { Component } from "react";
import PropTypes from "prop-types";

class Draggable extends Component {
  drag = e => {
    const { jobKey, toolKey } = this.props;
    e.dataTransfer.setData("jobKey", jobKey);
    e.dataTransfer.setData("toolKey", toolKey);
  };

  noAllowDrop = e => {
    e.stopPropagation();
  };

  render() {
    return (
      <div
        id={this.props.id}
        draggable="true"
        onDragStart={this.drag}
        onDragOver={this.noAllowDrop}
      >
        {this.props.children}
      </div>
    );
  }
}

Draggable.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node
};

export default Draggable;
//=============================================================================
// working example //
// import React, { Component } from "react";
// import PropTypes from "prop-types";

// class Draggable extends Component {
//   drag = e => {
//     e.dataTransfer.setData("transfer", e.target.id);
//   };

//   noAllowDrop = e => {
//     e.stopPropagation();
//   };

//   render() {
//     return (
//       <div
//         id={this.props.id}
//         draggable="true"
//         onDragStart={this.drag}
//         onDragOver={this.noAllowDrop}
//         style={this.props.style}
//       >
//         {this.props.children}
//       </div>
//     );
//   }
// }

// Draggable.propTypes = {
//   id: PropTypes.string,
//   style: PropTypes.object,
//   children: PropTypes.node
// };

// export default Draggable;
