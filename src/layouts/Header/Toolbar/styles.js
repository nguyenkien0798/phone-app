import styled from "styled-components"

export const Toolbar = styled.div`
  max-width: 1280px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 8px 16px;
  background-color: #cd1817;
  min-height: 60px;
`;

export const ToolbarLogo = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  
  h3 {
    margin: 0;
    color: #fff;
    font-weight: bolder;
    white-space: nowrap;
  }

  @media screen and (max-width: 950px) {
    margin-right: 16px;
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

  form {
    display: flex;
  }

  .ant-input-affix-wrapper {
    border-radius: 4px 0 0 4px;
  }

  .ant-btn {
    color: #fff;
    height: 40px;
    background-color: #333;
    border: 0;
    border-radius: 0 4px 4px 0;

    &:hover {
      color: #333;
      background-color: #fff;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ToolbarItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (max-width: 950px) {
    margin-right: 8px;
  }
`;

export const Username = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
`;

export const Badge = styled.div`
  display: flex;
  align-items: center;
  
  .ant-btn {
    color: #fff;
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
    color: #fff;
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
  }
`;

export const LoginItem = styled.div`
  display: flex;
  align-items: center;
`;

export const ToolbarIconMenu = styled.div`
  display: none;

  @media screen and (max-width: 950px) {
    display: flex;
    align-items: center;
    margin-right: 16px;
    
    .anticon {
      font-size: 20px;
      cursor: pointer;
    }
  }
`;