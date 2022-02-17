import React, { useState } from "react";
import { Steps } from "antd";
import {
  ShoppingCartOutlined,
  IdcardOutlined,
  CreditCardOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";

import TopWrapper from "../../components/TopWrapper";
import Checkout from "./components/Checkout";
import Info from "./components/Info";
import Payment from "./components/Payment";
import Success from "./components/Success";
import { BREADCRUMB } from "./constant";

import * as S from "./styles";

const CartPage = () => {
  const [checkoutStep, setCheckoutStep] = useState(0);

  const { t } = useTranslation();

  return (
    <>
      <TopWrapper titlePage="Giỏ hàng" breadcrumb={BREADCRUMB} />
      <S.CartContainer>
        <Steps current={checkoutStep} style={{ marginBottom: 24 }} responsive>
          <Steps.Step
            title="Giỏ hàng"
            icon={<ShoppingCartOutlined />}
          />
          <Steps.Step title="Thông tin" icon={<IdcardOutlined />} />
          <Steps.Step
            title="Thanh toán"
            icon={<CreditCardOutlined />}
          />
          <Steps.Step
            title="Hoàn tất"
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
