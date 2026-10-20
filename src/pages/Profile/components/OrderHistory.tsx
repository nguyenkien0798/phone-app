import React, { useEffect } from "react";
import { Table, Button, Popconfirm } from "antd";
import { HistoryOutlined } from "@ant-design/icons";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

import { getOrderListAction, updateOrderAction } from "../../../redux/slices/order.slice";
import {
  getOrderStatusMeta,
  getPaymentMeta,
  canCancelOrder,
  ORDER_STATUS,
} from "../../../constants/orderStatus";
import * as S from "../styles";

const OrderHistory = () => {
  const dispatch = useAppDispatch();
  const { userInfo } = useAppSelector((state) => state.authReducer);
  const { orderList } = useAppSelector((state) => state.orderReducer);

  useEffect(() => {
    if (userInfo.data.id) {
      dispatch(getOrderListAction({ id: userInfo.data.id }));
    }
  }, [userInfo.data.id, dispatch]);

  const orders = Array.isArray(orderList.data) ? orderList.data : [];

  const orderColumns: any[] = [
    {
      title: "Mã đơn",
      dataIndex: "id",
      key: "id",
      width: 100,
      render: (id) => <span className="order-id">#{id}</span>,
    },
    {
      title: "Ngày mua",
      dataIndex: "createdAt",
      key: "createdAt",
      width: 150,
      render: (item) => moment(item).format("DD/MM/YYYY HH:mm"),
    },
    {
      title: "Sản phẩm",
      dataIndex: "products",
      key: "products",
      ellipsis: true,
      render: (products) =>
        (Array.isArray(products) ? products : [])
          .map((item) => `${item.name} x${item.quantity}`)
          .join(", ") || "—",
    },
    {
      title: "Tổng tiền",
      dataIndex: "totalPrice",
      key: "totalPrice",
      width: 130,
      align: "right",
      render: (item) => (
        <span className="order-price">
          {Number(item || 0).toLocaleString("vi-VN")}₫
        </span>
      ),
    },
    {
      title: "Đơn hàng",
      dataIndex: "status",
      key: "status",
      width: 140,
      render: (status) => {
        const meta = getOrderStatusMeta(status);
        return <span className={`status-tag ${meta.className}`}>{meta.label}</span>;
      },
    },
    {
      title: "Thanh toán",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
      width: 150,
      render: (_, record) => {
        const meta = getPaymentMeta(record);
        return <span className={`status-tag ${meta.className}`}>{meta.label}</span>;
      },
    },
    {
      title: "Thao tác",
      key: "actions",
      width: 120,
      render: (_, record) =>
        canCancelOrder(record.status) ? (
          <Popconfirm
            title="Hủy đơn hàng này?"
            okText="Hủy đơn"
            cancelText="Không"
            onConfirm={() =>
              dispatch(
                updateOrderAction({
                  id: record.id,
                  data: { status: ORDER_STATUS.CANCELLED },
                })
              )
            }
          >
            <Button size="small" danger>
              Hủy
            </Button>
          </Popconfirm>
        ) : (
          "—"
        ),
    },
  ];

  const tableData = orders.map((item) => ({
    ...item,
    key: item.id,
  }));

  return (
    <div>
      <S.PanelHeader>
        <div className="panel-title-wrap">
          <h3>Lịch sử đơn hàng</h3>
          <p>Theo dõi các đơn hàng bạn đã đặt tại Volt Store.</p>
        </div>
        <span className="panel-count">{orders.length} đơn</span>
      </S.PanelHeader>

      {orders.length === 0 ? (
        <S.EmptyState>
          <div className="empty-icon">
            <HistoryOutlined />
          </div>
          <strong>Chưa có đơn hàng nào</strong>
          <span>Khi bạn mua hàng, lịch sử sẽ hiển thị tại đây.</span>
        </S.EmptyState>
      ) : (
        <S.OrderTableWrap>
          <Table
            columns={orderColumns}
            dataSource={tableData}
            scroll={{ x: 860 }}
            pagination={{ pageSize: 6, hideOnSinglePage: true }}
            expandable={{
              expandedRowRender: (record) => (
                <div className="expand-products">
                  {(Array.isArray(record.products) ? record.products : []).map(
                    (item) => (
                      <div className="expand-item" key={item.id}>
                        <strong>{item.name}</strong>
                        <span>x{item.quantity}</span>
                      </div>
                    )
                  )}
                </div>
              ),
            }}
          />
        </S.OrderTableWrap>
      )}
    </div>
  );
};

export default OrderHistory;
