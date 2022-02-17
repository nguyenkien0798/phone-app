import styled from "styled-components";

export const Category = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 32px;
  margin-bottom: 24px;
  background-color: #fff;
  
`;
export const CategoryList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);

  @media screen and (max-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  @media screen and (max-width: 1130px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
  @media screen and (max-width: 1100px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }
  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }
  @media screen and (max-width: 676px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(12, 1fr);
  }
`;
export const CategoryItem = styled.div`
  width: 213.33px;
  height: 150px;
  cursor: pointer;
  border: 1px solid #ccc;

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

      img {
        margin-top: 10px;
        margin-bottom: 10px;
        width: 60px;
        height: 60px;
      }
    }

    .category-title {
      padding-top: 10px;
      font-weight: 500;
    }
  }

  @media screen and (max-width: 1200px) {
    width: 240px;
  }

  @media screen and (max-width: 1150px) {
    width: 282.5px;
  }
  @media screen and (max-width: 1100px) {
    width: 366.67px;
  }
  @media screen and (max-width: 800px) {
    width: 400px;
  }
  @media screen and (max-width: 676px) {
    margin-left: 130px;
  }
  @media screen and (max-width: 600px) {
    margin-left: 85px;
  }
  @media screen and (max-width: 500px) {
    margin-left: 40px;
  }
`;
