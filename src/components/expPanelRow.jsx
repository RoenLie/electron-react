import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import expnStyles from "./styles/expnStyle";

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
      <ExpansionPanel className={expnStyles().expnRoot}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          className={expnStyles().expnSum}
        >
          <SummaryTextboxGroup input={input} />
        </ExpansionPanelSummary>

        <ExpansionPanelDetails
          aria-controls="panel2-content"
          className={expnStyles().expnDetailsTool}
        >
          <DetailsTextboxGroup input={input} />
        </ExpansionPanelDetails>

        <ExpansionPanelActions
          aria-controls="panel3-content"
          className={expnStyles().expnActionsTool}
        >
          <Button
            className={expnStyles().expnActionsButton}
            onClick={onClickSaveChanges}
          >
            save
          </Button>
          <SimpleMenu
            jobList={jobList}
            jobKey={jobKey}
            onClick={onClickMoveRow}
          />
          <Button
            className={expnStyles().expnActionsButton}
            onClick={onClickDeleteRow}
          >
            remove
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </React.Fragment>
  );
};

export default ExpansionPanelRow;
//=============================================================================
