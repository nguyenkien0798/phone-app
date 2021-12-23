import styled from "styled-components";

export const BrandContainer = styled.div`
  width: 1180px;
  margin: 0 auto;
  margin-bottom: 16px;
`;

export const BrandTitle = styled.div`
  margin-bottom: 42px;

  h3 {
    text-align: center;
    color: rgb(94,90,255);
  }
`;

export const BrandList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

`;

export const BrandItem = styled.div`
  width: calc(100% /3);
  margin: 0 auto;
  /* margin-right: 32px;
  margin-left: 32px; */

  img {
    height: 200px;
  }

  &:hover {
    cursor: pointer;
  }

  
`;