// init
import React from "react";
import api from "../api";
import { UpdateStore } from "../StoreContext";
// lading page
const LandingPage = () => {
  const updateStore = UpdateStore();
  //   logout function
  const onLogout = () => {
    api("delete", "/user/logout").then(() => {
      updateStore({ loggedIn: false, user: {} });
    });
  };
  //   returning jsx
  return (
    <>
      <h2>Welcome user!</h2>
      <button onClick={onLogout}>Logout</button>
    </>
  );
};

// export
export default LandingPage;
