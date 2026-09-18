import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import { ROUTER } from "../../constants/router";

const LoginRoute = ({ component: Component, ...props }) => {
  const { userInfo } = useSelector((state) => state.authReducer);

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
