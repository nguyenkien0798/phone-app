import React from "react";
import { Route, Redirect, RouteComponentProps, RouteProps } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

import { ROUTER } from "../../constants/router";

type LoginRouteProps = RouteProps & {
  component: React.ComponentType<RouteComponentProps>;
};

const LoginRoute = ({ component: Component, ...props }: LoginRouteProps) => {
  const { userInfo } = useAppSelector((state) => state.authReducer);

  // Chỉ redirect khi đã login thật (có user trong Redux).
  // Tránh localStorage còn token cũ → vào /login bị đá về Home.
  if (userInfo.data?.id) {
    return <Redirect to={ROUTER.USER.HOME} />;
  }

  return (
    <Route
      {...props}
      render={(routeProps) => <Component {...routeProps} />}
    />
  );
};

export default LoginRoute;
