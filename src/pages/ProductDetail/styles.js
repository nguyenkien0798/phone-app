import styled from "styled-components";

export const ProductDetailContainer = styled.div`
  margin: 16px auto;
  padding: 0 16px;
  max-width: 1280px;
  width: 100%;
`;

export const ProductDetailContent = styled.div`
  & img {
    width: 100%;
    height: auto;
  }
`;

export const SkeletonImage = styled.div`
  height: 100%;
  & .ant-skeleton-element {
    width: 100%;
    height: 100%;
  }
  & .ant-skeleton-image {
    width: 100%;
    height: 100%;
  }
`;
