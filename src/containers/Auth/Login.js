//init
import React, { useState } from "react";
import axios from "axios";
import InputWithLabel from "../../components/inputWithLabel";
import { Typography, Divider, IconButton } from "@material-ui/core";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { UpdateStore } from "../../StoreContext";

// makeStyles from material UI to add custom styling
const useStyles = makeStyles({
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

// Login component
const Login = () => {
  // intializing useStyle object
  const classes = useStyles();
  // getting update store function from update store context
  const updateStore = UpdateStore();

  // All the required states for registeration
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // add more states here

  // on form submit Function
  const onSubmit = (e) => {
    // prevent default so page doesn't reload
    e.preventDefault();
    // data object to send to login req
    const data = {
      email,
      password,
    };
    // Using axios to post data on server and handling the response
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/user/login`, data)
      .then((response) => {
        updateStore({ loggedIn: true, user: response.data });
      })
      .catch((data) => console.log("error:", data));
  };

  // on facbook button click
  const onFaceookClick = (e) => {
    // Using axios to connect with facebook
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/user/auth/facebook`)
      .then((data) => console.log("success: ", data))
      .catch((data) => console.log("error:", data));
  };

  // on google button click
  const onGoogleClick = (e) => {
    // Using axios to connect with google
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/user/auth/google`)
      .then((data) => console.log("success: ", data))
      .catch((data) => console.log("error:", data));
  };

  // returning jsx
  return (
    // main conatiner
    <div className={classes.container}>
      {/* Login form */}
      <form onSubmit={onSubmit} className={classes.form}>
        {/* main Heading */}
        <Typography variant="h2" gutterBottom>
          Login
        </Typography>
        {/* All fields */}
        <InputWithLabel
          value={email}
          label="Email"
          required={true}
          name="email"
          type="email"
          handleChange={(e) => setEmail(e.target.value)}
        />
        <InputWithLabel
          value={password}
          label="Password"
          required={true}
          name="password"
          type="password"
          handleChange={(e) => setPassword(e.target.value)}
        />
        {/* add new fields here */}
        {/* login button */}
        <button type="submit" className={classes.btn}>
          Login
        </button>
        <div>
          {/* Divider */}
          <Divider
            flexItem
            textAlign="left"
            style={{
              backgroundColor: "grey",
              height: 0.5,
              opacity: 0.4,
              marginTop: 15,
            }}
          />
          {/* facebook icon button */}
          <IconButton onClick={onFaceookClick}>
            <FacebookIcon style={{ color: "grey" }} fontSize="large" />
          </IconButton>
          {/* google icon button */}
          <IconButton onClick={onGoogleClick}>
            <GoogleIcon style={{ color: "grey" }} fontSize="large" />
          </IconButton>
        </div>
      </form>
    </div>
  );
};

// export
export default Login;
