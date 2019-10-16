import React from "react";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import StyledTextField from "./styles/textfieldStyled";
import _ from "lodash";

const buttonStyle = makeStyles({
  root: {
    padding: 5,
    color: "rgb(0, 188, 212)",
    fontWeight: "bold"
  },
  submit: {
    marginTop: 20,
    padding: 5,
    width: "100%",
    color: "rgb(0, 188, 212)",
    fontWeight: "bold",
    backgroundColor: "#111111"
  }
});

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #000000",
    background: "#212121",
    padding: 20,
    paddingTop: 0,
    paddingBottom: 0
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

const NavBarTopMenuNew = ({ input, onUpdate }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [values, setValues] = React.useState({
    "job name": "",
    "job date": "",
    customer: ""
  });

  const handleChange = name => event => {
    values[name] += event.target.value;
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = () => {
    const objectToArray = Object.entries(values);
    objectToArray.map(arr => {
      arr[0] = {
        name: arr[0],
        value: arr[1]
      };
      arr.pop();
    });

    const newJobObject = {
      objectId: "awrwdw",
      job_info: [_.flattenDeep(objectToArray)],
      tool_list: []
    };

    input.splice(input.length - 1, 0, newJobObject);

    onUpdate(input);
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Button className={buttonStyle().root} onClick={handleClick}>
        New Job
      </Button>
      <StyledMenu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div>
          <StyledTextField
            label="job name"
            value={values["job name"]}
            onChange={handleChange("job name")}
          />
        </div>
        <div>
          <StyledTextField
            label="job date"
            value={values["job date"]}
            onChange={handleChange("job date")}
          />
        </div>
        <div>
          <StyledTextField
            label="customer name"
            value={values["customer"]}
            onChange={handleChange("customer")}
          />
        </div>
        <Button className={buttonStyle().submit} onClick={handleSubmit}>
          Submit
        </Button>
      </StyledMenu>
    </React.Fragment>
  );
};

export default NavBarTopMenuNew;
