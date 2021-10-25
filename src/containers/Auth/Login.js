//init
import React, { useState } from "react";
import InputWithLabel from "../../components/inputWithLabel";
import { Typography, Divider, IconButton } from "@material-ui/core";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { UpdateStore } from "../../StoreContext";
import { onSubmit } from "../../utils/onLoginSubmit";
import { onFaceookClick } from "../../utils/onFacebookClick";
import { onGoogleClick } from "../../utils/onGoogleClick";
import { useStyles } from "../../styles/login";
import ForgetPasswordModal from "../../components/ForgetPasswordModal";
// Login component
const Login = () => {
  // intializing useStyle object
  const classes = useStyles();
  // getting update store function from update store context
  const updateStore = UpdateStore();

  // All the required states for registeration
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [forgetPassEmail, setForgetPassEmail] = useState("");
  // add more states here

  // returning jsx
  return (
    // main conatiner
    <div className={classes.container}>
      {/* Login form */}
      <form
        onSubmit={(e) => onSubmit(e, email, password, updateStore)}
        className={classes.form}
      >
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
        {/* forget password open model */}
        <div style={{ width: "100%", textAlign: "left" }}>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => setOpenModal(true)}
          >
            Forget Password?
          </span>
        </div>
        <br />
        {/* forget password modal */}
        <ForgetPasswordModal
          open={openModal}
          setOpen={setOpenModal}
          email={forgetPassEmail}
          setEmail={setForgetPassEmail}
        />
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
