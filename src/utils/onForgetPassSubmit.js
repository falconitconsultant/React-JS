// init
import api from "../api";
import { toast } from "react-toastify";

// exportin onSubmit function
export const onSubmit = (email) => {
  // data object to send to login req
  const data = {
    email,
  };
  // Using global api to post data on server and handling the response
  api("post", "/user/forgetpassword", data).then((response) => {
    if (response.data) {
      toast.success(response.data.msg);
    }
  });
};
