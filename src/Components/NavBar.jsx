import Cookies from "js-cookie";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "../styles/NavBar.css";
import { UserContext } from "../utils/CreateContext";

const NavBar = () => {
  let { user, setUser } = useContext(UserContext);
  // let userExist = localStorage.getItem("user-info");
  // if (userExist) {
  //   setUser(JSON.parse(userExist));
  // }
  let navigate = useNavigate();
  const logoutFunction = () => {
    try {
      Cookies.set("token", "", { expires: 0.0000000000000001 });

      toast.success("Successfully Logged out", {
        toastId: "logout",
        position: toast.POSITION.TOP_CENTER,
      });

      <ToastContainer />;
      localStorage.removeItem("user-info");
      setTimeout(() => {
        navigate("/login");
        setUser(null);
      }, 1000);
    } catch (error) {
      console.log(error);
      toast.error("Error Occured, try again.", {
        toastId: "logoutError",
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  return (
    <>
      <div className="nav-container">
        <h2>Logo</h2>
        <ul className="nav-menu">
          <li className="nav-items">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          {!Cookies.get("token") && !user ? (
            <>
              <li className="nav-items">
                <Link className="nav-link" to="login">
                  Login
                </Link>
              </li>
              <li className="nav-items">
                <Link className="nav-link" to="register">
                  Register
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-items">
                <Link className="nav-link" to="members">
                  Members
                </Link>
              </li>
              <li className="nav-items">
                <a className="nav-link" onClick={logoutFunction}>
                  Logout
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
