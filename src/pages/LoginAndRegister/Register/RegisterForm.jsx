import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Button, Select, Radio, Checkbox } from "antd";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { registerAction } from '../../../redux/slices/auth.slice'

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

const RegisterFormPage = ({ setIsLogin }) => {
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
  }, [responseAction.register?.error, setError])

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
        <label style={labelStyle}>Họ và tên</label>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder="Nguyễn Văn A" status={errors.name ? 'error' : ''} />
          )}
        />
        {errors.name && <span style={errorStyle}>{errors.name.message}</span>}
      </div>

      <div style={formItemStyle}>
        <label style={labelStyle}>Địa chỉ email</label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder="you@example.com" status={errors.email ? 'error' : ''} />
          )}
        />
        {errors.email && <span style={errorStyle}>{errors.email.message}</span>}
      </div>

      <div style={formItemStyle}>
        <label style={labelStyle}>Mật khẩu</label>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input.Password {...field} placeholder="Tạo mật khẩu 6-14 ký tự" status={errors.password ? 'error' : ''} />
          )}
        />
        {errors.password && <span style={errorStyle}>{errors.password.message}</span>}
      </div>

      <div style={formItemStyle}>
        <label style={labelStyle}>Nhập lại mật khẩu</label>
        <Controller
          name="rePassword"
          control={control}
          render={({ field }) => (
            <Input.Password {...field} placeholder="Nhập lại mật khẩu của bạn" status={errors.rePassword ? 'error' : ''} />
          )}
        />
        {errors.rePassword && <span style={errorStyle}>{errors.rePassword.message}</span>}
      </div>

      <div style={formItemStyle}>
        <label style={labelStyle}>Giới tính</label>
        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <Select {...field} style={{ width: '100%' }}>
              <Select.Option value="male">Nam</Select.Option>
              <Select.Option value="female">Nữ</Select.Option>
            </Select>
          )}
        />
      </div>

      <div style={formItemStyle}>
        <label style={labelStyle}>Loại tài khoản</label>
        <Controller
          name="role"
          control={control}
          render={({ field }) => (
            <Radio.Group {...field}>
              <Radio value="user">Khách hàng</Radio>
              <Radio value="admin">Quản trị viên</Radio>
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
        Tạo tài khoản
      </Button>
    </form>
  );
};

export default RegisterFormPage;
