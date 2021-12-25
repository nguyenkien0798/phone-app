import styled from "styled-components";

export const GalleryList = styled.div`
  margin-bottom: 16px;
  padding: 30px 10px 0;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
  @media screen and (max-width: 1023px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const GalleryItem = styled.div`
  @keyframes shine {
    100% {
      left: 125%;
    }
  }
  overflow: hidden;
  figure {
    position: relative;
    padding-top: 100%;
    margin: 0;
    cursor: pointer;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -75%;
      display: block;
      width: 50%;
      height: 100%;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.3) 100%
      );
      transform: skewX(-25deg);
      z-index: 2;
    }
    &:hover::before {
      animation: shine 0.75s;
    }
    img {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 1;
    }
  }
`;

export const GalleryTitle = styled.div`
  margin-top: 70px;
  margin-bottom: 16px;

  h3 {
    text-align: center;
    color: rgb(94,90,255);
  }
`;
