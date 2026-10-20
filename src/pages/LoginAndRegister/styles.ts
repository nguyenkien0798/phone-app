import styled, { css, keyframes } from "styled-components";
import bgLogin from "../../assets/images/apple/apple-devices.jpg";
import logo from "../../assets/images/brand/phone-store-mark.svg";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const LoginContainer = styled.div`
  --auth-ink: #111827;
  --auth-accent: #ff6a55;
  --auth-accent-deep: #d92d35;
  --auth-muted: #6b7280;
  --auth-line: #e5e7eb;
  --auth-field: #f8fafc;

  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(340px, 460px);
  align-items: center;
  gap: clamp(24px, 5vw, 80px);
  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  padding: 32px clamp(20px, 6vw, 80px);
  overflow: hidden;
  font-family: "Be Vietnam Pro", "Manrope", sans-serif;
  color: #fff;
  background:
    linear-gradient(120deg, rgba(10, 14, 22, 0.94) 0%, rgba(12, 18, 28, 0.78) 46%, rgba(12, 18, 28, 0.42) 100%),
    url(${bgLogin}) right center / cover no-repeat;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    justify-items: center;
    align-content: center;
    padding: 20px 16px 28px;
    background-position: 68% center;
  }
`;

export const LoginGlow = styled.div`
  display: none;
`;

export const LoginBrand = styled.section`
  position: relative;
  z-index: 1;
  max-width: 560px;
  animation: ${fadeUp} 0.65s ease both;

  @media (max-width: 960px) {
    display: none;
  }
`;

export const BrandMark = styled.div`
  width: 56px;
  height: 56px;
  margin-bottom: 24px;
  border-radius: 16px;
  background: url(${logo}) center / contain no-repeat;
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.28);
`;

export const BrandEyebrow = styled.div`
  margin-bottom: 14px;
  color: var(--auth-accent);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.2em;
  text-transform: uppercase;
`;

export const BrandTitle = styled.h1`
  margin: 0;
  font-size: clamp(36px, 5vw, 58px);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: #fff;

  span {
    display: block;
    color: var(--auth-accent);
  }
`;

export const BrandDescription = styled.p`
  max-width: 420px;
  margin: 20px 0 28px;
  color: rgba(255, 255, 255, 0.74);
  font-size: 15.5px;
  line-height: 1.7;
  font-weight: 500;
`;

export const BrandPerks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  span {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 14px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(12px);
    color: rgba(255, 255, 255, 0.92);
    font-size: 13px;
    font-weight: 600;
  }

  .anticon {
    color: var(--auth-accent);
  }
`;

export const MobileBrand = styled.div`
  display: none;
  position: relative;
  z-index: 1;
  width: min(100%, 440px);
  margin-bottom: 14px;
  animation: ${fadeUp} 0.5s ease both;

  @media (max-width: 960px) {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  img {
    width: 42px;
    height: 42px;
    border-radius: 12px;
  }

  strong {
    display: block;
    font-size: 20px;
    font-weight: 800;
    color: #fff;
  }

  small {
    color: rgba(255, 255, 255, 0.68);
    font-size: 12px;
    font-weight: 600;
  }
`;

export const LoginForm = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: min(100%, 440px);
  max-height: calc(100dvh - 64px);
  overflow: hidden;
  border-radius: 28px;
  background: #fff;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.28);
  color: var(--auth-ink);
  animation: ${fadeUp} 0.7s 0.05s ease both;

  &::before {
    content: "";
    position: absolute;
    inset: 0 0 auto;
    height: 4px;
    background: linear-gradient(90deg, #ff6a55, #d92d35 55%, #2563eb);
  }

  @media (max-width: 960px) {
    max-height: calc(100dvh - 96px);
  }

  @media (max-width: 480px) {
    border-radius: 22px;
  }

  label {
    display: block;
    margin-bottom: 7px;
    color: #374151 !important;
    font-size: 13px;
    font-weight: 700;
  }

  .ant-input-affix-wrapper,
  .ant-input,
  .ant-input-password {
    height: 48px;
    border-radius: 14px !important;
    border-color: var(--auth-line) !important;
    background: var(--auth-field) !important;
    box-shadow: none !important;
    color: var(--auth-ink);
    font-size: 14px;
  }

  .ant-input-affix-wrapper {
    padding: 0 14px;
    display: flex;
    align-items: center;

    .ant-input {
      height: auto;
      background: transparent !important;
      border: 0 !important;
      box-shadow: none !important;
    }

    .ant-input-prefix {
      margin-right: 10px;
      color: #9ca3af;
    }
  }

  .ant-input-password .ant-input {
    height: auto;
    background: transparent !important;
  }

  .ant-input-affix-wrapper:hover,
  .ant-input:hover,
  .ant-input-password:hover,
  .ant-input-affix-wrapper-focused,
  .ant-input:focus,
  .ant-input-password-focused {
    border-color: #ff8a78 !important;
    background: #fff !important;
    box-shadow: 0 0 0 4px rgba(255, 106, 85, 0.12) !important;
  }

  .ant-checkbox-wrapper {
    color: #4b5563;
    font-size: 13px;
    font-weight: 600;
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: var(--auth-accent-deep);
    border-color: var(--auth-accent-deep);
  }

  .ant-btn-primary {
    height: 50px;
    margin-top: 6px;
    border: 0;
    border-radius: 14px;
    background: linear-gradient(135deg, var(--auth-accent) 0%, var(--auth-accent-deep) 100%);
    box-shadow: 0 14px 28px rgba(217, 45, 53, 0.26);
    font-weight: 800;
    font-size: 15px;

    &:hover,
    &:focus {
      background: linear-gradient(135deg, #ff7d6b 0%, #c4222c 100%);
    }

    &:disabled {
      opacity: 0.45;
      box-shadow: none;
    }
  }
`;

export const FormTop = styled.div`
  flex-shrink: 0;
  padding: 28px 28px 8px;

  @media (max-width: 480px) {
    padding: 22px 18px 6px;
  }
`;

export const FormScroll = styled.div`
  flex: 1;
  min-height: 0;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 8px 28px 26px;
  scrollbar-width: thin;
  scrollbar-color: #d1d5db transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #d1d5db;
    border-radius: 999px;
  }

  @media (max-width: 480px) {
    padding: 6px 18px 22px;
  }
`;

export const FormIntro = styled.div`
  margin: 18px 0 4px;
`;

export const FormKicker = styled.div`
  margin-bottom: 6px;
  color: var(--auth-accent-deep);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

export const FormHeading = styled.h2`
  margin: 0;
  color: var(--auth-ink);
  font-size: 26px;
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.03em;
`;

export const FormSubheading = styled.p`
  margin: 8px 0 0;
  color: var(--auth-muted);
  font-size: 13.5px;
  line-height: 1.5;
`;

export const LoginHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px;
  padding: 5px;
  border-radius: 16px;
  background: #f3f4f6;
`;

export const LoginTitle = styled.button<{ active?: boolean }>`
  appearance: none;
  border: 0;
  padding: 11px 10px;
  color: #6b7280;
  margin: 0;
  border-radius: 12px;
  font-weight: 800;
  cursor: pointer;
  text-align: center;
  font-size: 13.5px;
  font-family: inherit;
  background: transparent;
  transition: all 0.2s ease;

  ${(props) =>
    props.active &&
    css`
      color: #fff;
      background: linear-gradient(135deg, #ff6a55 0%, #d92d35 100%);
      box-shadow: 0 8px 16px rgba(217, 45, 53, 0.22);
    `}
`;

export const Field = styled.div`
  margin-bottom: 14px;
`;

export const FieldError = styled.span`
  display: block;
  margin-top: 5px;
  color: #e11d48;
  font-size: 12px;
  font-weight: 600;
`;

export const FieldHint = styled.span`
  display: block;
  margin-top: 5px;
  color: #059669;
  font-size: 12px;
  font-weight: 600;
`;

export const FieldRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const MetaRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const SegmentGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
  padding: 4px;
  border-radius: 14px;
  background: #f3f4f6;

  button {
    appearance: none;
    height: 42px;
    border: 0;
    border-radius: 11px;
    background: transparent;
    color: #6b7280;
    font-weight: 700;
    font-size: 13px;
    font-family: inherit;
    cursor: pointer;
    transition: all 0.2s ease;

    &.active {
      background: linear-gradient(135deg, #ff6a55 0%, #d92d35 100%);
      color: #fff;
      box-shadow: 0 6px 14px rgba(217, 45, 53, 0.22);
    }
  }
`;

export const GenderGroup = styled.div``;
export const RoleRow = styled.div``;

export const TermsRow = styled.div`
  margin: 2px 0 14px;

  .ant-checkbox-wrapper {
    display: flex;
    align-items: flex-start;
    line-height: 1.45;
  }

  .ant-checkbox {
    top: 2px;
  }
`;

export const FormFooterNote = styled.p`
  margin: 18px 0 0;
  padding-top: 16px;
  border-top: 1px solid #f1f5f9;
  text-align: center;
  color: var(--auth-muted);
  font-size: 13px;
  line-height: 1.5;

  button {
    appearance: none;
    border: 0;
    background: none;
    padding: 0;
    color: var(--auth-accent-deep);
    font-weight: 800;
    cursor: pointer;
    font-family: inherit;
  }
`;
