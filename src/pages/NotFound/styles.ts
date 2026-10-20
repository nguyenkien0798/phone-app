import styled from "styled-components";

export const Wrap = styled.div`
  max-width: 720px;
  margin: 72px auto 96px;
  padding: 0 20px;
  text-align: center;

  .code {
    display: block;
    font-size: 84px;
    font-weight: 900;
    letter-spacing: -0.04em;
    background: linear-gradient(135deg, #ff6a55 0%, #d92d35 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    line-height: 1;
  }

  h1 {
    margin: 12px 0 8px;
    font-size: 28px;
    color: #17212b;
  }

  p {
    color: #64748b;
    font-size: 15px;
    margin-bottom: 28px;
  }

  .actions {
    display: flex;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;
  }

  button {
    height: 44px;
    padding: 0 20px;
    border-radius: 12px;
    font-weight: 800;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .primary {
    border: 0;
    color: #fff;
    background: linear-gradient(135deg, #ff6a55 0%, #d92d35 100%);
  }

  .ghost {
    background: #fff;
    color: #d92d35;
    border: 1.5px solid #fecdd3;
  }
`;
