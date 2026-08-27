import styled, { css } from "styled-components";
import bg_login from "../../assets/images/bg_login.jpg";

export const LoginContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 80px;
  padding: 72px max(7vw, 32px);
  max-width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background: #08111f url(${bg_login}) no-repeat right center / 62% auto;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, #08111f 0%, rgba(8, 17, 31, 0.94) 38%, rgba(8, 17, 31, 0.3) 75%, rgba(8, 17, 31, 0.7) 100%);
  }

  @media (max-width: 760px) {
    justify-content: center;
    padding: 32px 16px;
    background-position: 65% center;
    background-size: auto 100%;

    &::before {
      background: linear-gradient(180deg, rgba(8, 17, 31, 0.78), #08111f 72%);
    }
  }
`;
export const LoginGlow = styled.div`
  position: absolute;
  width: 420px;
  height: 420px;
  right: 23%;
  bottom: -220px;
  border-radius: 50%;
  background: rgba(28, 180, 204, 0.18);
  filter: blur(70px);
`;

export const LoginBrand = styled.section`
  position: relative;
  z-index: 1;
  max-width: 480px;
  color: #fff;

  @media (max-width: 760px) {
    display: none;
  }
`;

export const BrandMark = styled.div`
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  margin-bottom: 28px;
  border: 1px solid rgba(111, 227, 235, 0.55);
  border-radius: 16px 16px 16px 4px;
  color: #08111f;
  background: #76e4e8;
  font-size: 28px;
  font-weight: 900;
`;

export const BrandEyebrow = styled.div`
  margin-bottom: 14px;
  color: #76e4e8;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
`;

export const BrandTitle = styled.h1`
  margin: 0;
  color: #fff;
  font-size: clamp(38px, 5vw, 64px);
  line-height: 1.04;
  letter-spacing: 0;
  font-weight: 800;
`;

export const BrandDescription = styled.p`
  max-width: 390px;
  margin: 24px 0 32px;
  color: rgba(235, 246, 250, 0.72);
  font-size: 16px;
  line-height: 1.7;
`;

export const BrandPerks = styled.div`
  display: grid;
  gap: 12px;
  color: rgba(235, 246, 250, 0.88);
  font-size: 13px;

  span { display: flex; align-items: center; gap: 10px; }
  .anticon { color: #76e4e8; }
`;

export const LoginForm = styled.div`
  position: relative;
  z-index: 1;
  margin: 16px;
  padding: 38px;
  width: min(100%, 460px);
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(255, 255, 255, 0.75);
  border-radius: 24px;
  box-shadow: 0 28px 80px rgba(0, 0, 0, 0.34);
  color: #102033;

  @media (max-width: 760px) {
    margin: 0;
    padding: 28px 22px;
    border-radius: 20px;
  }

  label {
    color: #4c5b6b !important;
    font-size: 13px;
    font-weight: 700;
  }

  .ant-input,
  .ant-input-password .ant-input {
    height: 46px;
    background-color: #f4f7f9;
    border-color: #dbe4e9;
    border-radius: 10px;
    color: #102033;

    &::placeholder {
      color: #9aa8b5;
    }

    &:hover, &:focus {
      border-color: #20aeb8;
      box-shadow: 0 0 0 3px rgba(32, 174, 184, 0.12);
    }
  }

  .ant-input-password {
    background-color: #f4f7f9;
    border-color: #dbe4e9;
    border-radius: 10px;

    .ant-input-suffix {
      color: #71808f;
    }
  }

  .ant-select-selector {
    min-height: 46px;
    background-color: #f4f7f9 !important;
    border-color: #dbe4e9 !important;
    border-radius: 10px;
    color: #102033 !important;
  }

  .ant-select-arrow {
    color: #71808f;
  }

  .ant-radio-wrapper, .ant-checkbox-wrapper {
    color: #526172;
    font-size: 13px;
  }

  .ant-btn-primary {
    height: 48px;
    border: 0;
    border-radius: 10px;
    background: #102033;
    box-shadow: 0 10px 18px rgba(16, 32, 51, 0.18);
    font-weight: 700;

    &:hover, &:focus { background: #1d7180; }
  }
`;

export const FormIntro = styled.div`
  margin-bottom: 26px;
`;

export const FormKicker = styled.div`
  margin-bottom: 8px;
  color: #1aa8b2;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.5px;
`;

export const FormHeading = styled.h2`
  margin: 0;
  color: #102033;
  font-size: 28px;
  line-height: 1.2;
  letter-spacing: 0;
`;

export const FormSubheading = styled.p`
  margin: 9px 0 0;
  color: #7b8995;
  font-size: 13px;
`;

export const LoginHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
  padding: 4px;
  margin-bottom: 28px;
  border-radius: 12px;
  background: #edf2f4;
`;

export const LoginTitle = styled.h3`
  padding: 10px;
  color: #7b8995;
  margin: 0;
  border-radius: 9px;
  font-weight: 700;
  cursor: pointer;
  text-align: center;
  font-size: 13px;
  transition: all 0.2s ease;

  ${(props) =>
    props.active &&
    css`
      color: #102033;
      background: #fff;
      box-shadow: 0 3px 10px rgba(16, 32, 51, 0.08);
    `}
`;

