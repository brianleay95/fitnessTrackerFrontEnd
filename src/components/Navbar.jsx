import React, { userState, useEffect } from "react";
import { clearCurrentUser, clearCurrentToken } from "../auth";

import { NavLink } from "react-router-dom";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <div className="navbar">
      <NavLink to="/Home">Home</NavLink>
      {isLoggedIn ? <NavLink to="/routines"> Routines</NavLink> : null}
      {isLoggedIn ? <NavLink to="/myRoutines"> My Routines</NavLink> : null}
      <NavLink to="/Activities">Activities</NavLink>
      {isLoggedIn ? (
        <NavLink to="/logout">Logout</NavLink>
      ) : (
        <NavLink to="/login"> Login/Register</NavLink>
      )}
      <button
        onClick={() => {
          clearCurrentToken();
          clearCurrentUser();
          setIsLoggedIn(false);
        }}
      >
        Logout{" "}
      </button>
    </div>
  );
};

export default Navbar;
