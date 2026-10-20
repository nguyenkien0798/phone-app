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
    height: 44px;
    padding: 0 24px;
    font-weight: 800;
    background: linear-gradient(135deg, #ff6a55 0%, #d92d35 100%);
    border: 0;
    border-radius: 12px;
    color: white;
    box-shadow: 0 8px 18px rgba(217, 45, 53, 0.24);

    &:hover,
    &:focus {
      color: #fff;
      background: linear-gradient(135deg, #ff7d6b 0%, #a91928 100%);
      border: 0;
    }
  }

  @media (max-width: 576px) {
    margin-top: 8px;

    p {
      font-size: 14px;
    }
  }
`;
