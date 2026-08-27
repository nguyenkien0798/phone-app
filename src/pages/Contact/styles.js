import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px 16px 48px;
`;

export const ContactContent = styled.div`
  text-align: center;

  .section-heading {
    margin: 0 0 8px;
    font-size: clamp(22px, 3vw, 28px);
    text-transform: uppercase;
    color: #2f54eb;
    font-weight: 700;
  }

  .section-sub-heading {
    margin: 0 0 28px;
    color: #64748b;
    font-size: 15px;
  }
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 28px;
  text-align: left;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 24px;
  border-radius: 16px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;

  p {
    margin: 0;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    color: #334155;
    font-size: 14px;
    line-height: 1.5;

    .anticon {
      color: #2f54eb;
      margin-top: 2px;
      flex-shrink: 0;
    }
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px;
  border-radius: 16px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04);

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;

    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }
  }

  .form-control {
    width: 100%;
    height: 44px;
    padding: 0 14px;
    border: 1px solid #dbe4e9;
    border-radius: 10px;
    background: #f8fafc;
    font-size: 14px;
    color: #0f172a;
    outline: none;
    box-sizing: border-box;

    &:focus {
      border-color: #2f54eb;
      box-shadow: 0 0 0 3px rgba(47, 84, 235, 0.12);
      background: #fff;
    }

    &::placeholder {
      color: #94a3b8;
    }
  }

  textarea.form-control {
    height: 110px;
    padding: 12px 14px;
    resize: vertical;
  }

  .btn-submit {
    align-self: flex-end;
    height: 44px;
    padding: 0 28px;
    border: 0;
    border-radius: 10px;
    background: #2f54eb;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.2s ease;

    &:hover {
      background: #1d39c4;
    }

    @media (max-width: 576px) {
      width: 100%;
      align-self: stretch;
    }
  }
`;
