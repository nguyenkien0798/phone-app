import React, { useEffect } from "react";
import { Table } from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";

import { getOrderListAction } from "../../../redux/actions";

const OrderHistory = () => {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.authReducer);
  const { orderList } = useSelector((state) => state.orderReducer);

  useEffect(() => {
    if (userInfo.data.id) {
      dispatch(getOrderListAction({ id: userInfo.data.id }));
    }
  }, [userInfo.data]);

  const orderColumns = [
    { title: "Mã đơn hàng", dataIndex: "id", key: "id" },
    {
      title: "Ngày mua",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (item) => moment(item).format("DD/MM/YYYY HH:mm"),
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "productCount",
      key: "productCount",
      render: (_, record) =>
        record.products
          .map((item) => `${item.name} x ${item.quantity}`)
          .join(", "),
      ellipsis: true,
    },
    {
      title: "Tổng tiền",
      dataIndex: "totalPrice",
      key: "totalPrice",
      render: (item) => `${item.toLocaleString()}₫`,
    },
    {
      title: "Tình trạng đơn hàng",
      dataIndex: "status",
      key: "status",
      render: (item) => "Đang giao",
    },
    {
      title: "Tình trạng thanh toán",
      dataIndex: "paymentType",
      key: "paymentType",
      render: (item) => (item === "cod" ? "Chưa thanh toán" : "Đã thanh toán"),
    },
  ];

  const tableData = orderList.data.map((item) => ({
    ...item,
    key: item.id,
  }));

  return (
    <div>
      Lịch sử đơn hàng
      <Table
        columns={orderColumns}
        expandable={{
          expandedRowRender: (record) => {
            return record.products.map((item) => (
              <p key={item.id}>
                <b>{item.name}</b> x {item.quantity}
              </p>
            ));
          },
        }}
        dataSource={tableData}
      />
    </div>
  );
};

export default OrderHistory;
