import styled from "styled-components"

export const AboutContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const AboutContent = styled.div`
  width: 100%;
  margin-top: 16px;
  text-align: center;

  h3 {
    font-size: clamp(16px, 2.5vw, 22px);
    line-height: 1.4;
  }

  p {
    font-size: 15px;
    line-height: 1.7;
    color: #475569;
  }

  img {
    display: block;
    width: 100%;
    max-width: 100%;
    height: auto;
    margin: 24px auto 0;
    border-radius: 12px;
  }

  Button {
    height: 40px;
    font-weight: bold;
    background-color: #cd1817;
    border-radius: 20px;
    color: white;

    &:hover {
      color: #333;
      border: 1px solid #cd1817;
    }
  }

  @media (max-width: 576px) {
    margin-top: 8px;

    p {
      font-size: 14px;
    }
  }
`;
