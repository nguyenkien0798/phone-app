import styled, { keyframes } from "styled-components";

const pulseAnimation = keyframes`
  0% { transform: scale(1); opacity: 0.9; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); opacity: 0.9; }
`;

export const ProductContainer = styled.div`
  max-width: 1240px;
  margin: 32px auto 48px;
  padding: 0 16px;
`;

export const ProductSection = styled.section`
  padding: 28px 24px;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.04);
  margin-bottom: 28px;
  transition: all 0.3s ease;

  &.bestseller-section {
    background: linear-gradient(180deg, #fffbf5 0%, #ffffff 100%);
    border-color: #fed7aa;
  }

  &.sale-section {
    background: linear-gradient(180deg, #fff1f2 0%, #ffffff 100%);
    border-color: #fecdd3;
  }

  .product-grid {
    margin-top: 20px;
  }
`;

export const ProductTitle = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid #f1f5f9;
  flex-wrap: wrap;
  gap: 12px;

  .title-left {
    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 10px;
      border-radius: 6px;
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 6px;
      color: #e11d48;
      background: #ffe4e6;

      &.gold {
        color: #d97706;
        background: #fef3c7;
      }

      &.blue {
        color: #2563eb;
        background: #dbeafe;
      }
    }

    h3 {
      display: flex;
      align-items: center;
      gap: 8px;
      margin: 0;
      font-size: 24px;
      font-weight: 800;
      color: #0f172a;
      line-height: 1.2;

      @media (max-width: 576px) {
        font-size: 20px;
      }
    }

    p {
      margin: 4px 0 0;
      color: #64748b;
      font-size: 13px;
    }
  }

  .view-all-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    font-weight: 700;
    color: #2563eb;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    transition: all 0.2s ease;

    &:hover {
      color: #1d4ed8;
      transform: translateX(3px);
    }
  }
`;

export const ProductItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  background: #ffffff;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);

  &:hover {
    transform: translateY(-6px);
    border-color: #3b82f6;
    box-shadow: 0 16px 32px -4px rgba(15, 23, 42, 0.12);

    .image-wrap img {
      transform: scale(1.08);
    }

    .buy-button {
      background: #2563eb;
      color: #ffffff;
    }
  }

  &.sale {
    border-color: #fecdd3;
    &:hover {
      border-color: #e11d48;
      box-shadow: 0 16px 32px -4px rgba(225, 29, 72, 0.15);

      .buy-button {
        background: #e11d48;
        color: #ffffff;
      }
    }
  }

  &.bestseller {
    border-color: #fed7aa;
    &:hover {
      border-color: #ea580c;
      box-shadow: 0 16px 32px -4px rgba(234, 88, 12, 0.15);

      .buy-button {
        background: #ea580c;
        color: #ffffff;
      }
    }
  }

  .tag-badge {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 3;
    padding: 3px 8px;
    border-radius: 6px;
    font-size: 11px;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    gap: 4px;

    &.new {
      background: #2563eb;
      color: #ffffff;
    }

    &.sale {
      background: #e11d48;
      color: #ffffff;
      animation: ${pulseAnimation} 2s infinite ease-in-out;
    }

    &.bestseller {
      background: #d97706;
      color: #ffffff;
    }
  }

  .rank-pill {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 3;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: #0f172a;
    color: #fef08a;
    font-weight: 800;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }

  .image-wrap {
    height: 200px;
    background: radial-gradient(circle at 50% 45%, #ffffff 20%, #f1f5f9 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    position: relative;
    overflow: hidden;

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
      filter: drop-shadow(0 10px 16px rgba(15, 23, 42, 0.08));
      mix-blend-mode: multiply;
    }
  }

  .card-content {
    padding: 16px;
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;

    .name {
      font-size: 14px;
      font-weight: 700;
      color: #0f172a;
      line-height: 1.4;
      min-height: 40px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      margin-bottom: 8px;
    }

    .price-row {
      display: flex;
      align-items: baseline;
      gap: 8px;
      margin-bottom: 8px;
      flex-wrap: wrap;

      .current-price {
        font-size: 16px;
        font-weight: 800;
        color: #e11d48;

        span {
          font-size: 13px;
        }
      }

      .old-price {
        font-size: 12px;
        color: #94a3b8;
        text-decoration: line-through;
      }
    }

    .meta-line {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 11px;
      color: #64748b;
      margin-bottom: 12px;

      .trust-text {
        color: #059669;
        font-weight: 600;
      }

      .sold-text {
        color: #64748b;
      }
    }

    .buy-button {
      width: 100%;
      height: 38px;
      border-radius: 10px;
      border: 1px solid #e2e8f0;
      background: #f8fafc;
      color: #1e293b;
      font-size: 13px;
      font-weight: 700;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      transition: all 0.2s ease;
      cursor: pointer;
    }
  }
`;
