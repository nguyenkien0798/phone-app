import styled, { css } from "styled-components";
import bglogin from "../../assets/images/bg-login.jpg";
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
  padding: 16px;
  width: 500px;
  background-color: white;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.8);  
  color: white;
`;
export const LoginHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
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
      color: #0d6efd;
      border-bottom: 2px solid #0d6efd;
    `}
`;
