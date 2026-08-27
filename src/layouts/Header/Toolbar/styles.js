import styled from "styled-components"

export const Toolbar = styled.div`
  max-width: 1280px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 12px 20px;
  min-height: 68px;
  background: transparent;
  gap: 8px;

  @media screen and (max-width: 576px) {
    padding: 10px 12px;
    min-height: 56px;
  }
`;

export const ToolbarLogo = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  min-width: 0;
  
  h3 {
    margin: 0;
    color: #17212b;
    font-size: 23px;
    letter-spacing: 0.02em;
    font-weight: 800;
    white-space: nowrap;
  }

  a {
    display: flex;
    align-items: center;
    gap: 9px;
    color: #17212b;
    text-decoration: none;
  }

  img {
    width: 34px;
    height: 34px;
    object-fit: contain;
    flex-shrink: 0;
  }

  @media screen and (max-width: 950px) {
    margin-right: 8px;
  }

  @media screen and (max-width: 480px) {
    h3 {
      font-size: 16px;
    }

    img {
      width: 28px;
      height: 28px;
    }
  }
`;

export const ToolbarMenu = styled.div`
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    font-size: 1rem;
    font-weight: 500;
    margin-right: 2rem;
  }
  a {
    color: #fff;
    text-decoration: none;
    font-weight: bolder;
    padding-bottom: 15px;
  }
  a:hover {
    border-bottom: 3px solid #fff;
  }

  @media screen and (max-width: 950px) {
    display: none;
  }
`;

export const ToolbarSearch = styled.div`
  flex: 1;
  max-width: 500px;
  margin: 0 24px;
  min-width: 0;

  form {
    display: flex;
  }

  .ant-input-affix-wrapper {
    flex: 1;
    height: 38px;
    border: 0;
    box-shadow: none;
    border-radius: 7px 0 0 7px;
  }

  .ant-btn {
    color: #fff;
    height: 38px;
    background-color: #17212b;
    border: 0;
    border-radius: 0 7px 7px 0;

    &:hover {
      color: #333;
      background-color: #fff;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const DrawerSearch = styled.div`
  margin-bottom: 20px;

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .ant-input-affix-wrapper {
    border-radius: 8px;
  }
`;

export const DrawerNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 4px;

  a {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 10px;
    border-radius: 8px;
    color: #17212b;
    font-weight: 600;
    text-decoration: none;

    &:hover {
      background: #f1f5f9;
      color: #cd1817;
    }

    .anticon {
      color: #cd1817;
    }
  }
`;

export const ToolbarItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  @media screen and (max-width: 950px) {
    margin-right: 0;
    gap: 4px;
  }
`;

export const Username = styled.div`
  display: flex;
  align-items: center;
  color: #17212b;
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const Badge = styled.div`
  display: flex;
  align-items: center;
  
  .ant-btn {
    color: #17212b;
    font-size: 21px;
  }

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 16px;
  }

  li {
    font-size: 0.9rem;
    font-weight: 500;
  }

  a {
    color: #17212b;
    text-decoration: none;
    font-weight: bold;
    
    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 800px) {
    .ListMenu {
      display: none;
    }

    ul {
      gap: 4px;
    }
  }
`;

export const LoginItem = styled.div`
  display: flex;
  align-items: center;

  .ant-btn {
    border: 0;
    border-radius: 6px;
    color: #17212b;
    font-weight: 700;
  }

  .login-short {
    display: none;
  }

  @media screen and (max-width: 480px) {
    .login-full {
      display: none;
    }

    .login-short {
      display: inline;
    }
  }
`;

export const ToolbarIconMenu = styled.div`
  display: none;

  @media screen and (max-width: 950px) {
    display: flex;
    align-items: center;
    margin-right: 8px;
    
    .anticon {
      font-size: 20px;
      cursor: pointer;
    }
  }
`;
