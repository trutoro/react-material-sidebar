import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect, useRouteMatch } from "react-router";

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // passing the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

const Routes = ({ routes }) => {
  const match = useRouteMatch();
  let renderRoutes = routes.map((route, i) => (
    <RouteWithSubRoutes key={i} {...route} />
  ));

  return (
    <>
      <Switch>{renderRoutes}</Switch>
      <Route path={`${match.path}/`} exact={true}>
        <Redirect to={`${routes[0].path}`} />
      </Route>
    </>
  );
};

export default Routes;

Routes.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object),
};
