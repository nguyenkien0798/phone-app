import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.9; }
  50% { transform: scale(1.08); opacity: 1; }
  100% { transform: scale(1); opacity: 0.9; }
`;

export const ProductDetailContainer = styled.div`
  margin: 20px auto 48px;
  padding: 0 16px;
  max-width: 1240px;
  width: 100%;

  .ant-card {
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    overflow: hidden;

    &:hover {
      box-shadow: 0 8px 30px -4px rgba(0, 0, 0, 0.08);
    }
  }
`;

export const MainCard = styled.div`
  background: #ffffff;
  border-radius: 20px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.06);
  padding: 28px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const ImageGalleryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const MainImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 1;
  max-height: 440px;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 20px;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.08));

    &:hover {
      transform: scale(1.06);
    }
  }
`;

export const ProductBadge = styled.div`
  position: absolute;
  top: 14px;
  left: 14px;
  background: linear-gradient(135deg, #ef4444, #dc2626);
  color: #ffffff;
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 10px rgba(220, 38, 38, 0.3);
  display: flex;
  align-items: center;
  gap: 4px;
  z-index: 2;
`;

export const GenuineTag = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  background: #ffffff;
  color: #0284c7;
  border: 1px solid #bae6fd;
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
  z-index: 2;
`;

export const PolicyBar = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 16px;
  width: 100%;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const PolicyItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #f8fafc;
  border: 1px solid #f1f5f9;
  padding: 10px 12px;
  border-radius: 10px;
  font-size: 12px;
  color: #475569;
  font-weight: 500;

  .policy-icon {
    font-size: 16px;
    color: #2563eb;
    flex-shrink: 0;
  }
`;

export const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

export const ProductTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #0f172a;
  line-height: 1.35;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const MetaBar = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f1f5f9;
  margin-bottom: 18px;

  .rating-score {
    font-weight: 700;
    color: #eab308;
    font-size: 15px;
    margin-left: 4px;
  }

  .divider {
    width: 1px;
    height: 14px;
    background: #cbd5e1;
  }

  .review-count {
    color: #64748b;
    font-size: 13px;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: #2563eb;
    }
  }

  .stock-status {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    font-weight: 600;
    color: #16a34a;
    background: #dcfce7;
    padding: 2px 10px;
    border-radius: 20px;

    .dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #16a34a;
      animation: ${pulse} 2s infinite ease-in-out;
    }
  }
`;

export const PriceCard = styled.div`
  background: linear-gradient(135deg, #fff1f2 0%, #fff7ed 100%);
  border: 1px solid #fecdd3;
  border-radius: 14px;
  padding: 16px 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const CurrentPrice = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;

  .amount {
    font-size: 30px;
    font-weight: 800;
    color: #e11d48;
    letter-spacing: -0.5px;
  }

  .currency {
    font-size: 20px;
    font-weight: 700;
    color: #e11d48;
    margin-left: 2px;
  }

  .original-price {
    font-size: 16px;
    color: #94a3b8;
    text-decoration: line-through;
  }

  .discount-chip {
    background: #e11d48;
    color: #ffffff;
    font-size: 12px;
    font-weight: 700;
    padding: 2px 8px;
    border-radius: 6px;
  }
`;

export const PromoTag = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #d97706;
  font-weight: 600;
`;

export const SectionLabel = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #334155;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const VariantOptions = styled.div`
  margin-bottom: 20px;

  .ant-radio-group {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .ant-radio-button-wrapper {
    height: auto;
    padding: 8px 16px;
    border-radius: 10px !important;
    border: 1.5px solid #e2e8f0;
    background: #ffffff;
    font-weight: 600;
    color: #334155;
    transition: all 0.2s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.3;

    &::before {
      display: none !important;
    }

    &:hover {
      border-color: #3b82f6;
      color: #2563eb;
    }

    &.ant-radio-button-wrapper-checked {
      border-color: #2563eb !important;
      background: #eff6ff !important;
      color: #1d4ed8 !important;
      box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
    }
  }
`;

export const QuantitySection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;

  .ant-input-number {
    border-radius: 8px;
    border-color: #cbd5e1;
    width: 100px;
    height: 40px;

    .ant-input-number-input {
      height: 38px;
      font-weight: 600;
      text-align: center;
    }
  }
`;

export const ActionButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;

  .add-cart-btn {
    flex: 1;
    min-width: 180px;
    height: 48px;
    border-radius: 10px;
    font-weight: 600;
    font-size: 15px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: 2px solid #2563eb;
    color: #2563eb;
    background: #ffffff;
    transition: all 0.2s ease;

    &:hover {
      background: #eff6ff;
      border-color: #1d4ed8;
      color: #1d4ed8;
      transform: translateY(-1px);
    }
  }

  .buy-now-btn {
    flex: 1.2;
    min-width: 180px;
    height: 48px;
    border-radius: 10px;
    font-weight: 700;
    font-size: 15px;
    border: none;
    background: linear-gradient(135deg, #e11d48 0%, #be123c 100%);
    color: #ffffff;
    box-shadow: 0 6px 16px rgba(225, 29, 72, 0.3);
    transition: all 0.2s ease;

    &:hover {
      background: linear-gradient(135deg, #be123c 0%, #9f1239 100%);
      box-shadow: 0 8px 20px rgba(225, 29, 72, 0.4);
      transform: translateY(-1px);
    }
  }

  .favorite-btn {
    height: 48px;
    padding: 0 16px;
    border-radius: 10px;
    border: 1.5px solid #e2e8f0;
    background: #ffffff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-weight: 600;
    color: #64748b;
    transition: all 0.2s ease;

    &:hover {
      border-color: #f43f5e;
      color: #f43f5e;
      background: #fff1f2;
    }

    &.favorited {
      border-color: #f43f5e;
      color: #e11d48;
      background: #fff1f2;
    }
  }
`;

export const SectionCard = styled.div`
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05);
  padding: 24px;
  margin-bottom: 20px;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
  padding-bottom: 12px;
  border-bottom: 2px solid #f1f5f9;

  .title-group {
    display: flex;
    align-items: center;
    gap: 10px;

    .icon-wrap {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: #eff6ff;
      color: #2563eb;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
    }

    h3 {
      font-size: 18px;
      font-weight: 700;
      color: #0f172a;
      margin: 0;
    }
  }
`;

export const ProductDetailContent = styled.div`
  color: #334155;
  font-size: 15px;
  line-height: 1.75;

  p {
    margin-bottom: 14px;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    margin: 16px 0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  h2, h3, h4 {
    color: #0f172a;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  ul, ol {
    padding-left: 20px;
    margin-bottom: 14px;
    li {
      margin-bottom: 6px;
    }
  }
`;

export const SpecList = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
`;

export const SpecItem = styled.div`
  display: flex;
  padding: 12px 14px;
  font-size: 13px;
  background: ${(props) => (props.striped ? "#f8fafc" : "#ffffff")};
  border-bottom: 1px solid #f1f5f9;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }

  .spec-label {
    width: 38%;
    font-weight: 600;
    color: #64748b;
    display: flex;
    align-items: center;
    gap: 8px;

    .spec-icon {
      color: #3b82f6;
      font-size: 14px;
    }
  }

  .spec-value {
    width: 62%;
    font-weight: 600;
    color: #1e293b;
  }
`;

export const SupportBox = styled.div`
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border: 1px solid #bae6fd;
  border-radius: 14px;
  padding: 16px;
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 14px;

  .support-icon {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: #0284c7;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    flex-shrink: 0;
  }

  .support-text {
    h4 {
      margin: 0 0 2px;
      font-size: 14px;
      font-weight: 700;
      color: #0369a1;
    }
    p {
      margin: 0;
      font-size: 12px;
      color: #0c4a6e;
    }
    .hotline {
      font-weight: 700;
      color: #e11d48;
    }
  }
`;

export const ReviewSummary = styled.div`
  display: flex;
  align-items: center;
  background: #f8fafc;
  border-radius: 14px;
  border: 1px solid #e2e8f0;
  padding: 20px;
  margin-bottom: 24px;
  gap: 24px;

  @media (max-width: 576px) {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }

  .score-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 120px;

    .big-score {
      font-size: 38px;
      font-weight: 800;
      color: #d97706;
      line-height: 1;
    }

    .rating-stars {
      margin: 6px 0;
    }

    .total-text {
      font-size: 12px;
      color: #64748b;
    }
  }

  .score-divider {
    width: 1px;
    height: 60px;
    background: #e2e8f0;

    @media (max-width: 576px) {
      display: none;
    }
  }

  .score-msg {
    font-size: 13px;
    color: #475569;
    line-height: 1.5;
  }
`;

export const CommentFormCard = styled.div`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 18px 20px;
  margin-bottom: 24px;

  .form-title {
    font-size: 14px;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 12px;
  }

  .ant-input {
    border-radius: 8px;
    border-color: #cbd5e1;
    padding: 10px;
    font-size: 14px;

    &:focus {
      border-color: #2563eb;
      box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.15);
    }
  }

  .submit-btn {
    border-radius: 8px;
    font-weight: 600;
    background: #2563eb;
    border-color: #2563eb;
    padding: 0 24px;
    height: 38px;
  }
`;

export const CommentItemWrapper = styled.div`
  display: flex;
  gap: 14px;
  padding: 16px 0;
  border-bottom: 1px solid #f1f5f9;

  &:last-child {
    border-bottom: none;
  }

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    color: #ffffff;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-size: 16px;
    box-shadow: 0 2px 6px rgba(59, 130, 246, 0.3);
  }

  .comment-content {
    flex: 1;

    .header-row {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 4px;

      .author {
        font-weight: 700;
        color: #1e293b;
        font-size: 14px;
      }

      .verified-badge {
        font-size: 11px;
        color: #16a34a;
        background: #dcfce7;
        padding: 1px 6px;
        border-radius: 4px;
        font-weight: 600;
      }

      .date {
        font-size: 12px;
        color: #94a3b8;
        margin-left: auto;
      }
    }

    .rating-row {
      margin-bottom: 6px;
    }

    .body {
      font-size: 14px;
      color: #334155;
      line-height: 1.5;
      margin: 0;
    }
  }
`;

export const SkeletonImage = styled.div`
  height: 100%;
  aspect-ratio: 1;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f1f5f9;

  & .ant-skeleton-element {
    width: 100%;
    height: 100%;
  }
  & .ant-skeleton-image {
    width: 100%;
    height: 100%;
  }
`;
