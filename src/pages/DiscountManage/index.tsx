import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Input, InputNumber, Select, DatePicker, Popconfirm, Tag } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import {
  getDiscountListAction,
  createDiscountAction,
  updateDiscountAction,
  deleteDiscountAction,
} from "../../redux/slices/discount.slice";
import type { Discount } from "../../types";
import * as S from "../ProductManage/styles";

const DiscountManagePage = () => {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Discount | null>(null);
  const { discountList, actionLoading } = useAppSelector((state) => state.discountReducer);
  const discounts = Array.isArray(discountList.data) ? discountList.data : [];

  useEffect(() => {
    dispatch(getDiscountListAction());
  }, [dispatch]);

  const closeModal = () => {
    setOpen(false);
    setEditing(null);
    form.resetFields();
  };

  const handleSubmit = (values) => {
    const payload = {
      name: values.name.trim(),
      code: values.code.trim().toUpperCase(),
      discountType: values.discountType,
      discountValue: Number(values.discountValue),
      endDate: values.endDate.valueOf(),
    };
    if (editing) {
      dispatch(
        updateDiscountAction({
          id: editing.id,
          data: payload,
          callback: { success: closeModal },
        })
      );
    } else {
      dispatch(
        createDiscountAction({
          data: payload,
          callback: { success: closeModal },
        })
      );
    }
  };

  return (
    <>
      <S.PageWrap>
        <S.Panel>
          <S.PanelHeader>
            <div className="title-wrap">
              <h2>Danh sách voucher</h2>
              <p>Mã còn hạn mới áp dụng được khi thanh toán.</p>
            </div>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => {
                setEditing(null);
                form.resetFields();
                setOpen(true);
              }}
            >
              Thêm mã
            </Button>
          </S.PanelHeader>
          <S.TableWrap>
            <Table
              rowKey="id"
              loading={discountList.loading}
              dataSource={discounts}
              columns={[
                { title: "Mã", dataIndex: "code", render: (code) => <Tag color="red">{code}</Tag> },
                { title: "Tên", dataIndex: "name" },
                {
                  title: "Giá trị",
                  render: (_, record) =>
                    record.discountType === "percent"
                      ? `${record.discountValue}%`
                      : `${Number(record.discountValue || 0).toLocaleString("vi-VN")}₫`,
                },
                {
                  title: "Hết hạn",
                  dataIndex: "endDate",
                  render: (value) => moment(value).format("DD/MM/YYYY"),
                },
                {
                  title: "Trạng thái",
                  render: (_, record) =>
                    Number(record.endDate) > Date.now() ? (
                      <Tag color="green">Còn hạn</Tag>
                    ) : (
                      <Tag>Hết hạn</Tag>
                    ),
                },
                {
                  title: "Thao tác",
                  width: 180,
                  render: (_, record) => (
                    <div className="action-btns">
                      <button
                        type="button"
                        className="btn-edit"
                        onClick={() => {
                          setEditing(record);
                          form.setFieldsValue({
                            ...record,
                            endDate: moment(record.endDate),
                          });
                          setOpen(true);
                        }}
                      >
                        Sửa
                      </button>
                      <Popconfirm
                        title="Xóa mã này?"
                        onConfirm={() => dispatch(deleteDiscountAction({ id: record.id }))}
                      >
                        <button type="button" className="btn-delete">
                          Xóa
                        </button>
                      </Popconfirm>
                    </div>
                  ),
                },
              ]}
            />
          </S.TableWrap>
        </S.Panel>
      </S.PageWrap>

      <Modal
        title={editing ? "Sửa mã giảm giá" : "Thêm mã giảm giá"}
        visible={open}
        onCancel={closeModal}
        onOk={() => form.submit()}
        confirmLoading={actionLoading.createDiscount || actionLoading.updateDiscount}
        okText="Lưu"
        cancelText="Hủy"
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item label="Tên" name="name" rules={[{ required: true, message: "Nhập tên" }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Mã" name="code" rules={[{ required: true, message: "Nhập mã" }]}>
            <Input placeholder="KMGS25" />
          </Form.Item>
          <Form.Item label="Loại" name="discountType" rules={[{ required: true }]}>
            <Select>
              <Select.Option value="percent">Phần trăm</Select.Option>
              <Select.Option value="amount">Số tiền</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Giá trị" name="discountValue" rules={[{ required: true }]}>
            <InputNumber min={1} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item label="Hết hạn" name="endDate" rules={[{ required: true }]}>
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default DiscountManagePage;
