import styled from "styled-components";

export const CartContainer = styled.div`
  margin: 16px auto;
  padding: 0 16px;
  max-width: 1280px;
  width: 100%;

  h5 {
    margin-bottom: 0;
  }
`;
export const DiscountCard = styled.div`
  display: inline-flex;
  margin-top: 16px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  overflow: hidden;
`;

export const DiscountInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px;
  height: 50px;
  background-color: #3fc2c2;

  & p {
    font-size: 14px;
    margin-bottom: 0;
    color: white;
  }

  & span {
    font-size: 12px;
    color: #fafafa;
  }
`;

export const DiscountValue = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  height: 50px;
  font-size: 28px;
  color: #3fc2c2;
`;

export const CheckoutInfoWrapper = styled.div`
  position: sticky;
  top: 16px;
`;
