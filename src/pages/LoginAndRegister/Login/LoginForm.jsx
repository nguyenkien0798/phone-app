import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Button } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { ROUTER } from "../../../constants/router";
import { loginAction } from "../../../redux/slices/auth.slice";
import * as S from "../styles";

const schema = yup.object({
  email: yup
    .string()
    .transform((value) => (typeof value === "string" ? value.trim() : value))
    .required("Bạn chưa nhập email")
    .email("Email không đúng định dạng"),
  password: yup
    .string()
    .required("Bạn chưa nhập mật khẩu")
    .min(6, "Mật khẩu phải từ 6 đến 14 ký tự")
    .max(14, "Mật khẩu phải từ 6 đến 14 ký tự"),
});

const LoginFormPage = () => {
  const history = useHistory();
  const { responseAction } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  const {
    control,
    setError,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (responseAction.login.error && !responseAction.login.loading) {
      setError("password", {
        type: "server",
        message: responseAction.login.error,
      });
    }
  }, [responseAction.login, setError]);

  const onSubmit = (values) => {
    clearErrors();
    dispatch(
      loginAction({
        data: {
          email: values.email.trim(),
          password: values.password,
        },
        callback: {
          redirectHome: () => history.push(ROUTER.USER.HOME),
          // Chưa có trang admin — tạm về Home
          redirectDashboard: () => history.push(ROUTER.USER.HOME),
        },
      })
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <S.Field>
        <label htmlFor="login-email">Địa chỉ email</label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              id="login-email"
              size="large"
              type="email"
              autoComplete="email"
              prefix={<MailOutlined />}
              placeholder="you@example.com"
              status={errors.email ? "error" : ""}
              onChange={(e) => {
                field.onChange(e);
                if (errors.password?.type === "server") {
                  clearErrors("password");
                }
              }}
            />
          )}
        />
        {errors.email && <S.FieldError>{errors.email.message}</S.FieldError>}
      </S.Field>

      <S.Field>
        <label htmlFor="login-password">Mật khẩu</label>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input.Password
              {...field}
              id="login-password"
              size="large"
              autoComplete="current-password"
              prefix={<LockOutlined />}
              placeholder="Nhập mật khẩu của bạn"
              status={errors.password ? "error" : ""}
              onChange={(e) => {
                field.onChange(e);
                if (errors.password?.type === "server") {
                  clearErrors("password");
                }
              }}
            />
          )}
        />
        {errors.password && <S.FieldError>{errors.password.message}</S.FieldError>}
      </S.Field>

      <Button
        type="primary"
        htmlType="submit"
        block
        loading={responseAction.login.loading}
      >
        Đăng nhập
      </Button>
    </form>
  );
};

export default LoginFormPage;
