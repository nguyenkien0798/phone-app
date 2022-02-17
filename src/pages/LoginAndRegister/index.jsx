import React, { useState } from "react";
import LoginForm from "./Login/LoginForm";
import RegisterForm from "./Register/RegisterForm";

import { USER_LIST } from '../../constants/user'

import * as S from './styles'

const LoginAndRegisterPage = () => {
  const [userList, setUserList] = useState(USER_LIST);
  const [isLogin, setIsLogin] = useState(true);

  // useEffect(() => {
  //   // Mounting
  // }, [])

  // useEffect(() => {
  //   // Mounting
  // }, [isLogin])

  // useEffect(() => {
  //   return () => {
  //     // UnMounting
  //   }
  // }, [])

  return (
    <S.LoginContainer>
      <S.LoginForm>
        <S.LoginHeader>
          <S.LoginTitle
            active={isLogin}
            onClick={() => setIsLogin(true)}
          >
            Login
          </S.LoginTitle>
          <S.LoginTitle
            active={!isLogin}
            onClick={() => setIsLogin(false)}
          >
            Register
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
