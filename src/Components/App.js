import { useContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "../utils/CreateContext";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import NavBar from "./NavBar";
import Members from "./Members";

const App = () => {
  let [user, setUser] = useState(null);

  useEffect(() => {
    let getUser = JSON.parse(localStorage.getItem("user-info"));
    if (getUser) {
      setUser(getUser);
    } else {
      setUser(null);
    }
  }, []);

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signup" element={<Home />} />
          <Route path="/members" element={<Members />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
};

export default App;
