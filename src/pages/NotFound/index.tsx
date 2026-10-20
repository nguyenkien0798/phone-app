import React from "react";
import { useHistory } from "react-router-dom";
import { HomeOutlined, ShoppingOutlined } from "@ant-design/icons";
import { ROUTER } from "../../constants/router";
import * as S from "./styles";

const NotFoundPage = () => {
  const history = useHistory();

  return (
    <S.Wrap>
      <span className="code">404</span>
      <h1>Không tìm thấy trang</h1>
      <p>Đường dẫn bạn truy cập không tồn tại hoặc đã được chuyển đi.</p>
      <div className="actions">
        <button type="button" className="primary" onClick={() => history.push(ROUTER.USER.HOME)}>
          <HomeOutlined /> Về trang chủ
        </button>
        <button type="button" className="ghost" onClick={() => history.push(ROUTER.USER.PRODUCT_LIST)}>
          <ShoppingOutlined /> Xem sản phẩm
        </button>
      </div>
    </S.Wrap>
  );
};

export default NotFoundPage;
