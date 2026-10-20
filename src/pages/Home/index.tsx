import React from "react";
import Slide from "./Slide";
import Brand from "./Brand";
import ProductListHome from "./ProductListHome";
import RegisterForm from "./RegisterForm";

import * as S from "./styles";

const Home = () => {
  return (
    <S.HomeContainer>
      <Slide />
      <Brand />
      <ProductListHome />
      <RegisterForm />
    </S.HomeContainer>
  );
};

export default Home;
