import React from "react";
import { Redirect, Route } from "react-router";
import { connect } from "react-redux";
import { authSelectors } from "../../redux/auth";

const PublicRoute = ({
  component: Component,
  isAuthenticated,

  ...routeProps
}) => {
  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthenticated && routeProps.restricted ? (
          <Redirect to="/contacts" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(PublicRoute);
