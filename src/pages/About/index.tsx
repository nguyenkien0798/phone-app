import React from 'react'
import { useHistory } from 'react-router';
import { Button, Row } from 'antd';
import { AppleFilled } from "@ant-design/icons";

import TopWrapper from "../../components/TopWrapper";
import { BREADCRUMB } from "./constants";
import { ROUTER } from '../../constants/router';
import image_about from '../../assets/images/img_about.jpg'

import * as S from './styles'

const AboutPage = () => {
  const history = useHistory();

  return (
    <>
      <TopWrapper
        titlePage="Apple Authorised Reseller"
        subtitle="Hệ thống phân phối thiết bị Apple chính hãng VN/A uy tín hàng đầu Việt Nam"
        icon={<AppleFilled />}
        breadcrumb={BREADCRUMB}
      />
      <S.AboutContainer>
        <S.AboutContent>
          <h3>Volt Store là hệ thống bán lẻ ủy quyền chính thức các sản phẩm Apple chính hãng (Apple Authorised Reseller)</h3>
          <p>Chúng tôi chuyên cung cấp và phân phối toàn diện hệ sinh thái sản phẩm Apple: iPhone, MacBook, iPad, Apple Watch, AirPods và các phụ kiện Apple chính hãng với chất lượng và tiêu chuẩn bảo hành cao nhất.</p>
          <p>Với cam kết 100% hàng chính hãng Apple VN/A, bảo hành 12 tháng tại các Trung tâm bảo hành ủy quyền Apple trên toàn quốc và dịch vụ chăm sóc khách hàng chuyên nghiệp, Volt Store luôn là điểm đến tin cậy hàng đầu cho các tín đồ công nghệ Apple.</p>
          <img src={image_about} alt='Image About'/>
          <Row justify="center" style={{ marginTop: 42 }}>
            <Button style={{marginBottom: 42 }} onClick={() => history.push(ROUTER.USER.HOME)}>Khám phá hệ sinh thái Apple</Button>
          </Row>
        </S.AboutContent>
      </S.AboutContainer>
    </>
  )
}

export default AboutPage
