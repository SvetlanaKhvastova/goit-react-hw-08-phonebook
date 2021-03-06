import { Redirect, Route } from "react-router";
import { connect } from "react-redux";
import { authSelectors } from "../../redux/auth";

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => {
  console.log(isAuthenticated);
  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(PrivateRoute);
