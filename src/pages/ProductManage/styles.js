import styled from "styled-components";

const CATEGORY_COLORS = {
  1: { bg: "#fff1f2", text: "#e11d48", border: "#fecdd3" },
  2: { bg: "#eff6ff", text: "#2563eb", border: "#bfdbfe" },
  3: { bg: "#f5f3ff", text: "#7c3aed", border: "#ddd6fe" },
  4: { bg: "#ecfdf5", text: "#059669", border: "#a7f3d0" },
  5: { bg: "#fff7ed", text: "#ea580c", border: "#fed7aa" },
  6: { bg: "#f0f9ff", text: "#0284c7", border: "#bae6fd" },
};

export const getCategoryTone = (id) =>
  CATEGORY_COLORS[id] || { bg: "#f1f5f9", text: "#475569", border: "#e2e8f0" };

export const PageWrap = styled.div`
  margin: 28px auto 56px;
  padding: 0 16px;
  max-width: 1280px;
  width: 100%;
`;

export const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 18px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  position: relative;
  overflow: hidden;
  padding: 18px 20px;
  border-radius: 18px;
  color: #fff;
  box-shadow: 0 12px 28px -10px rgba(15, 23, 42, 0.28);

  background: ${(props) => props.$bg || "linear-gradient(135deg, #ff6a55, #d92d35)"};

  &::after {
    content: "";
    position: absolute;
    right: -20px;
    top: -30px;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.14);
  }

  .stat-label {
    position: relative;
    z-index: 1;
    font-size: 12px;
    font-weight: 700;
    opacity: 0.9;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .stat-value {
    position: relative;
    z-index: 1;
    margin-top: 6px;
    font-size: 28px;
    font-weight: 900;
    letter-spacing: -0.03em;
  }
`;

export const Panel = styled.section`
  padding: 24px 26px;
  border-radius: 24px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 247, 246, 0.96) 100%);
  border: 1px solid rgba(255, 182, 173, 0.35);
  box-shadow:
    0 16px 40px -12px rgba(217, 45, 53, 0.12),
    0 4px 16px rgba(15, 23, 42, 0.04);

  @media (max-width: 768px) {
    padding: 18px 14px;
    border-radius: 18px;
  }
`;

export const PanelHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 18px;
  padding-bottom: 16px;
  border-bottom: 1px dashed rgba(217, 45, 53, 0.18);

  .title-wrap {
    h2 {
      margin: 0;
      background: linear-gradient(90deg, #0f172a 0%, #d92d35 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-size: 22px;
      font-weight: 900;
      letter-spacing: -0.02em;
    }

    p {
      margin: 6px 0 0;
      color: #64748b;
      font-size: 13.5px;
    }
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  .btn-refresh {
    height: 40px;
    border-radius: 12px;
    border: 1px solid #e2e8f0;
    background: #fff;
    font-weight: 700;
    color: #334155;

    &:hover {
      border-color: #ff8a78;
      color: #d92d35;
    }
  }

  .ant-btn-primary {
    height: 40px;
    border: 0;
    border-radius: 12px;
    background: linear-gradient(135deg, #ff6a55 0%, #d92d35 100%);
    font-weight: 800;
    box-shadow: 0 10px 20px rgba(217, 45, 53, 0.28);
  }
`;

export const ToolbarRow = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 18px;
  padding: 12px;
  border-radius: 16px;
  background: linear-gradient(135deg, #fff5f5 0%, #eff6ff 50%, #f5f3ff 100%);
  border: 1px solid rgba(255, 255, 255, 0.8);

  .search-input {
    flex: 1;
    min-width: 220px;
    max-width: 360px;
  }

  .ant-input-affix-wrapper,
  .ant-select-selector {
    border-radius: 12px !important;
    border-color: #e2e8f0 !important;
    background: #fff !important;
  }

  .ant-btn {
    border-radius: 12px;
    font-weight: 700;
  }
`;

export const TableWrap = styled.div`
  overflow: hidden;
  border-radius: 18px;
  border: 1px solid #f1f5f9;
  background: #fff;

  .ant-table {
    background: transparent;
  }

  .ant-table-container {
    border-radius: 18px;
  }

  .ant-table-thead > tr > th {
    background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 55%, #17212b 100%) !important;
    color: #fff !important;
    font-weight: 800;
    font-size: 12.5px;
    border-bottom: 0 !important;
    padding: 14px 16px !important;

    &::before {
      display: none !important;
    }
  }

  .ant-table-tbody > tr > td {
    padding: 14px 16px !important;
    border-bottom: 1px solid #f1f5f9;
    transition: background 0.2s ease;
  }

  .ant-table-tbody > tr:nth-child(even) > td {
    background: #fffafa;
  }

  .ant-table-tbody > tr:hover > td {
    background: #fff1f0 !important;
  }

  .ant-pagination {
    margin: 16px !important;
  }

  .ant-pagination-item-active {
    border-color: #d92d35;
    a {
      color: #d92d35;
    }
  }

  .product-cell {
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;

    .thumb {
      position: relative;
      width: 56px;
      height: 56px;
      flex-shrink: 0;
      border-radius: 14px;
      padding: 6px;
      background: linear-gradient(145deg, #fff 0%, #fff1f0 100%);
      border: 1px solid #fecdd3;
      box-shadow: 0 6px 14px rgba(217, 45, 53, 0.08);

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .name {
      font-weight: 800;
      color: #0f172a;
      line-height: 1.35;
    }

    .meta {
      display: inline-flex;
      margin-top: 4px;
      padding: 2px 8px;
      border-radius: 999px;
      background: #f1f5f9;
      color: #64748b;
      font-size: 11px;
      font-weight: 700;
    }
  }

  .category-chip {
    display: inline-flex;
    align-items: center;
    padding: 4px 10px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 800;
    border: 1px solid;
  }

  .price-pill {
    display: inline-flex;
    align-items: center;
    padding: 6px 10px;
    border-radius: 999px;
    background: linear-gradient(135deg, #fff1f0 0%, #ffe4e6 100%);
    border: 1px solid #fecdd3;
    color: #d92d35;
    font-weight: 900;
    font-size: 13px;
    white-space: nowrap;
  }

  .specs-text {
    color: #475569;
    font-size: 12.5px;
    line-height: 1.4;
  }

  .tag-new {
    border: 0 !important;
    border-radius: 999px !important;
    padding: 2px 10px !important;
    font-weight: 800 !important;
    background: linear-gradient(135deg, #ff6a55, #d92d35) !important;
    color: #fff !important;
  }

  .tag-old {
    border: 0 !important;
    border-radius: 999px !important;
    padding: 2px 10px !important;
    font-weight: 800 !important;
    background: #e2e8f0 !important;
    color: #475569 !important;
  }

  .action-btns {
    display: flex;
    gap: 8px;

    .btn-edit,
    .btn-delete {
      width: 34px;
      height: 34px;
      border-radius: 10px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: 0;
      cursor: pointer;
      transition: transform 0.15s ease, box-shadow 0.15s ease;
    }

    .btn-edit {
      background: #eff6ff;
      color: #2563eb;

      &:hover {
        transform: translateY(-1px);
        box-shadow: 0 6px 14px rgba(37, 99, 235, 0.2);
      }
    }

    .btn-delete {
      background: #fff1f2;
      color: #e11d48;

      &:hover {
        transform: translateY(-1px);
        box-shadow: 0 6px 14px rgba(225, 29, 72, 0.2);
      }
    }
  }
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 16px;

  .full {
    grid-column: 1 / -1;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }

  .ant-form-item-label > label {
    font-weight: 700;
    color: #334155;
  }

  .ant-input,
  .ant-input-number,
  .ant-select-selector,
  .ant-input-affix-wrapper {
    border-radius: 12px !important;
  }

  .ant-input-number {
    width: 100%;
  }

  .preview-image {
    width: 100%;
    max-height: 160px;
    object-fit: contain;
    margin-top: 8px;
    padding: 12px;
    border-radius: 14px;
    background: linear-gradient(145deg, #fff 0%, #fff1f0 100%);
    border: 1px solid #fecdd3;
  }
`;
