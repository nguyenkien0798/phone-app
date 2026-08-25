import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.9; }
  50% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); opacity: 0.9; }
`;

export const CartContainer = styled.div`
  max-width: 1280px;
  margin: 24px auto 60px;
  padding: 0 16px;
  width: 100%;

  .custom-steps {
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    padding: 20px 32px;
    margin-bottom: 28px;
    box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.04);

    .ant-steps-item-icon {
      width: 38px;
      height: 38px;
      line-height: 38px;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
    }

    .ant-steps-item-process .ant-steps-item-icon {
      background: #0f172a;
      border-color: #0f172a;
    }

    .ant-steps-item-finish .ant-steps-item-icon {
      background: #ecfdf5;
      border-color: #10b981;
      color: #10b981;
    }

    .ant-steps-item-title {
      font-weight: 700;
      font-size: 14px;
    }
  }
`;

export const StepCard = styled.div`
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 24px;
  padding: 24px 28px;
  box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.04);
  margin-bottom: 20px;

  @media (max-width: 768px) {
    padding: 18px 16px;
    border-radius: 18px;
  }
`;

export const CartHeaderRow = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 18px;
  background: #f8fafc;
  border-radius: 14px;
  border: 1px solid #eef2f6;
  margin-bottom: 14px;
  font-size: 13px;
  font-weight: 700;
  color: #475569;
  text-transform: uppercase;
  letter-spacing: 0.03em;

  .col-check { width: 5%; }
  .col-prod { width: 45%; }
  .col-price { width: 16%; text-align: center; }
  .col-qty { width: 16%; text-align: center; }
  .col-total { width: 14%; text-align: right; }
  .col-del { width: 4%; text-align: right; }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CartItemCard = styled.div`
  display: flex;
  align-items: center;
  padding: 18px;
  background: #ffffff;
  border-radius: 18px;
  border: 1.5px solid ${(props) => (props.$checked ? "#0f172a" : "#eef2f6")};
  margin-bottom: 12px;
  transition: all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
  box-shadow: ${(props) =>
    props.$checked ? "0 8px 24px rgba(15, 23, 42, 0.06)" : "0 2px 8px rgba(0, 0, 0, 0.02)"};

  &:hover {
    border-color: ${(props) => (props.$checked ? "#0f172a" : "#cbd5e1")};
    transform: translateY(-2px);
  }

  .col-check {
    width: 5%;
  }

  .col-prod {
    width: 45%;
    display: flex;
    align-items: center;
    gap: 16px;

    .img-box {
      width: 74px;
      height: 74px;
      border-radius: 12px;
      background: radial-gradient(circle at 50% 45%, #fbfcfd 0%, #f1f5f9 100%);
      border: 1px solid #e2e8f0;
      padding: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;

      img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    }

    .prod-details {
      h4 {
        margin: 0 0 4px;
        font-size: 14.5px;
        font-weight: 700;
        color: #0f172a;
        line-height: 1.35;
      }

      .opt-tag {
        display: inline-block;
        padding: 2px 8px;
        border-radius: 6px;
        background: #f1f5f9;
        color: #475569;
        font-size: 11.5px;
        font-weight: 600;
      }
    }
  }

  .col-price {
    width: 16%;
    text-align: center;
    font-size: 14.5px;
    font-weight: 700;
    color: #475569;
  }

  .col-qty {
    width: 16%;
    text-align: center;

    .ant-input-number {
      border-radius: 8px;
      border-color: #cbd5e1;
      width: 80px;

      .ant-input-number-input {
        text-align: center;
        font-weight: 700;
      }
    }
  }

  .col-total {
    width: 14%;
    text-align: right;
    font-size: 15.5px;
    font-weight: 800;
    color: #e11d48;
  }

  .col-del {
    width: 4%;
    text-align: right;

    .btn-delete {
      color: #94a3b8;
      border: none;
      background: transparent;
      cursor: pointer;
      font-size: 16px;
      padding: 4px;
      transition: color 0.2s ease;

      &:hover {
        color: #e11d48;
      }
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 12px;

    .col-check { width: 10%; }
    .col-prod { width: 80%; }
    .col-price { display: none; }
    .col-qty { width: 45%; text-align: left; }
    .col-total { width: 45%; text-align: right; }
    .col-del { width: 10%; text-align: right; }
  }
`;

export const SummaryStickyCard = styled.div`
  position: sticky;
  top: 90px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const VoucherCard = styled.div`
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.04);

  .voucher-title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 800;
    color: #0f172a;
    margin-bottom: 12px;
  }

  .voucher-input-group {
    display: flex;
    gap: 8px;

    input {
      flex: 1;
      height: 42px;
      border-radius: 12px;
      border: 1px solid #cbd5e1;
      background: #f8fafc;
      padding: 0 14px;
      font-size: 13.5px;
      font-weight: 600;
      outline: none;

      &:focus {
        border-color: #0f172a;
        background: #ffffff;
      }
    }

    button {
      height: 42px;
      padding: 0 18px;
      border-radius: 12px;
      border: none;
      background: #0f172a;
      color: #ffffff;
      font-weight: 700;
      font-size: 13px;
      cursor: pointer;
      transition: background 0.2s ease;

      &:hover {
        background: #334155;
      }
    }
  }

  .applied-voucher {
    margin-top: 12px;
    padding: 10px 14px;
    border-radius: 12px;
    background: #ecfdf5;
    border: 1px dashed #10b981;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .code-info {
      strong {
        color: #065f46;
        font-size: 13px;
      }
      span {
        color: #047857;
        font-size: 11.5px;
        display: block;
      }
    }

    .discount-amt {
      font-weight: 800;
      color: #059669;
      font-size: 14px;
    }
  }
`;

export const BillSummaryCard = styled.div`
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.04);

  .bill-title {
    font-size: 16px;
    font-weight: 800;
    color: #0f172a;
    padding-bottom: 12px;
    border-bottom: 1px solid #f1f5f9;
    margin-bottom: 16px;
  }

  .bill-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    color: #64748b;
    margin-bottom: 10px;

    .val {
      font-weight: 700;
      color: #1e293b;
    }

    &.discount .val {
      color: #16a34a;
    }

    &.total-row {
      margin-top: 14px;
      padding-top: 14px;
      border-top: 1px dashed #e2e8f0;
      font-size: 16px;
      font-weight: 800;
      color: #0f172a;

      .total-val {
        font-size: 22px;
        color: #e11d48;
        font-weight: 900;
      }
    }
  }

  .btn-next-step {
    width: 100%;
    height: 50px;
    border-radius: 14px;
    border: none;
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    color: #ffffff;
    font-size: 15px;
    font-weight: 800;
    cursor: pointer;
    margin-top: 20px;
    box-shadow: 0 6px 20px rgba(15, 23, 42, 0.2);
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    &:hover {
      background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
      transform: translateY(-2px);
    }
  }

  .btn-back-step {
    width: 100%;
    height: 44px;
    border-radius: 12px;
    border: 1px solid #cbd5e1;
    background: #ffffff;
    color: #475569;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    margin-top: 10px;
    transition: all 0.2s ease;

    &:hover {
      background: #f8fafc;
      color: #0f172a;
      border-color: #94a3b8;
    }
  }
`;

export const EmptyCartBox = styled.div`
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 60px 24px;
  text-align: center;
  border: 1px solid #eef2f6;

  .empty-icon {
    font-size: 48px;
    color: #cbd5e1;
    margin-bottom: 16px;
  }

  h3 {
    font-size: 20px;
    font-weight: 800;
    color: #0f172a;
    margin-bottom: 6px;
  }

  p {
    color: #64748b;
    font-size: 14px;
    margin-bottom: 20px;
  }

  .btn-shop-now {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 28px;
    border-radius: 14px;
    border: none;
    background: #0f172a;
    color: #ffffff;
    font-weight: 800;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: #1e293b;
      transform: translateY(-2px);
    }
  }
`;

export const MethodSelectOption = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 18px;
  border-radius: 14px;
  border: 1.5px solid ${(props) => (props.$active ? "#0f172a" : "#e2e8f0")};
  background: ${(props) => (props.$active ? "#f8fafc" : "#ffffff")};
  margin-bottom: 12px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${(props) => (props.$active ? "#0f172a" : "#cbd5e1")};
  }

  .method-icon {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: #f1f5f9;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    flex-shrink: 0;
  }

  .method-text {
    flex: 1;

    strong {
      display: block;
      font-size: 14px;
      color: #0f172a;
    }

    span {
      font-size: 12px;
      color: #64748b;
    }
  }
`;

export const SuccessCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 28px;
  padding: 60px 32px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 10px 30px -5px rgba(15, 23, 42, 0.06);
  max-width: 680px;
  margin: 0 auto;

  .success-icon-wrap {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #ecfdf5;
    color: #10b981;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    margin: 0 auto 24px;
    box-shadow: 0 8px 24px rgba(16, 185, 129, 0.2);
  }

  h2 {
    font-size: 26px;
    font-weight: 900;
    color: #0f172a;
    margin-bottom: 8px;
  }

  p {
    color: #64748b;
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 32px;
  }

  .success-actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    flex-wrap: wrap;

    .btn-home {
      padding: 12px 26px;
      border-radius: 14px;
      background: #0f172a;
      color: #ffffff;
      font-size: 14px;
      font-weight: 800;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        background: #1e293b;
        transform: translateY(-2px);
      }
    }

    .btn-orders {
      padding: 12px 26px;
      border-radius: 14px;
      background: #ffffff;
      color: #0f172a;
      font-size: 14px;
      font-weight: 800;
      border: 1.5px solid #cbd5e1;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        background: #f8fafc;
        border-color: #0f172a;
      }
    }
  }
`;
