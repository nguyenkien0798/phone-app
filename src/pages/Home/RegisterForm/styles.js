import styled from "styled-components";

export const Section = styled.div`
  padding: 40px 0;
`;

export const Register = styled.div`
  background-image: url(${(props) => props.bg});
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  padding: 190px 0;
  position: relative;
  @media screen and (max-width: 767px) {
    background-attachment: unset;
  }

  .register-content {
    position: absolute;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
    max-width: 528px;
    @media only screen and (max-width: 1024px) {
      width: 100%;
      padding: 12px;
    }
    h2 {
      font-size: 40px;
      line-height: 60px;
      padding-bottom: 12px;
      text-transform: uppercase;
      color: #fff;
      font-weight: 700;
      @media only screen and (max-width: 425px) {
        font-size: 32px;
      }
    }
    p {
      font-size: 16px;
      line-height: 28px;
      padding-bottom: 20px;
      color: #fff;
      @media only screen and (max-width: 425px) {
        font-size: 14px;
      }
    }
    .register-form {
      form {
        display: flex;
        input {
          flex: 1;
          outline: none;
          border: none;
          padding: 20px;
          font-family: "Quicksand", sans-serif;
          font-size: 14px;
        }
        button {
          background-color: blue;
          width: 80px;
          height: 62px;
          color: #fff;
          padding: 15px;
          outline: none;
          border: none;
          cursor: pointer;
          text-transform: uppercase;
          word-break: break-all;
          overflow: hidden;
        }
      }
    }
  }
`;
