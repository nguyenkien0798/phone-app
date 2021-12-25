import styled from "styled-components";

export const Category = styled.div`
  padding: 15px;
`;
export const CategoryList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  @media screen and (max-width: 767px) {
    display: grid;
    justify-content: flex-start;
    grid-auto-columns: 90%;
    grid-auto-flow: column;
    grid-gap: 1rem;
    overflow: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    scroll-snap-stop: always;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    -webkit-overflow-scrolling: touch;
    scroll-padding: 1rem;
    grid-template-columns: unset;
    &::-webkit-scrollbar {
      display: none;
      width: 0;
    }
    & > * {
      scroll-snap-align: start;
    }
  }
`;
export const CategoryItem = styled.div`
  position: relative;
  padding-top: 100%;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: middle;
    transition: all ease-in-out 0.4s;
    filter: brightness(60%);
  }
  &:hover img {
    transform: scale(1.2);
    filter: brightness(100%);
  }
  .category-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    span,
    h2 {
      color: #fff;
    }
    span {
      font-size: 16px;
      margin-bottom: 12px;
      display: inline-block;
      font-weight: 500;
    }
    h2 {
      font-weight: 700;
      font-size: 20px;
      text-transform: uppercase;
      position: relative;
      padding-bottom: 40px;
      &::after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: 0;
        display: block;
        transform: translateX(-50%);
        width: 40px;
        height: 4px;
        background-color: #fff;
        -webkit-transition: all 150ms linear;
        transition: all 150ms linear;
      }
    }
  }
  &:hover .category-content h2::after {
    width: 70px;
  }
`;
