import styled from "styled-components";

export const StyledTipContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const StyledTipHeader = styled.header`
  color: #5e7a7d;
  font-size: 1.6rem;
`;

export const StyledTipOptions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 1.6rem;
  column-gap: 1.4rem;
  @media (max-width: 420px) {
    & {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      column-gap: 1.7rem;
    }
  }
`;

export const StyledTipLabel = styled.label`
  background-color: #00474b;
  height: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 1rem;
`;

export const StyledTipNumber = styled.p`
  color: white;
  font-size: 2.4rem;
`;

export const StyledTipRadio = styled.input`
  appearance: none;
`;
