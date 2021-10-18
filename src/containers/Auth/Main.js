// Init
import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { UseStyles } from "../../styles/main";
// Routes
import Login from "./Login";
import Register from "./Register";

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
      {currentPage === "login" ? (
        <Login />
      ) : (
        <Register setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
};

export default Main;
