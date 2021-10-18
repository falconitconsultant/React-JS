// init
import { makeStyles } from "@material-ui/core/styles";

// makeStyles from material UI to add custom styling
export const useStyles = makeStyles({
  container: {
    width: "50%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    color: "#d10248",
  },
  form: {
    marginTop: "auto",
    marginBottom: "auto",
    width: "75%",
    textAlign: "center",
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
    "&:hover": {
      backgroundColor: "transparent",
      color: "#d10248",
    },
    // add more classes here
  },
});
