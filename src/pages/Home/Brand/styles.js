import styled from "styled-components";

export const Category = styled.div`
  max-width: 1240px;
  margin: 36px auto 0;
  padding: 0 16px;

  .section-heading {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 12px;
    border-bottom: 1px solid #e2e8f0;

    .title-group {
      span {
        color: #cd1817;
        font-size: 12px;
        font-weight: 800;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        display: block;
        margin-bottom: 4px;
      }

      h2 {
        margin: 0;
        color: #0f172a;
        font-size: 24px;
        font-weight: 800;
        line-height: 1.2;
      }
    }

    .view-all-link {
      font-size: 13px;
      font-weight: 700;
      color: #2563eb;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      transition: gap 0.2s ease;

      &:hover {
        gap: 8px;
        color: #1d4ed8;
      }
    }
  }
`;

export const CategoryList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 14px;

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`;

export const CategoryItem = styled.div`
  width: 100%;
  cursor: pointer;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  background: #ffffff;
  padding: 16px 10px;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
    border-color: ${(props) => props.$accentColor || "#3b82f6"};
    box-shadow: 0 12px 24px -4px rgba(15, 23, 42, 0.1);

    .category-image {
      transform: scale(1.08);
      box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08);
    }

    .category-title {
      color: ${(props) => props.$accentColor || "#2563eb"};
    }
  }

  .category-image {
    width: 58px;
    height: 58px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.25s ease;
    margin-bottom: 10px;
    border: 1px solid rgba(0, 0, 0, 0.04);

    svg {
      width: 32px;
      height: 32px;
      transition: transform 0.2s ease;
    }

    img {
      width: 40px;
      height: 40px;
      object-fit: contain;
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.06));
    }
  }

  .category-title {
    color: #1e293b;
    font-weight: 700;
    font-size: 13.5px;
    line-height: 1.3;
    transition: color 0.2s ease;
    margin-bottom: 2px;
  }

  .category-subtitle {
    color: #64748b;
    font-size: 11px;
    font-weight: 500;
    line-height: 1.2;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

