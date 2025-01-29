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
  &:hover {
    background-color: #9fe8df;
  }
  &:has(input:checked) {
    background-color: #26c2ae;
    color: #00474b;
  }
`;

export const StyledTipNumber = styled.p`
  color: white;
  font-size: 2.4rem;
`;

export const StyledTipRadio = styled.input`
  appearance: none;
`;

export const StyledInput = styled.input`
  font-family: "Space Mono Bold";
  text-align: center;
  border: none;
  background-color: #f3f9fa;
  border-radius: 1rem;
  appearance: none;
  color: #547878;
  font-size: 2.4rem;
  min-width: 11.8rem;
  -moz-appearance: textfield;
  -webkit-appearance: none;
  &:focus {
    outline: none;
  }
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  &:focus {
    border: 2px solid #26c2ae;
  }
`;

export const StyledlWrapperForErrorHandling = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
