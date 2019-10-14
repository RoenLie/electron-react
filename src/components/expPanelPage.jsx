import React from "react";
import { jobList } from "../services/toolData";
import ExpansionPanelJob from "./expPanelJob";
import NavBarTop from "./navBarTop";

const ExpansionPanelPage = () => {
  const [inputs, setInput] = React.useState({
    input: jobList
  });

  const handleUpdate = input => {
    setInput({ ...inputs, input: input });
  };

  return (
    <React.Fragment>
      <NavBarTop input={jobList} onUpdate={handleUpdate} />
      <ExpansionPanelJob input={jobList} />
    </React.Fragment>
  );
};

export default ExpansionPanelPage;
