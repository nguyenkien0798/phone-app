import React, { useState } from "react";
import LoginForm from "./Login/LoginForm";
import RegisterForm from "./Register/RegisterForm";
import { CheckCircleFilled, SafetyCertificateFilled, CarFilled } from "@ant-design/icons";
import logo from "../../assets/images/brand/phone-store-mark.svg";

import { USER_LIST } from "../../constants/user";

import * as S from "./styles";

const LoginAndRegisterPage = () => {
  const [userList, setUserList] = useState(USER_LIST);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <S.LoginContainer>
      <S.LoginGlow />

      <S.LoginBrand>
        <S.BrandMark aria-hidden />
        <S.BrandEyebrow>Volt Store</S.BrandEyebrow>
        <S.BrandTitle>
          Công nghệ
          <span>theo cách của bạn.</span>
        </S.BrandTitle>
        <S.BrandDescription>
          Đăng nhập để theo dõi đơn hàng, lưu sản phẩm yêu thích và nhận ưu đãi
          độc quyền từ hệ sinh thái Apple chính hãng.
        </S.BrandDescription>
        <S.BrandPerks>
          <span>
            <CheckCircleFilled /> Chính hãng 100%
          </span>
          <span>
            <SafetyCertificateFilled /> Bảo hành tận tâm
          </span>
          <span>
            <CarFilled /> Giao hàng toàn quốc
          </span>
        </S.BrandPerks>
      </S.LoginBrand>

      <S.MobileBrand>
        <img src={logo} alt="Volt Store" />
        <div>
          <strong>Volt Store</strong>
          <small>Công nghệ trong tầm tay</small>
        </div>
      </S.MobileBrand>

      <S.LoginForm>
        <S.FormTop>
          <S.LoginHeader>
            <S.LoginTitle
              type="button"
              active={isLogin}
              onClick={() => setIsLogin(true)}
            >
              Đăng nhập
            </S.LoginTitle>
            <S.LoginTitle
              type="button"
              active={!isLogin}
              onClick={() => setIsLogin(false)}
            >
              Đăng ký
            </S.LoginTitle>
          </S.LoginHeader>

          <S.FormIntro>
            <S.FormKicker>{isLogin ? "Chào mừng trở lại" : "Tạo tài khoản"}</S.FormKicker>
            <S.FormHeading>
              {isLogin ? "Đăng nhập Volt Store" : "Gia nhập Volt Store"}
            </S.FormHeading>
            <S.FormSubheading>
              {isLogin
                ? "Theo dõi đơn hàng và tiếp tục mua sắm."
                : "Nhận ưu đãi dành riêng cho thành viên."}
            </S.FormSubheading>
          </S.FormIntro>
        </S.FormTop>

        <S.FormScroll>
          {isLogin ? (
            <LoginForm userList={userList} />
          ) : (
            <RegisterForm
              userList={userList}
              setUserList={setUserList}
              setIsLogin={setIsLogin}
            />
          )}

          <S.FormFooterNote>
            {isLogin ? (
              <>
                Chưa có tài khoản?{" "}
                <button type="button" onClick={() => setIsLogin(false)}>
                  Đăng ký ngay
                </button>
              </>
            ) : (
              <>
                Đã có tài khoản?{" "}
                <button type="button" onClick={() => setIsLogin(true)}>
                  Đăng nhập
                </button>
              </>
            )}
          </S.FormFooterNote>
        </S.FormScroll>
      </S.LoginForm>
    </S.LoginContainer>
  );
};

export default LoginAndRegisterPage;
