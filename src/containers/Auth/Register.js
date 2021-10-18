// init
import React, { useState } from "react";
import InputWithLabel from "../../components/inputWithLabel";
import { Grid, Typography, Divider, IconButton } from "@material-ui/core";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { useHistory } from "react-router-dom";
import { onFaceookClick } from "../../utils/onFacebookClick";
import { onGoogleClick } from "../../utils/onGoogleClick";
import { onSubmit } from "../../utils/onRegisterSubmit";
import { useStyles } from "../../styles/register";

// Register component
const Register = ({ setCurrentPage }) => {
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

  // returning jsx
  return (
    // main conatiner
    <div className={classes.container}>
      {/* Sign up form */}
      <form
        onSubmit={(e) =>
          onSubmit(
            e,
            firstname,
            lastname,
            email,
            password,
            confirmPassword,
            phone,
            address,
            description,
            picture,
            setCurrentPage
          )
        }
        className={classes.form}
      >
        {/* main Heading */}
        <Typography variant="h2" gutterBottom>
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
        {/* register button */}
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
