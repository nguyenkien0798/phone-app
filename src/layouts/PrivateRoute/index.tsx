import React from "react";
import { Route, Redirect, RouteComponentProps, RouteProps } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

import { ROUTER } from "../../constants/router";
import Header from "../Header";
import Footer from "../Footer";
import type { AuthStorage } from "../../types";

type PrivateRouteProps = RouteProps & {
  component: React.ComponentType<RouteComponentProps>;
};

const PrivateRoute = ({ component: Component, ...props }: PrivateRouteProps) => {
  const { userInfo } = useAppSelector((state) => state.authReducer);

  let hasToken = false;
  try {
    const stored = JSON.parse(localStorage.getItem("userInfo") || "null") as AuthStorage | null;
    hasToken = Boolean(stored?.accessToken);
  } catch (error) {
    hasToken = false;
  }

  if (userInfo.loading || (hasToken && !userInfo.data?.id)) {
    return (
      <Route
        {...props}
        render={() => (
          <>
            <Header />
            <div style={{ minHeight: "40vh" }} />
            <Footer />
          </>
        )}
      />
    );
  }

  if (!userInfo.data?.id) {
    return <Redirect to={ROUTER.LOGIN} />;
  }

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

export default PrivateRoute;
