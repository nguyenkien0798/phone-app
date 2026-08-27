import React, { useState } from "react";
import LoginForm from "./Login/LoginForm";
import RegisterForm from "./Register/RegisterForm";
import { CheckCircleFilled, SafetyCertificateFilled, TruckFilled } from "@ant-design/icons";

import { USER_LIST } from '../../constants/user'

import * as S from './styles'

const LoginAndRegisterPage = () => {
  const [userList, setUserList] = useState(USER_LIST);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <S.LoginContainer>
      <S.LoginGlow />
      <S.LoginBrand>
        <S.BrandMark>V</S.BrandMark>
        <S.BrandEyebrow>VOLT STORE</S.BrandEyebrow>
        <S.BrandTitle>Công nghệ<br />theo cách của bạn.</S.BrandTitle>
        <S.BrandDescription>
          Khám phá hệ sinh thái Apple chính hãng, được tuyển chọn cho nhịp sống hiện đại.
        </S.BrandDescription>
        <S.BrandPerks>
          <span><CheckCircleFilled /> Chính hãng 100%</span>
          <span><SafetyCertificateFilled /> Bảo hành tận tâm</span>
          <span><TruckFilled /> Giao hàng toàn quốc</span>
        </S.BrandPerks>
      </S.LoginBrand>
      <S.LoginForm>
        <S.FormIntro>
          <S.FormKicker>{isLogin ? "CHÀO MỪNG TRỞ LẠI" : "BẮT ĐẦU HÀNH TRÌNH"}</S.FormKicker>
          <S.FormHeading>{isLogin ? "Đăng nhập tài khoản" : "Tạo tài khoản mới"}</S.FormHeading>
          <S.FormSubheading>
            {isLogin ? "Theo dõi đơn hàng và tiếp tục mua sắm." : "Đăng ký để nhận ưu đãi dành riêng cho bạn."}
          </S.FormSubheading>
        </S.FormIntro>
        <S.LoginHeader>
          <S.LoginTitle
            active={isLogin}
            onClick={() => setIsLogin(true)}
          >
            Đăng nhập
          </S.LoginTitle>
          <S.LoginTitle
            active={!isLogin}
            onClick={() => setIsLogin(false)}
          >
            Đăng ký
          </S.LoginTitle>
        </S.LoginHeader>
        {isLogin ? (
          <LoginForm userList={userList} />
        ) : (
          <RegisterForm userList={userList} setUserList={setUserList} setIsLogin={setIsLogin} />
        )}
      </S.LoginForm>
    </S.LoginContainer>
  );
};

export default LoginAndRegisterPage;
