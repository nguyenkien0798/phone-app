import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory } from 'react-router-dom';
import { Button, Space, Dropdown, Menu, Drawer } from 'antd'
import { ShoppingCartOutlined, UserOutlined, MenuOutlined } from '@ant-design/icons'
import { ROUTER } from '../../../constants/router';
import { logoutAction } from '../../../redux/actions'

import logo from '../../../assets/images/logo.png'
import * as S from "./styles";
import 'bootstrap/dist/css/bootstrap.min.css';

const Toolbar = () => {
  const history = useHistory();

  const [visible, setVisible] = useState(false);

  const { userInfo } = useSelector((state) => state.authReducer);
  const { cartList } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    dispatch(logoutAction());
  };

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <S.Toolbar>
        <S.ToolbarIconMenu>
          <MenuOutlined onClick={showDrawer} style={{ color: "#2f54eb" }}/>
          <Drawer title="Menu" placement="right" onClose={onClose} visible={visible}>
            <Link to={ROUTER.USER.HOME} style={{ color: "#2f54eb" }} >TRANG CHỦ</Link><br/>
            <Link to={ROUTER.USER.PRODUCT_LIST} style={{ color: "#2f54eb" }} >SẢN PHẨM</Link><br/>
            <Link to={ROUTER.USER.ABOUT} style={{ color: "#2f54eb" }} >GIỚI THIỆU</Link><br/>
            <Link to={ROUTER.USER.CONTACT} style={{ color: "#2f54eb" }} >LIÊN HỆ</Link>
          </Drawer>
        </S.ToolbarIconMenu>
        <S.ToolbarLogo>
          <Link to={ROUTER.USER.HOME}>
              <h3>PHONE STORE</h3>
          </Link>
        </S.ToolbarLogo>
        <S.ToolbarMenu>
          <ul>
            <li>
              <Link to={ROUTER.USER.HOME}>TRANG CHỦ</Link>
            </li>
            <li>
              <Link to={ROUTER.USER.PRODUCT_LIST}>SẢN PHẨM</Link>
            </li>            
            <li>
              <Link to={ROUTER.USER.ABOUT}>GIỚI THIỆU</Link>
            </li>
            <li>
              <Link to={ROUTER.USER.CONTACT}>LIÊN HỆ</Link>
            </li>
          </ul>
        </S.ToolbarMenu>
        <S.ToolbarItem>                    
          <S.Badge count={cartList.data.length}>
            <Button
              icon={<ShoppingCartOutlined style={{ color: "#2f54eb" }} />}
              type="text"
              onClick={() => history.push(ROUTER.USER.CART)}
            ></Button>
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
                <UserOutlined style={{ color: "#2f54eb" }} />
                <S.Username style={{ color: "#2f54eb" }}>{userInfo.data.name}</S.Username>
              </Space>
            </Dropdown>
          ) : (
            <S.LoginItem>              
                <Button onClick={() => history.push(ROUTER.LOGIN)}>Đăng nhập</Button>              
            </S.LoginItem>
          )}
        </S.ToolbarItem>
    </S.Toolbar>
  )
}

export default Toolbar
