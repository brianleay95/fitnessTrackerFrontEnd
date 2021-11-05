import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { registerUser } from "../api";
import { storeToken } from "../auth";

const Register = ({ setIsLoading, isLoggedIn, setIsLoggedIn }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [registered, setRegistered] = useState(false);

  if (isLoggedIn && !registered)
    return (
      <div className="register-main-container">
        You're stilled logged in! Log out before registering as a different
        user.
      </div>
    );
  else if (isLoggedIn && registered)
    return (
      <div className="register-main-container">
        Account registered!
      </div>
    );

  return (
    <div className="register-main-container">
      <form
        id="register"
        onSubmit={async (event) => {
          event.preventDefault();
          setIsLoading(true);

          try {
            const results = await registerUser(username, password);
            //console.log(results);
            if (results.user !== undefined) {
              storeToken(results.token);
              setIsLoggedIn(true);
              setRegistered(true);
            } else console.log("register failed: ", results.error.message);
            setUserName("");
            setPassword("");
          } catch (err) {
            console.log("Error on RegisterUser");
            console.log(err);
          } finally {
            setIsLoading(false);
          }
        }}
      >
        <fieldset className="auth-component-input">
          <label htmlFor="username">User Name</label>
          <input
            id="username"
            type="text"
            placeholder="enter username"
            value={username}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
        </fieldset>

        <fieldset className="auth-component-input">
          <label htmlFor="password">User Password</label>
          <input
            id="password"
            type="password"
            placeholder="enter password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </fieldset>
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
