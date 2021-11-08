import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";

import { Home, Navbar, Register, Login, Activities } from "./components";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div id="App">
      <h1>Fitness World</h1>
      <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      <Switch>
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

        <Route path="/Activities">
          <Activities isLoggedIn={isLoggedIn} />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
