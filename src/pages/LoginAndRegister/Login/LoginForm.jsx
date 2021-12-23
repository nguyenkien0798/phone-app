import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { ROUTER } from '../../../constants/router'

import { loginAction } from '../../../redux/actions'

import * as S from './styles'

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
    register,
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
      // Cho AntD
      // loginForm.setFields([
      //   {
      //     name: 'email',
      //     errors: [" "],
      //   },
      //   {
      //     name: 'password',
      //     errors: [responseAction.login.error],
      //   },
      // ]);
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
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter email"
          {...register("email")}
        />
        <span className="text-danger">{errors.email?.message}</span>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <span className="text-danger">{errors.password?.message}</span>
      </Form.Group>

      <Button type="submit" variant="primary" className="w-100">
        Submit
      </Button>
    </Form>
  );
};

export default LoginFormPage;
