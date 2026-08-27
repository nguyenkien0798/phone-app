import styled, { css } from "styled-components";

export const ProfileWrapper = styled.div`
  margin: 24px auto;
  padding: 0 16px;
  max-width: 1280px;
  width: 100%;
`;

export const ProfileContainer = styled.div`
  display: flex;
  width: 100%;
  box-shadow: 0 3px 6px 10px rgba(0, 0, 0, 0.03);
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  flex-shrink: 0;
  background-color: #2f54eb;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const RightContainer = styled.div`
  padding: 16px;
  width: calc(100% - 250px);
  min-width: 0;
  overflow-x: auto;

  @media (max-width: 768px) {
    width: 100%;
    padding: 16px 12px;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  width: 100%;
  height: 280px;

  h2 {
    color: white;
    margin: 12px 0 0;
    font-size: 18px;
    text-align: center;
    word-break: break-word;
  }

  .profile-avatar {
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 20px 16px 12px;
    flex-direction: row;
    gap: 14px;
    justify-content: flex-start;

    .profile-avatar {
      width: 64px !important;
      height: 64px !important;
      line-height: 64px !important;
      font-size: 28px !important;
    }

    h2 {
      margin: 0;
      font-size: 16px;
      text-align: left;
    }
  }
`;

export const TabsRow = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: row;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
`;

export const TabItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  height: 50px;
  cursor: pointer;
  color: white;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    background-color: #1d39c4;
  }

  ${({ active }) =>
    active &&
    css`
      background-color: #85a5ff;
      border-right: 5px solid #030852;

      @media (max-width: 768px) {
        border-right: 0;
        border-bottom: 3px solid #030852;
      }
    `}
`;
