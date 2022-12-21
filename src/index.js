import React from "react";
import ReactDOM from "react-dom/client";

import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Register />
    <Login />
  </React.StrictMode>
);