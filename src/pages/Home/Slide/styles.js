import styled from "styled-components";

export const MainBanner = styled.div`
  width: 100%;
  height: 500px;
  position: relative;

  .carousel {    
    height: 500px;
      .img-banner {          
          height: 500px !important;
          object-fit: cover;
        }
    }

    .carousel-control-prev {
        top: 50%;
        height: 8%;
        width: 3%;
        background-color: #000;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
    }

    .carousel-control-next {
        width: 3%;
        top: 50%;
        height: 8%;
        background-color: #000;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
    }


  @media (min-width: 374px) and (max-width: 800px) {
    display: none;
    .carousel {
        display: none;
    }
    .main__banner {
        height: 260px;
    }
  }
`;