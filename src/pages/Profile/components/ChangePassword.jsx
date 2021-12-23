import React from "react";
import { Form, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { changePasswordAction } from "../../../redux/actions";

const ChangePassword = () => {
  const [changePasswordForm] = Form.useForm();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.authReducer);

  const handleChangePassword = (values) => {
    dispatch(
      changePasswordAction({
        id: userInfo.data.id,
        data: {
          ...values,
          email: userInfo.data.email,
        },
        callback: {
          clearForm: () => changePasswordForm.resetFields(),
        },
      })
    );
  };

  return (
    <Form
      form={changePasswordForm}
      name="changePasswordForm"
      layout="vertical"
      initialValues={{
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      }}
      onFinish={(values) => handleChangePassword(values)}
    >
      <Form.Item
        label="Mật khẩu cũ"
        name="oldPassword"
        rules={[{ required: true, message: "Bạn cần nhập mật khẩu cũ!" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Mật khẩu mới"
        name="newPassword"
        rules={[{ required: true, message: "Bạn cần nhập mật khẩu mới!" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Xác nhận mật khẩu"
        name="confirmPassword"
        rules={[{ required: true, message: "Bạn cần nhập lại mật khẩu mới!" }]}
      >
        <Input.Password />
      </Form.Item>
      <Button htmlType="submit" type="primary">
        Đổi mật khẩu
      </Button>
    </Form>
  );
};

export default ChangePassword;
