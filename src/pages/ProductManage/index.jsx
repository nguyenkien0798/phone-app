import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Table,
  Button,
  Input,
  Select,
  Modal,
  Form,
  InputNumber,
  Switch,
  Tag,
  Popconfirm,
  notification,
  Empty,
} from "antd";
import {
  PlusOutlined,
  SearchOutlined,
  EditOutlined,
  DeleteOutlined,
  AppstoreOutlined,
  ReloadOutlined,
} from "@ant-design/icons";

import TopWrapper from "../../components/TopWrapper";
import { ROUTER } from "../../constants/router";
import {
  getProductListAction,
  createProductAction,
  updateProductAction,
  deleteProductAction,
} from "../../redux/slices/product.slice";
import { getCategoryListAction } from "../../redux/slices/category.slice";
import { BREADCRUMB, EMPTY_PRODUCT } from "./constants";
import * as S from "./styles";

const { Option } = Select;

const ProductManagePage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const { userInfo } = useSelector((state) => state.authReducer);
  const { productList, actionLoading } = useSelector((state) => state.productReducer);
  const { categoryList } = useSelector((state) => state.categoryReducer);

  const [keyword, setKeyword] = useState("");
  const [categoryFilter, setCategoryFilter] = useState(undefined);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const imageWatch = Form.useWatch("image", form);

  const isAdmin = userInfo.data?.role === "admin";
  const isEdit = Boolean(editingProduct?.id);

  const fetchProducts = (nextPage = page, nextSize = pageSize, nextKeyword = keyword) => {
    dispatch(
      getProductListAction({
        limit: nextSize,
        page: nextPage,
        keyword: nextKeyword.trim() || undefined,
        categoryFilter: categoryFilter
          ? [{ id: categoryFilter }]
          : [],
      })
    );
  };

  useEffect(() => {
    const token = localStorage.getItem("userInfo");
    if (!token) {
      history.replace(ROUTER.LOGIN);
      return;
    }
    if (!userInfo.data?.id) return;
    if (!isAdmin) {
      notification.warning({
        message: "Không có quyền truy cập",
        description: "Chỉ tài khoản quản trị viên mới quản lý sản phẩm.",
      });
      history.replace(ROUTER.USER.HOME);
      return;
    }
    dispatch(getCategoryListAction());
    fetchProducts(1, pageSize, "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo.data?.id, userInfo.data?.role]);

  useEffect(() => {
    if (!isAdmin) return;
    setPage(1);
    fetchProducts(1, pageSize, keyword);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryFilter]);

  const categories = Array.isArray(categoryList.data) ? categoryList.data : [];
  const products = Array.isArray(productList.data) ? productList.data : [];
  const total = productList.meta?.total || products.length;

  const categoryMap = useMemo(() => {
    const map = {};
    categories.forEach((item) => {
      map[item.id] = item.name;
    });
    return map;
  }, [categories]);

  const openCreateModal = () => {
    setEditingProduct(null);
    form.setFieldsValue(EMPTY_PRODUCT);
    setModalOpen(true);
  };

  const openEditModal = (record) => {
    setEditingProduct(record);
    form.setFieldsValue({
      name: record.name,
      price: record.price,
      image: record.image,
      categoryId: record.categoryId,
      isNew: Boolean(record.isNew),
      screen: record.screen || "",
      camera: record.camera || "",
      ram: record.ram || "",
      rom: record.rom || "",
      cpu: record.cpu || "",
      gpu: record.gpu || "",
      pin: record.pin || "",
      sim: record.sim || "",
      hdh: record.hdh || "",
    });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingProduct(null);
    form.resetFields();
  };

  const handleSubmit = (values) => {
    const payload = {
      name: values.name.trim(),
      price: Number(values.price),
      image: values.image.trim(),
      categoryId: Number(values.categoryId),
      isNew: Boolean(values.isNew),
      screen: values.screen?.trim() || "",
      camera: values.camera?.trim() || "",
      ram: values.ram?.trim() || "",
      rom: values.rom?.trim() || "",
      cpu: values.cpu?.trim() || "",
      gpu: values.gpu?.trim() || "",
      pin: values.pin?.trim() || "",
      sim: values.sim?.trim() || "",
      hdh: values.hdh?.trim() || "",
      updatedAt: Date.now(),
    };

    if (isEdit) {
      dispatch(
        updateProductAction({
          id: editingProduct.id,
          data: payload,
          callback: {
            goBackList: () => {
              notification.success({ message: "Cập nhật sản phẩm thành công" });
              closeModal();
              fetchProducts(page, pageSize, keyword);
            },
          },
        })
      );
    } else {
      dispatch(
        createProductAction({
          data: payload,
          callback: {
            goBackList: () => {
              notification.success({ message: "Thêm sản phẩm thành công" });
              closeModal();
              setPage(1);
              fetchProducts(1, pageSize, keyword);
            },
          },
        })
      );
    }
  };

  const handleDelete = (id) => {
    dispatch(
      deleteProductAction({
        id,
        callback: {
          refreshList: () => {
            notification.success({ message: "Đã xóa sản phẩm" });
            const nextPage =
              products.length === 1 && page > 1 ? page - 1 : page;
            setPage(nextPage);
            fetchProducts(nextPage, pageSize, keyword);
          },
        },
      })
    );
  };

  const columns = [
    {
      title: "Sản phẩm",
      key: "product",
      render: (_, record) => (
        <div className="product-cell">
          <div className="thumb">
            <img src={record.image} alt={record.name} />
          </div>
          <div>
            <div className="name">{record.name}</div>
            <div className="meta">ID #{record.id}</div>
          </div>
        </div>
      ),
    },
    {
      title: "Danh mục",
      dataIndex: "categoryId",
      key: "categoryId",
      width: 140,
      render: (id, record) => {
        const tone = S.getCategoryTone(id);
        const label =
          record.category?.name || categoryMap[id] || `Category #${id}`;
        return (
          <span
            className="category-chip"
            style={{
              background: tone.bg,
              color: tone.text,
              borderColor: tone.border,
            }}
          >
            {label}
          </span>
        );
      },
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      width: 150,
      align: "right",
      render: (price) => (
        <span className="price-pill">
          {Number(price || 0).toLocaleString("vi-VN")}₫
        </span>
      ),
    },
    {
      title: "Trạng thái",
      dataIndex: "isNew",
      key: "isNew",
      width: 110,
      render: (isNew) =>
        isNew ? (
          <Tag className="tag-new">New</Tag>
        ) : (
          <Tag className="tag-old">Cũ</Tag>
        ),
    },
    {
      title: "Cấu hình",
      key: "specs",
      ellipsis: true,
      render: (_, record) => (
        <span className="specs-text">
          {[record.ram, record.rom, record.cpu].filter(Boolean).join(" · ") || "—"}
        </span>
      ),
    },
    {
      title: "Thao tác",
      key: "actions",
      width: 120,
      fixed: "right",
      render: (_, record) => (
        <div className="action-btns">
          <button
            type="button"
            className="btn-edit"
            onClick={() => openEditModal(record)}
            aria-label="Sửa"
          >
            <EditOutlined />
          </button>
          <Popconfirm
            title="Xóa sản phẩm này?"
            okText="Xóa"
            cancelText="Hủy"
            onConfirm={() => handleDelete(record.id)}
          >
            <button type="button" className="btn-delete" aria-label="Xóa">
              <DeleteOutlined />
            </button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  if (!isAdmin) return null;

  return (
    <>
      <TopWrapper
        titlePage="Quản lý sản phẩm"
        subtitle="Thêm, sửa, xóa sản phẩm theo dữ liệu trong hệ thống"
        icon={<AppstoreOutlined />}
        breadcrumb={BREADCRUMB}
        height={240}
      />

      <S.PageWrap>
        <S.StatsRow>
          <S.StatCard $bg="linear-gradient(135deg, #ff6a55 0%, #d92d35 100%)">
            <div className="stat-label">Tổng sản phẩm</div>
            <div className="stat-value">{total}</div>
          </S.StatCard>
          <S.StatCard $bg="linear-gradient(135deg, #38bdf8 0%, #2563eb 100%)">
            <div className="stat-label">Danh mục</div>
            <div className="stat-value">{categories.length}</div>
          </S.StatCard>
          <S.StatCard $bg="linear-gradient(135deg, #34d399 0%, #059669 100%)">
            <div className="stat-label">Trang hiện tại</div>
            <div className="stat-value">
              {page}/{Math.max(1, Math.ceil(total / pageSize))}
            </div>
          </S.StatCard>
        </S.StatsRow>

        <S.Panel>
          <S.PanelHeader>
            <div className="title-wrap">
              <h2>Danh sách sản phẩm</h2>
              <p>CRUD đầy đủ các field: tên, giá, ảnh, danh mục, isNew và thông số kỹ thuật.</p>
            </div>
            <div className="actions">
              <Button className="btn-refresh" icon={<ReloadOutlined />} onClick={() => fetchProducts()}>
                Làm mới
              </Button>
              <Button type="primary" icon={<PlusOutlined />} onClick={openCreateModal}>
                Thêm sản phẩm
              </Button>
            </div>
          </S.PanelHeader>

          <S.ToolbarRow>
            <Input
              className="search-input"
              allowClear
              prefix={<SearchOutlined />}
              placeholder="Tìm theo tên sản phẩm..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onPressEnter={() => {
                setPage(1);
                fetchProducts(1, pageSize, keyword);
              }}
            />
            <Select
              allowClear
              placeholder="Lọc danh mục"
              style={{ width: 180 }}
              value={categoryFilter}
              onChange={(value) => setCategoryFilter(value)}
            >
              {categories.map((item) => (
                <Option key={item.id} value={item.id}>
                  {item.name}
                </Option>
              ))}
            </Select>
            <Button
              type="default"
              onClick={() => {
                setPage(1);
                fetchProducts(1, pageSize, keyword);
              }}
            >
              Tìm kiếm
            </Button>
          </S.ToolbarRow>

          <S.TableWrap>
            <Table
              rowKey="id"
              loading={productList.loading || actionLoading.deleteProduct}
              columns={columns}
              dataSource={products}
              scroll={{ x: 980 }}
              locale={{
                emptyText: (
                  <Empty description="Chưa có sản phẩm nào" />
                ),
              }}
              pagination={{
                current: page,
                pageSize,
                total,
                showSizeChanger: true,
                showTotal: (value) => `${value} sản phẩm`,
                onChange: (nextPage, nextSize) => {
                  setPage(nextPage);
                  setPageSize(nextSize);
                  fetchProducts(nextPage, nextSize, keyword);
                },
              }}
            />
          </S.TableWrap>
        </S.Panel>
      </S.PageWrap>

      <Modal
        title={isEdit ? `Sửa sản phẩm #${editingProduct.id}` : "Thêm sản phẩm mới"}
        visible={modalOpen}
        onCancel={closeModal}
        onOk={() => form.submit()}
        okText={isEdit ? "Cập nhật" : "Tạo mới"}
        cancelText="Hủy"
        width={720}
        confirmLoading={
          actionLoading.createProduct || actionLoading.updateProduct
        }
        destroyOnClose
      >
        <Form
          form={form}
          layout="vertical"
          requiredMark={false}
          initialValues={EMPTY_PRODUCT}
          onFinish={handleSubmit}
        >
          <S.FormGrid>
            <Form.Item
              className="full"
              label="Tên sản phẩm"
              name="name"
              rules={[{ required: true, message: "Nhập tên sản phẩm" }]}
            >
              <Input placeholder="VD: iPhone 15 Pro Max" />
            </Form.Item>

            <Form.Item
              label="Giá (VNĐ)"
              name="price"
              rules={[{ required: true, message: "Nhập giá sản phẩm" }]}
            >
              <InputNumber
                min={0}
                step={100000}
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                placeholder="25000000"
              />
            </Form.Item>

            <Form.Item
              label="Danh mục"
              name="categoryId"
              rules={[{ required: true, message: "Chọn danh mục" }]}
            >
              <Select placeholder="Chọn danh mục">
                {categories.map((item) => (
                  <Option key={item.id} value={item.id}>
                    {item.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              className="full"
              label="URL hình ảnh"
              name="image"
              rules={[
                { required: true, message: "Nhập URL ảnh" },
                { type: "url", message: "URL không hợp lệ" },
              ]}
            >
              <Input placeholder="https://..." />
            </Form.Item>

            {imageWatch ? (
              <div className="full">
                <img className="preview-image" src={imageWatch} alt="preview" />
              </div>
            ) : null}

            <Form.Item
              label="Sản phẩm mới"
              name="isNew"
              valuePropName="checked"
            >
              <Switch checkedChildren="New" unCheckedChildren="Cũ" />
            </Form.Item>

            <Form.Item label="Hệ điều hành" name="hdh">
              <Input placeholder="VD: iOS 17" />
            </Form.Item>

            <Form.Item label="Màn hình" name="screen" className="full">
              <Input placeholder="Kích thước, tấm nền, độ phân giải..." />
            </Form.Item>

            <Form.Item label="Camera" name="camera" className="full">
              <Input placeholder="Thông số camera trước/sau" />
            </Form.Item>

            <Form.Item label="RAM" name="ram">
              <Input placeholder="VD: 8 GB" />
            </Form.Item>

            <Form.Item label="ROM / Bộ nhớ" name="rom">
              <Input placeholder="VD: 256 GB" />
            </Form.Item>

            <Form.Item label="CPU" name="cpu">
              <Input placeholder="VD: A17 Pro" />
            </Form.Item>

            <Form.Item label="GPU" name="gpu">
              <Input placeholder="VD: Apple GPU 6 nhân" />
            </Form.Item>

            <Form.Item label="Pin" name="pin">
              <Input placeholder="VD: 4422 mAh" />
            </Form.Item>

            <Form.Item label="SIM" name="sim">
              <Input placeholder="VD: 1 eSIM, 1 Nano SIM" />
            </Form.Item>
          </S.FormGrid>
        </Form>
      </Modal>
    </>
  );
};

export default ProductManagePage;
