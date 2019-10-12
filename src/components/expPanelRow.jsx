import React from "react";

import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions
} from "./styles/expansionPanelStyle";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";

import SummaryTextboxGroup from "./expPanelRowHeader";
import DetailsTextboxGroup from "./expPanelRowBody";
//=============================================================================
const ExpansionPanelRow = ({ input, origin }) => {
  const onClickRemoveItem = () => {
    console.log(origin);
    origin.pop();
    console.log(origin);
  };

  return (
    <React.Fragment key={Math.random().toString()}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
        >
          <SummaryTextboxGroup input={input} />
        </ExpansionPanelSummary>

        <ExpansionPanelDetails aria-controls="panel2-content" id={"panel2_"}>
          <DetailsTextboxGroup input={input} />
        </ExpansionPanelDetails>

        <ExpansionPanelActions aria-controls="panel3-content" id={"panel3_"}>
          <Button size="small" onClick={onClickRemoveItem}>
            remove
          </Button>
          <Button size="small">Save</Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </React.Fragment>
  );
};

export default ExpansionPanelRow;
//=============================================================================
