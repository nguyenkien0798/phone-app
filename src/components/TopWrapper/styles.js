import styled from "styled-components";
import topWrapperImage from "../../assets/images/top_wrapper.jpg";

export const TopContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${({ height }) => (height ? `${height}px` : "200px")};
  background-image: url(${topWrapperImage});
  background-size: cover;
  background-position: 50% 15%;
  background-repeat: no-repeat;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 71, 79, 0.5);
  }

  & .ant-breadcrumb-link,
  & .ant-breadcrumb-separator {
    position: relative;
    color: white;
    z-index: 1;
  }
`;

export const TopTitle = styled.h2`
  margin-top: 24px;
  font-size: 32px;
  color: white;
  z-index: 1;
`;
