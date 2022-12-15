import axios from "axios";
import { useState } from "react";
import "./Register.css";

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
        console.log(response);
      })
      .catch((e) => {
        console.log(e.message);
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
    </>
  );
};

export default Register;
