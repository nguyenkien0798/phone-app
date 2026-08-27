import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory } from 'react-router-dom';
import { Button, Space, Dropdown, Menu, Drawer, Input } from 'antd'
import { ShoppingCartOutlined, UserOutlined, MenuOutlined } from '@ant-design/icons'
import { ROUTER } from '../../../constants/router';
import { logoutAction } from '../../../redux/slices/auth.slice'
import { 
  HomeOutlined, 
  StarOutlined, 
  ContactsOutlined, 
  MobileOutlined,
  SearchOutlined
   } from '@ant-design/icons'

import logo from '../../../assets/images/brand/phone-store-mark.svg'
import * as S from "./styles";

const Toolbar = () => {
  const history = useHistory();

  const [visible, setVisible] = useState(false);
  const [keyword, setKeyword] = useState("");

  const { userInfo } = useSelector((state) => state.authReducer);
  const { cartList } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    dispatch(logoutAction());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const search = keyword.trim();
    history.push({
      pathname: ROUTER.USER.PRODUCT_LIST,
      search: search ? `?q=${encodeURIComponent(search)}` : "",
    });
  }

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <S.Toolbar>
        <S.ToolbarIconMenu>
          <MenuOutlined onClick={showDrawer} style={{ color: "#17212b" }}/>
          <Drawer title="Menu" placement="right" onClose={onClose} visible={visible} width={300}>
            <S.DrawerSearch>
              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                  onClose();
                }}
              >
                <Input
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="Tìm sản phẩm..."
                  prefix={<SearchOutlined />}
                />
                <Button htmlType="submit" aria-label="Tìm kiếm" type="primary" block>
                  Tìm kiếm
                </Button>
              </form>
            </S.DrawerSearch>
            <S.DrawerNav>
              <Link to={ROUTER.USER.HOME} onClick={onClose}><HomeOutlined /> Trang chủ</Link>
              <Link to={ROUTER.USER.PRODUCT_LIST} onClick={onClose}><MobileOutlined /> Sản phẩm</Link>
              <Link to={ROUTER.USER.ABOUT} onClick={onClose}><StarOutlined /> Giới thiệu</Link>
              <Link to={ROUTER.USER.CONTACT} onClick={onClose}><ContactsOutlined /> Liên hệ</Link>
            </S.DrawerNav>
          </Drawer>
        </S.ToolbarIconMenu>
        <S.ToolbarLogo>
          <Link to={ROUTER.USER.HOME}>
              <img src={logo} alt="Volt Store" />
              <h3>Volt Store</h3>
          </Link>
        </S.ToolbarLogo>
        <S.ToolbarSearch>
          <form onSubmit={handleSubmit}>
            <Input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Tìm iPhone, MacBook, iPad, AirPods, Apple Watch..."
              prefix={<SearchOutlined />}
            />
            <Button htmlType="submit" aria-label="Tìm kiếm"><SearchOutlined /></Button>
          </form>
        </S.ToolbarSearch>
        <S.ToolbarItem>                    
          <S.Badge count={cartList.data.length}>
            <ul>
              <li className="ListMenu">
                <Link to={ROUTER.USER.ABOUT}>GIỚI THIỆU</Link>
              </li>
              <li className="ListMenu">
                <Link to={ROUTER.USER.CONTACT}>LIÊN HỆ</Link>
              </li>
              <Button
                icon={<ShoppingCartOutlined />}
                type="text"
                onClick={() => history.push(ROUTER.USER.CART)}
              ></Button>
            </ul>
          </S.Badge>
          {userInfo.data.name ? (
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item key="1" onClick={() => history.push(ROUTER.USER.PROFILE)}>My Profile</Menu.Item>
                  <Menu.Item key="2" onClick={() => handleLogout()}>
                    Logout
                  </Menu.Item>
                </Menu>
              }
            >
              <Space>
                <UserOutlined style={{ color: "#17212b" }} />
                <S.Username style={{ color: "#17212b" }}>{userInfo.data.name}</S.Username>
              </Space>
            </Dropdown>
          ) : (
            <S.LoginItem>              
                <Button onClick={() => history.push(ROUTER.LOGIN)}>
                  <span className="login-full">Đăng nhập</span>
                  <span className="login-short">Login</span>
                </Button>              
            </S.LoginItem>
          )}
        </S.ToolbarItem>
    </S.Toolbar>
  )
}

export default Toolbar
