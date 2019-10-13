import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/Input";

const navBarStyle = makeStyles({
  root: {
    flexGrow: 1,
    marginBottom: 20,
    background: "#111111",
    borderBottom: "1px solid #000000"
  }
});

const buttonStyle = makeStyles({
  root: {
    padding: 5,
    color: "rgb(0, 188, 212)",
    fontWeight: "bold"
  }
});

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #000000",
    background: "#212121",
    padding: 20
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

const NavBarTop = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <AppBar className={navBarStyle().root} color="default" position="sticky">
        <Toolbar variant="dense">
          <Button className={buttonStyle().root} onClick={handleClick}>
            New Job
          </Button>
          <StyledMenu
            elevation={0}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center"
            }}
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <div>
              <Input />
            </div>
            <div>
              <Input />
            </div>
            <div>
              <Input />
            </div>
            <div>
              <Input />
            </div>
            <div>
              <Input />
            </div>
          </StyledMenu>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default NavBarTop;
