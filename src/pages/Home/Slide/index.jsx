import React from "react";
import { Carousel } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  CarOutlined,
  SafetyCertificateOutlined,
  CreditCardOutlined,
  SyncOutlined,
  FireFilled,
  ThunderboltFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import * as S from "./styles";

import bg_sale_tet from "../../../assets/images/bg_sale_tet.png";
import bg_sale from "../../../assets/images/bg_sale.png";

const PrevArrow = ({ onClick }) => (
  <div className="carousel-arrow carousel-prev" onClick={onClick}>
    <LeftOutlined />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className="carousel-arrow carousel-next" onClick={onClick}>
    <RightOutlined />
  </div>
);

const BannerSlide = ({ image, eyebrow, title, desc, tagIcon }) => (
  <div className="banner-slide">
    <img className="img-banner" src={image} alt={title} />
    <div className="banner-overlay" />
    <div className="banner-content">
      <span className="banner-tag">
        {tagIcon} {eyebrow}
      </span>
      <strong>{title}</strong>
      <p>{desc}</p>
      <Link to="/products" className="explore-btn">
        Khám phá ngay <RightOutlined />
      </Link>
    </div>
  </div>
);

const Banner = () => {
  return (
    <>
      <S.MainBanner>
        <Carousel
          autoplay
          autoplaySpeed={4000}
          effect="fade"
          arrows
          prevArrow={<PrevArrow />}
          nextArrow={<NextArrow />}
        >
          <BannerSlide
            image={bg_sale_tet}
            tagIcon={<FireFilled />}
            eyebrow="Apple Authorised Reseller"
            title="Sắm Siêu Phẩm Apple Mới, Rinh Quà Cực Khủng"
            desc="Giảm đến 30% cho các dòng iPhone 15/16 Pro Max, iPad, MacBook Air & Pro M-Series. Hỗ trợ thu cũ đổi mới trợ giá đến 2 triệu đồng."
          />
          <BannerSlide
            image={bg_sale}
            tagIcon={<ThunderboltFilled />}
            eyebrow="Hệ Sinh Thái Apple Chính Hãng"
            title="Nâng Cấp Thiết Bị Apple, Bứt Phá Trải Nghiệm"
            desc="Ưu đãi Apple Watch Ultra & Series 9, tai nghe AirPods Pro 2, phụ kiện MagSafe chính hãng. Trả góp 0% qua Apple Pay."
          />
        </Carousel>
      </S.MainBanner>

      <S.TrustStrip>
        <S.TrustItem bgColor="#eff6ff" iconColor="#2563eb">
          <div className="icon-box">
            <CarOutlined />
          </div>
          <div className="text-box">
            <h4>Giao Hàng Siêu Tốc</h4>
            <p>Nhận hàng Apple trong 2h tại Đà Nẵng</p>
          </div>
        </S.TrustItem>

        <S.TrustItem bgColor="#f0fdf4" iconColor="#16a34a">
          <div className="icon-box">
            <SafetyCertificateOutlined />
          </div>
          <div className="text-box">
            <h4>100% Apple Chính Hãng</h4>
            <p>Bảo hành tiêu chuẩn Apple tại TTBH ủy quyền</p>
          </div>
        </S.TrustItem>

        <S.TrustItem bgColor="#fff7ed" iconColor="#ea580c">
          <div className="icon-box">
            <CreditCardOutlined />
          </div>
          <div className="text-box">
            <h4>Trả Góp 0% Lãi Suất</h4>
            <p>Xét duyệt 5 phút qua Apple Pay & thẻ tín dụng</p>
          </div>
        </S.TrustItem>

        <S.TrustItem bgColor="#fdf2f8" iconColor="#db2777">
          <div className="icon-box">
            <SyncOutlined />
          </div>
          <div className="text-box">
            <h4>1 Đổi 1 Trong 30 Ngày</h4>
            <p>Đổi mới an tâm tuyệt đối khi gặp lỗi phần cứng</p>
          </div>
        </S.TrustItem>
      </S.TrustStrip>
    </>
  );
};

export default Banner;
