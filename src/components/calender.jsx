import React, { Component } from "react";
import CustomExpansionPanel from "./overviewExpansionPanel";

class Calender extends Component {
  input = [
    {
      row: [
        {
          row: "1",
          id: "0",
          name: "tool sn",
          value: "tool1"
        },
        {
          row: "1",
          id: "1",
          name: "tool type",
          value: "type1"
        },
        {
          row: "1",
          id: "2",
          name: "tool size",
          value: "size1"
        },
        {
          row: "1",
          id: "3",
          name: "tool wo",
          value: "wo1"
        }
      ]
    },
    {row:[
      {
        row: "2",
        id: "0",
        name: "tool sn",
        value: "tool2"
      },
      {
        row: "2",
        id: "1",
        name: "tool type",
        value: "type2"
      },
      {
        row: "2",
        id: "2",
        name: "tool size",
        value: "size2"
      },
      {
        row: "2",
        id: "3",
        name: "tool wo",
        value: "wo2"
      }
    ]},
    {row:[
      {
        row: "3",
        id: "0",
        name: "tool sn",
        value: "tool3"
      },
      {
        row: "3",
        id: "1",
        name: "tool type",
        value: "type3"
      },
      {
        row: "3",
        id: "2",
        name: "tool size",
        value: "size3"
      },
      {
        row: "3",
        id: "3",
        name: "tool wo",
        value: "wo3"
      }
    ]}
  ];

  render() {
    return <CustomExpansionPanel input={this.input} />;
  }
}

export default Calender;
