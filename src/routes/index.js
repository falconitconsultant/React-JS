// Init
import React from "react";
import { Switch } from "react-router-dom";
import { Store } from "../StoreContext";
import LandingPage from "../containers/LandingPage";

// Routes
import Auth from "../containers/Auth/Main.js";

const index = () => {
  // getting store out of store context
  const store = Store();
  return (
    <Switch>
      {/* checking if user is logged in or not and redirecting accordingly */}
      {store.loggedIn ? <LandingPage /> : <Auth />}
    </Switch>
  );
};

export default index;
