import styled from "styled-components";

export const Shell = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  background: #f4f6f8;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Sidebar = styled.aside`
  background: linear-gradient(180deg, #0f172a 0%, #17212b 100%);
  color: #fff;
  padding: 22px 16px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: sticky;
  top: 0;

  @media (max-width: 900px) {
    position: static;
    min-height: auto;
    padding: 16px;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 4px 8px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  margin-bottom: 16px;

  img {
    width: 34px;
    height: 34px;
  }

  strong {
    display: block;
    font-size: 16px;
    font-weight: 800;
  }

  small {
    color: #ffb4a8;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;

  @media (max-width: 900px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const NavLink = styled.button<{ $active?: boolean }>`
  appearance: none;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 12px;
  border: 0;
  border-radius: 12px;
  background: ${(props) => (props.$active ? "rgba(255, 106, 85, 0.18)" : "transparent")};
  color: ${(props) => (props.$active ? "#fff" : "rgba(255,255,255,0.74)")};
  font-weight: 700;
  font-size: 13.5px;
  text-align: left;
  cursor: pointer;
  box-shadow: ${(props) => (props.$active ? "inset 3px 0 0 #ff6a55" : "none")};

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
  }

  @media (max-width: 900px) {
    width: auto;
    box-shadow: ${(props) => (props.$active ? "inset 0 -3px 0 #ff6a55" : "none")};
  }
`;

export const SideFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);

  button {
    appearance: none;
    display: flex;
    align-items: center;
    gap: 8px;
    border: 0;
    background: rgba(255, 255, 255, 0.06);
    color: #fff;
    border-radius: 10px;
    padding: 10px 12px;
    font-weight: 700;
    cursor: pointer;
    text-align: left;
  }
`;

export const Main = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
`;

export const Topbar = styled.header`
  height: 68px;
  padding: 0 24px;
  background: #fff;
  border-bottom: 1px solid #e8edf2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 20;

  h1 {
    margin: 0;
    font-size: 18px;
    font-weight: 800;
    color: #17212b;
  }

  p {
    margin: 2px 0 0;
    color: #64748b;
    font-size: 12.5px;
  }
`;

export const UserChip = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  color: #17212b;
`;

export const Content = styled.main`
  padding: 8px 0 32px;
`;
