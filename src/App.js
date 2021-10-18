// Init
import React, { useEffect } from "react";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UpdateStore } from "./StoreContext";
import api from "./api";
// Files
import Index from "./routes/index";
import "./styles/index.css";

// Component
function App() {
  // getting update store function from update store context
  const updateStore = UpdateStore();

  useEffect(() => {
    checkLogin();
  }, []);

  // checking if user is already logged in
  const checkLogin = async () => {
    const result = await api("get", "/user/loggedin");
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
