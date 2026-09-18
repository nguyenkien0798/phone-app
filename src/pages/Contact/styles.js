import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 28px 16px 56px;
`;

export const Intro = styled.div`
  text-align: center;
  margin-bottom: 28px;

  .eyebrow {
    display: inline-flex;
    margin-bottom: 10px;
    padding: 5px 12px;
    border-radius: 999px;
    background: #fff1f0;
    border: 1px solid #ffccc7;
    color: #d92d35;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  h2 {
    margin: 0;
    color: #0f172a;
    font-size: clamp(24px, 3vw, 32px);
    font-weight: 900;
    letter-spacing: -0.02em;
  }

  p {
    max-width: 560px;
    margin: 10px auto 0;
    color: #64748b;
    font-size: 14.5px;
    line-height: 1.6;
  }
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 0.95fr 1.35fr;
  gap: 22px;
  align-items: start;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const InfoCard = styled.div`
  display: flex;
  gap: 14px;
  padding: 18px 18px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid rgba(255, 255, 255, 0.85);
  box-shadow: 0 10px 28px -12px rgba(15, 23, 42, 0.12);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 32px -12px rgba(217, 45, 53, 0.18);
  }

  .icon-box {
    flex-shrink: 0;
    width: 44px;
    height: 44px;
    border-radius: 12px;
    display: grid;
    place-items: center;
    font-size: 18px;
    color: #fff;
    background: ${(props) =>
      props.$tone || "linear-gradient(135deg, #ff6a55 0%, #d92d35 100%)"};
    box-shadow: 0 8px 18px rgba(217, 45, 53, 0.22);
  }

  .body {
    min-width: 0;

    h4 {
      margin: 0 0 4px;
      color: #0f172a;
      font-size: 14px;
      font-weight: 800;
    }

    p,
    a {
      margin: 0;
      color: #64748b;
      font-size: 13.5px;
      line-height: 1.5;
      text-decoration: none;
      word-break: break-word;
    }

    a:hover {
      color: #d92d35;
    }
  }
`;

export const HoursCard = styled.div`
  padding: 18px;
  border-radius: 18px;
  background: linear-gradient(160deg, #0f172a 0%, #1e293b 55%, #17212b 100%);
  color: #fff;
  box-shadow: 0 16px 36px -14px rgba(15, 23, 42, 0.4);

  h4 {
    margin: 0 0 12px;
    font-size: 14px;
    font-weight: 800;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 8px;
  }

  li {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.78);

    strong {
      color: #ffb4a8;
      font-weight: 700;
      white-space: nowrap;
    }
  }
`;

export const FormCard = styled.form`
  padding: 26px 24px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(255, 182, 173, 0.35);
  box-shadow:
    0 16px 40px -14px rgba(217, 45, 53, 0.12),
    0 4px 16px rgba(15, 23, 42, 0.04);

  .form-head {
    margin-bottom: 18px;

    h3 {
      margin: 0;
      color: #0f172a;
      font-size: 20px;
      font-weight: 900;
      letter-spacing: -0.02em;
    }

    p {
      margin: 6px 0 0;
      color: #64748b;
      font-size: 13.5px;
    }
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;

    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }
  }

  .field {
    margin-bottom: 12px;

    label {
      display: block;
      margin-bottom: 6px;
      color: #334155;
      font-size: 12.5px;
      font-weight: 700;
    }
  }

  .form-control {
    width: 100%;
    height: 46px;
    padding: 0 14px;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    background: #f8fafc;
    font-size: 14px;
    color: #0f172a;
    outline: none;
    box-sizing: border-box;
    transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;

    &:focus {
      border-color: #ff8a78;
      box-shadow: 0 0 0 3px rgba(255, 106, 85, 0.12);
      background: #fff;
    }

    &::placeholder {
      color: #94a3b8;
    }
  }

  textarea.form-control {
    height: 130px;
    padding: 12px 14px;
    resize: vertical;
  }

  .btn-submit {
    width: 100%;
    height: 48px;
    margin-top: 6px;
    border: 0;
    border-radius: 12px;
    background: linear-gradient(135deg, #ff6a55 0%, #d92d35 100%);
    color: #fff;
    font-weight: 800;
    font-size: 14.5px;
    cursor: pointer;
    box-shadow: 0 12px 24px rgba(217, 45, 53, 0.28);
    transition: transform 0.15s ease, box-shadow 0.15s ease;

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 14px 28px rgba(217, 45, 53, 0.34);
    }
  }
`;
