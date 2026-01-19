import styled from "styled-components";

export const Category = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 32px;
  margin-bottom: 24px;
  background-color: #fff;
  position: relative;
  z-index: 1;
`;

export const CategoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  
  @media screen and (max-width: 576px) {
    justify-content: center;
  }
`;

export const CategoryItem = styled.div`
  width: calc(100% / 6);
  height: 150px;
  cursor: pointer;
  border: 1px solid #ccc;
  box-sizing: border-box;

  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  }

  .category-content {
    padding-top: 20px;
    text-align: center;

    .category-image {
      margin: 0 auto;
      width: 85px;
      height: 85px;
      background-color: #e8e5e5;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 60px;
        height: 60px;
        object-fit: contain;
      }
    }

    .category-title {
      padding-top: 10px;
      font-weight: 500;
      font-size: 14px;
    }
  }

  @media screen and (max-width: 1200px) {
    width: calc(100% / 5);
  }

  @media screen and (max-width: 992px) {
    width: calc(100% / 4);
  }

  @media screen and (max-width: 768px) {
    width: calc(100% / 3);
  }

  @media screen and (max-width: 576px) {
    width: calc(100% / 2);
  }

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;
