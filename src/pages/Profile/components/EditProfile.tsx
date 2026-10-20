import React, { useEffect } from "react";
import { Form, Input, Button, Select } from "antd";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { updateUserAction } from "../../../redux/slices/auth.slice";
import * as S from "../styles";

const EditProfile = () => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const { userInfo, responseAction } = useAppSelector((state) => state.authReducer);

  useEffect(() => {
    form.setFieldsValue({
      name: userInfo.data.name || "",
      email: userInfo.data.email || "",
      phone: userInfo.data.phone || "",
      address: userInfo.data.address || "",
      gender: userInfo.data.gender === "female" ? "female" : "male",
    });
  }, [userInfo.data, form]);

  const handleSubmit = (values) => {
    dispatch(
      updateUserAction({
        id: userInfo.data.id,
        data: {
          name: values.name.trim(),
          phone: values.phone.trim(),
          address: values.address.trim(),
          gender: values.gender,
        },
      })
    );
  };

  return (
    <div>
      <S.PanelHeader>
        <div className="panel-title-wrap">
          <h3>Thông tin tài khoản</h3>
          <p>Cập nhật họ tên, số điện thoại và địa chỉ giao hàng mặc định.</p>
        </div>
      </S.PanelHeader>

      <S.PasswordCard>
        <Form form={form} layout="vertical" requiredMark={false} onFinish={handleSubmit}>
          <Form.Item
            label="Họ và tên"
            name="name"
            rules={[{ required: true, message: "Nhập họ tên" }]}
          >
            <Input placeholder="Nguyễn Văn A" />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="Số điện thoại"
            name="phone"
            rules={[{ required: true, message: "Nhập số điện thoại" }]}
          >
            <Input placeholder="0901 234 567" />
          </Form.Item>
          <Form.Item label="Địa chỉ" name="address">
            <Input placeholder="390 Phạm Xuân Ẩn, Hòa Xuân, Đà Nẵng" />
          </Form.Item>
          <Form.Item label="Giới tính" name="gender">
            <Select>
              <Select.Option value="male">Nam</Select.Option>
              <Select.Option value="female">Nữ</Select.Option>
            </Select>
          </Form.Item>
          <Button
            htmlType="submit"
            type="primary"
            block
            loading={responseAction.updateUser?.loading}
          >
            Lưu thay đổi
          </Button>
        </Form>
      </S.PasswordCard>
    </div>
  );
};

export default EditProfile;
