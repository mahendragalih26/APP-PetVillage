import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Provider } from "react-redux";

import store from "./Publics/Redux/store";

import SignIn from "./Pages/AuthPages/SignIn";
import SignUp from "./Pages/AuthPages/SignUp";
import Home from "./Pages/MainPages/Home";
import Detail from "./Pages/MainPages/Detail";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={({ history }) => {
                return (
                  <Fragment>
                    {localStorage.getItem("token") !== null ? (
                      <Home history={history} />
                    ) : (
                      <SignIn history={history} />
                    )}
                  </Fragment>
                );
              }}
            />
            <Route
              path="/login"
              exact
              render={({ history }) => {
                return (
                  <Fragment>
                    {localStorage.getItem("token") !== null ? (
                      <Home history={history} />
                    ) : (
                      <SignIn history={history} />
                    )}
                  </Fragment>
                );
              }}
            />
            <Route
              path="/register"
              exact
              render={({ history }) => {
                return (
                  <Fragment>
                    {localStorage.getItem("token") !== null ? (
                      <Home history={history} />
                    ) : (
                      <SignUp history={history} />
                    )}
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
            <Route
              path="/detail/:id"
              exact
              render={props => {
                return (
                  <Fragment>
                    {localStorage.getItem("token") !== null ? (
                      <Detail
                        history={props.history}
                        id_animal={props.match.params.id}
                      />
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
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
