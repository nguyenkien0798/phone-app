import React, { useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import jwtDecode from "jwt-decode";
import type { JwtPayload, AuthStorage } from "./types";
import "moment/locale/vi";

import DefaultLayout from "./layouts/DefaultLayout";
import LoginRoute from "./layouts/LoginRoute"
import PrivateRoute from "./layouts/PrivateRoute"
import AdminRoute from "./layouts/AdminRoute"
import LoginAndRegisterPage from "./pages/LoginAndRegister"
import ProfilePage from "./pages/Profile"
import NotFoundPage from './pages/NotFound';

import HomePage from './pages/Home'
import ProductList from './pages/Product'
import ProductDetail from './pages/ProductDetail'
import CartPage from './pages/Cart'
import ContactPage from './pages/Contact'
import AboutPage from './pages/About'
import ProductManagePage from './pages/ProductManage'
import OrderManagePage from './pages/OrderManage'
import CategoryManagePage from './pages/CategoryManage'
import DiscountManagePage from './pages/DiscountManage'


import { ROUTER } from "./constants/router";

import { notification } from "antd";
import { getUserInfoAction } from "./redux/slices/auth.slice";
import { getCartListAction } from "./redux/slices/cart.slice";
import 'antd/dist/antd.css';
import './App.css';

notification.config({
  placement: "topRight",
  duration: 3.4,
  top: 88,
});

function App() {
  const location = useLocation();

  const { userInfo } = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    try {
      const localStorageUserInfo = JSON.parse(localStorage.getItem("userInfo") || "null") as AuthStorage | null;
      if (localStorageUserInfo?.accessToken) {
        const decodedUserData = jwtDecode<JwtPayload>(localStorageUserInfo.accessToken);
        dispatch(getUserInfoAction({ id: decodedUserData.sub }));
      }
    } catch (error) {
      localStorage.removeItem("userInfo");
    }
  }, []);

  useEffect(() => {
    if (userInfo.data.id) {
      dispatch(getCartListAction({ userId: userInfo.data.id }));
    }
  }, [userInfo.data.id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
      <Switch>
        <DefaultLayout 
          exact
          path={ROUTER.USER.HOME}
          component={HomePage}
        />
        <DefaultLayout 
          exact
          path={ROUTER.USER.PRODUCT_LIST}
          component={ProductList}
        />
        <DefaultLayout 
          exact
          path={ROUTER.USER.PRODUCT_DETAIL}
          component={ProductDetail}
        />
        <PrivateRoute 
          exact
          path={ROUTER.USER.CART}
          component={CartPage}
        />
        <DefaultLayout 
          exact
          path={ROUTER.USER.CONTACT}
          component={ContactPage}
        />
        <DefaultLayout 
          exact
          path={ROUTER.USER.ABOUT}
          component={AboutPage}
        />
        <PrivateRoute 
          exact
          path={ROUTER.USER.PROFILE}
          component={ProfilePage}
        />
        <AdminRoute
          exact
          path={ROUTER.USER.PRODUCT_MANAGE}
          component={ProductManagePage}
        />
        <AdminRoute
          exact
          path={ROUTER.USER.ORDER_MANAGE}
          component={OrderManagePage}
        />
        <AdminRoute
          exact
          path={ROUTER.USER.CATEGORY_MANAGE}
          component={CategoryManagePage}
        />
        <AdminRoute
          exact
          path={ROUTER.USER.DISCOUNT_MANAGE}
          component={DiscountManagePage}
        />
        <LoginRoute 
          exact
          path={ROUTER.LOGIN}
          component={LoginAndRegisterPage}
        />
        <DefaultLayout path={ROUTER.NOT_FOUND} component={NotFoundPage}/>
        <DefaultLayout component={NotFoundPage}/>
      </Switch>
  );
}

export default App;
