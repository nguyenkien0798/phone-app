import {
  HomeOutlined,
  HistoryOutlined,
  KeyOutlined,
  HeartOutlined,
  UserOutlined,
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
    title: "Yêu thích",
    icon: <HeartOutlined />,
    value: 2,
  },
  {
    title: "Thông tin tài khoản",
    icon: <UserOutlined />,
    value: 3,
  },
  {
    title: "Đổi mật khẩu",
    icon: <KeyOutlined />,
    value: 5,
  },
];

