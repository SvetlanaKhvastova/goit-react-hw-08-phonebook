import { Redirect, Route } from "react-router";
import { connect } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";

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
        !isAuthenticated ? <Redirect to="/login" /> : <Component {...props} />
      }
    />
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(PrivateRoute);
