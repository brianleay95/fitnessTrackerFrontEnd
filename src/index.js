import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";

import {
Header,
} from "./components";

import{allActivities} from "./api"

import getToken from "./auth";
import Activities from "./components/Activities";

const App = () => {
  return (
    <div id="App">
      {/* <h1>Hello, World</h1> */}
      <Header />
      
      <Switch>
        <Route path="/Activities">
          <Activities
          allActivities={allActivities}
          />
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
)