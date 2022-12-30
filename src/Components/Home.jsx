import React, { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import { UserContext } from "../utils/CreateContext";

const customId = "custom-id-yes";

const Home = () => {
  let { user, setUser } = useContext(UserContext);

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
      {user ? (
        <>
          <h1>Welcome {user.name}</h1>
          <br />
          <h2>Role : {user.role}</h2>
        </>
      ) : (
        <>
          <h1>Guest</h1>
        </>
      )}
      <ToastContainer />
    </>
  );
};

export default Home;
