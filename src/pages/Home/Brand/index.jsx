import React from 'react'
import { useHistory } from 'react-router'
import { ROUTER } from '../../../constants/router'
import { Col, Row } from "antd"

import apple from '../../../assets/images/brand/apple.png'
import samsung from '../../../assets/images/brand/samsung.jpg'
import xiaomi from '../../../assets/images/brand/xiaomi.png'

import * as S from "./styles"

const Brand = () => {
  const history = useHistory();

  // const BrandList = [
  //   {
  //     image: {apple},
  //   }
  // ]

  return (
    <S.BrandContainer>
      <S.BrandTitle>
        <h3>Hãng sản xuất</h3>
      </S.BrandTitle>
        <S.BrandList>
          <S.BrandItem onClick={() => history.push(ROUTER.USER.PRODUCT_LIST)}>
            <img src={apple} alt="Hãng Apple" />
          </S.BrandItem>
          <S.BrandItem onClick={() => history.push(ROUTER.USER.PRODUCT_LIST)}>
            <img src={samsung} alt="Hãng Samsung" />
          </S.BrandItem>
          <S.BrandItem onClick={() => history.push(ROUTER.USER.PRODUCT_LIST)}>
            <img src={xiaomi} alt="Hãng Xiaomi" />
          </S.BrandItem>
        </S.BrandList>
    </S.BrandContainer>
  )
}

export default Brand
