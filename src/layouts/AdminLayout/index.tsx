import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  AppstoreOutlined,
  UnorderedListOutlined,
  AppstoreAddOutlined,
  TagsOutlined,
  ShopOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

import { ROUTER } from "../../constants/router";
import { logoutAction } from "../../redux/slices/auth.slice";
import logo from "../../assets/images/brand/phone-store-mark.svg";
import * as S from "./styles";

const ADMIN_NAV = [
  {
    path: ROUTER.USER.PRODUCT_MANAGE,
    title: "Sản phẩm",
    desc: "Thêm, sửa, xóa và tồn kho",
    icon: <AppstoreOutlined />,
  },
  {
    path: ROUTER.USER.ORDER_MANAGE,
    title: "Đơn hàng",
    desc: "Trạng thái giao hàng và thanh toán",
    icon: <UnorderedListOutlined />,
  },
  {
    path: ROUTER.USER.CATEGORY_MANAGE,
    title: "Danh mục",
    desc: "Nhóm sản phẩm trên shop",
    icon: <AppstoreAddOutlined />,
  },
  {
    path: ROUTER.USER.DISCOUNT_MANAGE,
    title: "Mã giảm giá",
    desc: "Voucher và hạn sử dụng",
    icon: <TagsOutlined />,
  },
];

const AdminLayout = ({ children }: { children?: React.ReactNode }) => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { userInfo } = useAppSelector((state) => state.authReducer);
  const current = ADMIN_NAV.find((item) => location.pathname === item.path) || ADMIN_NAV[0];

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    dispatch(logoutAction());
    history.push(ROUTER.LOGIN);
  };

  return (
    <S.Shell>
      <S.Sidebar>
        <S.Brand>
          <img src={logo} alt="Volt Store" />
          <div>
            <strong>Volt Admin</strong>
            <small>Bảng điều khiển</small>
          </div>
        </S.Brand>

        <S.Nav>
          {ADMIN_NAV.map((item) => (
            <S.NavLink
              key={item.path}
              type="button"
              $active={location.pathname === item.path}
              onClick={() => history.push(item.path)}
            >
              {item.icon}
              {item.title}
            </S.NavLink>
          ))}
        </S.Nav>

        <S.SideFooter>
          <button type="button" onClick={() => history.push(ROUTER.USER.HOME)}>
            <ShopOutlined /> Về cửa hàng
          </button>
          <button type="button" onClick={() => history.push(ROUTER.USER.PROFILE)}>
            <UserOutlined /> Trang cá nhân
          </button>
          <button type="button" onClick={handleLogout}>
            <LogoutOutlined /> Đăng xuất
          </button>
        </S.SideFooter>
      </S.Sidebar>

      <S.Main>
        <S.Topbar>
          <div>
            <h1>{current.title}</h1>
            <p>{current.desc}</p>
          </div>
          <S.UserChip>
            <UserOutlined />
            {userInfo.data.name || "Admin"}
          </S.UserChip>
        </S.Topbar>
        <S.Content>{children}</S.Content>
      </S.Main>
    </S.Shell>
  );
};

export default AdminLayout;
