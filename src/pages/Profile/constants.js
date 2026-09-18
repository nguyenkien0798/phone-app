import {
  HomeOutlined,
  HistoryOutlined,
  KeyOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";

export const BREADCRUMB = [
  {
    title: "Trang chủ",
    path: "/",
    icon: <HomeOutlined />,
  },
  {
    title: "Trang cá nhân",
    path: "/profile",
  },
];

export const PROFILE_TABS = [
  {
    title: "Lịch sử đơn hàng",
    icon: <HistoryOutlined />,
    value: 1,
  },
  {
    title: "Đổi mật khẩu",
    icon: <KeyOutlined />,
    value: 5,
  },
];

export const ADMIN_PROFILE_TABS = [
  {
    title: "Quản lý sản phẩm",
    icon: <AppstoreOutlined />,
    value: "product-manage",
    path: "/admin/products",
  },
];
