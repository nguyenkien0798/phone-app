import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Button, Select, Radio, Checkbox } from "antd";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { registerAction } from '../../../redux/actions'

const schema = yup.object({
  name: yup
    .string()
    .required("Bạn chưa nhập tên")
    .min(6, "Tên của bạn phải nằm trong khoảng 6-32 kí tự")
    .max(32, "Tên của bạn phải nằm trong khoảng 6-32 kí tự"),
  email: yup
    .string()
    .required("Bạn chưa nhập email")
    .email("Email không đúng định dạng"),
  password: yup
    .string()
    .required("Bạn chưa nhập mật khẩu")
    .min(6, "Mật khẩu của bạn phải nằm trong khoảng 6-14 kí tự")
    .max(14, "Mật khẩu của bạn phải nằm trong khoảng 6-14 kí tự"),
  rePassword: yup
    .string()
    .required("Bạn chưa nhập lại mật khẩu")
    .oneOf([yup.ref("password")], "Mật khẩu không khớp"),
});

const RegisterFormPage = ({ userList, setUserList, setIsLogin }) => {
  const {
    control,
    watch,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      role: 'user',
      gender: 'male',
    },
  });

  const { responseAction } = useSelector(state => state.authReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    if (responseAction.register?.error) {
      setError("email", {
        type: "manual",
        message: responseAction.register.error,
      });
    }
  }, [responseAction.register?.error])

  const onSubmit = (values) => {
    dispatch(registerAction({
      data: {
        name: values.name,
        email: values.email,
        password: values.password,
        role: values.role,
        gender: values.gender,
      },
      callback: {
        goBackLogin: () => setIsLogin(true),
      },
    }))
  };

  const formItemStyle = { marginBottom: 16 };
  const labelStyle = { display: 'block', marginBottom: 8 };
  const errorStyle = { color: '#ff4d4f', fontSize: 12 };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={formItemStyle}>
        <label style={labelStyle}>Name</label>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder="Enter name" status={errors.name ? 'error' : ''} />
          )}
        />
        {errors.name && <span style={errorStyle}>{errors.name.message}</span>}
      </div>

      <div style={formItemStyle}>
        <label style={labelStyle}>Email</label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder="Enter email" status={errors.email ? 'error' : ''} />
          )}
        />
        {errors.email && <span style={errorStyle}>{errors.email.message}</span>}
      </div>

      <div style={formItemStyle}>
        <label style={labelStyle}>Password</label>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input.Password {...field} placeholder="Password" status={errors.password ? 'error' : ''} />
          )}
        />
        {errors.password && <span style={errorStyle}>{errors.password.message}</span>}
      </div>

      <div style={formItemStyle}>
        <label style={labelStyle}>Re-Password</label>
        <Controller
          name="rePassword"
          control={control}
          render={({ field }) => (
            <Input.Password {...field} placeholder="Re-Password" status={errors.rePassword ? 'error' : ''} />
          )}
        />
        {errors.rePassword && <span style={errorStyle}>{errors.rePassword.message}</span>}
      </div>

      <div style={formItemStyle}>
        <label style={labelStyle}>Gender</label>
        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <Select {...field} style={{ width: '100%' }}>
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
            </Select>
          )}
        />
      </div>

      <div style={formItemStyle}>
        <label style={labelStyle}>Role</label>
        <Controller
          name="role"
          control={control}
          render={({ field }) => (
            <Radio.Group {...field}>
              <Radio value="user">User</Radio>
              <Radio value="admin">Admin</Radio>
            </Radio.Group>
          )}
        />
      </div>

      <div style={formItemStyle}>
        <Controller
          name="isOK"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Checkbox checked={value} onChange={(e) => onChange(e.target.checked)}>
              Đồng ý điều khoản
            </Checkbox>
          )}
        />
      </div>

      <Button type="primary" htmlType="submit" style={{ width: '100%' }} disabled={!watch("isOK")}>
        Submit
      </Button>
    </form>
  );
};

export default RegisterFormPage;
