import React from "react";
import { Route, RouteComponentProps, RouteProps } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";

type DefaultRouteProps = RouteProps & {
  component: React.ComponentType<RouteComponentProps>;
};

const DefaultRoute = ({ component: Component, ...props }: DefaultRouteProps) => {
  return (
    <Route
      {...props}
      render={(routeProps) => (
        <>
          <Header />
          <Component {...routeProps} />
          <Footer />
        </>
      )}
    />
  );
};

export default DefaultRoute;
