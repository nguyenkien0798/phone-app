import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const floatImg = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-4px); }
`;

export const HomeProductSection = styled.div`
  max-width: 1240px;
  margin: 32px auto 56px;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const SectionCard = styled.section`
  background: #ffffff;
  border-radius: 24px;
  border: 1px solid #edf2f7;
  padding: 32px 28px;
  box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.04);
  transition: all 0.3s ease;

  &.flash-sale-card {
    background: linear-gradient(180deg, #fff5f5 0%, #ffffff 280px);
    border-color: #fee2e2;
  }

  &.bestseller-card {
    background: linear-gradient(180deg, #fafafa 0%, #ffffff 280px);
    border-color: #e4e4e7;
  }

  &.catalog-card {
    background: #ffffff;
    border-color: #e2e8f0;
  }

  .card-grid {
    margin-top: 24px;
  }

  @media (max-width: 768px) {
    padding: 24px 16px;
    border-radius: 18px;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid #f1f5f9;
  flex-wrap: wrap;
  gap: 16px;

  .header-left {
    .badge-tag {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 5px 12px;
      border-radius: 20px;
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin-bottom: 8px;

      &.flash-badge {
        background: #fee2e2;
        color: #dc2626;
        border: 1px solid #fca5a5;
      }

      &.best-badge {
        background: #f4f4f5;
        color: #18181b;
        border: 1px solid #d4d4d8;
      }

      &.blue-badge {
        background: #eff6ff;
        color: #2563eb;
        border: 1px solid #bfdbfe;
      }
    }

    .section-title {
      font-size: clamp(22px, 2.5vw, 28px);
      font-weight: 800;
      color: #0f172a;
      line-height: 1.2;
      margin: 0;
      letter-spacing: -0.02em;
    }

    .section-desc {
      font-size: 13.5px;
      color: #64748b;
      margin: 6px 0 0;
      line-height: 1.5;
    }
  }

  .view-more-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 9px 18px;
    border-radius: 12px;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    border: none;
    transition: all 0.25s ease;

    &.red {
      background: #fef2f2;
      color: #dc2626;
      border: 1px solid #fecaca;
      &:hover {
        background: #dc2626;
        color: #ffffff;
        transform: translateY(-2px);
      }
    }

    &.dark {
      background: #f4f4f5;
      color: #18181b;
      border: 1px solid #e4e4e7;
      &:hover {
        background: #18181b;
        color: #ffffff;
        transform: translateY(-2px);
      }
    }

    &.blue {
      background: #eff6ff;
      color: #2563eb;
      border: 1px solid #bfdbfe;
      &:hover {
        background: #2563eb;
        color: #ffffff;
        transform: translateY(-2px);
      }
    }
  }
`;

export const TabNav = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 24px;
  overflow-x: auto;
  padding-bottom: 6px;

  /* Hide scrollbar */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const TabButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 14px;
  font-size: 13.5px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
  border: 1px solid ${(props) => (props.$active ? "#0f172a" : "#e2e8f0")};
  background: ${(props) => (props.$active ? "#0f172a" : "#ffffff")};
  color: ${(props) => (props.$active ? "#ffffff" : "#475569")};
  box-shadow: ${(props) =>
    props.$active ? "0 4px 14px rgba(15, 23, 42, 0.18)" : "none"};

  &:hover {
    border-color: ${(props) => (props.$active ? "#0f172a" : "#cbd5e1")};
    background: ${(props) => (props.$active ? "#0f172a" : "#f8fafc")};
    color: ${(props) => (props.$active ? "#ffffff" : "#0f172a")};
    transform: translateY(-1px);
  }

  .tab-icon {
    font-size: 15px;
  }
`;

export const ProductCard = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 20px;
  border: 1px solid #eef2f6;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  box-shadow: 0 2px 10px rgba(15, 23, 42, 0.03);

  &:hover {
    transform: translateY(-6px);
    border-color: ${(props) =>
      props.$cardType === "sale"
        ? "#f87171"
        : props.$cardType === "bestseller"
        ? "#71717a"
        : "#38bdf8"};
    box-shadow: 0 18px 36px -8px rgba(15, 23, 42, 0.1);

    .image-stage img {
      transform: scale(1.06);
    }

    .btn-detail {
      background: #0f172a;
      color: #ffffff;
      border-color: #0f172a;
    }
  }

  .card-badge-container {
    position: absolute;
    top: 12px;
    left: 12px;
    right: 12px;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    pointer-events: none;

    .badge-pill {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 4px 10px;
      border-radius: 8px;
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.02em;

      &.sale {
        background: #e11d48;
        color: #ffffff;
        box-shadow: 0 4px 10px rgba(225, 29, 72, 0.25);
      }

      &.new {
        background: #2563eb;
        color: #ffffff;
        box-shadow: 0 4px 10px rgba(37, 99, 235, 0.25);
      }

      &.hot {
        background: #f97316;
        color: #ffffff;
        box-shadow: 0 4px 10px rgba(249, 115, 22, 0.25);
      }
    }

    .rank-badge {
      margin-left: auto;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: #0f172a;
      color: #fde047;
      font-size: 11px;
      font-weight: 900;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
    }
  }

  .image-stage {
    position: relative;
    height: 210px;
    background: radial-gradient(circle at 50% 45%, #fbfcfd 0%, #f1f5f9 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    overflow: hidden;

    img {
      max-width: 100%;
      max-height: 100%;
      width: auto;
      height: auto;
      object-fit: contain;
      transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
      filter: drop-shadow(0 12px 20px rgba(15, 23, 42, 0.1));
    }
  }

  .card-body {
    padding: 16px 18px 18px;
    display: flex;
    flex-direction: column;
    flex: 1;

    .card-eyebrow {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 6px;

      .category-name {
        font-size: 11.5px;
        font-weight: 700;
        color: #64748b;
        text-transform: uppercase;
        letter-spacing: 0.04em;
      }

      .rating-pill {
        display: inline-flex;
        align-items: center;
        gap: 3px;
        font-size: 11px;
        font-weight: 700;
        color: #eab308;
      }
    }

    .product-name {
      font-size: 14.5px;
      font-weight: 700;
      color: #0f172a;
      line-height: 1.4;
      margin: 0 0 10px;
      min-height: 40px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .spec-chips {
      display: flex;
      align-items: center;
      gap: 6px;
      flex-wrap: wrap;
      margin-bottom: 14px;

      .spec-chip {
        padding: 3px 8px;
        border-radius: 6px;
        background: #f1f5f9;
        color: #475569;
        font-size: 11px;
        font-weight: 600;
      }
    }

    .price-block {
      display: flex;
      align-items: baseline;
      gap: 8px;
      flex-wrap: wrap;
      margin-bottom: 14px;
      margin-top: auto;

      .price-main {
        display: flex;
        align-items: baseline;
        color: #e11d48;
        font-weight: 900;

        .price-val {
          font-size: 17px;
          letter-spacing: -0.02em;
        }

        .currency {
          font-size: 13px;
          margin-left: 2px;
        }
      }

      .price-old {
        font-size: 12px;
        color: #94a3b8;
        text-decoration: line-through;
      }

      .installment-tag {
        font-size: 11px;
        font-weight: 700;
        color: #059669;
        background: #ecfdf5;
        padding: 2px 7px;
        border-radius: 4px;
        margin-left: auto;
      }
    }

    .action-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      padding-top: 12px;
      border-top: 1px solid #f1f5f9;

      .warranty-tag {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 11px;
        color: #059669;
        font-weight: 600;
      }

      .btn-detail {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 6px 12px;
        border-radius: 8px;
        border: 1px solid #e2e8f0;
        background: #f8fafc;
        color: #334155;
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.2s ease;
      }
    }
  }
`;

export const PromoBanner = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  align-items: center;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  border-radius: 20px;
  padding: 24px 36px;
  box-shadow: 0 10px 30px -5px rgba(15, 23, 42, 0.2);

  .promo-item {
    display: flex;
    align-items: center;
    gap: 16px;

    .promo-icon {
      font-size: 28px;
      flex-shrink: 0;
    }

    .promo-text {
      h5 {
        color: #ffffff;
        font-size: 14px;
        font-weight: 700;
        margin: 0 0 2px;
      }

      p {
        color: #94a3b8;
        font-size: 12px;
        margin: 0;
        line-height: 1.4;
      }
    }
  }

  .promo-divider {
    width: 1px;
    height: 36px;
    background: rgba(255, 255, 255, 0.12);
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 20px;

    .promo-divider {
      display: none;
    }
  }
`;
