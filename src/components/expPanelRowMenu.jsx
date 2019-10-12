import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const SimpleMenu = ({ jobList, onClick }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMove = job => {
    onClick(job);
  };

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
          let jobInfo = "";
          job.job_info.map(job_info => {
            job_info.map(job_info => {
              if (jobInfo.length > 0) jobInfo += " | ";
              jobInfo += job_info.value;
            });
          });
          return (
            <MenuItem
              key={Math.random().toString()}
              onClick={() => handleMove(job)}
            >
              {jobInfo}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

export default SimpleMenu;
