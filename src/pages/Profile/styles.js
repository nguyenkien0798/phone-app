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
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  background-color: #2f54eb;
`;

export const RightContainer = styled.div`
  padding: 16px;
  width: calc(100% - 250px);
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  width: 100%;
  height: 280px;
`;

export const TabItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  height: 50px;
  cursor: pointer;
  color: white;

  &:hover {
    background-color: #1d39c4;
  }

  ${({ active }) =>
    active &&
    css`
      background-color: #85a5ff;
      border-right: 5px solid #030852;
    `}
`;
