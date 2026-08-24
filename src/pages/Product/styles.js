import styled from "styled-components";

export const ProductListContainer = styled.div`
  margin: 24px auto 40px;
  padding: 0 16px;
  max-width: 1280px;
  width: 100%;
`;

export const FilterContainer = styled.div`
  margin-bottom: 16px;
  border-radius: 10px;
  border: 1px solid #e3e8ed;
  overflow: hidden;
`;

export const FilterTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 0 8px;
  height: 36px;
  font-size: 18px;
  background-color: #cd1817;
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
    transform: translateY(-4px);
    border-color: rgba(217, 45, 53, 0.3);
    box-shadow: 0 12px 26px rgba(23, 33, 43, 0.1);
  }

  img {
    width: calc(100% - 12px);
    height: 210px;
    margin-top: 6px;
    object-fit: contain;
  }

  .card-content{
    padding: 0 16px 14px;
    margin-top: 10px;
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
    background-color: #d92d35;
    color: white;
  }

  .name {
    min-height: 40px;
    color: #17212b;
    font-weight: 700;
  }

  .price {
    margin-top: 6px;
    font-size: 16px;
    font-weight: 800;
    color: #d92d35;

    span {
      font-size: 12px;
    }
  }

  .view-detail {
    margin-top: 8px;
    color: #687481;
    font-size: 12px;
    font-weight: 700;

    span {
      color: #d92d35;
      font-size: 16px;
    }
  }
`;
