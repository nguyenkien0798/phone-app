import React, { useEffect } from "react";
import { Table, Select, Tag } from "antd";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { getAllOrdersAction, updateOrderAction } from "../../redux/slices/order.slice";
import {
  ORDER_STATUS,
  ORDER_STATUS_LABEL,
  PAYMENT_TYPE_LABEL,
  getPaymentMeta,
} from "../../constants/orderStatus";
import * as S from "../ProductManage/styles";

const OrderManagePage = () => {
  const dispatch = useAppDispatch();
  const { allOrders, actionLoading } = useAppSelector((state) => state.orderReducer);
  const orders = Array.isArray(allOrders.data) ? allOrders.data : [];

  useEffect(() => {
    dispatch(getAllOrdersAction());
  }, [dispatch]);

  const columns = [
    {
      title: "Mã",
      dataIndex: "id",
      width: 70,
      render: (id) => `#${id}`,
    },
    {
      title: "Khách hàng",
      key: "customer",
      render: (_, record) => (
        <div>
          <div style={{ fontWeight: 800 }}>{record.fullName}</div>
          <div style={{ color: "#64748b", fontSize: 12 }}>{record.phoneNumber}</div>
        </div>
      ),
    },
    {
      title: "Địa chỉ",
      key: "address",
      ellipsis: true,
      render: (_, record) =>
        [record.address, record.ward, record.district, record.city].filter(Boolean).join(", "),
    },
    {
      title: "Tổng",
      dataIndex: "totalPrice",
      width: 140,
      render: (price) => `${Number(price || 0).toLocaleString("vi-VN")}₫`,
    },
    {
      title: "Thanh toán",
      width: 160,
      render: (_, record) => {
        const meta = getPaymentMeta(record);
        return (
          <div>
            <Tag>{PAYMENT_TYPE_LABEL[record.paymentType] || record.paymentType}</Tag>
            <div className={`status-tag ${meta.className}`}>{meta.label}</div>
          </div>
        );
      },
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      width: 180,
      render: (status, record) => (
        <Select
          value={status || ORDER_STATUS.PROCESSING}
          style={{ width: "100%" }}
          loading={actionLoading.updateOrder}
          onChange={(value) =>
            dispatch(updateOrderAction({ id: record.id, data: { status: value } }))
          }
        >
          {Object.keys(ORDER_STATUS_LABEL).map((key) => (
            <Select.Option key={key} value={key}>
              {ORDER_STATUS_LABEL[key]}
            </Select.Option>
          ))}
        </Select>
      ),
    },
    {
      title: "Ngày",
      dataIndex: "createdAt",
      width: 140,
      render: (value) => moment(value).format("DD/MM/YYYY HH:mm"),
    },
  ];

  return (
    <>
      <S.PageWrap>
        <S.Panel>
          <S.TableWrap>
            <Table
              rowKey="id"
              loading={allOrders.loading}
              columns={columns}
              dataSource={orders}
              scroll={{ x: 1100 }}
              expandable={{
                expandedRowRender: (record) => (
                  <div>
                    {(record.products || []).map((item) => (
                      <div key={`${record.id}-${item.id}`}>
                        {item.name} x{item.quantity} {item.option ? `(${item.option})` : ""}
                      </div>
                    ))}
                  </div>
                ),
              }}
            />
          </S.TableWrap>
        </S.Panel>
      </S.PageWrap>
    </>
  );
};

export default OrderManagePage;
