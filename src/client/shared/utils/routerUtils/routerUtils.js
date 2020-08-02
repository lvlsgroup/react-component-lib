import React from 'react';
import { Route } from 'react-router-dom';

export function routeWithSubRoutes(route, index) {
  return (
    <Route
      key={`route-${index}`}
      exact={route.exact || false}
      status={route.status || false}
      path={route.path}
      render={(props) => {
        if (props.staticContext) {
          props.staticContext.status = route.status;
        }
        // remove component property since we dont need it in front-end.
        const { Component, ...routeProperties } = route;

        // Pass the sub-routes down to keep nesting
        return (
          <Component {...props} routes={route.routes} route={routeProperties} />
        );
      }}
    />
  );
}

export function preloadRoutes(routes, excludedRoutes) {
  routes.forEach((route) => {
    if (!excludedRoutes || !excludedRoutes?.includes(route.componentPath)) {
      route.Component.preload();
    }
  });
}
