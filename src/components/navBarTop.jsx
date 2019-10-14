import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import NavBarTopMenuNew from "./navBarTopMenuNew";

const navBarStyle = makeStyles({
  root: {
    flexGrow: 1,
    marginBottom: 20,
    background: "#111111",
    borderBottom: "1px solid #000000"
  }
});

const NavBarTop = ({ input, onUpdate }) => {
  return (
    <React.Fragment>
      <AppBar className={navBarStyle().root} position="sticky">
        <Toolbar variant="dense">
          <NavBarTopMenuNew input={input} onUpdate={onUpdate} />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default NavBarTop;
