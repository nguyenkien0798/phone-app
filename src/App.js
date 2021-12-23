import React, { Fragment , useEffect } from 'react';
import { BrowserRouter, useLocation, withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import "moment/locale/vi";

import DefaultLayout from "./layouts/DefaultLayout";
import LoginRoute from "./layouts/LoginRoute"
import LoginAndRegisterPage from "./pages/LoginAndRegister"
import ProfilePage from "./pages/Profile"
import NotFoundPage from './pages/NotFound';

import HomePage from './pages/Home'
import ProductList from './pages/Product'
import ProductDetail from './pages/ProductDetail'
import CartPage from './pages/Cart'
import ContactPage from './pages/Contact'
import AboutPage from './pages/About'


import { ROUTER } from "./constants/router";

import { getUserInfoAction, getCartListAction } from "./redux/actions";
import { Switch, Route } from 'react-router';

import './App.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const location = useLocation();

  const { userInfo } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const localStorageUserInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (localStorageUserInfo) {
      const decodedUserData = jwtDecode(localStorageUserInfo.accessToken);
      dispatch(getUserInfoAction({ id: decodedUserData.sub }));
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
        <DefaultLayout 
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
        <DefaultLayout 
          exact
          path={ROUTER.USER.PROFILE}
          component={ProfilePage}
        />
        <LoginRoute 
          exact
          path={ROUTER.LOGIN}
          component={LoginAndRegisterPage}
        />
        <Route path={ROUTER.NOT_FOUND} component={NotFoundPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
  );
}

export default App;
