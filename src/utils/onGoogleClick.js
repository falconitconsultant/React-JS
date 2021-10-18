// init
import api from "../api";

// exporting on google button click
export const onGoogleClick = (e) => {
  // Using global api to connect with google
  api("get", "/user/auth/google")
    .then((data) => console.log("success: ", data))
    .catch((data) => console.log("error:", data));
};
