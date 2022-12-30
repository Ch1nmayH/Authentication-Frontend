import React, { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import { UserContext } from "../utils/CreateContext";
import "../styles/style.css";

const Home = () => {
  let { user, setUser } = useContext(UserContext);

  const notify = () => {
    user
      ? toast(`Hello ${user.name}, Your role : ${user.role}`, {
          toastId: user.name,
          position: toast.POSITION.TOP_CENTER,
        })
      : toast("Hello Guest User", {
          toastId: "Guest",
        });
  };
  return (
    <>
      <div className="display-details">
        <button onClick={notify}>Click here to get your name and role</button>
      </div>

      <ToastContainer />
    </>
  );
};

export default Home;
