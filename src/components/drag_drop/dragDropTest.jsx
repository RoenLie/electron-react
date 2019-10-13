import React, { Component } from "react";
import styled from "styled-components";
import Draggable from "../drag_drop/draggable";
import Droppable from "../drag_drop/droppable";

const Wrapper = styled.div`
    width:100%
    padding:32px
    display:flex
    justify-content:center
`;

const Item = styled.div`
  padding: 8px;
  color: #555;
  background-color: white;
  border-radius: 32px;
`;

const droppableStyle = {
  backgroundColor: "#555",
  width: "250px",
  height: "400px",
  margin: "32px"
};

class DragDropTest extends Component {
  state = {};
  render() {
    return (
      <Wrapper>
        <Droppable id="dr1" style={droppableStyle}>
          <Draggable id="item1" style={{ margin: "8px" }}>
            <Item>text1</Item>
          </Draggable>
          <Draggable id="item2" style={{ margin: "8px" }}>
            <Item>text2</Item>
          </Draggable>
        </Droppable>
        <Droppable id="dr1" style={droppableStyle}></Droppable>
      </Wrapper>
    );
  }
}

export default DragDropTest;
