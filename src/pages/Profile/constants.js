import {
  HomeOutlined,
  IdcardOutlined,
  HistoryOutlined,
  HeartOutlined,
  EnvironmentOutlined,
  CreditCardOutlined,
  KeyOutlined,
} from "@ant-design/icons";

export const BREADCRUMB = [
  {
    title: "Trang chủ",
    path: "/",
    icon: <HomeOutlined />,
  },
  {
    title: "Trang cá nhân",
    path: "/products",
  },
];

export const PROFILE_TABS = [
  // {
  //   title: "Thông tin cá nhân",
  //   icon: <IdcardOutlined />,
  //   value: 0,
  // },
  {
    title: "Lịch sử đơn hàng",
    icon: <HistoryOutlined />,
    value: 1,
  },
  // {
  //   title: "Sản phẩm yêu thích",
  //   icon: <HeartOutlined />,
  //   value: 2,
  // },
  // {
  //   title: "Sổ địa chỉ",
  //   icon: <EnvironmentOutlined />,
  //   value: 3,
  // },
  // {
  //   title: "Thông tin thanh toán",
  //   icon: <CreditCardOutlined />,
  //   value: 4,
  // },
  {
    title: "Đổi mật khẩu",
    icon: <KeyOutlined />,
    value: 5,
  },
];
