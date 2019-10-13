import { makeStyles } from "@material-ui/styles";

const expnStyles = makeStyles({
  expnRoot: {
    width: "100%",
    backgroundColor: "#263238",
    marginBottom: 5,
    margin: "dense",
    expanded: { margin: "dense" }
  },
  expnSum: {
    backgroundColor: "#263238",
    borderBottom: "1px solid #000000",
    color: "rgba(255, 255, 255, 1)",
    minHeight: 30,
    focused: {
      backgroundColor: "#424242"
    }
  },
  expnDetailsJob: {
    flexFlow: "wrap",
    backgroundColor: "#111111",
    padding: 20,
    minHeight: 40
  },
  expnDetailsTool: {
    flexFlow: "wrap",
    backgroundColor: "#313131",
    padding: 20,
    minHeight: 40
  },
  expnActionsJob: {
    backgroundColor: "#111111",
    padding: 5
  },
  expnActionsTool: {
    backgroundColor: "#313131",
    padding: 5
  },
  expnActionsButton: {
    size: "small",
    color: "#F3F3F3"
  }
});

export default expnStyles;
