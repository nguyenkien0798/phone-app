import React from "react";
import { useHistory } from "react-router-dom";
import { Result, Button, Card, Space } from "antd";
import { SmileOutlined } from "@ant-design/icons";

import { ROUTER } from "../../../constants/router";

const Success = () => {
  const history = useHistory();
  return (
    <Card size="small">
      <Result
        icon={<SmileOutlined />}
        title="Cảm ơn bạn đã mua sản phẩm!"
        extra={
          <Space>
            <Button
              type="primary"
              onClick={() => history.push(ROUTER.USER.HOME)}
            >
              Về trang chủ
            </Button>
            <Button
              type="primary"
              ghost
              onClick={() => history.push(ROUTER.USER.PROFILE)}
            >
              Kiểm tra đơn hàng
            </Button>
          </Space>
        }
      />
    </Card>
  );
};

export default Success;
