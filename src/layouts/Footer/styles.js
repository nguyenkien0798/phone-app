import styled from "styled-components";


export const container = styled.div`
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

export const Footer = styled.div`
  border-top: 4px solid rgb(94,90,255);
`;

export const FooterContainer = styled(container)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin: 40px auto 20px;

  @media screen and (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px 40px;
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 30px;
  }
`;
export const FooterItem = styled.div`
  .footer-desc {
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 21px;
    word-break: break-all;
  }
  .footer-logo {
    display: block;
    width: 150px;
    transform: translateX(-8px);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .footer-social {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
    a {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      color: #fff;
      font-size: 15px;
      background-color: #3f62a7;
      transition: 300ms;
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        border-radius: 50%;
        box-sizing: content-box;
        box-shadow: 0 0 0 4.2px #9eacca;
        opacity: 0;
        -webkit-transition: 300ms;
        transition: 300ms;
      }
      &:hover {
        background-color: #fff;
        color: #000;
      }
      &:hover::after {
        opacity: 1;
        transform: scale(1.15);
      }
    }
  }

  .footer-list {
    list-style: none;
    .footer-item {
      line-height: 28px;
      padding-left: 0;
      font-size: 14px;
      word-break: break-all;
      .footer-line {
        position: relative;
        &::before {
          content: "";
          position: absolute;
          top: 50%;
          bottom: 0;
          left: -18px;
          width: 8px;
          height: 1px;
          background-color: #272727;
        }
      }
      a {
        display: block;
        width: fit-content;
        text-decoration: none;
        text-transform: capitalize;
        color: unset;
        font-size: 14px;
        word-break: break-all;
      }
      span {
        font-weight: 600;
      }
    }
  }
  .footer-video {
    position: relative;
    padding-top: 56.25%;
    iframe {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;
export const FooterTitle = styled.h4`
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.02em;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: 600;
  word-break: break-all;
`;

export const CopyRight = styled.div`
  border-top: 1px dashed #e0d9d6;
  padding: 24px 15px;
  text-align: center;
  span {
    @media screen and (max-width: 767px) {
      display: block;
      margin-bottom: 10px;
    }
  }
  a {
    text-decoration: none;
    color: unset;
    font-weight: 600;
  }
`;
