import styled from "styled-components"

export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

`;

export const ToolbarLogo = styled.div`
  display: inline-block;
  text-decoration: none;
  margin-left: 32px;
  
  h3 {
    margin-top: 10px;
    color: rgb(94,90,255);
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
    color: rgb(94,90,255);
    text-decoration: none;
    font-weight: bolder;
    padding-bottom: 15px;
  }
  a:hover {
    border-bottom: 3px solid rgb(94,90,255);
  }

  @media screen and (max-width: 950px) {
    display: none;
  }
`;

export const ToolbarItem = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 0;
  margin-right: 32px;

  .header__toolbar__item-order {
    margin-right: 32px;
  }

  @media screen and (max-width: 950px) {
    margin-right: 16px;
  }
`;

export const Username = styled.div`
  margin-top: 6px;
`;

export const Badge = styled.div`
  margin-top: 16px;
  margin-right: 16px;
  
  @media screen and (max-width: 950px) {
    margin-bottom: 10px;
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
`;