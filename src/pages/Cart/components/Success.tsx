import React from "react";
import { useHistory } from "react-router-dom";
import {
  CheckOutlined,
  ShoppingOutlined,
  UserOutlined,
  SafetyCertificateFilled,
} from "@ant-design/icons";

import { ROUTER } from "../../../constants/router";
import * as S from "../styles";

const Success = () => {
  const history = useHistory();

  return (
    <S.SuccessCard>
      <div className="success-icon-wrap">
        <CheckOutlined />
      </div>

      <h2>Đặt Hàng Thành Công!</h2>
      <p>
        Cảm ơn bạn đã tin tưởng mua sắm thiết bị Apple chính hãng tại hệ thống.
        <br />
        Đơn hàng của bạn đang được chuẩn bị và sẽ sớm được nhân viên liên hệ giao hàng tận nơi.
      </p>

      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: "#f0fdf4",
          border: "1px solid #bbf7d0",
          color: "#166534",
          padding: "8px 18px",
          borderRadius: 20,
          fontSize: 13,
          fontWeight: 700,
          marginBottom: 28,
        }}
      >
        <SafetyCertificateFilled /> Bảo hành chính hãng Apple VN/A 12 tháng kèm gói bảo hiểm
      </div>

      <div className="success-actions">
        <button
          type="button"
          className="btn-home"
          onClick={() => history.push(ROUTER.USER.HOME)}
        >
          <ShoppingOutlined /> Tiếp tục mua sắm
        </button>

        <button
          type="button"
          className="btn-orders"
          onClick={() => history.push(ROUTER.USER.PROFILE)}
        >
          <UserOutlined /> Quản lý đơn hàng
        </button>
      </div>
    </S.SuccessCard>
  );
};

export default Success;
