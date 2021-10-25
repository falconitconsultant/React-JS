// init
import * as React from "react";
import { Box, Button, Typography, Modal } from "@material-ui/core";
import InputWithLabel from "./inputWithLabel";
import { onSubmit } from "../utils/onForgetPassSubmit";

// style for Box component
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  color: "#d10248",
  p: 4,
};

// exporting forget password mmodal
export default function ForgetPasswordModal({
  open,
  setOpen,
  email,
  setEmail,
}) {
  // function to close modal
  const handleClose = () => setOpen(false);
  // returning modal
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* modal box */}
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            gutterBottom
          >
            Reset Your Password
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} gutterBottom>
            Enter your email to reset your password
          </Typography>
          {/* email field */}
          <InputWithLabel
            value={email}
            required={true}
            name="email"
            type="email"
            handleChange={(e) => setEmail(e.target.value)}
          />
          {/* submit button */}
          <div style={{ textAlign: "right" }}>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#d10248",
                color: "white",
              }}
              onClick={() => {
                setEmail("");
                onSubmit(email);
              }}
              disabled={!email}
            >
              Submit
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
