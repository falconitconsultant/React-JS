// Init
import React, { useEffect } from "react";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UpdateStore } from "./StoreContext";
import axios from "axios";
// Files
import Index from "./routes/index";
import "./css/index.css";

// Component
function App() {
  // setting axios default with credential true to get lgged in user
  axios.defaults.withCredentials = true;
  // getting update store function from update store context
  const updateStore = UpdateStore();

  useEffect(() => {
    checkLogin();
  }, []);

  // checking if user is already logged in
  const checkLogin = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/user/loggedin`
    );
    // settin user value in store if logged in
    if (!result.data.error) {
      updateStore({ loggedIn: true, user: result.data.user });
    }
  };

  return (
    <div className="App">
      {/* toastify Container for Notification */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
        transition={Flip}
      />

      {/* Routes */}
      <Index />
    </div>
  );
}

// Export
export default App;
