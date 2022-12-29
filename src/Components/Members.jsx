import { prettyFormat } from "@testing-library/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { UserContext } from "../utils/CreateContext";
import JSONPretty from "react-json-pretty";
import Cookies from "js-cookie";

const customId = "custom-id-yes";

const Members = () => {
  let navigate = useNavigate();
  axios.defaults.withCredentials = true;
  let [users, setUsers] = useState(null);

  useEffect(() => {
    let response = async () => {
      await axios
        .get("http://localhost:8000/api/members")
        .then((response) => {
          setUsers(response.data);
        })
        .catch((e) => {
          setTimeout(() => {
            toast.error("You are not Authorised to view that page", {
              toastId: "notAuth",
              position: toast.POSITION.TOP_CENTER,
            });
          }, 9);

          navigate("/");
        });
    };

    response();
  }, []);

  let theme = {
    main: "line-height:1.3;color:#66d9ef;background:#272822;overflow:auto;",
    error: "line-height:1.3;color:#66d9ef;background:#272822;overflow:auto;",
    key: "color:#f92672;",
    string: "color:#fd971f;",
    value: "color:#a6e22e;",
    boolean: "color:#ac81fe;",
  };

  return (
    <>
      <div>
        <JSONPretty
          themeClassName="1337"
          theme={theme}
          data={users}
        ></JSONPretty>
      </div>
      <ToastContainer />
    </>
  );
};

export default Members;
