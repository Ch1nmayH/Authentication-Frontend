import { prettyFormat } from "@testing-library/react";
import axios from "axios";
import React, { useContext, useState } from "react";
import { json } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { UserContext } from "../utils/CreateContext";
import JSONPretty from "react-json-pretty";

const customId = "custom-id-yes";

const Members = () => {
  let [users, setUsers] = useState(null);
  let response = async () => {
    await axios
      .get("http://localhost:8000/api/members")
      .then((response) => {
        // console.log(response.data);
        setUsers(response.data);
        // setUsers(data);
      })
      .catch((e) => console.log(e));
  };

  response();

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
        {/* <h1>{users ? JSON.stringify(users) : "No users found"}</h1> */}
        <JSONPretty
          themeClassName="1337"
          theme={theme}
          data={users}
        ></JSONPretty>
        {/* <h1>{users ? prettyFormat(users) : "No users found"}</h1> */}
      </div>
      <ToastContainer />
    </>
  );
};

export default Members;
