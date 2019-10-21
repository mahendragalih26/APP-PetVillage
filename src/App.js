import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Provider } from "react-redux";
import { Redirect } from "react-router-dom";

// import store from "./Publics/store";

import SignIn from "./Pages/AuthPages/SignIn";
import SignUp from "./Pages/AuthPages/SignUp";
import Home from "./Pages/MainPages/Home";

function App() {
  return (
    <div>
      {/* <Provider store={store}> */}
      <Router>
        {/* Route */}
        <Route
          path="/"
          exact
          render={props => {
            return (
              <Fragment>
                <Home />
                {/* <SignIn /> */}
              </Fragment>
            );
          }}
        />
        <Route
          path="/login"
          exact
          render={props => {
            return (
              <Fragment>
                <SignIn />
                {/* <SignIn /> */}
              </Fragment>
            );
          }}
        />
        <Route
          path="/register"
          exact
          render={props => {
            return (
              <Fragment>
                <SignUp />
              </Fragment>
            );
          }}
        />
        <Route
          path="/home"
          exact
          render={props => {
            return (
              <Fragment>
                {localStorage.getItem("token") !== null ? (
                  <Home />
                ) : (
                  <Redirect
                    to={{
                      pathname: "/"
                    }}
                  />
                )}
              </Fragment>
            );
          }}
        />
      </Router>
      {/* </Provider> */}
    </div>
  );
}

export default App;
