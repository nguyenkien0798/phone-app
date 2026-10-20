import React, { useState, useEffect } from "react";
import {
  LeftOutlined,
  RightOutlined,
  CarOutlined,
  SafetyCertificateOutlined,
  CreditCardOutlined,
  SyncOutlined,
  FireFilled,
  ThunderboltFilled,
  StarFilled,
  CrownFilled,
} from "@ant-design/icons";
import * as S from "./styles";

import iphone13 from "../../../assets/images/slides/slide1.png";
import iphone18 from "../../../assets/images/apple/iphone-18.jpg";
import macbookAir from "../../../assets/images/apple/mackbook-neo.jpg";
import macbookPro from "../../../assets/images/apple/macbook-pro.jpg";
import airpodPro from "../../../assets/images/apple/airpod.jpg";
import airpodsMax from "../../../assets/images/apple/tai-nghe-apple.jpg";

const slides = [
  {
    id: 1,
    image: iphone18,
    eyebrow: "Apple Authorised Reseller",
    title: "iPhone 18 Series",
    subtitle: "Siêu Phẩm Mới Nhất 2025",
    desc: "Thiết kế mỏng nhẹ đột phá, chip A19 Bionic, camera ProRAW 48MP thế hệ mới. Có đầy đủ màu sắc thời thượng — tím, đỏ, xanh lá, xanh đen.",
    badge: "Giảm đến 3 triệu",
    tagIcon: <FireFilled />,
    gradient: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #f1f3f5 100%)",
    accentColor: "#1d1d1f",
    textDark: true,
  },
  {
    id: 2,
    image: macbookPro,
    eyebrow: "Apple Mac Pro Series",
    title: "MacBook Pro M3 Max",
    subtitle: "Quái Vật Hiệu Năng",
    desc: "Màn hình Liquid Retina XDR sắc nét đỉnh cao, chip Apple M3 Max siêu khủng cho đồ họa và tác vụ chuyên nghiệp. Màu Space Black sang trọng.",
    badge: "Chính Hãng VN/A",
    tagIcon: <CrownFilled />,
    gradient: "linear-gradient(135deg, #18181b 0%, #27272a 50%, #09090b 100%)",
    accentColor: "#a1a1aa",
    textDark: false,
  },
  {
    id: 3,
    image: airpodPro,
    eyebrow: "Apple AirPods Pro",
    title: "AirPods Pro 2 USB-C",
    subtitle: "Chống Ồn Đỉnh Cao",
    desc: "Chip H2 nâng cấp khả năng khử tiếng ồn gấp 2 lần, âm thanh thích ứng Adaptive Audio, cổng sạc USB-C và chuẩn kháng nước bụi IP54.",
    badge: "Giảm ngay 500k",
    tagIcon: <ThunderboltFilled />,
    gradient: "linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 50%, #f9fafb 100%)",
    accentColor: "#111827",
    textDark: true,
  },
  {
    id: 4,
    image: iphone13,
    eyebrow: "Apple iPhone 13 Series",
    title: "iPhone 13 Pro Max",
    subtitle: "Đỉnh Cao Trải Nghiệm",
    desc: "Chip A15 Bionic mạnh mẽ nhất, camera Pro 12MP với chụp đêm ProRAW, màn hình Super Retina XDR 120Hz ProMotion. Pin cải tiến vượt trội.",
    badge: "Trả góp 0%",
    tagIcon: <ThunderboltFilled />,
    gradient: "linear-gradient(135deg, #0d1b2a 0%, #1a3a5c 50%, #0d2137 100%)",
    accentColor: "#3b82f6",
    textDark: false,
  },
  {
    id: 5,
    image: macbookAir,
    eyebrow: "Apple Mac Series",
    title: "MacBook Air M3",
    subtitle: "Mỏng Nhẹ – Mạnh Mẽ",
    desc: "Chip M3 với CPU 8 nhân, GPU 10 nhân, pin lên đến 18 giờ. Bốn màu sắc thời trang: Starlight, Midnight, Pink & Yellow. Không quạt, hoàn toàn yên lặng.",
    badge: "Từ 28.990.000đ",
    tagIcon: <CrownFilled />,
    gradient: "linear-gradient(135deg, #fdf6f0 0%, #fce4d6 30%, #f9d0c4 100%)",
    accentColor: "#c96a3a",
    textDark: true,
  },
  {
    id: 6,
    image: airpodsMax,
    eyebrow: "Apple AirPods Max",
    title: "AirPods Max 2024",
    subtitle: "Âm Thanh Đỉnh Cao",
    desc: "Chống ồn chủ động thế hệ mới H2, âm thanh không gian 3D vòm, cốc tai nghe bằng lưới mềm siêu thoải mái. Có 5 màu mới pastel cực đẹp.",
    badge: "Quà tặng hấp dẫn",
    tagIcon: <StarFilled />,
    gradient: "linear-gradient(135deg, #fff8f5 0%, #fdebd0 40%, #fad7b5 100%)",
    accentColor: "#c07850",
    textDark: true,
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      goNext();
    }, 5000);
    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const goTo = (index) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(index);
    setTimeout(() => setAnimating(false), 600);
  };

  const goPrev = () => {
    goTo(current === 0 ? slides.length - 1 : current - 1);
  };

  const goNext = () => {
    goTo(current === slides.length - 1 ? 0 : current + 1);
  };

  const slide = slides[current];

  return (
    <>
      <S.MainBanner>
        <S.BannerWrapper gradient={slide.gradient} accentColor={slide.accentColor}>
          {/* Left Content */}
          <S.BannerContent key={current} animating={animating}>
            <S.BannerTag accentColor={slide.accentColor}>
              {slide.tagIcon} {slide.eyebrow}
            </S.BannerTag>
            <S.BannerSubtitle textDark={slide.textDark}>{slide.subtitle}</S.BannerSubtitle>
            <S.BannerTitle textDark={slide.textDark}>{slide.title}</S.BannerTitle>
            <S.BannerDesc textDark={slide.textDark}>{slide.desc}</S.BannerDesc>
            <S.BannerActions>
              <S.ExploreBtn to="/products" accentColor={slide.accentColor}>
                Mua ngay <RightOutlined />
              </S.ExploreBtn>
              <S.BadgePill accentColor={slide.accentColor} textDark={slide.textDark}>
                {slide.badge}
              </S.BadgePill>
            </S.BannerActions>
          </S.BannerContent>

          {/* Right Image */}
          <S.BannerImage key={`img-${current}`} animating={animating}>
            <img src={slide.image} alt={slide.title} />
          </S.BannerImage>

          {/* Navigation Arrows */}
          <S.ArrowBtn side="left" textDark={slide.textDark} onClick={goPrev}>
            <LeftOutlined />
          </S.ArrowBtn>
          <S.ArrowBtn side="right" textDark={slide.textDark} onClick={goNext}>
            <RightOutlined />
          </S.ArrowBtn>

          {/* Dots */}
          <S.Dots>
            {slides.map((_, i) => (
              <S.Dot
                key={i}
                active={i === current}
                accentColor={slide.accentColor}
                onClick={() => goTo(i)}
              />
            ))}
          </S.Dots>
        </S.BannerWrapper>
      </S.MainBanner>

      <S.TrustStrip>
        <S.TrustItem bgColor="#eff6ff" iconColor="#2563eb">
          <div className="icon-box">
            <CarOutlined />
          </div>
          <div className="text-box">
            <h4>Giao Hàng Siêu Tốc</h4>
            <p>Nhận hàng trong 2h tại Đà Nẵng</p>
          </div>
        </S.TrustItem>

        <S.TrustItem bgColor="#f0fdf4" iconColor="#16a34a">
          <div className="icon-box">
            <SafetyCertificateOutlined />
          </div>
          <div className="text-box">
            <h4>100% Chính Hãng</h4>
            <p>Bảo hành tiêu chuẩn tại TTBH ủy quyền</p>
          </div>
        </S.TrustItem>

        <S.TrustItem bgColor="#fff7ed" iconColor="#ea580c">
          <div className="icon-box">
            <CreditCardOutlined />
          </div>
          <div className="text-box">
            <h4>Trả Góp 0% Lãi Suất</h4>
            <p>Xét duyệt 5 phút qua thẻ tín dụng</p>
          </div>
        </S.TrustItem>

        <S.TrustItem bgColor="#fdf2f8" iconColor="#db2777">
          <div className="icon-box">
            <SyncOutlined />
          </div>
          <div className="text-box">
            <h4>1 Đổi 1 Trong 30 Ngày</h4>
            <p>Đổi mới an tâm khi gặp lỗi phần cứng</p>
          </div>
        </S.TrustItem>
      </S.TrustStrip>
    </>
  );
};

export default Banner;
