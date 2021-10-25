// Init
import axios from "axios";
import { toast } from "react-toastify";

const api = async (method = "get", uri, body) => {
  // Default setting for production
  axios.defaults.withCredentials = true;

  // API Call
  const url = process.env.REACT_APP_BASE_URL + uri;
  return new Promise((resolve, reject) => {
    axios[method](url, body)
      .then((res) => resolve(res))
      .catch((err) => {
        if (err?.response?.status === 403) {
          window.location = "/login";
        } else {
          toast.error(err?.response?.data ? err.response.data : err?.message);
          reject(err);
        }
      });
  });
};

// Export
export default api;
