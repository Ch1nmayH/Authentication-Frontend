import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import "../styles/NavBar.css";
const NavBar = () => {
  let navigate = useNavigate();
  const logoutFunction = () => {
    Cookies.set("token", "", { expires: 0.0000000000000001 });
    navigate("/login");
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
          {!Cookies.get("token") ? (
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
