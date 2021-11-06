import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Navbar, Register, Login } from "./components";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div id="App">
      <h1>Hello, World</h1>
      <Navbar 
      setIsLoggedIn={setIsLoggedIn}
      isLoggedIn={isLoggedIn}
      />
      <Route path="/register">
        <Register
          isLoggedIn={isLoggedIn}
          setIsLoading={setIsLoading}
          setIsLoggedIn={setIsLoggedIn}
        />
      </Route>
      <Route path="/login">
        <Login
          setIsLoading={setIsLoading}
          setIsLoggedIn={setIsLoggedIn}
          isLoggedIn={isLoggedIn}
        />
      </Route>
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
