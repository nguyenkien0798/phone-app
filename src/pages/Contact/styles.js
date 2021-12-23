import styled from "styled-components";

export const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;

  @media only screen and (min-width: 992px) {
    max-width: 970px;
  }

  @media only screen and (min-width: 1200px) {
    max-width: 1200px;
  }

  @media only screen and (min-width: 1375px) {
    max-width: 1300px;
  }

  @media screen and (max-width: 767px) {
    padding-left: 7.5px;
    padding-right: 7.5px;
  }
`;

export const ContactContainer = styled.div`

`;

export const ContactContent = styled.div`
  padding: 15px 0;
  text-align: center;
  h2 {
    font-family: "Poppins";
    font-size: 24px;
    text-transform: uppercase;
    color: #2f54eb;
    font-weight: 700;
  }
`;