import styled from "styled-components";

export const MainBanner = styled.div`
  width: 100%;
  position: relative;
  max-width: 1240px;
  margin: 20px auto 0;
  padding: 0 16px;

  .ant-carousel {
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 12px 36px -8px rgba(15, 23, 42, 0.15);
  }

  .banner-slide {
    position: relative;
    height: 420px;
    background: #0f172a;
    display: flex !important;
    align-items: center;
    overflow: hidden;

    @media (max-width: 768px) {
      height: 280px;
    }
  }

  .img-banner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    filter: brightness(0.85);
    transition: transform 6s ease;
  }

  &:hover .img-banner {
    transform: scale(1.04);
  }

  .banner-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(15, 23, 42, 0.85) 0%,
      rgba(15, 23, 42, 0.45) 50%,
      transparent 100%
    );
  }

  .banner-content {
    position: relative;
    z-index: 2;
    max-width: 520px;
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 768px) {
      padding: 0 20px;
      max-width: 85%;
    }

    .banner-tag {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 14px;
      border-radius: 20px;
      background: rgba(225, 29, 72, 0.9);
      color: #ffffff;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      margin-bottom: 14px;
      box-shadow: 0 4px 12px rgba(225, 29, 72, 0.35);
    }

    strong {
      font-size: clamp(22px, 3.2vw, 36px);
      font-weight: 800;
      color: #ffffff;
      line-height: 1.25;
      margin-bottom: 12px;
      text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
    }

    p {
      color: #e2e8f0;
      font-size: 14px;
      line-height: 1.5;
      margin-bottom: 20px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;

      @media (max-width: 768px) {
        display: none;
      }
    }

    .explore-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 22px;
      border-radius: 10px;
      color: #0f172a;
      background: #ffffff;
      font-weight: 700;
      font-size: 14px;
      text-decoration: none;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
      transition: all 0.25s ease;

      &:hover {
        background: #f8fafc;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        color: #e11d48;
      }
    }
  }

  .carousel-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: #ffffff;
    border-radius: 50%;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.25s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.9);
      color: #0f172a;
      transform: translateY(-50%) scale(1.1);
    }
  }

  .carousel-prev {
    left: 32px;
  }

  .carousel-next {
    right: 32px;
  }

  .slick-dots {
    bottom: 16px;
    li button {
      height: 6px;
      border-radius: 4px;
      background: rgba(255, 255, 255, 0.5);
    }
    li.slick-active button {
      width: 24px;
      background: #ffffff;
    }
  }
`;

export const TrustStrip = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  max-width: 1240px;
  margin: 20px auto 0;
  padding: 0 16px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const TrustItem = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  background: #ffffff;
  padding: 16px 18px;
  border-radius: 14px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
    border-color: #cbd5e1;
  }

  .icon-box {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: ${(props) => props.bgColor || "#eff6ff"};
    color: ${(props) => props.iconColor || "#2563eb"};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    flex-shrink: 0;
  }

  .text-box {
    h4 {
      margin: 0 0 2px;
      font-size: 14px;
      font-weight: 700;
      color: #0f172a;
    }

    p {
      margin: 0;
      font-size: 12px;
      color: #64748b;
    }
  }
`;