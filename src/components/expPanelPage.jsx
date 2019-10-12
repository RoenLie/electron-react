import React from "react";
import { jobList } from "../services/toolData";
import ExpansionPanelJob from "./expPanelJob";

const ExpansionPanelPage = () => {
  return (
    <React.Fragment>
      <ExpansionPanelJob input={jobList} />
    </React.Fragment>
  );
};

export default ExpansionPanelPage;
