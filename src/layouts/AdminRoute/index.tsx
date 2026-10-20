import React from "react";
import { Route, Redirect, RouteComponentProps, RouteProps } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { notification } from "antd";

import { ROUTER } from "../../constants/router";
import AdminLayout from "../AdminLayout";
import type { AuthStorage } from "../../types";

type AdminRouteProps = RouteProps & {
  component: React.ComponentType<RouteComponentProps>;
};

const AdminRoute = ({ component: Component, ...props }: AdminRouteProps) => {
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
          <AdminLayout>
            <div style={{ minHeight: "40vh" }} />
          </AdminLayout>
        )}
      />
    );
  }

  if (!userInfo.data?.id) {
    return <Redirect to={ROUTER.LOGIN} />;
  }

  if (userInfo.data.role !== "admin") {
    notification.warning({
      message: "Không có quyền truy cập",
      description: "Chỉ tài khoản quản trị viên mới vào được khu vực này.",
    });
    return <Redirect to={ROUTER.USER.PROFILE} />;
  }

  return (
    <Route
      {...props}
      render={(routeProps) => (
        <AdminLayout>
          <Component {...routeProps} />
        </AdminLayout>
      )}
    />
  );
};

export default AdminRoute;
