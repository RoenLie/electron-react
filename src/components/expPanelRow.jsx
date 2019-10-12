import React from "react";

import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions
} from "./styles/expansionPanelStyle";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import SimpleMenu from "./expPanelRowMenu";

import SummaryTextboxGroup from "./expPanelRowHeader";
import DetailsTextboxGroup from "./expPanelRowBody";
//=============================================================================
const ExpansionPanelRow = ({ input, origin, jobList, onDelete, onMove }) => {
  const [inputs, setInputs] = React.useState({ origin: origin, values: input });

  const onClickSaveChanges = () => {
    setInputs({ ...inputs, values: input });
  };

  const jobKey = origin.indexOf(input);

  const onClickDeleteRow = () => {
    onDelete(origin.splice(jobKey, 1));
  };

  const onClickMoveRow = job => {
    onMove(job, origin.splice(jobKey, 1));
  };

  return (
    <React.Fragment>
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
          <Button size="small" onClick={onClickSaveChanges}>
            save
          </Button>
          <SimpleMenu
            jobList={jobList}
            jobKey={jobKey}
            onClick={onClickMoveRow}
          />
          <Button size="small" onClick={onClickDeleteRow}>
            remove
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </React.Fragment>
  );
};

export default ExpansionPanelRow;
//=============================================================================
