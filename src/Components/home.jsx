import React from "react";
import { toast, ToastContainer } from "react-toastify";

const customId = "custom-id-yes";

const Home = () => {
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
      <ToastContainer />
    </>
  );
};

export default Home;
