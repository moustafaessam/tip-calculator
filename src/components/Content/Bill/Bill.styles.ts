import styled from "styled-components";

export const StyledBill = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const StyledBillWrapperForErrorHandling = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledError = styled.p`
  font-size: 1.6rem;
  color: #e17457;
`;

export const StyledBillHeader = styled.header`
  color: #5e7a7d;
  font-size: 1.6rem;
`;
