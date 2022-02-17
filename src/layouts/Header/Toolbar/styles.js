import styled from "styled-components"

export const Toolbar = styled.div`
  max-width: 1280px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  background-color: #cd1817;

`;

export const ToolbarLogo = styled.div`
  display: inline-block;
  text-decoration: none;
  
  h3 {
    margin-top: 10px;
    color: #fff;
    font-weight: bolder;
  }

  /* img{
      width: 70px;
      height: 50px;
      float: left;
    } */

    @media screen and (max-width: 950px) {
      margin-top: 8px;
      margin-right: 24px;
    }
    @media screen and (max-width: 409px) {
      margin-top: 12px;
    }
`;

export const ToolbarMenu = styled.div`
  margin-top: 16px;

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
      margin-right: 4rem;
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
  margin-top: 8px;
  form {
    display: flex;
  }

  Input {
    width: 400px;
  }

  Button {
    color: #fff;
    width: 50px;
    height: 42px;
    background-color: #333;
    border: 0;


    &:hover{
      color: #333;
      border: 0;
    }
  }

  @media screen and (max-width: 1065px) {
    form {
      display: none;
    }
  }
`;

export const ToolbarItem = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 0;

  .header__toolbar__item-order {
    margin-right: 32px;
  }

  @media screen and (max-width: 950px) {
    margin-right: 16px;
  }
`;

export const Username = styled.div`
  margin-top: 6px;

  @media screen and (max-width: 409px) {
    text-align: center;
  }
`;

export const Badge = styled.div`
  
  margin-top: 16px;
  margin-right: 16px;
  
  Button {
    color: #fff;
  }

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
      margin-right: 24px;
  }
  a {
    color: #fff;
    text-decoration: none;
    font-weight: bolder;
    padding-bottom: 15px;
  }

  @media screen and (max-width: 800px) {
    .ListMenu {
      display: none;
    }
  }

  @media screen and (max-width: 950px) {
    margin-bottom: 10px;
  }
  @media screen and (max-width: 409px) {
    margin-top: 20px;
    margin-right: 16px;
  }
`;

export const LoginItem = styled.div`
  margin-top: 16px;
`;

export const ToolbarIconMenu = styled.div`
  display: none;

  @media screen and (max-width: 950px) {
    display: block;
    margin-top: 18px;
    margin-left: 16px;
  }
  @media screen and (max-width: 409px) {
    margin-top: 22px;
  }
`;