import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Row, Col, Radio } from "antd";
import {
  LeftOutlined,
  CheckCircleFilled,
  CreditCardFilled,
  CarFilled,
  DollarCircleFilled,
  BankFilled,
} from "@ant-design/icons";

import { orderCartAction } from "../../../redux/slices/order.slice";

import * as S from "../styles";

const Payment = ({ setCheckoutStep }) => {
  const [paymentForm] = Form.useForm();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.authReducer);
  const { orderInfo } = useSelector((state) => state.orderReducer);
  const { selectedCarts } = useSelector((state) => state.cartReducer);
  const { discountInfo } = useSelector((state) => state.discountReducer);

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

  const handleConfirmPayment = (values) => {
    const newValues = {
      ...orderInfo,
      ...values,
      userId: userInfo.data.id,
      products: selectedCarts.map((cartItem) => {
        return {
          id: cartItem.product?.id,
          cartId: cartItem.id,
          name: cartItem.product?.name,
          price: cartItem.product?.price,
          quantity: cartItem.quantity,
          option: cartItem.productOption?.name || null,
        };
      }),
      totalPrice: finalTotal,
      discountAmount,
      createdAt: new Date().toISOString(),
    };

    dispatch(
      orderCartAction({
        data: newValues,
        callback: {
          success: () => setCheckoutStep(3),
        },
      })
    );
  };

  return (
    <Row gutter={[24, 24]}>
      {/* Payment & Shipping Options */}
      <Col lg={16} xs={24}>
        <S.StepCard>
          <Form
            form={paymentForm}
            name="paymentForm"
            layout="vertical"
            initialValues={{ shipper: "giaohangnhanh", paymentType: "cod" }}
            onFinish={handleConfirmPayment}
          >
            {/* 1. SHIPPING METHOD */}
            <div style={{ marginBottom: 28 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16, paddingBottom: 10, borderBottom: "1px solid #f1f5f9" }}>
                <CarFilled style={{ fontSize: 20, color: "#2563eb" }} />
                <h3 style={{ margin: 0, fontSize: 17, fontWeight: 800, color: "#0f172a" }}>
                  1. Chọn Đơn Vị Vận Chuyển
                </h3>
              </div>

              <Form.Item name="shipper" style={{ marginBottom: 0 }}>
                <Radio.Group style={{ width: "100%" }}>
                  <Radio.Button
                    value="giaohangnhanh"
                    style={{
                      display: "block",
                      height: "auto",
                      padding: "14px 18px",
                      borderRadius: 14,
                      marginBottom: 10,
                      border: "1.5px solid #e2e8f0",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div>
                        <strong style={{ fontSize: 14, color: "#0f172a" }}>⚡ Giao Hàng Nhanh 2H (Đà Nẵng & Nội Thành)</strong>
                        <span style={{ display: "block", fontSize: 12, color: "#64748b" }}>
                          Nhận hàng trong ngày, hỗ trợ kiểm tra hàng trước khi thanh toán
                        </span>
                      </div>
                      <span style={{ color: "#16a34a", fontWeight: 800, fontSize: 13 }}>Miễn phí</span>
                    </div>
                  </Radio.Button>

                  <Radio.Button
                    value="giaohangtietkiem"
                    style={{
                      display: "block",
                      height: "auto",
                      padding: "14px 18px",
                      borderRadius: 14,
                      border: "1.5px solid #e2e8f0",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div>
                        <strong style={{ fontSize: 14, color: "#0f172a" }}>📦 Giao Hàng Tiêu Chuẩn Toàn Quốc</strong>
                        <span style={{ display: "block", fontSize: 12, color: "#64748b" }}>
                          Giao hàng từ 2 - 3 ngày làm việc, bảo hiểm hàng hóa 100%
                        </span>
                      </div>
                      <span style={{ color: "#16a34a", fontWeight: 800, fontSize: 13 }}>Miễn phí</span>
                    </div>
                  </Radio.Button>
                </Radio.Group>
              </Form.Item>
            </div>

            {/* 2. PAYMENT METHOD */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16, paddingBottom: 10, borderBottom: "1px solid #f1f5f9" }}>
                <CreditCardFilled style={{ fontSize: 20, color: "#7c3aed" }} />
                <h3 style={{ margin: 0, fontSize: 17, fontWeight: 800, color: "#0f172a" }}>
                  2. Chọn Hình Thức Thanh Toán
                </h3>
              </div>

              <Form.Item name="paymentType" style={{ marginBottom: 0 }}>
                <Radio.Group style={{ width: "100%" }}>
                  <Radio.Button
                    value="cod"
                    style={{
                      display: "block",
                      height: "auto",
                      padding: "14px 18px",
                      borderRadius: 14,
                      marginBottom: 10,
                      border: "1.5px solid #e2e8f0",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <DollarCircleFilled style={{ fontSize: 24, color: "#16a34a" }} />
                      <div>
                        <strong style={{ fontSize: 14, color: "#0f172a" }}>Thanh toán khi nhận hàng (COD)</strong>
                        <span style={{ display: "block", fontSize: 12, color: "#64748b" }}>
                          Kiểm tra máy và thanh toán tiền mặt trực tiếp cho shipper
                        </span>
                      </div>
                    </div>
                  </Radio.Button>

                  <Radio.Button
                    value="momo"
                    style={{
                      display: "block",
                      height: "auto",
                      padding: "14px 18px",
                      borderRadius: 14,
                      marginBottom: 10,
                      border: "1.5px solid #e2e8f0",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ fontSize: 20, color: "#a50064", fontWeight: 900 }}>M</span>
                      <div>
                        <strong style={{ fontSize: 14, color: "#0f172a" }}>Ví Điện Tử MoMo / Apple Pay</strong>
                        <span style={{ display: "block", fontSize: 12, color: "#64748b" }}>
                          Quét mã QR thanh toán tức thì siêu tiện lợi
                        </span>
                      </div>
                    </div>
                  </Radio.Button>

                  <Radio.Button
                    value="atm"
                    style={{
                      display: "block",
                      height: "auto",
                      padding: "14px 18px",
                      borderRadius: 14,
                      marginBottom: 10,
                      border: "1.5px solid #e2e8f0",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <BankFilled style={{ fontSize: 24, color: "#2563eb" }} />
                      <div>
                        <strong style={{ fontSize: 14, color: "#0f172a" }}>Chuyển khoản Ngân hàng / Internet Banking (VietQR)</strong>
                        <span style={{ display: "block", fontSize: 12, color: "#64748b" }}>
                          Hỗ trợ tất cả ngân hàng tại Việt Nam, xác nhận tự động 24/7
                        </span>
                      </div>
                    </div>
                  </Radio.Button>

                  <Radio.Button
                    value="visa"
                    style={{
                      display: "block",
                      height: "auto",
                      padding: "14px 18px",
                      borderRadius: 14,
                      border: "1.5px solid #e2e8f0",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <CreditCardFilled style={{ fontSize: 24, color: "#ea580c" }} />
                      <div>
                        <strong style={{ fontSize: 14, color: "#0f172a" }}>Thẻ Quốc Tế (Visa, Master, JCB, Apple Pay)</strong>
                        <span style={{ display: "block", fontSize: 12, color: "#64748b" }}>
                          Cổng thanh toán bảo mật 3D-Secure tiêu chuẩn quốc tế
                        </span>
                      </div>
                    </div>
                  </Radio.Button>
                </Radio.Group>
              </Form.Item>
            </div>
          </Form>
        </S.StepCard>
      </Col>

      {/* Summary Recap & Final Confirmation */}
      <Col lg={8} xs={24}>
        <S.SummaryStickyCard>
          {/* Shipping Address Recap Card */}
          <S.StepCard style={{ padding: "18px 20px" }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: "#0f172a", marginBottom: 10, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span>Địa Chỉ Nhận Hàng</span>
              <button
                onClick={() => setCheckoutStep(1)}
                style={{ background: "transparent", border: "none", color: "#2563eb", fontSize: 12, fontWeight: 700, cursor: "pointer" }}
              >
                Thay đổi
              </button>
            </div>
            <div style={{ fontSize: 13, color: "#334155", lineHeight: 1.5 }}>
              <div style={{ fontWeight: 700, color: "#0f172a" }}>
                {orderInfo.fullName} • {orderInfo.phoneNumber}
              </div>
              <div style={{ color: "#64748b", marginTop: 2 }}>
                {`${orderInfo.address}, ${orderInfo.ward}, ${orderInfo.district}, ${orderInfo.city}`}
              </div>
            </div>
          </S.StepCard>

          {/* Bill Summary */}
          <S.BillSummaryCard>
            <div className="bill-title">Chi Tiết Thanh Toán</div>
            <div className="bill-row">
              <span>Sản phẩm ({selectedCarts.length})</span>
              <span className="val">{subtotal.toLocaleString("vi-VN")} ₫</span>
            </div>
            <div className="bill-row discount">
              <span>Voucher giảm giá</span>
              <span className="val">
                {discountAmount > 0
                  ? `- ${discountAmount.toLocaleString("vi-VN")} ₫`
                  : "0 ₫"}
              </span>
            </div>
            <div className="bill-row">
              <span>Phí giao hàng</span>
              <span className="val" style={{ color: "#16a34a" }}>0 ₫ (Miễn phí)</span>
            </div>
            <div className="bill-row total-row">
              <span>Tổng cần thanh toán</span>
              <span className="total-val">
                {finalTotal.toLocaleString("vi-VN")} ₫
              </span>
            </div>

            <button
              type="button"
              className="btn-next-step"
              style={{ background: "linear-gradient(135deg, #e11d48 0%, #be123c 100%)", boxShadow: "0 8px 24px rgba(225, 29, 72, 0.35)" }}
              onClick={() => paymentForm.submit()}
            >
              <CheckCircleFilled /> Xác nhận & Đặt hàng
            </button>

            <button
              type="button"
              className="btn-back-step"
              onClick={() => setCheckoutStep(1)}
            >
              <LeftOutlined /> Quay lại thông tin
            </button>
          </S.BillSummaryCard>
        </S.SummaryStickyCard>
      </Col>
    </Row>
  );
};

export default Payment;
