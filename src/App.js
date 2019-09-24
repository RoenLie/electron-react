import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SimpleTable from "./components/testForm";
import IconLabelButtons from "./components/testButtons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <IconLabelButtons />
        <SimpleTable />
      </header>
    </div>
  );
}

export default App;
