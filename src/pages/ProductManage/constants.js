import {
  HomeOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";

export const BREADCRUMB = [
  {
    title: "Trang chủ",
    path: "/",
    icon: <HomeOutlined />,
  },
  {
    title: "Quản lý sản phẩm",
    path: "/admin/products",
    icon: <AppstoreOutlined />,
  },
];

export const PRODUCT_FIELDS = [
  { name: "name", label: "Tên sản phẩm", required: true },
  { name: "price", label: "Giá (VNĐ)", required: true, type: "number" },
  { name: "image", label: "URL hình ảnh", required: true },
  { name: "categoryId", label: "Danh mục", required: true, type: "category" },
  { name: "isNew", label: "Sản phẩm mới", type: "switch" },
  { name: "screen", label: "Màn hình" },
  { name: "camera", label: "Camera" },
  { name: "ram", label: "RAM" },
  { name: "rom", label: "ROM / Bộ nhớ" },
  { name: "cpu", label: "CPU" },
  { name: "gpu", label: "GPU" },
  { name: "pin", label: "Pin" },
  { name: "sim", label: "SIM" },
  { name: "hdh", label: "Hệ điều hành" },
];

export const EMPTY_PRODUCT = {
  name: "",
  price: undefined,
  image: "",
  categoryId: undefined,
  isNew: true,
  screen: "",
  camera: "",
  ram: "",
  rom: "",
  cpu: "",
  gpu: "",
  pin: "",
  sim: "",
  hdh: "",
};
