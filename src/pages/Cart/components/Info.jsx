import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Row, Col, Input, Select } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  EnvironmentFilled,
} from "@ant-design/icons";

import { setOrderInfoAction } from "../../../redux/slices/order.slice";
import {
  getCityListAction,
  getDistrictListAction,
  getWardListAction,
} from "../../../redux/slices/common.slice";

import * as S from "../styles";

const Info = ({ setCheckoutStep }) => {
  const [districtOptions, setDistrictOptions] = useState([]);
  const [wardOptions, setWardOptions] = useState([]);

  const [infoForm] = Form.useForm();
  const dispatch = useDispatch();

  const { cityList, districtList, wardList } = useSelector(
    (state) => state.commonReducer
  );
  const { selectedCarts } = useSelector((state) => state.cartReducer);
  const { discountInfo } = useSelector((state) => state.discountReducer);

  useEffect(() => {
    dispatch(getCityListAction());
    dispatch(getDistrictListAction());
    dispatch(getWardListAction());
  }, [dispatch]);

  const handleConfirmInfo = (values) => {
    const city = cityList.data.find((c) => c.code === values.city);
    const district = districtOptions.find((d) => d.code === values.district);
    const ward = wardOptions.find((w) => w.code === values.ward);

    const newValues = {
      ...values,
      city: city?.name || values.city,
      district: district?.name || values.district,
      ward: ward?.name || values.ward,
    };

    dispatch(setOrderInfoAction(newValues));
    setCheckoutStep(2);
  };

  const subtotal = selectedCarts.reduce((total, cartItem) => {
    const unitPrice = cartItem.productOption
      ? (cartItem.productOption?.price || 0) + (cartItem.product?.price || 0)
      : (cartItem.product?.price || 0);
    return total + unitPrice * cartItem.quantity;
  }, 0);

  let discountAmount = 0;
  if (discountInfo.data.code && subtotal > 0) {
    if (discountInfo.data.discountType === "percent") {
      discountAmount = (subtotal * discountInfo.data.discountValue) / 100;
    } else {
      discountAmount = discountInfo.data.discountValue || 0;
    }
  }

  const finalTotal = Math.max(0, subtotal - discountAmount);

  return (
    <Row gutter={[24, 24]}>
      {/* Delivery Info Form Column */}
      <Col lg={16} xs={24}>
        <S.StepCard>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, paddingBottom: 12, borderBottom: "1px solid #f1f5f9" }}>
            <EnvironmentFilled style={{ fontSize: 20, color: "#2563eb" }} />
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: "#0f172a" }}>
              Địa Chỉ & Thông Tin Nhận Hàng
            </h3>
          </div>

          <Form
            form={infoForm}
            name="infoForm"
            layout="vertical"
            onFinish={handleConfirmInfo}
          >
            <Row gutter={16}>
              <Col md={12} xs={24}>
                <Form.Item
                  label="Họ và tên người nhận"
                  name="fullName"
                  rules={[{ required: true, message: "Vui lòng nhập họ và tên" }]}
                >
                  <Input placeholder="Nguyễn Văn A" style={{ height: 44, borderRadius: 12 }} />
                </Form.Item>
              </Col>
              <Col md={12} xs={24}>
                <Form.Item
                  label="Số điện thoại liên hệ"
                  name="phoneNumber"
                  rules={[{ required: true, message: "Vui lòng nhập số điện thoại" }]}
                >
                  <Input placeholder="0905 xxx xxx" style={{ height: 44, borderRadius: 12 }} />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              label="Email nhận hóa đơn điện tử"
              name="email"
              rules={[
                { required: true, message: "Vui lòng nhập email" },
                { type: "email", message: "Email không hợp lệ" },
              ]}
            >
              <Input placeholder="example@email.com" style={{ height: 44, borderRadius: 12 }} />
            </Form.Item>

            <Row gutter={16}>
              <Col md={8} xs={24}>
                <Form.Item
                  label="Tỉnh / Thành phố"
                  name="city"
                  rules={[{ required: true, message: "Vui lòng chọn Tỉnh/Thành" }]}
                >
                  <Select
                    placeholder="Chọn Tỉnh/Thành"
                    style={{ width: "100%" }}
                    size="large"
                    onChange={(value) => {
                      const newDistrictList = districtList.data.filter(
                        (district) => district.parentcode === value
                      );
                      setDistrictOptions(newDistrictList);
                      infoForm.setFieldsValue({ district: undefined, ward: undefined });
                    }}
                  >
                    {cityList.data.map((city) => (
                      <Select.Option key={city.id} value={city.code}>
                        {city.name}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>

              <Col md={8} xs={24}>
                <Form.Item
                  label="Quận / Huyện"
                  name="district"
                  rules={[{ required: true, message: "Vui lòng chọn Quận/Huyện" }]}
                >
                  <Select
                    placeholder="Chọn Quận/Huyện"
                    style={{ width: "100%" }}
                    size="large"
                    disabled={!districtOptions.length}
                    onChange={(value) => {
                      const newWardList = wardList.data.filter(
                        (ward) => ward.parentcode === value
                      );
                      setWardOptions(newWardList);
                      infoForm.setFieldsValue({ ward: undefined });
                    }}
                  >
                    {districtOptions.map((district) => (
                      <Select.Option key={district.id} value={district.code}>
                        {district.name}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>

              <Col md={8} xs={24}>
                <Form.Item
                  label="Phường / Xã"
                  name="ward"
                  rules={[{ required: true, message: "Vui lòng chọn Phường/Xã" }]}
                >
                  <Select
                    placeholder="Chọn Phường/Xã"
                    style={{ width: "100%" }}
                    size="large"
                    disabled={!wardOptions.length}
                  >
                    {wardOptions.map((ward) => (
                      <Select.Option key={ward.id} value={ward.code}>
                        {ward.name}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              label="Số nhà, tên đường chi tiết"
              name="address"
              rules={[{ required: true, message: "Vui lòng nhập địa chỉ chi tiết" }]}
            >
              <Input placeholder="Ví dụ: 123 Nguyễn Văn Linh..." style={{ height: 44, borderRadius: 12 }} />
            </Form.Item>

            <Form.Item label="Ghi chú giao hàng (Tùy chọn)" name="note">
              <Input.TextArea
                placeholder="Ví dụ: Giao hàng vào giờ hành chính, gọi trước khi giao..."
                autoSize={{ minRows: 3, maxRows: 5 }}
                style={{ borderRadius: 12 }}
              />
            </Form.Item>
          </Form>
        </S.StepCard>
      </Col>

      {/* Right Sidebar: Selected Items & Navigation */}
      <Col lg={8} xs={24}>
        <S.SummaryStickyCard>
          <S.BillSummaryCard>
            <div className="bill-title">Sản Phẩm Đặt Mua ({selectedCarts.length})</div>
            {selectedCarts.map((cartItem) => {
              const unitPrice = cartItem.productOption
                ? (cartItem.productOption?.price || 0) +
                  (cartItem.product?.price || 0)
                : cartItem.product?.price || 0;

              return (
                <div
                  key={cartItem.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "8px 0",
                    borderBottom: "1px solid #f8fafc",
                    fontSize: 13,
                  }}
                >
                  <span style={{ color: "#334155", fontWeight: 600 }}>
                    {cartItem.product?.name} x{cartItem.quantity}
                  </span>
                  <span style={{ color: "#0f172a", fontWeight: 700 }}>
                    {(unitPrice * cartItem.quantity).toLocaleString("vi-VN")} ₫
                  </span>
                </div>
              );
            })}

            <div style={{ marginTop: 14 }}>
              <div className="bill-row">
                <span>Tạm tính</span>
                <span className="val">{subtotal.toLocaleString("vi-VN")} ₫</span>
              </div>
              <div className="bill-row discount">
                <span>Giảm giá</span>
                <span className="val">
                  {discountAmount > 0
                    ? `- ${discountAmount.toLocaleString("vi-VN")} ₫`
                    : "0 ₫"}
                </span>
              </div>
              <div className="bill-row total-row">
                <span>Tổng thanh toán</span>
                <span className="total-val">
                  {finalTotal.toLocaleString("vi-VN")} ₫
                </span>
              </div>
            </div>

            <button
              type="button"
              className="btn-next-step"
              onClick={() => infoForm.submit()}
            >
              <span>Tiếp tục thanh toán</span>
              <RightOutlined />
            </button>

            <button
              type="button"
              className="btn-back-step"
              onClick={() => setCheckoutStep(0)}
            >
              <LeftOutlined /> Quay lại giỏ hàng
            </button>
          </S.BillSummaryCard>
        </S.SummaryStickyCard>
      </Col>
    </Row>
  );
};

export default Info;
