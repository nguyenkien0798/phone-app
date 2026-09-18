import styled, { css } from "styled-components";

export const ProfileWrapper = styled.div`
  margin: 28px auto 56px;
  padding: 0 16px;
  max-width: 1200px;
  width: 100%;
`;

export const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr);
  gap: 20px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftContainer = styled.aside`
  position: sticky;
  top: 88px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 24px;
  background: linear-gradient(165deg, #0f172a 0%, #1e293b 55%, #17212b 100%);
  box-shadow: 0 16px 40px -12px rgba(15, 23, 42, 0.35);
  color: #fff;

  @media (max-width: 900px) {
    position: static;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28px 20px 20px;
  text-align: center;
  background:
    radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255, 106, 85, 0.28) 0%, transparent 70%);

  .profile-avatar {
    flex-shrink: 0;
    border: 3px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.28);
    background: linear-gradient(135deg, #ff6a55 0%, #d92d35 100%) !important;
  }

  .profile-meta {
    margin-top: 16px;
    width: 100%;
  }

  h2 {
    margin: 0;
    color: #fff;
    font-size: 18px;
    font-weight: 800;
    line-height: 1.3;
    word-break: break-word;
  }

  .profile-email {
    margin: 6px 0 0;
    color: rgba(255, 255, 255, 0.62);
    font-size: 12.5px;
    word-break: break-all;
  }

  .profile-badge {
    display: inline-flex;
    margin-top: 12px;
    padding: 5px 12px;
    border-radius: 999px;
    background: rgba(255, 106, 85, 0.18);
    border: 1px solid rgba(255, 106, 85, 0.35);
    color: #ffb4a8;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  @media (max-width: 900px) {
    flex-direction: row;
    align-items: center;
    gap: 16px;
    padding: 20px 18px;
    text-align: left;

    .profile-avatar {
      width: 72px !important;
      height: 72px !important;
      line-height: 72px !important;
      font-size: 30px !important;
    }

    .profile-meta {
      margin-top: 0;
    }

    h2 {
      font-size: 16px;
    }
  }
`;

export const TabsRow = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px 10px 14px;

  @media (max-width: 900px) {
    flex-direction: row;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    padding: 0 10px 12px;
    gap: 6px;
  }
`;

export const TabItem = styled.button`
  appearance: none;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 12px 14px;
  border: 0;
  border-radius: 12px;
  background: transparent;
  color: rgba(255, 255, 255, 0.72);
  font-size: 13.5px;
  font-weight: 700;
  font-family: inherit;
  text-align: left;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;

  .anticon {
    font-size: 16px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
  }

  ${({ active }) =>
    active &&
    css`
      background: rgba(255, 106, 85, 0.18);
      color: #fff;
      box-shadow: inset 3px 0 0 #ff6a55;

      @media (max-width: 900px) {
        box-shadow: inset 0 -3px 0 #ff6a55;
      }
    `}

  @media (max-width: 900px) {
    width: auto;
    flex-shrink: 0;
  }
`;

export const RightContainer = styled.section`
  min-width: 0;
  padding: 24px 26px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 10px 30px -8px rgba(15, 23, 42, 0.08);

  @media (max-width: 900px) {
    padding: 18px 14px;
    border-radius: 18px;
  }
`;

export const PanelHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid #eef2f6;

  .panel-title-wrap {
    h3 {
      margin: 0;
      color: #0f172a;
      font-size: 20px;
      font-weight: 800;
      letter-spacing: -0.02em;
    }

    p {
      margin: 6px 0 0;
      color: #64748b;
      font-size: 13.5px;
      line-height: 1.45;
    }
  }

  .panel-count {
    flex-shrink: 0;
    padding: 6px 12px;
    border-radius: 999px;
    background: #fff1f0;
    border: 1px solid #ffccc7;
    color: #d92d35;
    font-size: 12px;
    font-weight: 800;
  }
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 48px 16px;
  text-align: center;
  color: #64748b;

  .empty-icon {
    display: grid;
    place-items: center;
    width: 56px;
    height: 56px;
    margin-bottom: 6px;
    border-radius: 16px;
    background: #f1f5f9;
    color: #94a3b8;
    font-size: 24px;
  }

  strong {
    color: #0f172a;
    font-size: 15px;
  }

  span {
    font-size: 13px;
  }
`;

export const OrderTableWrap = styled.div`
  .ant-table {
    background: transparent;
  }

  .ant-table-thead > tr > th {
    background: #f8fafc;
    color: #475569;
    font-weight: 700;
    font-size: 12.5px;
    border-bottom: 1px solid #e2e8f0;
  }

  .ant-table-tbody > tr > td {
    border-bottom: 1px solid #f1f5f9;
    font-size: 13.5px;
    color: #334155;
  }

  .ant-table-tbody > tr:hover > td {
    background: #fff7f6 !important;
  }

  .order-id {
    font-weight: 800;
    color: #0f172a;
  }

  .order-price {
    font-weight: 800;
    color: #d92d35;
    white-space: nowrap;
  }

  .status-tag {
    display: inline-flex;
    align-items: center;
    padding: 3px 10px;
    border-radius: 999px;
    font-size: 11.5px;
    font-weight: 700;
  }

  .status-shipping {
    background: #eff6ff;
    color: #2563eb;
  }

  .status-paid {
    background: #ecfdf5;
    color: #059669;
  }

  .status-unpaid {
    background: #fff7ed;
    color: #c2410c;
  }

  .expand-products {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 4px 0;

    .expand-item {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      padding: 10px 12px;
      border-radius: 10px;
      background: #f8fafc;
      border: 1px solid #eef2f6;
      font-size: 13px;

      strong {
        color: #0f172a;
      }

      span {
        color: #64748b;
        white-space: nowrap;
      }
    }
  }
`;

export const PasswordCard = styled.div`
  max-width: 480px;

  .ant-form-item-label > label {
    color: #334155;
    font-weight: 700;
  }

  .ant-input-affix-wrapper,
  .ant-input-password {
    height: 44px;
    border-radius: 12px !important;
    border-color: #e2e8f0 !important;
    background: #f8fafc !important;
  }

  .ant-input-affix-wrapper-focused,
  .ant-input-password-focused {
    border-color: #ff8a78 !important;
    box-shadow: 0 0 0 3px rgba(255, 106, 85, 0.12) !important;
    background: #fff !important;
  }

  .ant-btn-primary {
    height: 44px;
    margin-top: 4px;
    border: 0;
    border-radius: 12px;
    background: linear-gradient(135deg, #ff6a55 0%, #d92d35 100%);
    font-weight: 800;
    box-shadow: 0 10px 22px rgba(217, 45, 53, 0.25);

    &:hover,
    &:focus {
      background: linear-gradient(135deg, #ff7d6b 0%, #c4222c 100%);
    }
  }
`;
