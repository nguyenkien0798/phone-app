import React from 'react'
import TopWrapper from "../../components/TopWrapper";
import { BREADCRUMB } from "./constants";

import * as S from './styles';

const Contact = () => {
  return (
    <S.ContactContainer>
      <TopWrapper titlePage="Liên hệ" breadcrumb={BREADCRUMB} />
      <S.Container>
        <S.ContactContent>
          <h2>Phone Store</h2>
          <p>Website bán điện thoại trực tuyến</p>
        </S.ContactContent>
      </S.Container>
    </S.ContactContainer>
  )
}

export default Contact
