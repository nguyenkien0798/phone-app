import styled from "styled-components";

export const Section = styled.div`
  max-width: 1240px;
  margin: 0 auto 48px;
  padding: 0 16px;
`;

export const Register = styled.div`
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #311042 100%);
  padding: 60px 24px;
  box-shadow: 0 16px 36px -8px rgba(15, 23, 42, 0.3);

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    right: -20%;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(225, 29, 72, 0.35) 0%, transparent 70%);
    filter: blur(40px);
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -50%;
    left: -20%;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(37, 99, 235, 0.35) 0%, transparent 70%);
    filter: blur(40px);
    pointer-events: none;
  }

  .register-content {
    position: relative;
    z-index: 2;
    max-width: 640px;
    margin: 0 auto;
    text-align: center;

    .badge {
      display: inline-block;
      padding: 6px 16px;
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #fca5a5;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: 16px;
    }

    h2 {
      font-size: clamp(24px, 3.5vw, 36px);
      font-weight: 800;
      color: #ffffff;
      line-height: 1.25;
      margin-bottom: 12px;
    }

    p {
      font-size: 15px;
      line-height: 1.6;
      color: #cbd5e1;
      margin-bottom: 28px;
    }

    .register-form {
      form {
        display: flex;
        max-width: 480px;
        margin: 0 auto;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.25);
        border-radius: 14px;
        padding: 6px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        transition: border-color 0.2s ease;

        &:focus-within {
          border-color: #38bdf8;
          box-shadow: 0 8px 24px rgba(56, 189, 248, 0.25);
        }

        input {
          flex: 1;
          outline: none;
          border: none;
          background: transparent;
          padding: 12px 18px;
          color: #ffffff;
          font-size: 14px;

          &::placeholder {
            color: #94a3b8;
          }
        }

        button {
          background: linear-gradient(135deg, #e11d48 0%, #be123c 100%);
          border: none;
          border-radius: 10px;
          color: #ffffff;
          font-weight: 700;
          font-size: 14px;
          padding: 0 24px;
          cursor: pointer;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;

          &:hover {
            background: linear-gradient(135deg, #be123c 0%, #9f1239 100%);
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(225, 29, 72, 0.4);
          }
        }
      }
    }
  }
`;
