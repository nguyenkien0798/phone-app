import styled from "styled-components";

export const ProductContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 32px;
  margin-bottom: 24px;
  background-color: #fff;
  border-radius: 6px;
  padding: 0 16px;
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
    height: 300px;
    margin: 10px;
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
    background-color: #cd1817;
    color: white;
  }

  .name {
    font-weight: bold;
  }
  
  .price {
    padding-left: 8px;
    font-weight: bold;
    color: white;
    background-color: #cd1817;
    width: 92px;
    border-radius: 10px;
  }
`;

export const ProductTitle = styled.div`
  padding-top: 12px;
  margin-bottom: 36px;

  h3 {    
    font-weight: bold;
    color: #cd1817;
  }
`;
