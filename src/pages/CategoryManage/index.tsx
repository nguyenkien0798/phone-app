import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Input, Popconfirm } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import {
  getCategoryListAction,
  createCategoryAction,
  updateCategoryAction,
  deleteCategoryAction,
} from "../../redux/slices/category.slice";
import type { Category } from "../../types";
import * as S from "../ProductManage/styles";

const CategoryManagePage = () => {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Category | null>(null);
  const { categoryList, actionLoading } = useAppSelector((state) => state.categoryReducer);
  const categories = Array.isArray(categoryList.data) ? categoryList.data : [];

  useEffect(() => {
    dispatch(getCategoryListAction());
  }, [dispatch]);

  const closeModal = () => {
    setOpen(false);
    setEditing(null);
    form.resetFields();
  };

  const handleSubmit = (values) => {
    if (editing) {
      dispatch(
        updateCategoryAction({
          id: editing.id,
          data: { name: values.name.trim() },
          callback: { success: closeModal },
        })
      );
    } else {
      dispatch(
        createCategoryAction({
          data: { name: values.name.trim() },
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
              <h2>Danh mục sản phẩm</h2>
              <p>Các danh mục dùng để lọc iPhone, Mac, iPad, Watch...</p>
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
              Thêm danh mục
            </Button>
          </S.PanelHeader>
          <S.TableWrap>
            <Table
              rowKey="id"
              loading={categoryList.loading}
              dataSource={categories}
              columns={[
                { title: "ID", dataIndex: "id", width: 80 },
                { title: "Tên danh mục", dataIndex: "name" },
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
                          form.setFieldsValue({ name: record.name });
                          setOpen(true);
                        }}
                      >
                        Sửa
                      </button>
                      <Popconfirm
                        title="Xóa danh mục này?"
                        onConfirm={() => dispatch(deleteCategoryAction({ id: record.id }))}
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
        title={editing ? "Sửa danh mục" : "Thêm danh mục"}
        visible={open}
        onCancel={closeModal}
        onOk={() => form.submit()}
        confirmLoading={actionLoading.createCategory || actionLoading.updateCategory}
        okText="Lưu"
        cancelText="Hủy"
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label="Tên danh mục"
            name="name"
            rules={[{ required: true, message: "Nhập tên danh mục" }]}
          >
            <Input placeholder="VD: iPhone" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CategoryManagePage;
