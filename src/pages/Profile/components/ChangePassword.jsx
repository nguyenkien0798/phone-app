import React from "react";
import { Form, Input, Button } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";

import { changePasswordAction } from "../../../redux/slices/auth.slice";
import * as S from "../styles";

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
    <div>
      <S.PanelHeader>
        <div className="panel-title-wrap">
          <h3>Đổi mật khẩu</h3>
          <p>Cập nhật mật khẩu để bảo vệ tài khoản của bạn tốt hơn.</p>
        </div>
      </S.PanelHeader>

      <S.PasswordCard>
        <Form
          form={changePasswordForm}
          name="changePasswordForm"
          layout="vertical"
          requiredMark={false}
          initialValues={{
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
          }}
          onFinish={handleChangePassword}
        >
          <Form.Item
            label="Mật khẩu hiện tại"
            name="oldPassword"
            rules={[{ required: true, message: "Bạn cần nhập mật khẩu cũ!" }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Nhập mật khẩu hiện tại"
            />
          </Form.Item>

          <Form.Item
            label="Mật khẩu mới"
            name="newPassword"
            rules={[
              { required: true, message: "Bạn cần nhập mật khẩu mới!" },
              { min: 6, message: "Mật khẩu mới tối thiểu 6 ký tự" },
              { max: 14, message: "Mật khẩu mới tối đa 14 ký tự" },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Từ 6 đến 14 ký tự"
            />
          </Form.Item>

          <Form.Item
            label="Xác nhận mật khẩu mới"
            name="confirmPassword"
            dependencies={["newPassword"]}
            rules={[
              { required: true, message: "Bạn cần nhập lại mật khẩu mới!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("newPassword") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Mật khẩu xác nhận không khớp"));
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Nhập lại mật khẩu mới"
            />
          </Form.Item>

          <Button htmlType="submit" type="primary" block>
            Cập nhật mật khẩu
          </Button>
        </Form>
      </S.PasswordCard>
    </div>
  );
};

export default ChangePassword;
