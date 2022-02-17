import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory } from 'react-router-dom';
import { Button, Space, Dropdown, Menu, Drawer, Input } from 'antd'
import { ShoppingCartOutlined, UserOutlined, MenuOutlined } from '@ant-design/icons'
import { ROUTER } from '../../../constants/router';
import { logoutAction } from '../../../redux/actions'
import { 
  HomeOutlined, 
  StarOutlined, 
  ContactsOutlined, 
  MobileOutlined,
  SearchOutlined
   } from '@ant-design/icons'

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

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(ROUTER.USER.PRODUCT_LIST)
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
          <MenuOutlined onClick={showDrawer} style={{ color: "#fff" }}/>
          <Drawer title="Menu" placement="right" onClose={onClose} visible={visible}>
            <Link to={ROUTER.USER.HOME} style={{ color: "#cd1817" }} ><HomeOutlined />TRANG CHỦ</Link><br/>
            <Link to={ROUTER.USER.PRODUCT_LIST} style={{ color: "#cd1817" }} ><MobileOutlined />SẢN PHẨM</Link><br/>
            <Link to={ROUTER.USER.ABOUT} style={{ color: "#cd1817" }} ><StarOutlined />GIỚI THIỆU</Link><br/>
            <Link to={ROUTER.USER.CONTACT} style={{ color: "#cd1817" }} ><ContactsOutlined />LIÊN HỆ</Link>
          </Drawer>
        </S.ToolbarIconMenu>
        <S.ToolbarLogo>
          <Link to={ROUTER.USER.HOME}>
              <h3>PhoneStore</h3>
          </Link>
        </S.ToolbarLogo>
        {/* <S.ToolbarMenu>
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
        </S.ToolbarMenu> */}
        <S.ToolbarSearch>
          <form onSubmit={handleSubmit}>
            <Input size="large" placeholder="Nhập tên điện thoại, laptop, phụ kiện... cần tìm" prefix={<SearchOutlined />} />
            <Button><SearchOutlined onClick={() => history.push(ROUTER.USER.PRODUCT_LIST)}/></Button>
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
                <UserOutlined style={{ color: "#fff" }} />
                <S.Username style={{ color: "#fff" }}>{userInfo.data.name}</S.Username>
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
