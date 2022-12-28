import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/style.css";
import { toast, ToastContainer } from "react-toastify";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    if (Cookies.get("token")) {
      navigate("/");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: "http://localhost:8000/api/login",
      data: {
        email,
        password,
      },
    })
      .then((response) => {
        console.log(response);
        Cookies.set("token", response.data.token, { expires: 7 });
        toast.success(response.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
        navigate("/");
      })
      .catch((e) => {
        console.log(e.response.data);

        let custId = e.response.data;

        toast.error(e.response.data, {
          toastId: custId,
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };
  return (
    <>
      <div className="form-container">
        <form action="" onSubmit={handleSubmit}>
          <h2>Login Form</h2>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            name="email"
          />
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="text"
            name="password"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
