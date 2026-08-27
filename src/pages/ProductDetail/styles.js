import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.9; }
  50% { transform: scale(1.15); opacity: 1; }
  100% { transform: scale(1); opacity: 0.9; }
`;

export const ProductDetailContainer = styled.div`
  max-width: 1280px;
  margin: 24px auto 60px;
  padding: 0 16px;
  width: 100%;
`;

export const MainShowcaseCard = styled.div`
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 28px;
  padding: 36px 32px;
  box-shadow: 0 10px 30px -5px rgba(15, 23, 42, 0.05);
  margin-bottom: 28px;

  @media (max-width: 768px) {
    padding: 20px 16px;
    border-radius: 20px;
  }
`;

export const ImageStageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .product-image-stage {
    position: relative;
    width: 100%;
    aspect-ratio: 1;
    max-height: 460px;
    background: radial-gradient(circle at 50% 45%, #ffffff 0%, #f1f5f9 100%);
    border-radius: 24px;
    border: 1px solid #eef2f6;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 32px;
    overflow: hidden;

    .badge-row {
      position: absolute;
      top: 16px;
      left: 16px;
      right: 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      z-index: 3;

      .badge-hot {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        background: #e11d48;
        color: #ffffff;
        padding: 5px 12px;
        border-radius: 10px;
        font-size: 11px;
        font-weight: 800;
        letter-spacing: 0.04em;
        box-shadow: 0 4px 12px rgba(225, 29, 72, 0.3);
      }

      .badge-official {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        background: #ffffff;
        color: #0284c7;
        border: 1px solid #bae6fd;
        padding: 5px 12px;
        border-radius: 10px;
        font-size: 11px;
        font-weight: 700;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
      }
    }

    img {
      max-width: 90%;
      max-height: 90%;
      width: auto;
      height: auto;
      object-fit: contain;
      transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
      filter: drop-shadow(0 16px 28px rgba(15, 23, 42, 0.12));

      &:hover {
        transform: scale(1.08);
      }
    }
  }
`;

export const SkeletonImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TrustGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  .trust-tile {
    display: flex;
    align-items: center;
    gap: 12px;
    background: #f8fafc;
    border: 1px solid #eef2f6;
    padding: 12px 14px;
    border-radius: 14px;
    transition: all 0.2s ease;

    &:hover {
      background: #ffffff;
      border-color: #cbd5e1;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
    }

    .tile-icon {
      font-size: 22px;
      flex-shrink: 0;

      &.blue { color: #2563eb; }
      &.green { color: #16a34a; }
      &.purple { color: #7c3aed; }
      &.orange { color: #ea580c; }
    }

    .tile-info {
      display: flex;
      flex-direction: column;

      strong {
        font-size: 12.5px;
        font-weight: 700;
        color: #0f172a;
        line-height: 1.3;
      }

      <span> {
        font-size: 11px;
        color: #64748b;
        margin-top: 1px;
      }
    }
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductBuyBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;

  .product-header {
    .category-tag {
      font-size: 12px;
      font-weight: 800;
      color: #7c3aed;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      margin-bottom: 6px;
    }

    .product-title {
      font-size: clamp(24px, 3vw, 32px);
      font-weight: 900;
      color: #0f172a;
      line-height: 1.25;
      margin: 0 0 14px;
      letter-spacing: -0.02em;
    }

    .meta-stats-row {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
      padding-bottom: 18px;
      border-bottom: 1px solid #f1f5f9;
      margin-bottom: 20px;

      .rating-box {
        display: flex;
        align-items: center;
        gap: 6px;

        .rate-num {
          font-weight: 800;
          color: #eab308;
          font-size: 14px;
        }
      }

      .dot-divider {
        color: #cbd5e1;
      }

      .comment-count {
        font-size: 13px;
        color: #64748b;
      }

      .stock-pill {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 3px 10px;
        border-radius: 20px;
        background: #ecfdf5;
        color: #059669;
        font-size: 12px;
        font-weight: 700;

        .pulse-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
          animation: ${pulse} 2s infinite ease-in-out;
        }
      }
    }
  }
`;

export const PriceHeroBox = styled.div`
  background: linear-gradient(135deg, #fff1f2 0%, #fff7ed 100%);
  border: 1px solid #fecdd3;
  border-radius: 18px;
  padding: 20px 24px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  .price-primary {
    display: flex;
    align-items: baseline;
    color: #e11d48;
    font-weight: 900;

    .val {
      font-size: 34px;
      letter-spacing: -0.03em;
      line-height: 1;
    }

    .sym {
      font-size: 22px;
      margin-left: 3px;
    }
  }

  .price-secondary {
    display: flex;
    align-items: center;
    gap: 10px;

    .original {
      font-size: 15px;
      color: #94a3b8;
      text-decoration: line-through;
    }

    .save-chip {
      background: #e11d48;
      color: #ffffff;
      font-size: 11px;
      font-weight: 800;
      padding: 3px 8px;
      border-radius: 6px;
    }
  }

  .promo-note {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12.5px;
    color: #c2410c;
    font-weight: 600;
    margin-top: 4px;
  }
`;

export const OptionSelectorGroup = styled.div`
  margin-bottom: 24px;

  .group-label {
    font-size: 13.5px;
    font-weight: 700;
    color: #334155;
    margin-bottom: 10px;
  }

  .option-radio-group {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    .option-pill {
      height: auto;
      padding: 10px 18px;
      border-radius: 12px !important;
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
        border-color: #0f172a !important;
        background: #0f172a !important;
        color: #ffffff !important;
        box-shadow: 0 4px 14px rgba(15, 23, 42, 0.2);

        .opt-plus {
          color: #fde047;
        }
      }

      .opt-name {
        font-size: 13.5px;
      }

      .opt-plus {
        font-size: 11px;
        color: #2563eb;
        font-weight: 700;
        margin-top: 2px;
      }
    }
  }
`;

export const PurchaseControls = styled.div`
  margin-top: auto;

  .quantity-row {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 20px;

    .qty-label {
      font-size: 13.5px;
      font-weight: 700;
      color: #334155;
    }

    .qty-input {
      border-radius: 10px;
      border-color: #cbd5e1;
      width: 90px;
      height: 40px;

      .ant-input-number-input {
        height: 38px;
        font-weight: 700;
        text-align: center;
      }
    }

    .qty-hint {
      font-size: 12.5px;
      color: #059669;
      font-weight: 600;
    }
  }

  .action-buttons-grid {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;

    .btn-add-cart {
      flex: 1;
      min-width: 160px;
      height: 52px;
      border-radius: 14px;
      border: 2px solid #0f172a;
      background: #ffffff;
      color: #0f172a;
      font-size: 14px;
      font-weight: 800;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      transition: all 0.2s ease;

      &:hover {
        background: #0f172a;
        color: #ffffff;
        transform: translateY(-2px);
      }
    }

    .btn-buy-now {
      flex: 1.4;
      min-width: 180px;
      height: 52px;
      border-radius: 14px;
      border: none;
      background: linear-gradient(135deg, #e11d48 0%, #be123c 100%);
      color: #ffffff;
      font-size: 14px;
      font-weight: 800;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      box-shadow: 0 8px 24px rgba(225, 29, 72, 0.35);
      transition: all 0.2s ease;

      &:hover {
        background: linear-gradient(135deg, #be123c 0%, #9f1239 100%);
        transform: translateY(-2px);
        box-shadow: 0 12px 28px rgba(225, 29, 72, 0.45);
      }
    }

    .btn-fav {
      width: 52px;
      height: 52px;
      border-radius: 14px;
      border: 1.5px solid #e2e8f0;
      background: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;

      &:hover {
        border-color: #f43f5e;
        color: #f43f5e;
        background: #fff1f2;
      }

      &.active {
        border-color: #f43f5e;
        background: #fff1f2;
      }
    }

    @media (max-width: 480px) {
      flex-direction: column;
      align-items: stretch;

      .btn-add-cart,
      .btn-buy-now {
        width: 100%;
        min-width: 0;
      }

      .btn-fav {
        width: 100%;
      }
    }
  }
`;

export const DetailCard = styled.div`
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 24px;
  padding: 28px;
  box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.04);
  margin-bottom: 24px;

  @media (max-width: 768px) {
    padding: 18px 14px;
    border-radius: 18px;
  }
`;

export const DetailCardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f1f5f9;
  margin-bottom: 20px;

  .header-icon-box {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;

    &.blue { background: #eff6ff; color: #2563eb; }
    &.amber { background: #fef3c7; color: #d97706; }
    &.green { background: #ecfdf5; color: #059669; }
  }

  h3 {
    margin: 0;
    font-size: 18px;
    font-weight: 800;
    color: #0f172a;
  }
`;

export const ArticleContent = styled.div`
  color: #334155;
  font-size: 15px;
  line-height: 1.8;

  p {
    margin-bottom: 16px;
  }

  img {
    max-width: 100%;
    border-radius: 16px;
    margin: 16px 0;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  }

  h2, h3, h4 {
    color: #0f172a;
    font-weight: 800;
    margin: 24px 0 12px;
  }

  ul, ol {
    padding-left: 20px;
    margin-bottom: 16px;
    li {
      margin-bottom: 8px;
    }
  }
`;

export const RatingOverviewBox = styled.div`
  background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
  border: 1px solid #fde68a;
  border-radius: 18px;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;

  .score-badge-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 120px;

    .big-rating {
      font-size: 38px;
      font-weight: 900;
      color: #b45309;
      line-height: 1;
      margin-bottom: 4px;
    }

    .count-lbl {
      font-size: 11.5px;
      color: #78350f;
      font-weight: 600;
      margin-top: 6px;
    }
  }

  .rating-divider {
    width: 1px;
    height: 60px;
    background: #fcd34d;
  }

  .rating-desc {
    strong {
      color: #78350f;
      font-size: 14px;
    }
    p {
      margin: 4px 0 0;
      color: #92400e;
      font-size: 13px;
      line-height: 1.4;
    }
  }

  @media (max-width: 576px) {
    flex-direction: column;
    text-align: center;
    .rating-divider { display: none; }
  }
`;

export const CommentFormContainer = styled.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 20px 24px;
  margin-bottom: 24px;

  .form-heading {
    font-size: 15px;
    font-weight: 800;
    color: #0f172a;
    margin-bottom: 14px;
  }

  .custom-textarea {
    border-radius: 12px;
    border-color: #cbd5e1;
    padding: 10px 14px;
  }

  .btn-post-review {
    height: 42px;
    border-radius: 10px;
    background: #0f172a;
    border-color: #0f172a;
    font-weight: 700;
    padding: 0 24px;

    &:hover {
      background: #1e293b;
      border-color: #1e293b;
    }
  }
`;

export const LoginPromptBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background: #f8fafc;
  border: 1px dashed #cbd5e1;
  border-radius: 14px;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 12px;

  span {
    color: #64748b;
    font-size: 13.5px;
  }

  .btn-login-now {
    background: #0f172a;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    padding: 8px 16px;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.85;
    }
  }
`;

export const ReviewItem = styled.div`
  display: flex;
  gap: 14px;
  padding: 18px 0;
  border-bottom: 1px solid #f1f5f9;

  &:last-child {
    border-bottom: none;
  }

  .avatar-circle {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
    color: #ffffff;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    flex-shrink: 0;
  }

  .review-main {
    flex: 1;

    .review-meta {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 4px;
      flex-wrap: wrap;

      .author-name {
        font-weight: 700;
        color: #0f172a;
        font-size: 14px;
      }

      .badge-bought {
        display: inline-flex;
        align-items: center;
        gap: 3px;
        font-size: 11px;
        color: #16a34a;
        background: #dcfce7;
        padding: 2px 8px;
        border-radius: 4px;
        font-weight: 600;
      }

      .review-time {
        font-size: 12px;
        color: #94a3b8;
        margin-left: auto;
      }
    }

    .star-row {
      margin-bottom: 6px;
    }

    .review-text {
      margin: 0;
      color: #334155;
      font-size: 13.5px;
      line-height: 1.5;
    }
  }
`;

export const SpecsTable = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #eef2f6;
  border-radius: 16px;
  overflow: hidden;

  .spec-row {
    display: flex;
    padding: 12px 16px;
    font-size: 13px;
    background: #ffffff;
    border-bottom: 1px solid #f1f5f9;
    align-items: center;

    &.striped {
      background: #f8fafc;
    }

    &:last-child {
      border-bottom: none;
    }

    .spec-col-label {
      width: 40%;
      font-weight: 700;
      color: #64748b;
      display: flex;
      align-items: center;
      gap: 8px;

      .spec-icon {
        color: #3b82f6;
        font-size: 14px;
      }
    }

    .spec-col-val {
      width: 60%;
      font-weight: 700;
      color: #0f172a;
    }

    @media (max-width: 480px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
      padding: 12px;

      .spec-col-label,
      .spec-col-val {
        width: 100%;
      }
    }
  }
`;

export const SupportCard = styled.div`
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  border-radius: 20px;
  padding: 20px 24px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  color: #ffffff;
  box-shadow: 0 8px 24px -4px rgba(15, 23, 42, 0.25);

  .icon-wrapper {
    width: 46px;
    height: 46px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.12);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    flex-shrink: 0;
  }

  .support-body {
    h4 {
      color: #ffffff;
      font-size: 14.5px;
      font-weight: 800;
      margin: 0 0 2px;
    }

    p {
      margin: 0;
      color: #cbd5e1;
      font-size: 12.5px;

      .hotline-number {
        color: #fde047;
      }
    }

    span {
      font-size: 11px;
      color: #94a3b8;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
  }
`;
