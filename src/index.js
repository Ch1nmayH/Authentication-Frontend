import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logout from "./Components/Logout";

import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Components/home";
import NavBar from "./Components/NavBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
