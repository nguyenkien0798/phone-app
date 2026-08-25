import styled from "styled-components";

export const ProductPageWrapper = styled.div`
  max-width: 1280px;
  margin: 24px auto 56px;
  padding: 0 16px;
`;

export const HeroHeader = styled.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 24px;
  padding: 28px 32px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  box-shadow: 0 10px 30px -5px rgba(15, 23, 42, 0.04);
  flex-wrap: wrap;

  .hero-left {
    max-width: 680px;

    .hero-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 5px 12px;
      border-radius: 20px;
      background: #ede9fe;
      color: #7c3aed;
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }

    h2 {
      margin: 0 0 6px;
      font-size: clamp(22px, 2.5vw, 30px);
      font-weight: 800;
      color: #0f172a;
      line-height: 1.2;
      letter-spacing: -0.02em;
    }

    p {
      margin: 0;
      color: #64748b;
      font-size: 14px;
      line-height: 1.5;
    }
  }

  .hero-stats {
    display: flex;
    align-items: center;
    gap: 16px;

    .stat-box {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 16px;
      padding: 12px 18px;
      text-align: center;
      min-width: 90px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);

      .stat-val {
        display: block;
        font-size: 20px;
        font-weight: 800;
        color: #0f172a;
        line-height: 1.2;
      }

      .stat-lbl {
        font-size: 11px;
        color: #64748b;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.04em;
      }
    }
  }
`;

export const SidebarFilter = styled.div`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.04);

  .filter-box-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 16px;
    border-bottom: 1px solid #f1f5f9;
    margin-bottom: 20px;

    .box-title {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 16px;
      font-weight: 800;
      color: #0f172a;
    }

    .btn-reset {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      background: transparent;
      border: none;
      color: #e11d48;
      font-size: 12px;
      font-weight: 700;
      cursor: pointer;
      padding: 0;
      transition: opacity 0.2s ease;

      &:hover {
        opacity: 0.75;
      }
    }
  }
`;

export const FilterGroup = styled.div`
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }

  .group-title {
    font-size: 13px;
    font-weight: 700;
    color: #475569;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    margin-bottom: 12px;
  }

  .category-btn-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .quick-prices {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .slider-container {
    padding: 0 4px;

    .price-range-labels {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 10px;
      gap: 6px;

      .val-box {
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        padding: 4px 8px;
        font-size: 11.5px;
        font-weight: 700;
        color: #1e293b;
        flex: 1;
        text-align: center;
      }

      .divider {
        color: #94a3b8;
      }
    }
  }
`;

export const CategoryPill = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 14px;
  border-radius: 12px;
  border: 1px solid ${(props) => (props.$active ? "#0f172a" : "#f1f5f9")};
  background: ${(props) => (props.$active ? "#0f172a" : "#f8fafc")};
  color: ${(props) => (props.$active ? "#ffffff" : "#1e293b")};
  font-size: 13.5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => (props.$active ? "#0f172a" : "#f1f5f9")};
    border-color: ${(props) => (props.$active ? "#0f172a" : "#cbd5e1")};
  }

  .cat-icon {
    margin-right: 10px;
    font-size: 15px;
  }

  .cat-name {
    flex: 1;
    text-align: left;
  }

  .check-mark {
    font-size: 13px;
    font-weight: 800;
    color: #38bdf8;
  }
`;

export const QuickPriceTag = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: 8px 12px;
  border-radius: 10px;
  font-size: 12.5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid ${(props) => (props.$active ? "#2563eb" : "transparent")};
  background: ${(props) => (props.$active ? "#eff6ff" : "transparent")};
  color: ${(props) => (props.$active ? "#2563eb" : "#475569")};

  &:hover {
    background: ${(props) => (props.$active ? "#eff6ff" : "#f8fafc")};
    color: ${(props) => (props.$active ? "#2563eb" : "#0f172a")};
  }
`;

export const ToolbarCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;
  box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.04);
  flex-wrap: wrap;

  .search-input-wrapper {
    position: relative;
    flex: 1;
    min-width: 240px;
    display: flex;
    align-items: center;

    .search-icon {
      position: absolute;
      left: 14px;
      color: #94a3b8;
      font-size: 16px;
    }

    input {
      width: 100%;
      height: 42px;
      padding: 0 38px 0 40px;
      border-radius: 12px;
      border: 1px solid #e2e8f0;
      background: #f8fafc;
      font-size: 13.5px;
      color: #0f172a;
      outline: none;
      transition: all 0.2s ease;

      &:focus {
        border-color: #3b82f6;
        background: #ffffff;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
      }

      &::placeholder {
        color: #94a3b8;
      }
    }

    .clear-icon {
      position: absolute;
      right: 14px;
      color: #94a3b8;
      cursor: pointer;
      font-size: 15px;

      &:hover {
        color: #475569;
      }
    }
  }

  .sort-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;

    .sort-label {
      font-size: 13px;
      font-weight: 600;
      color: #64748b;
      white-space: nowrap;
    }

    .sort-select {
      min-width: 170px;

      .ant-select-selector {
        height: 42px !important;
        border-radius: 12px !important;
        border-color: #e2e8f0 !important;
        background: #f8fafc !important;
        display: flex;
        align-items: center;
      }
    }
  }
`;

export const ActiveFilterTags = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 20px;
  padding: 0 4px;

  .active-label {
    font-size: 12.5px;
    font-weight: 700;
    color: #64748b;
  }

  .ant-tag {
    display: inline-flex;
    align-items: center;
    padding: 5px 12px;
    border-radius: 8px;
    font-size: 12px;
    font-weight: 600;
    background: #ffffff;
    border: 1px solid #cbd5e1;
    color: #1e293b;
    margin: 0;
  }

  .btn-clear-all {
    background: transparent;
    border: none;
    color: #e11d48;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    text-decoration: underline;
    padding: 0 4px;
  }
`;

export const ProductCard = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 20px;
  border: 1px solid #edf2f7;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  box-shadow: 0 2px 10px rgba(15, 23, 42, 0.03);

  &:hover {
    transform: translateY(-6px);
    border-color: #38bdf8;
    box-shadow: 0 18px 36px -8px rgba(15, 23, 42, 0.1);

    .image-stage img {
      transform: scale(1.06);
    }

    .btn-view {
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
  }

  .image-stage {
    position: relative;
    height: 220px;
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

      .cat-name {
        font-size: 11.5px;
        font-weight: 700;
        color: #64748b;
        text-transform: uppercase;
        letter-spacing: 0.04em;
      }

      .rating-tag {
        display: inline-flex;
        align-items: center;
        gap: 3px;
        font-size: 11px;
        font-weight: 700;
        color: #eab308;
      }
    }

    .product-title {
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

      .chip {
        padding: 3px 8px;
        border-radius: 6px;
        background: #f1f5f9;
        color: #475569;
        font-size: 11px;
        font-weight: 600;
      }
    }

    .price-box {
      display: flex;
      align-items: baseline;
      gap: 8px;
      flex-wrap: wrap;
      margin-bottom: 14px;
      margin-top: auto;

      .price-current {
        display: flex;
        align-items: baseline;
        color: #e11d48;
        font-weight: 900;

        span {
          font-size: 17px;
          letter-spacing: -0.02em;
        }

        .currency {
          font-size: 13px;
          margin-left: 2px;
        }
      }

      .price-original {
        font-size: 12px;
        color: #94a3b8;
        text-decoration: line-through;
      }

      .installment-badge {
        font-size: 11px;
        font-weight: 700;
        color: #059669;
        background: #ecfdf5;
        padding: 2px 7px;
        border-radius: 4px;
        margin-left: auto;
      }
    }

    .card-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      padding-top: 12px;
      border-top: 1px solid #f1f5f9;

      .trust-badge {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 11px;
        color: #059669;
        font-weight: 600;
      }

      .btn-view {
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

export const LoadMoreWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 36px;

  .btn-load-more {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 28px;
    border-radius: 14px;
    border: 1px solid #0f172a;
    background: #0f172a;
    color: #ffffff;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.25s ease;
    box-shadow: 0 4px 16px rgba(15, 23, 42, 0.15);

    &:hover {
      background: #1e293b;
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(15, 23, 42, 0.2);
    }
  }
`;

export const EmptyWrapper = styled.div`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(16px);
  border-radius: 20px;
  padding: 60px 24px;
  text-align: center;
  border: 1px solid #e2e8f0;

  h4 {
    font-size: 18px;
    font-weight: 800;
    color: #0f172a;
    margin: 12px 0 4px;
  }

  p {
    color: #64748b;
    font-size: 14px;
  }

  .btn-reset-empty {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: 12px;
    padding: 10px 20px;
    border-radius: 12px;
    border: none;
    background: #0f172a;
    color: #ffffff;
    font-weight: 700;
    font-size: 13.5px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: #334155;
    }
  }
`;

export const SkeletonCard = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 20px;
  border: 1px solid #e2e8f0;
`;
