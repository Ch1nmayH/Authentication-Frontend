import React, { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import { UserContext } from "../utils/CreateContext";

const customId = "custom-id-yes";

const Home = () => {
  let { user } = useContext(UserContext);
  const notify = () => {
    toast("I cannot be duplicated!", {
      toastId: customId,
    });
  };
  return (
    <>
      <div>
        <button onClick={notify}>Notify</button>
      </div>
      <h1>{user ? user.name : "Guest"}</h1>
      <ToastContainer />
    </>
  );
};

export default Home;
