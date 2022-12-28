import axios from "axios";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "../styles/style.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:8000/api/signup",
      data: {
        name,
        email,
        password,
      },
    })
      .then((response) => {
        // console.log(response.data);
        toast.success(response.data, {
          position: toast.POSITION.TOP_CENTER,
        });
        toast.success(response.data.verification, {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((e) => {
        // console.log(e);
        console.log(e.response.data);
        let custId = e.response.data;
        return toast.error(e.response.data, {
          toastId: custId,
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };
  return (
    <>
      <div className="form-container">
        <form action="" onSubmit={handleSubmit}>
          <h2>Register Form</h2>
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            name="name"
          />
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

export default Register;
