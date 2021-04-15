import React, { useState } from "react";
import Button from "react-bootstrap/Button";

import { Login, SignUp } from "../../components";

export const AuthUser = (props) => {
  const [userStatus, setUserStatus] = useState("login");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "8vh",
      }}
    >
      {userStatus === "login" ? (
        <>
          <Login />
          <div style={{ paddingTop: "5vh" }}>
            New to Kwitter?
            <Button onClick={() => setUserStatus("signUp")}>Sign up</Button>
          </div>
        </>
      ) : (
        <>
          <SignUp />
          <div style={{ paddingTop: "5vh" }}>
            Already have an account?
            <Button onClick={() => setUserStatus("login")}>Login</Button>
          </div>
        </>
      )}
    </div>
  );
};
