import React, { useState } from "react";
import { Steps } from "antd";
import {
  ShoppingCartOutlined,
  IdcardOutlined,
  CreditCardOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

import TopWrapper from "../../components/TopWrapper";
import Checkout from "./components/Checkout";
import Info from "./components/Info";
import Payment from "./components/Payment";
import Success from "./components/Success";
import { BREADCRUMB } from "./constant";

import * as S from "./styles";

const CartPage = () => {
  const [checkoutStep, setCheckoutStep] = useState(0);

  return (
    <>
      <TopWrapper
        titlePage="Đặt Hàng & Thanh Toán"
        subtitle="Kiểm tra giỏ hàng — Điền thông tin — Chọn thanh toán — Xác nhận đơn hàng"
        icon={<ShoppingCartOutlined />}
        breadcrumb={BREADCRUMB}
      />
      <S.CartContainer>
        <Steps current={checkoutStep} className="custom-steps" responsive>
          <Steps.Step
            title="Giỏ hàng"
            description="Kiểm tra thiết bị"
            icon={<ShoppingCartOutlined />}
          />
          <Steps.Step
            title="Địa chỉ"
            description="Thông tin nhận hàng"
            icon={<IdcardOutlined />}
          />
          <Steps.Step
            title="Thanh toán"
            description="Phương thức & vận chuyển"
            icon={<CreditCardOutlined />}
          />
          <Steps.Step
            title="Hoàn tất"
            description="Xác nhận đơn hàng"
            icon={<CheckCircleOutlined />}
          />
        </Steps>

        {checkoutStep === 0 && <Checkout setCheckoutStep={setCheckoutStep} />}
        {checkoutStep === 1 && <Info setCheckoutStep={setCheckoutStep} />}
        {checkoutStep === 2 && <Payment setCheckoutStep={setCheckoutStep} />}
        {checkoutStep === 3 && <Success />}
      </S.CartContainer>
    </>
  );
};

export default CartPage;
