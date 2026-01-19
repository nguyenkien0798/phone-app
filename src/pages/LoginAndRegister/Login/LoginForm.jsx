import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Button } from "antd";
import { useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { ROUTER } from '../../../constants/router'

import { loginAction } from '../../../redux/actions'

const schema = yup.object({
  email: yup
    .string()
    .required('Bạn chưa nhập email')
    .email('Email không đúng định dạng'),
  password: yup
    .string()
    .required('Bạn chưa nhập mật khẩu')
    .min(6, 'Mật khẩu của bạn phải nằm trong khoảng 6-14 kí tự')
    .max(14, 'Mật khẩu của bạn phải nằm trong khoảng 6-14 kí tự'),
});

const LoginFormPage = ({ userList }) => {
  const history = useHistory();

  const { responseAction } = useSelector(state => state.authReducer)
  const dispatch = useDispatch()

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    if (responseAction.login.error && !responseAction.login.loading) {
      setError("email", {
        type: "manual",
        message: " ",
      });
      setError("password", {
        type: "manual",
        message: responseAction.login.error,
      });
    }
  }, [responseAction.login])

  const onSubmit = (values) => {
    dispatch(loginAction({
      data: values,
      callback: {
        redirectHome: () => history.push(ROUTER.USER.HOME),
        redirectDashboard: () => history.push(ROUTER.ADMIN.DASHBOARD),
      }
    }))
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ marginBottom: 16 }}>
        <label style={{ display: 'block', marginBottom: 8 }}>Email</label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Enter email"
              status={errors.email ? 'error' : ''}
            />
          )}
        />
        {errors.email && <span style={{ color: '#ff4d4f' }}>{errors.email.message}</span>}
      </div>

      <div style={{ marginBottom: 16 }}>
        <label style={{ display: 'block', marginBottom: 8 }}>Password</label>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input.Password
              {...field}
              placeholder="Password"
              status={errors.password ? 'error' : ''}
            />
          )}
        />
        {errors.password && <span style={{ color: '#ff4d4f' }}>{errors.password.message}</span>}
      </div>

      <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
        Submit
      </Button>
    </form>
  );
};

export default LoginFormPage;
