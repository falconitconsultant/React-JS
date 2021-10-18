// init
import { makeStyles } from "@material-ui/core/styles";

// makeStyles from material UI for styling
export const UseStyles = makeStyles({
  container: {
    width: "100vw",
    display: "flex",
  },
  left: {
    width: "50%",
    height: "100vh",
    backgroundColor: "#d10248",
    color: "white",
    display: "grid",
    placeItems: "center",
  },
  leftContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  btn: {
    width: "200px",
    color: "white",
    cursor: "pointer",
    backgroundColor: "#d10248",
    border: "2px solid #d10248",
    padding: "15px",
    borderRadius: "30px",
    transitionProperty: "#d10248 #d10248",
    transitionDuration: "0.5s",
    marginTop: "10px",
    border: "2px solid white",
    "&:hover": {
      backgroundColor: "white",
      color: "#d10248",
    },
    // add more classes here
  },
});
