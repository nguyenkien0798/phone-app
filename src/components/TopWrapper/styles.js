import styled, { keyframes } from "styled-components";

import appleDevicesImg from "../../assets/images/apple/apple-devices.jpg";

const shimmerMove = keyframes`
  0% { background-position: -600px 0; }
  100% { background-position: 600px 0; }
`;

const floatUp = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
`;

export const TopContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: ${(props) => props.height || 320}px;
  overflow: hidden;

  /* Background image */
  background-image: url(${appleDevicesImg});
  background-size: 110%;
  background-position: center center;
  background-repeat: no-repeat;

  /* Deep purple-to-black overlay so text is always legible */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(15, 10, 40, 0.88) 0%,
      rgba(40, 10, 70, 0.80) 35%,
      rgba(80, 20, 100, 0.65) 65%,
      rgba(15, 10, 40, 0.82) 100%
    );
    z-index: 1;
  }

  /* Subtle color accent bands */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 55% 60% at 15% 50%, rgba(124, 58, 237, 0.25) 0%, transparent 65%),
      radial-gradient(ellipse 45% 50% at 85% 50%, rgba(225, 29, 72, 0.2) 0%, transparent 65%),
      radial-gradient(ellipse 60% 40% at 50% 100%, rgba(59, 130, 246, 0.15) 0%, transparent 60%);
    z-index: 1;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    min-height: ${(props) => Math.min(props.height || 320, 220)}px;
    background-size: cover;
  }
`;

export const TopInner = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 36px 24px;
  text-align: center;
  gap: 10px;
  width: 100%;

  @media (max-width: 576px) {
    padding: 28px 16px;
  }
`;

export const BreadcrumbWrapper = styled.div`
  margin-bottom: 6px;

  .ant-breadcrumb-link,
  .ant-breadcrumb-separator {
    color: rgba(255, 255, 255, 0.60);
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: color 0.2s ease;
  }

  .ant-breadcrumb-link:hover {
    color: rgba(255, 255, 255, 0.95);
    text-decoration: underline;
  }

  .ant-breadcrumb > span:last-child .ant-breadcrumb-link {
    color: rgba(255, 255, 255, 0.90);
    font-weight: 700;
    cursor: default;
  }
`;

export const PageIcon = styled.div`
  font-size: 28px;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 2px;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3));
  animation: ${floatUp} 4s ease-in-out infinite;
`;

export const TopTitle = styled.h1`
  font-size: clamp(22px, 4vw, 38px);
  font-weight: 900;
  color: #ffffff;
  margin: 0;
  line-height: 1.2;
  letter-spacing: -0.025em;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.4);

  /* Shimmer sweep animation */
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.18) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  background-size: 1200px 100%;
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  animation: ${shimmerMove} 3.5s ease-in-out infinite;
`;

export const TopSubtitle = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.72);
  margin: 2px 0 0;
  font-weight: 500;
  max-width: 600px;
  line-height: 1.6;
  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  letter-spacing: 0.01em;
  padding: 0 8px;

  @media (max-width: 576px) {
    font-size: 13px;
  }
`;

/* Kept for backwards compatibility — unused but safe */
export const BlobLeft = styled.div``;
export const BlobRight = styled.div``;
