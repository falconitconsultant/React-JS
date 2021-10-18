// init
import { toast } from "react-toastify";
import api from "../api";

// on form submit Function
export const onSubmit = (
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
) => {
  // prevent default so page doesn't reload
  e.preventDefault();
  if (confirmPassword !== password) {
    toast.error("Password and confirm password doesn't match!");
  } else {
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
    // Using global api to post data on server and handling the response
    api("post", "/user/register", formdata).then((response) => {
      response.data.user && toast.success("User succesfully created!");
      setCurrentPage("login");
    });
  }
};
