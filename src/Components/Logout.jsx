import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Logout = () => {
  if (Cookies.get("token")) {
    Cookies.remove("token");
    return <Navigate to="/login" />;
  } else {
    toast.error("You are not logged in, working on this :");
    return <Navigate to="/login" />;
  }

  <ToastContainer />;
};

export default Logout;
