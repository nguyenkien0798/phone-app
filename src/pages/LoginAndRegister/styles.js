import styled, { css } from "styled-components";
import bg_login from "../../assets/images/bg_login.jpg";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  min-height: 100vh;
  background-image: url(${bg_login});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const LoginForm = styled.div`
  margin: 16px;
  padding: 24px;
  width: 500px;
  background: rgba(0, 0, 0, 0.85);
  border-radius: 8px;
  color: white;

  label {
    color: white !important;
  }

  .ant-input,
  .ant-input-password .ant-input {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
    color: white;

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }

    &:hover, &:focus {
      border-color: #1890ff;
    }
  }

  .ant-input-password {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);

    .ant-input-suffix {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  .ant-select-selector {
    background-color: rgba(255, 255, 255, 0.1) !important;
    border-color: rgba(255, 255, 255, 0.3) !important;
    color: white !important;
  }

  .ant-select-arrow {
    color: rgba(255, 255, 255, 0.7);
  }

  .ant-radio-wrapper, .ant-checkbox-wrapper {
    color: white;
  }
`;

export const LoginHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-bottom: 24px;
`;

export const LoginTitle = styled.h3`
  color: white;
  margin: 0 8px;
  font-weight: normal;
  cursor: pointer;
  font-size: ${({ size }) => size || "16px"};

  ${(props) =>
    props.active &&
    css`
      padding-bottom: 4px;
      color: #1890ff;
      border-bottom: 2px solid #1890ff;
    `}
`;
