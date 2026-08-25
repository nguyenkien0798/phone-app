import styled, { keyframes, css } from "styled-components";
import { Link } from "react-router-dom";

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(40px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-8px) rotate(1deg); }
  66% { transform: translateY(-4px) rotate(-1deg); }
`;

export const MainBanner = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 20px auto 0;
  padding: 0 16px;
`;

export const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 440px;
  border-radius: 24px;
  overflow: hidden;
  background: ${(props) => props.gradient || "linear-gradient(135deg, #0d1b2a 0%, #1a3a5c 100%)"};
  display: flex;
  align-items: center;
  box-shadow: 0 20px 60px -10px rgba(0, 0, 0, 0.4);
  transition: background 0.6s ease;

  /* Glowing accent border */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 24px;
    padding: 1px;
    background: linear-gradient(
      135deg,
      ${(props) => props.accentColor || "#3b82f6"}55 0%,
      transparent 50%,
      ${(props) => props.accentColor || "#3b82f6"}22 100%
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  /* Animated background orb */
  &::after {
    content: "";
    position: absolute;
    top: -60%;
    right: 5%;
    width: 500px;
    height: 500px;
    background: radial-gradient(
      circle,
      ${(props) => props.accentColor || "#3b82f6"}18 0%,
      transparent 70%
    );
    border-radius: 50%;
    pointer-events: none;
    transition: background 0.6s ease;
  }

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    padding-bottom: 50px;
  }
`;

export const BannerContent = styled.div`
  position: relative;
  z-index: 2;
  flex: 0 0 50%;
  max-width: 50%;
  padding: 40px 0 40px 48px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  animation: ${slideInLeft} 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;

  @media (max-width: 768px) {
    flex: none;
    max-width: 100%;
    padding: 32px 24px 16px;
    align-items: center;
    text-align: center;
  }
`;

export const BannerTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 20px;
  background: ${(props) => props.accentColor || "#3b82f6"}18;
  color: ${(props) => props.accentColor || "#3b82f6"};
  border: 1px solid ${(props) => props.accentColor || "#3b82f6"}55;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 12px;
  backdrop-filter: blur(8px);
  transition: background 0.3s ease, color 0.3s ease;
`;

export const BannerSubtitle = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: ${(props) => (props.textDark ? "#6b7280" : "#94a3b8")};
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0 0 6px;
`;

export const BannerTitle = styled.h2`
  font-size: clamp(26px, 3.5vw, 44px);
  font-weight: 900;
  line-height: 1.15;
  margin: 0 0 14px;
  letter-spacing: -0.5px;

  background: ${(props) =>
    props.textDark
      ? "linear-gradient(135deg, #1d1d1f 0%, #3d3d3f 100%)"
      : "linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const BannerDesc = styled.p`
  font-size: 13.5px;
  color: ${(props) => (props.textDark ? "#4b5563" : "#94a3b8")};
  line-height: 1.7;
  margin: 0 0 24px;
  max-width: 380px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const BannerActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
`;

export const ExploreBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  border-radius: 12px;
  background: ${(props) => props.accentColor || "#3b82f6"};
  color: #ffffff;
  font-weight: 700;
  font-size: 14px;
  text-decoration: none;
  box-shadow: 0 8px 24px ${(props) => props.accentColor || "#3b82f6"}50;
  transition: all 0.25s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.4s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px ${(props) => props.accentColor || "#3b82f6"}70;
    color: #ffffff;

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
  }
`;

export const BadgePill = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 10px 18px;
  border-radius: 12px;
  background: ${(props) =>
    props.textDark ? "rgba(0,0,0,0.06)" : "rgba(255, 255, 255, 0.08)"};
  border: 1px solid ${(props) =>
    props.textDark ? "rgba(0,0,0,0.12)" : "rgba(255, 255, 255, 0.15)"};
  color: ${(props) => (props.textDark ? "#374151" : "#e2e8f0")};
  font-weight: 700;
  font-size: 13px;
  backdrop-filter: blur(8px);
  letter-spacing: 0.3px;
  animation: ${shimmer} 3s linear infinite;
  background-size: 200% auto;
`;

export const BannerImage = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 52%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  animation: ${slideInRight} 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    animation: ${float} 6s ease-in-out infinite;
    filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.4));
  }

  /* Gradient fade to left */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 35%;
    height: 100%;
    background: linear-gradient(90deg, var(--banner-bg, #0d1b2a) 0%, transparent 100%);
    z-index: 1;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    height: 200px;

    &::before {
      display: none;
    }
  }
`;

export const ArrowBtn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.side === "left" ? "left: 20px;" : "right: 20px;")}
  z-index: 10;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.textDark ? "rgba(0,0,0,0.08)" : "rgba(255, 255, 255, 0.12)"};
  backdrop-filter: blur(12px);
  border: 1px solid ${(props) =>
    props.textDark ? "rgba(0,0,0,0.14)" : "rgba(255, 255, 255, 0.2)"};
  color: ${(props) => (props.textDark ? "#1d1d1f" : "#ffffff")};
  border-radius: 50%;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.25s ease;
  outline: none;

  &:hover {
    background: ${(props) =>
      props.textDark ? "rgba(0,0,0,0.15)" : "rgba(255, 255, 255, 0.25)"};
    border-color: ${(props) =>
      props.textDark ? "rgba(0,0,0,0.25)" : "rgba(255, 255, 255, 0.4)"};
    transform: translateY(-50%) scale(1.1);
  }

  @media (max-width: 768px) {
    top: auto;
    bottom: 12px;
    transform: none;
    ${(props) => (props.side === "left" ? "left: calc(50% - 52px);" : "right: calc(50% - 52px);")}

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const Dots = styled.div`
  position: absolute;
  bottom: 22px;
  left: 48px;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 10;

  @media (max-width: 768px) {
    left: 50%;
    transform: translateX(-50%);
    bottom: 10px;
  }
`;

export const Dot = styled.button`
  width: ${(props) => (props.active ? "28px" : "8px")};
  height: 8px;
  border-radius: 4px;
  background: ${(props) =>
    props.active
      ? props.accentColor || "#3b82f6"
      : "rgba(255, 255, 255, 0.35)"};
  border: none;
  cursor: pointer;
  padding: 0;
  transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  outline: none;

  &:hover {
    background: ${(props) =>
      props.active
        ? props.accentColor || "#3b82f6"
        : "rgba(255, 255, 255, 0.6)"};
  }
`;

export const TrustStrip = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  max-width: 1240px;
  margin: 16px auto 0;
  padding: 0 16px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const TrustItem = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  background: #ffffff;
  padding: 16px 18px;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    border-color: #cbd5e1;
  }

  .icon-box {
    width: 46px;
    height: 46px;
    border-radius: 14px;
    background: ${(props) => props.bgColor || "#eff6ff"};
    color: ${(props) => props.iconColor || "#2563eb"};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    flex-shrink: 0;
  }

  .text-box {
    h4 {
      margin: 0 0 2px;
      font-size: 13.5px;
      font-weight: 700;
      color: #0f172a;
    }

    p {
      margin: 0;
      font-size: 11.5px;
      color: #64748b;
      line-height: 1.4;
    }
  }
`;