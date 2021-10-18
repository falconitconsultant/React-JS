// init
import api from "../api";

// exporting facebook onClick function
export const onFaceookClick = () => {
  // Using global api to connect with facebook
  api("get", "/user/auth/facebook")
    .then((data) => console.log("success: ", data))
    .catch((data) => console.log("error:", data));
};
