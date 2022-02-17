import styled from "styled-components"

export const AboutContainer = styled.div`
  width: 1000px;
  margin:0 auto;
`;

export const AboutContent = styled.div`
  width: 100%;
  margin-top: 16px;
  text-align: center;

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
`;

