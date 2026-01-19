import styled from "styled-components";

export const MainBanner = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;

  .ant-carousel {
    width: 100%;
  }

  .ant-carousel .slick-slide {
    text-align: center;
  }

  .img-banner {          
    width: 100%;
    height: auto;
    min-height: 400px;
    max-height: 600px;
    object-fit: cover;
    object-position: center bottom;
    display: block;
  }

  .slick-dots {
    bottom: 20px;
  }

  /* Custom arrows */
  .carousel-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    width: 40px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }
  }

  .carousel-prev {
    left: 0;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  .carousel-next {
    right: 0;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  @media (max-width: 800px) {
    .img-banner {
      min-height: 200px;
      max-height: 300px;
    }

    .carousel-arrow {
      width: 30px;
      height: 60px;
      font-size: 16px;
    }
  }
`;