import styled from "styled-components";

export const ProductContainer = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  margin-bottom: 24px;
`;

export const ProductItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s;
  background-color: #fff;

  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  }

  img {
    height: 250px;
    margin-top: 6px;
  }

  .card-content{
    margin-left: 16px;
    margin-top: 10px;
    margin-bottom: 16px;
  }

  .new {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: -4px;
    top: 4px;
    height: 16px;
    width: 42px;
    border-radius: 4px;
    background-color: red;
    color: white;
  }

  .name {
    font-weight: bold;
  }
  
  .price {
    padding-left: 8px;
    font-weight: bold;
    color: white;
    background-color: red;
    width: 92px;
    border-radius: 10px;
  }
`;

export const ProductTitle = styled.div`
  margin-top: 16px;
  margin-bottom: 36px;

  h3 {
    text-align: center;
    color: rgb(94,90,255);
  }
`;