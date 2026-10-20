import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 100%;
  background: #17212b;
  border-top: 1px solid rgba(255, 255, 255, 0.06);

  @media (max-width: 950px) {
    display: none;
  }
`;

export const MenuList = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  min-height: 42px;
  display: flex;
  align-items: center;

  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 4px 4px;
    align-items: center;
    width: 100%;
    margin: 0;
    padding: 0 8px;
    list-style: none;

    a {
      text-decoration: none;

      li {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        color: rgba(255, 255, 255, 0.86);
        white-space: nowrap;
        padding: 10px 12px;
        border-radius: 8px;

        svg,
        .anticon {
          display: flex;
          align-items: center;
          font-size: 14px;
          color: #ff6a55;
        }

        span {
          font-size: 13px;
          font-weight: 600;
          line-height: 1;
        }

        &:hover {
          color: #fff;
          background-color: rgba(255, 106, 85, 0.16);
        }
      }
    }
  }
`;
