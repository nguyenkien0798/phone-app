import React from 'react'
import { useHistory } from 'react-router';
import { Button, Row } from 'antd';

import TopWrapper from "../../components/TopWrapper";
import { BREADCRUMB } from "./constants";
import { ROUTER } from '../../constants/router';
import image_about from '../../assets/images/img_about.jpg'

import * as S from './styles'

const AboutPage = () => {
  const history = useHistory();

  return (
    <>
      <TopWrapper titlePage="Giới thiệu" breadcrumb={BREADCRUMB} />
      <S.AboutContainer>
        <S.AboutContent>
          <h3>Phone Store là website thương mại điện tử cung cấp các sản phẩm điện thoại chính hãng</h3>
          <p>Ra mắt năm 2020, nền tảng thương mại Shopee được xây dựng nhằm cung cấp cho người sử dùng những 
            trải nghiệm dễ dàng, an toàn và nhanh chóng khi mua sắm trực tuyến thông qua hệ thống hỗ trợ thanh 
            toán và vận hành vững mạnh.</p>
          <p>Chúng tôi có niềm tin mạnh mẽ rằng trải nghiệm mua sắm trực tuyến phải đơn giản, dễ dàng và mang đến 
            cảm xúc vui thích. Niềm tin này truyền cảm hứng và thúc đẩy chúng tôi mỗi ngày tại Phone Store.</p>
          <img src={image_about} alt='Image About'/>
          <Row justify="center" style={{ marginTop: 42 }}>
            <Button style={{marginBottom: 42 }} onClick={() => history.push(ROUTER.USER.HOME)}>Tìm hiểu Phone Store</Button>
          </Row>
        </S.AboutContent>
      </S.AboutContainer>
    </>
  )
}

export default AboutPage
