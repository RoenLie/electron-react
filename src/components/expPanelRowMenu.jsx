import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function ExpPanelRowMenu(props) {
  const { jobList, onClick } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleMove(job) {
    onClick(job);
  }

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        move
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {jobList.map(job => {
          let name = "";
          job.job_info.map(info => {
            if (name.length > 0) name += " | ";
            name += info.value;
          });
          return (
            <MenuItem
              key={Math.random().toString()}
              onClick={() => handleMove(job)}
            >
              {name}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}
