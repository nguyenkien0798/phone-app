import React from "react";
import { Route } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";

const DefaultRoute = ({ component: Component, ...props }) => {
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
