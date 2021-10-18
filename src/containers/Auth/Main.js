// Init
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Routes
import Login from "./Login";
import Register from "./Register";

// makeStyles from material UI for styling
const UseStyles = makeStyles({
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
// Main component
const Main = () => {
  // intializing useStyle object
  const classes = UseStyles();
  // state to switch between pages
  const [currentPage, setCurrentPage] = useState("login");
  // returning JSX
  return (
    // Mian container
    <div className={classes.container}>
      {/* left container */}
      <div className={classes.left}>
        {/* Welcome text and login button */}
        <div className={classes.leftContent}>
          <Typography variant="h3" style={{ fontWeight: 900 }}>
            Welcome!
          </Typography>
          <button
            type="submit"
            className={classes.btn}
            onClick={() => {
              setCurrentPage(currentPage === "login" ? "register" : "login");
            }}
          >
            {currentPage === "login" ? "Register" : "Login"}
          </button>
        </div>
        {/* form on the right */}
      </div>
      {currentPage === "login" ? <Login /> : <Register />}
    </div>
  );
};

export default Main;
