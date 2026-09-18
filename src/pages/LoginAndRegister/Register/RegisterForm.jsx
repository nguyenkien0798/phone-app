import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Button, Checkbox } from "antd";
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { registerAction } from "../../../redux/slices/auth.slice";
import * as S from "../styles";

const schema = yup.object({
  name: yup
    .string()
    .transform((value) => (typeof value === "string" ? value.trim() : value))
    .required("Bạn chưa nhập họ tên")
    .min(2, "Họ tên phải từ 2 đến 50 ký tự")
    .max(50, "Họ tên phải từ 2 đến 50 ký tự")
    .test(
      "name-format",
      "Họ tên không được chứa số hoặc ký tự đặc biệt",
      (value) => !value || !/[0-9@_#$%^&*+=<>?!]/.test(value)
    ),
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
  rePassword: yup
    .string()
    .required("Bạn chưa nhập lại mật khẩu")
    .oneOf([yup.ref("password")], "Mật khẩu nhập lại không khớp"),
  gender: yup
    .string()
    .required("Bạn chưa chọn giới tính")
    .oneOf(["male", "female"], "Giới tính không hợp lệ"),
  role: yup
    .string()
    .required("Bạn chưa chọn loại tài khoản")
    .oneOf(["user", "admin"], "Loại tài khoản không hợp lệ"),
  isOK: yup
    .boolean()
    .oneOf([true], "Bạn cần đồng ý điều khoản sử dụng"),
});

const RegisterFormPage = ({ setIsLogin }) => {
  const {
    control,
    watch,
    setError,
    clearErrors,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      role: "user",
      gender: "male",
      isOK: false,
    },
  });

  const { responseAction } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const gender = watch("gender");
  const role = watch("role");
  const password = watch("password");
  const rePassword = watch("rePassword");

  useEffect(() => {
    if (responseAction.register?.error) {
      setError("email", {
        type: "server",
        message: responseAction.register.error,
      });
    }
  }, [responseAction.register?.error, setError]);

  const onSubmit = (values) => {
    clearErrors();
    dispatch(
      registerAction({
        data: {
          name: values.name.trim(),
          email: values.email.trim().toLowerCase(),
          password: values.password,
          role: values.role,
          gender: values.gender,
        },
        callback: {
          goBackLogin: () => setIsLogin(true),
        },
      })
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <S.Field>
        <label htmlFor="register-name">Họ và tên</label>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              id="register-name"
              size="large"
              autoComplete="name"
              prefix={<UserOutlined />}
              placeholder="Nguyễn Văn A"
              status={errors.name ? "error" : ""}
            />
          )}
        />
        {errors.name && <S.FieldError>{errors.name.message}</S.FieldError>}
      </S.Field>

      <S.Field>
        <label htmlFor="register-email">Địa chỉ email</label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              id="register-email"
              size="large"
              type="email"
              autoComplete="email"
              prefix={<MailOutlined />}
              placeholder="you@example.com"
              status={errors.email ? "error" : ""}
              onChange={(e) => {
                field.onChange(e);
                if (errors.email?.type === "server") {
                  clearErrors("email");
                }
              }}
            />
          )}
        />
        {errors.email && <S.FieldError>{errors.email.message}</S.FieldError>}
      </S.Field>

      <S.Field>
        <label htmlFor="register-password">Mật khẩu</label>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input.Password
              {...field}
              id="register-password"
              size="large"
              autoComplete="new-password"
              prefix={<LockOutlined />}
              placeholder="Từ 6 đến 14 ký tự"
              status={errors.password ? "error" : ""}
            />
          )}
        />
        {errors.password && <S.FieldError>{errors.password.message}</S.FieldError>}
      </S.Field>

      <S.Field>
        <label htmlFor="register-repassword">Nhập lại mật khẩu</label>
        <Controller
          name="rePassword"
          control={control}
          render={({ field }) => (
            <Input.Password
              {...field}
              id="register-repassword"
              size="large"
              autoComplete="new-password"
              prefix={<LockOutlined />}
              placeholder="Nhập lại mật khẩu"
              status={errors.rePassword ? "error" : ""}
            />
          )}
        />
        {errors.rePassword && (
          <S.FieldError>{errors.rePassword.message}</S.FieldError>
        )}
        {!errors.rePassword && password && rePassword && password === rePassword && (
          <S.FieldHint>Mật khẩu khớp</S.FieldHint>
        )}
      </S.Field>

      <S.Field>
        <label>Giới tính</label>
        <S.SegmentGroup>
          <button
            type="button"
            className={gender === "male" ? "active" : ""}
            onClick={() => setValue("gender", "male", { shouldValidate: true })}
          >
            Nam
          </button>
          <button
            type="button"
            className={gender === "female" ? "active" : ""}
            onClick={() => setValue("gender", "female", { shouldValidate: true })}
          >
            Nữ
          </button>
        </S.SegmentGroup>
        {errors.gender && <S.FieldError>{errors.gender.message}</S.FieldError>}
      </S.Field>

      <S.Field>
        <label>Loại tài khoản</label>
        <S.SegmentGroup>
          <button
            type="button"
            className={role === "user" ? "active" : ""}
            onClick={() => setValue("role", "user", { shouldValidate: true })}
          >
            Khách hàng
          </button>
          <button
            type="button"
            className={role === "admin" ? "active" : ""}
            onClick={() => setValue("role", "admin", { shouldValidate: true })}
          >
            Quản trị viên
          </button>
        </S.SegmentGroup>
        {errors.role && <S.FieldError>{errors.role.message}</S.FieldError>}
      </S.Field>

      <S.TermsRow>
        <Controller
          name="isOK"
          control={control}
          render={({ field: { value, onChange, onBlur } }) => (
            <Checkbox
              checked={value}
              onBlur={onBlur}
              onChange={(e) => onChange(e.target.checked)}
            >
              Đồng ý điều khoản sử dụng
            </Checkbox>
          )}
        />
        {errors.isOK && <S.FieldError>{errors.isOK.message}</S.FieldError>}
      </S.TermsRow>

      <Button
        type="primary"
        htmlType="submit"
        block
        loading={responseAction.register?.loading}
      >
        Tạo tài khoản
      </Button>
    </form>
  );
};

export default RegisterFormPage;
