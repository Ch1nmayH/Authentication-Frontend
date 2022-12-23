import { Link } from "react-router-dom";
import "../styles/NavBar.css";
const NavBar = () => {
  return (
    <>
      <div className="nav-container">
        <header>
          <nav>
            <ul className="nav">
              <li className="nav-items">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
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
              <li className="nav-items">
                <Link className="nav-link" to="Logout">
                  Logout
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export default NavBar;
