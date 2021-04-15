import { Component, Suspense } from "react";
import { Redirect, Switch } from "react-router";
import { connect } from "react-redux";

import "./App.css";

import routesPage from "./routes";
import Header from "./components/Header/Header";
import authOperations from "./redux/auth/auth-operations";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PrivateRoute from "./components/UserMenu/PrivateRoute";
import PublicRoute from "./components/UserMenu/PublicRoute";

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <Header />
        <Suspense fallback="Loading...">
          <Switch>
            {routesPage.map((route) => {
              return routesPage.private ? (
                <PrivateRoute key={routesPage.id} {...route} />
              ) : (
                <PublicRoute key={routesPage.id} restricted {...route} />
              );
            })}
            <Redirect to={"/home"} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
