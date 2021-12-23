import styled from "styled-components";

export const ProductListContainer = styled.div`
  margin: 16px auto;
  padding: 0 16px;
  max-width: 1280px;
  width: 100%;
`;

export const FilterContainer = styled.div`
  margin-bottom: 16px;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  overflow: hidden;
`;

export const FilterTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 0 8px;
  height: 36px;
  font-size: 18px;
  background-color: #2f54eb;
  color: white;
`;

export const FilterItem = styled.div`
  display: flex;
  align-items: center;
  height: 36px;
  padding: 0 8px;
  border-top: 1px solid #f0f0f0;
  cursor: pointer;
`;

export const ProductItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s;
  background-color: #fff;

  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  }

  img {
    height: 200px;
    margin-top: 6px;
  }

  .card-content{
    margin-left: 16px;
    margin-top: 10px;
    margin-bottom: 8px;
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
