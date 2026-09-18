import styled, { css, keyframes } from "styled-components";
import bgLogin from "../../assets/images/apple/apple-devices.jpg";
import logo from "../../assets/images/brand/phone-store-mark.svg";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
`;

const softPulse = keyframes`
  0%, 100% { opacity: 0.45; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.06); }
`;

export const LoginContainer = styled.div`
  --auth-ink: #0c121a;
  --auth-accent: #ff6a55;
  --auth-accent-deep: #d92d35;
  --auth-muted: #6b7785;
  --auth-line: #e7ecef;
  --auth-field: #f5f7f9;

  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 440px);
  align-items: center;
  gap: clamp(28px, 5vw, 72px);
  width: 100%;
  height: 100vh;
  height: 100dvh;
  padding: 24px clamp(16px, 5vw, 72px);
  overflow: hidden;
  font-family: "Manrope", "Be Vietnam Pro", sans-serif;
  color: #fff;
  background:
    linear-gradient(115deg, rgba(8, 12, 18, 0.96) 0%, rgba(12, 18, 26, 0.88) 42%, rgba(12, 18, 26, 0.55) 100%),
    url(${bgLogin}) right center / cover no-repeat;

  &::before {
    content: "";
    position: absolute;
    inset: auto -10% -20% 40%;
    height: 60%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 106, 85, 0.28) 0%, transparent 68%);
    filter: blur(40px);
    animation: ${softPulse} 7s ease-in-out infinite;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    inset: -10% 55% auto -15%;
    height: 45%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, transparent 70%);
    filter: blur(30px);
    pointer-events: none;
  }

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    justify-items: center;
    align-content: center;
    padding: 16px 14px;
    background-position: 62% center;
  }
`;

export const LoginGlow = styled.div`
  display: none;
`;

export const LoginBrand = styled.section`
  position: relative;
  z-index: 1;
  max-width: 560px;
  animation: ${fadeUp} 0.7s ease both;

  @media (max-width: 960px) {
    display: none;
  }
`;

export const BrandMark = styled.div`
  width: 52px;
  height: 52px;
  margin-bottom: 22px;
  border-radius: 14px;
  background: url(${logo}) center / contain no-repeat;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.35);
`;

export const BrandEyebrow = styled.div`
  margin-bottom: 14px;
  color: var(--auth-accent);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.22em;
  text-transform: uppercase;
`;

export const BrandTitle = styled.h1`
  margin: 0;
  font-family: "Be Vietnam Pro", "Manrope", sans-serif;
  font-size: clamp(34px, 4.8vw, 54px);
  font-weight: 800;
  line-height: 1.12;
  letter-spacing: -0.02em;
  color: #fff;

  span {
    display: block;
    color: var(--auth-accent);
  }
`;

export const BrandDescription = styled.p`
  max-width: 400px;
  margin: 18px 0 28px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 15px;
  line-height: 1.65;
  font-weight: 500;
`;

export const BrandPerks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  span {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 9px 12px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    background: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(10px);
    color: rgba(255, 255, 255, 0.9);
    font-size: 12.5px;
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
  width: min(100%, 420px);
  margin-bottom: 12px;
  animation: ${fadeUp} 0.55s ease both;
  flex-shrink: 0;

  @media (max-width: 960px) {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 11px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  strong {
    font-family: "Be Vietnam Pro", "Manrope", sans-serif;
    font-size: 20px;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: #fff;
  }

  small {
    color: rgba(255, 255, 255, 0.65);
    font-size: 12px;
    font-weight: 600;
  }
`;

export const LoginForm = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: min(100%, 400px);
  max-height: calc(100vh - 48px);
  max-height: calc(100dvh - 48px);
  overflow: hidden;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.98);
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow:
    0 24px 64px rgba(0, 0, 0, 0.32),
    0 1px 0 rgba(255, 255, 255, 0.65) inset;
  color: var(--auth-ink);
  animation: ${fadeUp} 0.75s 0.08s ease both;

  @media (max-width: 960px) {
    max-height: calc(100vh - 88px);
    max-height: calc(100dvh - 88px);
  }

  @media (max-width: 480px) {
    border-radius: 20px;
    max-height: calc(100vh - 80px);
    max-height: calc(100dvh - 80px);
  }

  label {
    display: block;
    margin-bottom: 6px;
    color: #3d4a57 !important;
    font-size: 12.5px;
    font-weight: 700;
  }

  .ant-input-affix-wrapper,
  .ant-input,
  .ant-input-password {
    height: 44px;
    border-radius: 12px !important;
    border-color: var(--auth-line) !important;
    background: var(--auth-field) !important;
    box-shadow: none !important;
    color: var(--auth-ink);
    font-size: 13.5px;
    transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  }

  .ant-input-affix-wrapper {
    padding: 0 12px;
    display: flex;
    align-items: center;

    .ant-input {
      height: auto;
      background: transparent !important;
      border: 0 !important;
      box-shadow: none !important;
    }

    .ant-input-prefix {
      margin-right: 8px;
      color: #8a96a3;
    }
  }

  .ant-input-password {
    .ant-input {
      height: auto;
      background: transparent !important;
    }

    .ant-input-suffix {
      color: #8a96a3;
    }
  }

  .ant-input-affix-wrapper:hover,
  .ant-input:hover,
  .ant-input-password:hover,
  .ant-input-affix-wrapper-focused,
  .ant-input:focus,
  .ant-input-password-focused {
    border-color: #ff8a78 !important;
    background: #fff !important;
    box-shadow: 0 0 0 3px rgba(255, 106, 85, 0.12) !important;
  }

  .ant-radio-wrapper,
  .ant-checkbox-wrapper {
    color: #526172;
    font-size: 12.5px;
    font-weight: 600;
  }

  .ant-checkbox-checked .ant-checkbox-inner,
  .ant-radio-checked .ant-radio-inner {
    background-color: var(--auth-accent-deep);
    border-color: var(--auth-accent-deep);
  }

  .ant-btn-primary {
    height: 46px;
    margin-top: 4px;
    border: 0;
    border-radius: 12px;
    background: linear-gradient(135deg, var(--auth-accent) 0%, var(--auth-accent-deep) 100%);
    box-shadow: 0 12px 24px rgba(217, 45, 53, 0.26);
    font-weight: 800;
    font-size: 14.5px;

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
  padding: 20px 22px 0;
  background: #fff;

  @media (max-width: 480px) {
    padding: 16px 16px 0;
  }
`;

export const FormScroll = styled.div`
  flex: 1;
  min-height: 0;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 4px 18px 22px 22px;
  scrollbar-gutter: stable;
  scrollbar-width: thin;
  scrollbar-color: #c5ced8 #fff;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #fff;
    margin: 4px 0;
  }

  &::-webkit-scrollbar-thumb {
    background: #c5ced8;
    border-radius: 999px;
    border: 2px solid #fff;
    background-clip: padding-box;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #9aa8b8;
    border: 2px solid #fff;
    background-clip: padding-box;
  }

  @media (max-width: 480px) {
    padding: 4px 12px 18px 16px;
  }
`;

export const FormIntro = styled.div`
  margin-bottom: 14px;
`;

export const FormKicker = styled.div`
  margin-bottom: 4px;
  color: var(--auth-accent-deep);
  font-size: 10.5px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

export const FormHeading = styled.h2`
  margin: 0;
  font-family: "Be Vietnam Pro", "Manrope", sans-serif;
  color: var(--auth-ink);
  font-size: clamp(20px, 3.5vw, 24px);
  line-height: 1.25;
  font-weight: 800;
  letter-spacing: -0.02em;
`;

export const FormSubheading = styled.p`
  margin: 6px 0 0;
  color: var(--auth-muted);
  font-size: 13px;
  line-height: 1.45;
`;

export const LoginHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
  padding: 4px;
  margin-bottom: 14px;
  border-radius: 12px;
  background: #eef2f5;
`;

export const LoginTitle = styled.button`
  appearance: none;
  border: 0;
  padding: 10px;
  color: #7b8995;
  margin: 0;
  border-radius: 10px;
  font-weight: 800;
  cursor: pointer;
  text-align: center;
  font-size: 13px;
  font-family: inherit;
  background: transparent;
  transition: all 0.2s ease;

  ${(props) =>
    props.active &&
    css`
      color: var(--auth-ink);
      background: #fff;
      box-shadow: 0 3px 10px rgba(16, 32, 51, 0.08);
    `}
`;

export const Field = styled.div`
  margin-bottom: 14px;
`;

export const FieldError = styled.span`
  display: block;
  margin-top: 5px;
  color: #e11d48;
  font-size: 11.5px;
  font-weight: 600;
`;

export const FieldHint = styled.span`
  display: block;
  margin-top: 5px;
  color: #059669;
  font-size: 11.5px;
  font-weight: 600;
`;

export const FieldRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;

export const MetaRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 12px;

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;

export const SegmentGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
  padding: 4px;
  border-radius: 12px;
  background: #eef2f5;

  button {
    appearance: none;
    height: 40px;
    border: 0;
    border-radius: 9px;
    background: transparent;
    color: #7b8995;
    font-weight: 700;
    font-size: 13px;
    font-family: inherit;
    cursor: pointer;
    transition: all 0.2s ease;

    &.active {
      background: #fff;
      color: var(--auth-ink);
      box-shadow: 0 2px 8px rgba(16, 32, 51, 0.08);
    }
  }
`;

export const GenderGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px;

  .gender-option {
    height: 40px;
    border-radius: 10px;
    border: 1.5px solid var(--auth-line);
    background: var(--auth-field);
    color: #526172;
    font-weight: 700;
    font-size: 12.5px;
    cursor: pointer;
    transition: all 0.2s ease;

    &.active {
      border-color: var(--auth-accent);
      background: #fff5f3;
      color: var(--auth-accent-deep);
      box-shadow: 0 0 0 3px rgba(255, 106, 85, 0.1);
    }
  }
`;

export const RoleRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 14px;
  padding-top: 2px;
`;

export const TermsRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: 4px 0 14px;
  padding: 12px 14px;
  border-radius: 12px;
  background: #f7f9fb;
  border: 1px solid #eef2f5;

  .ant-checkbox-wrapper {
    display: flex;
    align-items: flex-start;
    line-height: 1.4;
  }

  .ant-checkbox {
    top: 2px;
  }
`;

export const FormFooterNote = styled.p`
  margin: 16px 0 0;
  padding-top: 14px;
  border-top: 1px solid #eef2f5;
  text-align: center;
  color: var(--auth-muted);
  font-size: 12.5px;
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
