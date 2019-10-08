import React, { Component } from "react";
import CustomExpansionPanel from "./overviewExpansionPanel";

class Calender extends Component {
  input = [
    {
      row: 0,
      values: [
        {
          id: "0",
          name: "tool sn",
          value: "tool1"
        },
        {
          id: "1",
          name: "tool type",
          value: "type1"
        },
        {
          id: "2",
          name: "tool size",
          value: "size1"
        },
        {
          id: "3",
          name: "tool wo",
          value: "wo1"
        }
      ]
    },
    {
      row: 1,
      values: [
        {
          id: "0",
          name: "tool sn",
          value: "tool2"
        },
        {
          id: "1",
          name: "tool type",
          value: "type2"
        },
        {
          id: "2",
          name: "tool size",
          value: "size2"
        },
        {
          id: "3",
          name: "tool wo",
          value: "wo2"
        }
      ]
    },
    {
      row: 2,
      values: [
        {
          id: "0",
          name: "tool sn",
          value: "tool3"
        },
        {
          id: "1",
          name: "tool type",
          value: "type3"
        },
        {
          id: "2",
          name: "tool size",
          value: "size3"
        },
        {
          id: "3",
          name: "tool wo",
          value: "wo3"
        }
      ]
    }
  ];

  render() {
    return <CustomExpansionPanel input={this.input} />;
  }
}

export default Calender;
