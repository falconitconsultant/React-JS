//init
import React, { useState } from "react";
import axios from "axios";
import InputWithLabel from "../../components/inputWithLabel";
import { Grid, Typography, Divider, IconButton } from "@material-ui/core";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

// makeStyles from material UI to add custom styling
const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    color: "#d10248",
  },
  form: {
    marginTop: "auto",
    marginBottom: "auto",
    width: "40%",
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

// Register component
const Register = () => {
  // intializing useStyle object
  const classes = useStyles();

  // All the required states for registeration
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState([]);
  // add more states here

  // on form submit Function
  const onSubmit = (e) => {
    // prevent default so page doesn't reload
    e.preventDefault();
    // creating form data and appending states to it
    const formdata = new FormData();
    formdata.append("firstname", firstname);
    formdata.append("lastname", lastname);
    formdata.append("email", email);
    formdata.append("password", password);
    formdata.append("phone", phone);
    formdata.append("address", address);
    formdata.append("description", description);
    formdata.append("picture", picture, picture.name);
    // Using axios to post data on server and handling the response
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/user/register`, formdata)
      .then((data) => console.log("success: ", data))
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
      {/* Sign up form */}
      <form onSubmit={onSubmit} className={classes.form}>
        {/* main Heading */}
        <Typography variant="h2" className={classes.formHeading} gutterBottom>
          Register
        </Typography>
        {/* All fields */}
        <Grid container spacing={2}>
          <Grid item zeroMinWidth xs>
            <InputWithLabel
              value={firstname}
              label="Firstname"
              required={true}
              name="firstName"
              type="text"
              handleChange={(e) => setFirstname(e.target.value)}
              // error={errors["firstName"] ? true : false}
              // errorMessage={errors["firstName"]}
            />
          </Grid>
          <Grid item zeroMinWidth xs>
            <InputWithLabel
              value={lastname}
              label="Lastname"
              required={true}
              name="lastName"
              type="text"
              handleChange={(e) => setLastname(e.target.value)}
              // error={errors["lastName"] ? true : false}
              // errorMessage={errors["lastName"]}
            />
          </Grid>
        </Grid>
        <InputWithLabel
          value={email}
          label="Email"
          required={true}
          name="email"
          type="email"
          handleChange={(e) => setEmail(e.target.value)}
        />
        <Grid container spacing={2}>
          <Grid item zeroMinWidth xs>
            <InputWithLabel
              value={password}
              label="Password"
              required={true}
              name="password"
              type="password"
              handleChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item zeroMinWidth xs>
            <InputWithLabel
              value={confirmPassword}
              label="Confirm Password"
              required={true}
              name="confirmPassword"
              type="password"
              handleChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Grid>
        </Grid>
        <InputWithLabel
          value={phone}
          label="Phone"
          required={true}
          name="phone"
          type="number"
          handleChange={(e) => setPhone(e.target.value)}
        />
        <InputWithLabel
          value={address}
          label="Address"
          required={true}
          name="address"
          type="text"
          handleChange={(e) => setAddress(e.target.value)}
        />
        <InputWithLabel
          value={description}
          label="Description"
          required={true}
          name="description"
          type="text"
          handleChange={(e) => setDescription(e.target.value)}
        />
        <InputWithLabel
          label="Picture"
          required={true}
          name="Picture"
          type="file"
          handleChange={(e) => setPicture(e.target.files[0])}
        />
        {/* add new fields here */}
        {/* Login page link */}
        <div style={{ textAlign: "left", marginLeft: 10, marginTop: -15 }}>
          <Link to="/" style={{ textDecoration: "none", color: "#d10248" }}>
            Click here to login
          </Link>
        </div>
        {/* regiter button */}
        <button type="submit" className={classes.btn}>
          Register
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
export default Register;
