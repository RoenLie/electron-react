import React from "react";
import { jobList } from "../services/toolData";
import ExpansionPanelJob from "./expPanelJob";
import NavBarTop from "./navBarTop";

const ExpansionPanelPage = () => {
  return (
    <React.Fragment>
      <NavBarTop />
      <ExpansionPanelJob input={jobList} />
    </React.Fragment>
  );
};

export default ExpansionPanelPage;
